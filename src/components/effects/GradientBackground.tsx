import { motion } from 'framer-motion';

export function GradientBackground() {
  return (
    <div data-ev-id="ev_714e50eef6" className="fixed inset-0 z-0 overflow-hidden bg-void">
			{/* Aurora gradient blobs */}
			<motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(76, 201, 240, 0.15) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }} />

			<motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, -120, 0],
          scale: [1, 0.8, 1.3, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }} />

			<motion.div
        className="absolute top-1/4 right-1/4 w-[60%] h-[60%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 245, 255, 0.08) 0%, transparent 60%)'
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear'
        }} />

			{/* Noise overlay */}
			<div data-ev-id="ev_868354bc9a"
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

		</div>);

}