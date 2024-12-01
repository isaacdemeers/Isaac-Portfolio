"use client";

import { useEffect, useRef } from 'react';
import rough from 'roughjs';
import { useGameLogic } from '@/hooks/useGameLogic';
import { drawGround, drawBucket, drawBall } from '@/lib/draw-utils';
import { CANVAS_WIDTH, CANVAS_HEIGHT, BUCKET_WIDTH, GROUND_Y } from '@/lib/game-constants';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    ball,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    updateBallPosition,
  } = useGameLogic();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rc = rough.canvas(canvas);
    
    const animate = () => {
      updateBallPosition();
      
      // Clear canvas
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      
      // Draw elements
      drawGround(rc);
      drawBucket(rc, CANVAS_WIDTH - BUCKET_WIDTH - 50);
      drawBall(rc, ball.x, ball.y);
      
      requestAnimationFrame(animate);
    };

    animate();
  }, [ball, updateBallPosition]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative bg-white">
      <svg className="absolute w-0 h-0">
        <filter id="rough-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </svg>

      <div className="text-4xl mb-8 hand-drawn">Lancer la Balle</div>
      
      <div className="relative hand-drawn">
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="border border-black rounded cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ backgroundColor: 'white' }}
        />
      </div>
      
      <p className="mt-4 text-lg hand-drawn">
        Cliquez et glissez la balle pour la lancer dans le seau !
      </p>
    </main>
  );
}