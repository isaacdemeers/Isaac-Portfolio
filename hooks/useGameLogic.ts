"use client";

import { useState, useCallback } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GRAVITY, DRAG_MULTIPLIER, GROUND_Y } from '@/lib/game-constants';

interface BallState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  isDragging: boolean;
  isLaunched: boolean;
}

export const useGameLogic = () => {
  const [ball, setBall] = useState<BallState>({
    x: 50,
    y: GROUND_Y - 30,
    vx: 0,
    vy: 0,
    isDragging: false,
    isLaunched: false,
  });

  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (Math.hypot(x - ball.x, y - ball.y) < 30) {
      setBall(prev => ({ ...prev, isDragging: true }));
      setDragStart({ x, y });
    }
  }, [ball.x, ball.y]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!ball.isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setBall(prev => ({
      ...prev,
      x,
      y: Math.min(y, GROUND_Y - 30),
    }));
  }, [ball.isDragging]);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!ball.isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const dx = dragStart.x - x;
    const dy = dragStart.y - y;
    
    setBall(prev => ({
      ...prev,
      isDragging: false,
      isLaunched: true,
      vx: dx * DRAG_MULTIPLIER,
      vy: dy * DRAG_MULTIPLIER,
    }));
  }, [ball.isDragging, dragStart]);

  const updateBallPosition = useCallback(() => {
    if (!ball.isLaunched || ball.isDragging) return;

    setBall(prev => {
      const newX = prev.x + prev.vx;
      const newY = prev.y + prev.vy;
      const newVy = prev.vy + GRAVITY;

      if (newY >= GROUND_Y - 30) {
        return {
          ...prev,
          y: GROUND_Y - 30,
          isLaunched: false,
          vx: 0,
          vy: 0,
        };
      }

      return {
        ...prev,
        x: newX,
        y: newY,
        vy: newVy,
      };
    });
  }, [ball.isLaunched, ball.isDragging]);

  return {
    ball,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    updateBallPosition,
  };
};