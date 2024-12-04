"use client";

import { useEffect, useRef, useState } from 'react';
import rough from 'roughjs';
import { useGameLogic } from './useGameLogic';
import { GameState } from './types';
import { fontSpaceMono } from '@/lib/font';
export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { gameState, tower, updateTurretAngle, setGameState } = useGameLogic(dimensions.width, dimensions.height);

  // Gestionnaire de redimensionnement amélioré
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });

        // Mettre à jour la taille du canvas
        if (canvasRef.current) {
          canvasRef.current.width = width;
          canvasRef.current.height = height;
        }
      }
    };

    // Initial setup
    updateDimensions();

    // Observer les changements de taille
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Mettre à jour lors du redimensionnement de la fenêtre
    window.addEventListener('resize', updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
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
    rc.rectangle(tower.x - 20, tower.y - 20, 40, 40, {
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

  // Ajouter le gestionnaire de clic
  useEffect(() => {
    const handleClick = () => {
      const side = Math.floor(Math.random() * 4);
      let x = 0;
      let y = 0;

      switch (side) {
        case 0: // top
          x = Math.random() * dimensions.width;
          y = -20;
          break;
        case 1: // right
          x = dimensions.width + 20;
          y = Math.random() * dimensions.height;
          break;
        case 2: // bottom
          x = Math.random() * dimensions.width;
          y = dimensions.height + 20;
          break;
        case 3: // left
          x = -20;
          y = Math.random() * dimensions.height;
          break;
      }

      const newEnemy = {
        id: Date.now(),
        x,
        y,
        health: 2,
      };

      setGameState((prev: GameState) => ({
        ...prev,
        enemies: [...prev.enemies, newEnemy],
      }));
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('click', handleClick);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('click', handleClick);
      }
    };
  }, [dimensions, setGameState]);

  return (
    <div ref={containerRef} className="absolute flex flex-col justify-center items-end w-full h-full ">
      <div className={`${fontSpaceMono.className} absolute top-3/5 gap-2 right-20  p-20 pr-0 opacity-0 hover:opacity-100 transition-opacity duration-300 -translate-y-1/2 flex flex-col items-end text-xs font-bold uppercase`}>
        <span>the useless score</span>
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