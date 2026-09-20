import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'cyan';
  hover3D?: boolean;
  delay?: number;
}

export function GlassCard({ children, className = '', glowColor = 'blue', hover3D = true, delay = 0 }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const glowColors = {
    blue: 'rgba(76, 201, 240, 0.15)',
    purple: 'rgba(139, 92, 246, 0.15)',
    cyan: 'rgba(0, 245, 255, 0.15)'
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !hover3D) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -10);
    setRotateY((x - 0.5) * 10);
    setGlowPosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      className={`relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl overflow-hidden transition-transform duration-200 ${className}`}>

			{/* Animated border glow */}
			<div data-ev-id="ev_1142585de7"
      className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColors[glowColor]}, transparent 50%)`
      }} />

			{/* Inner glow border */}
			<div data-ev-id="ev_a9711099ef" className="absolute inset-[1px] rounded-2xl bg-glass-highlight" />
			{/* Content */}
			<div data-ev-id="ev_c6dd9e416c" className="relative z-10">
				{children}
			</div>
		</motion.div>);

}