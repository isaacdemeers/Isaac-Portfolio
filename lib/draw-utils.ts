import rough from 'roughjs';
import { CANVAS_WIDTH, GROUND_Y, BUCKET_WIDTH, BUCKET_HEIGHT, BALL_RADIUS } from './game-constants';

export const drawGround = (rc: RoughCanvas) => {
  rc.line(0, GROUND_Y, CANVAS_WIDTH, GROUND_Y, {
    roughness: 2,
    strokeWidth: 2,
  });
};

export const drawBucket = (rc: RoughCanvas, x: number) => {
  const y = GROUND_Y - BUCKET_HEIGHT;
  rc.path(`M${x},${y} L${x + BUCKET_WIDTH},${y} L${x + BUCKET_WIDTH - 10},${y + BUCKET_HEIGHT} L${x + 10},${y + BUCKET_HEIGHT} Z`, {
    stroke: 'black',
    strokeWidth: 2,
    fill: 'white',
    fillStyle: 'zigzag',
    roughness: 2,
  });
};

export const drawBall = (rc: RoughCanvas, x: number, y: number) => {
  rc.circle(x, y, BALL_RADIUS * 2, {
    stroke: 'black',
    strokeWidth: 2,
    fill: 'white',
    fillStyle: 'cross-hatch',
    roughness: 2,
  });
};