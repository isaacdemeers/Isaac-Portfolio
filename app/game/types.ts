import { Particle } from './Particle';

export interface Enemy {
  id: number;
  x: number;
  y: number;
  health: number;
}

export interface Tower {
  x: number;
  y: number;
  range: number;
}

export interface Turret {
  x: number;
  y: number;
  angle: number;
  range: number;
}

export interface GameState {
  enemies: Enemy[];
  particles: Particle[];
  score: number;
  turret: Turret;
}