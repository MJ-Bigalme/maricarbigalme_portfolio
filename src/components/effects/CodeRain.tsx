import { useEffect, useRef } from 'react';

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

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

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789</>{}[];const=()=>function';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;

        // Gradient from cyan to purple
        const hue = 180 + i / columns * 90;
        ctx.fillStyle = `hsla(${hue}, 70%, 50%, 0.03)`;
        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.3;
      });

      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas data-ev-id="ev_e970595a70"
    ref={canvasRef}
    className="fixed inset-0 pointer-events-none z-0 opacity-40" />);


}