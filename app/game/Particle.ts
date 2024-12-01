export interface ParticleProps {
    x: number;
    y: number;
    lifetime: number;
}

export class Particle {
    x: number;
    y: number;
    speed: number;
    angle: number;
    lifetime: number;
    currentLife: number;
    size: number;
    roughness: number;

    constructor({ x, y, lifetime }: ParticleProps) {
        this.x = x;
        this.y = y;
        this.speed = 50 + Math.random() * 100;
        this.angle = Math.random() * Math.PI * 2;
        this.lifetime = lifetime;
        this.currentLife = lifetime;
        this.size = 3 + Math.random() * 3;
        this.roughness = 1 + Math.random() * 1.5;
    }

    update(deltaTime: number): boolean {
        this.angle += (Math.random() - 0.5) * 0.5;
        this.x += Math.cos(this.angle) * this.speed * deltaTime;
        this.y += Math.sin(this.angle) * this.speed * deltaTime;
        this.currentLife -= deltaTime;
        this.size = (this.currentLife / this.lifetime) * this.size;

        return this.currentLife > 0;
    }

    draw(ctx: CanvasRenderingContext2D, rc: any) {
        const opacity = this.currentLife / this.lifetime;
        ctx.globalAlpha = opacity;

        if (Math.random() > 0.5) {
            rc.circle(this.x, this.y, this.size * 2, {
                fill: 'black',
                fillStyle: 'solid',
                roughness: this.roughness,
                strokeWidth: 1,
            });
        } else {
            rc.rectangle(
                this.x - this.size,
                this.y - this.size,
                this.size * 2,
                this.size * 2,
                {
                    fill: 'black',
                    fillStyle: 'solid',
                    roughness: this.roughness,
                    strokeWidth: 1,
                }
            );
        }
        ctx.globalAlpha = 1;
    }
} 