"use client";

import { useState, useEffect } from 'react';
import { Enemy, GameState } from './types';
import { Particle } from './Particle';

const ENEMY_SPEED = 2;
const SPAWN_INTERVAL = 2000;
const TOWER_RANGE = 80;
const TOWER_DAMAGE = 1;
const PARTICLES_PER_EXPLOSION = 12;
const TURRET_RANGE = 300;
const TOWER_SIZE = 40;

// Fonctions utilitaires pour le localStorage
const getStoredScore = () => {
  try {
    const stored = localStorage.getItem('gameScore');
    return stored ? parseInt(stored) : 0;
  } catch {
    return 0;
  }
};

const setStoredScore = (score: number) => {
  try {
    localStorage.setItem('gameScore', score.toString());
  } catch {
    console.warn('Could not save score to localStorage');
  }
};

export const useGameLogic = (canvasWidth: number, canvasHeight: number) => {
  const [gameState, setGameState] = useState<GameState>(() => ({
    enemies: [],
    particles: [],
    score: typeof window !== 'undefined' ? getStoredScore() : 0,
    turret: {
      x: canvasWidth / 2,
      y: canvasHeight / 2 - 50,
      angle: 0,
      range: TURRET_RANGE,
    },
  }));

  // Sauvegarder le score quand il change
  useEffect(() => {
    setStoredScore(gameState.score);
  }, [gameState.score]);

  const tower = {
    x: canvasWidth * 0.75,
    y: canvasHeight / 2,
    range: TOWER_RANGE,
  };

  const updateTurretAngle = (mouseX: number, mouseY: number) => {
    setGameState((prev) => {
      const dx = mouseX - prev.turret.x;
      const dy = mouseY - prev.turret.y;
      const angle = Math.atan2(dy, dx);
      return {
        ...prev,
        turret: {
          ...prev.turret,
          angle,
        },
      };
    });
  };

  const createExplosion = (x: number, y: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLES_PER_EXPLOSION; i++) {
      particles.push(
        new Particle({
          x,
          y,
          lifetime: 0.3 + Math.random() * 0.4,
        })
      );
    }
    return particles;
  };

  useEffect(() => {
    const spawnEnemy = () => {
      const side = Math.floor(Math.random() * 4);
      let x = 0;
      let y = 0;

      switch (side) {
        case 0: // top
          x = Math.random() * canvasWidth;
          y = -20;
          break;
        case 1: // right
          x = canvasWidth + 20;
          y = Math.random() * canvasHeight;
          break;
        case 2: // bottom
          x = Math.random() * canvasWidth;
          y = canvasHeight + 20;
          break;
        case 3: // left
          x = -20;
          y = Math.random() * canvasHeight;
          break;
      }

      const newEnemy: Enemy = {
        id: Date.now(),
        x,
        y,
        health: 2,
      };

      setGameState((prev) => ({
        ...prev,
        enemies: [...prev.enemies, newEnemy],
      }));
    };

    const spawnInterval = setInterval(spawnEnemy, SPAWN_INTERVAL);

    const gameLoop = setInterval(() => {
      setGameState((prev) => {
        const updatedEnemies = prev.enemies
          .map((enemy) => {
            const angle = Math.atan2(tower.y - enemy.y, tower.x - enemy.x);
            const newX = enemy.x + Math.cos(angle) * ENEMY_SPEED;
            const newY = enemy.y + Math.sin(angle) * ENEMY_SPEED;

            const distanceToTower = Math.hypot(tower.x - enemy.x, tower.y - enemy.y);
            let health = enemy.health;

            if (distanceToTower <= TOWER_SIZE / 2) {
              health = 0;
            } else if (distanceToTower <= tower.range) {
              health -= TOWER_DAMAGE;
            }

            return {
              ...enemy,
              x: newX,
              y: newY,
              health,
            };
          })
          .filter((enemy) => enemy.health > 0);

        const killedEnemies = prev.enemies.length - updatedEnemies.length;
        const newScore = prev.score + killedEnemies;

        const newParticles = prev.enemies
          .filter((enemy) => !updatedEnemies.find((e) => e.id === enemy.id))
          .flatMap((enemy) => createExplosion(enemy.x, enemy.y));

        const updatedParticles = [...prev.particles, ...newParticles]
          .map((particle) => {
            particle.update(1 / 60);
            return particle;
          })
          .filter((particle) => particle.currentLife > 0);

        return {
          ...prev,
          enemies: updatedEnemies,
          particles: updatedParticles,
          score: newScore,
        };
      });
    }, 1000 / 60);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(gameLoop);
    };
  }, [canvasWidth, canvasHeight]);

  return {
    gameState,
    tower,
    updateTurretAngle,
    setGameState,
  };
};