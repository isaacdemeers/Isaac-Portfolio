export interface ProjectileProps {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    speed: number;
}

export class Projectile {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    speed: number;
    radius: number = 4;

    constructor({ x, y, targetX, targetY, speed }: ProjectileProps) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = speed;
    }

    update(deltaTime: number): boolean {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.speed) {
            return true; // Le projectile a atteint sa cible
        }

        const vx = (dx / distance) * this.speed;
        const vy = (dy / distance) * this.speed;

        this.x += vx * deltaTime;
        this.y += vy * deltaTime;

        return false;
    }

    draw(ctx: CanvasRenderingContext2D, rc: any) {
        rc.circle(this.x, this.y, this.radius * 2, {
            fill: 'black',
            fillStyle: 'solid',
            roughness: 1.5,
        });
    }
} 