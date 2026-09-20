import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingSteps = [
{ text: 'Initializing Portfolio...', duration: 600 },
{ text: 'Loading Experience...', duration: 500 },
{ text: 'Loading Skills...', duration: 500 },
{ text: 'Loading Projects...', duration: 500 },
{ text: 'Launching...', duration: 400 },
{ text: 'Welcome.', duration: 600 }];


export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let progressInterval: ReturnType<typeof setInterval>;

    if (currentStep < loadingSteps.length) {
      const stepDuration = loadingSteps[currentStep].duration;
      const progressIncrement = 100 / loadingSteps.length / (stepDuration / 50);

      progressInterval = setInterval(() => {
        setProgress((p) => Math.min(p + progressIncrement, (currentStep + 1) / loadingSteps.length * 100));
      }, 50);

      timeout = setTimeout(() => {
        if (currentStep < loadingSteps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }
      }, stepDuration);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(progressInterval);
    };
  }, [currentStep, onComplete]);

  return (
    <AnimatePresence>
			{!isExiting &&
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void">

					{/* Animated background */}
					<div data-ev-id="ev_802d3cb57c" className="absolute inset-0 overflow-hidden">
						<motion.div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(76, 201, 240, 0.1) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity }} />

					</div>

					{/* Logo / Icon */}
					<motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8">

						<div data-ev-id="ev_830b0f9f58" className="w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-blue to-purple flex items-center justify-center">
							<span data-ev-id="ev_0ecd6ef52e" className="text-3xl font-bold text-void">MJ</span>
						</div>
						{/* Glow ring */}
						<motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ boxShadow: '0 0 60px rgba(76, 201, 240, 0.5)' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }} />

					</motion.div>

					{/* Loading text */}
					<motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-mono text-electric-blue mb-8">

						<span data-ev-id="ev_c12b48e6f5" className="text-purple">{'>'}</span> {loadingSteps[currentStep]?.text}
						<motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}>

							_
						</motion.span>
					</motion.div>

					{/* Progress bar */}
					<div data-ev-id="ev_d0a7075240" className="w-64 h-1 bg-deep-navy rounded-full overflow-hidden">
						<motion.div
            className="h-full bg-gradient-to-r from-electric-blue to-purple"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }} />

					</div>

					{/* Progress percentage */}
					<motion.div
          className="mt-4 text-sm font-mono text-text-secondary">

						{Math.round(progress)}%
					</motion.div>
				</motion.div>
      }
		</AnimatePresence>);

}