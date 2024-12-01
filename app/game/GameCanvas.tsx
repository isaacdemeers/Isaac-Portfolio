"use client";

import { useEffect, useRef, useState } from 'react';
import rough from 'roughjs';
import { useGameLogic } from './useGameLogic';

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { gameState, tower, updateTurretAngle } = useGameLogic(dimensions.width, dimensions.height);

  // Gestionnaire de redimensionnement
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    // Initial setup
    updateDimensions();

    // Mettre à jour les dimensions lors du redimensionnement
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Gestionnaire d'événements de la souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        updateTurretAngle(x, y);
      }
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [updateTurretAngle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rc = rough.canvas(canvas);

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Draw tower
    rc.rectangle(tower.x - 25, tower.y - 25, 50, 50, {
      fill: 'black',
      fillStyle: 'solid',
      roughness: 2,
    });

    // Draw tower range
    rc.circle(tower.x, tower.y, tower.range * 2, {
      stroke: 'black',
      strokeWidth: 1,
      roughness: 2,
    });

    // Draw enemies
    gameState.enemies.forEach((enemy) => {
      rc.circle(enemy.x, enemy.y, 20, {
        fill: 'black',
        fillStyle: 'solid',
        roughness: 1.5,
      });
    });

    // Draw particles
    gameState.particles.forEach((particle) => {
      particle.draw(ctx, rc);
    });

    // Dessiner la tourelle
    const turret = gameState.turret;
    const turretLength = 30;
    const endX = turret.x + Math.cos(turret.angle) * turretLength;
    const endY = turret.y + Math.sin(turret.angle) * turretLength;

    // Base de la tourelle
    rc.circle(turret.x, turret.y, 20, {
      fill: 'black',
      fillStyle: 'solid',
      roughness: 1.5,
    });

    // Canon de la tourelle
    rc.line(turret.x, turret.y, endX, endY, {
      stroke: 'black',
      strokeWidth: 4,
      roughness: 1,
    });

  }, [gameState, tower, dimensions]);

  return (
    <div ref={containerRef} className="flex-1 w-full relative">
      <div className="absolute flex flex-col items-start top-10 left-1/2 -translate-x-1/2 -translate-y-[calc(-10rem)] text-sm font-bold uppercase">
        <span>Score</span>
        <span>{'->'} {gameState.score}</span>
      </div>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  );
}