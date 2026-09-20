import { motion } from 'framer-motion';

interface HolographicFrameProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export function HolographicFrame({ src, alt, size = 'lg' }: HolographicFrameProps) {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80'
  };

  return (
    <div data-ev-id="ev_1d3109bce4" className="relative">
			{/* Outer glow rings */}
			<motion.div data-ev-id="ev_471c1c6e21"
      className={`absolute -inset-4 rounded-full ${sizes[size]}`}
      style={{
        background: 'conic-gradient(from 0deg, transparent, rgba(76, 201, 240, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)'
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} />

			<motion.div data-ev-id="ev_ca23351ba8"
      className="absolute -inset-2 rounded-full"
      style={{
        background: 'conic-gradient(from 180deg, transparent, rgba(0, 245, 255, 0.2), transparent, rgba(76, 201, 240, 0.2), transparent)'
      }}
      animate={{ rotate: -360 }}
      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} />


			{/* Glowing border */}
			<motion.div data-ev-id="ev_692a9fa4fb"
      className={`relative ${sizes[size]} rounded-full p-1`}
      style={{
        background: 'linear-gradient(135deg, #4CC9F0, #8B5CF6, #00F5FF, #4CC9F0)',
        backgroundSize: '300% 300%'
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}>

				{/* Inner frame */}
				<div data-ev-id="ev_9e252e101e" className="relative w-full h-full rounded-full bg-void p-1 overflow-hidden">
					{/* Image */}
					<img data-ev-id="ev_1833ac8dd4"
          src={src}
          alt={alt}
          className="w-full h-full rounded-full object-cover" />

					{/* Holographic overlay */}
					<motion.div data-ev-id="ev_5ae1ce1035"
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(76, 201, 240, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)'
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }} />

					{/* Scan line */}
					<motion.div data-ev-id="ev_3f5d1674b1"
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent"
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />

				</div>
			</motion.div>

			{/* Floating particles around frame */}
			{[...Array(6)].map((_, i) =>
      <motion.div data-ev-id="ev_c6b4b74cab"
      key={i}
      className="absolute w-2 h-2 rounded-full"
      style={{
        background: i % 2 === 0 ? '#4CC9F0' : '#8B5CF6',
        top: '50%',
        left: '50%',
        boxShadow: `0 0 10px ${i % 2 === 0 ? '#4CC9F0' : '#8B5CF6'}`
      }}
      animate={{
        x: [0, Math.cos(i * 60 * Math.PI / 180) * 160],
        y: [0, Math.sin(i * 60 * Math.PI / 180) * 160],
        scale: [0, 1, 0],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 3,
        delay: i * 0.5,
        repeat: Infinity,
        ease: 'easeOut'
      }} />

      )}

			{/* Glow effect */}
			<div data-ev-id="ev_26c6c0bc5f"
      className="absolute inset-0 rounded-full -z-10"
      style={{
        boxShadow: '0 0 80px rgba(76, 201, 240, 0.3), 0 0 120px rgba(139, 92, 246, 0.2)'
      }} />

		</div>);

}