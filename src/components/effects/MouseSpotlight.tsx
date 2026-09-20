import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MouseSpotlight() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
	const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [mouseX, mouseY]);

	return (
		<motion.div
			className="pointer-events-none fixed inset-0 z-30"
			style={{
				background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(76, 201, 240, 0.06), transparent 40%)`,
				'--mouse-x': springX as unknown as string,
				'--mouse-y': springY as unknown as string,
			} as React.CSSProperties}
		>
			<motion.div
				className="absolute w-[300px] h-[300px] rounded-full"
				style={{
					x: springX,
					y: springY,
					translateX: '-50%',
					translateY: '-50%',
					background: 'radial-gradient(circle, rgba(76, 201, 240, 0.08) 0%, transparent 70%)',
				}}
			/>
		</motion.div>
	);
}
