import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({ children, variant = 'primary', className = '', onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative px-6 py-3 font-semibold rounded-xl transition-all duration-300 overflow-hidden group';

  const variants = {
    primary: 'bg-gradient-to-r from-electric-blue to-cyan text-white hover:shadow-[0_0_40px_rgba(76,201,240,0.4)]',
    secondary: 'bg-glass border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 hover:shadow-[0_0_30px_rgba(76,201,240,0.2)]',
    ghost: 'bg-transparent border border-glass-border text-text-primary hover:border-electric-blue/50 hover:text-electric-blue'
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.95 }}>

			{/* Shine effect */}
			<motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} />

			<span data-ev-id="ev_b32c1fc13a" className="relative z-10 flex items-center gap-2">
				{children}
			</span>
		</Component>);

}