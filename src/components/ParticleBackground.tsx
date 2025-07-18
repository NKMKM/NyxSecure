import React, { useEffect, useRef } from 'react';
interface ParticleBackgroundProps {
  scrollY: number;
}
export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  scrollY
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let particles: Particle[] = [];
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Make canvas taller for scrolling
      // Recreate particles after resize
      initParticles();
    };
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 0.1;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update(scrollOffset: number) {
        // Add slight movement based on scroll
        const scrollFactor = scrollOffset * 0.02;
        this.y -= scrollFactor * 0.01;
        // Normal particle movement
        this.x += this.speedX;
        this.y += this.speedY;
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    function initParticles() {
      particles = [];
      const particleCount = Math.floor(canvas.width * canvas.height / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    function drawNeuralConnections() {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 0.3;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.3, 'rgba(10, 10, 18, 1)');
      gradient.addColorStop(0.7, 'rgba(5, 5, 15, 1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(scrollY);
        particle.draw(ctx);
      });
      // Draw connections
      drawNeuralConnections();
      animationFrameId = requestAnimationFrame(animate);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollY]);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{
    transform: `translateY(${-scrollY * 0.2}px)`,
    opacity: 1 - (scrollY * 0.0005 > 0.3 ? 0.3 : scrollY * 0.0005)
  }} />;
};