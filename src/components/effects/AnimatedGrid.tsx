import { useEffect, useRef } from 'react';

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const gridSize = 50;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 300;

          if (dist < maxDist) {
            const intensity = (1 - dist / maxDist) * 0.3;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(76, 201, 240, ${intensity})`;
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(x, y, 0.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(76, 201, 240, 0.05)';
            ctx.fill();
          }
        }
      }

      // Draw grid lines near mouse
      ctx.strokeStyle = 'rgba(76, 201, 240, 0.03)';
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas data-ev-id="ev_f0f0423f42"
    ref={canvasRef}
    className="fixed inset-0 pointer-events-none z-0" />);


}