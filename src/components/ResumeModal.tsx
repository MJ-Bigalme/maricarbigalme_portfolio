import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, Sparkles, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Simulate download delay for animation
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Maricar_Joy_Bigalme_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setDownloadComplete(true);

      setTimeout(() => setDownloadComplete(false), 3000);
    }, 800);
  };

  const handleOpenInNewTab = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <AnimatePresence>
			{isOpen &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-void/90 backdrop-blur-xl">

					<motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-deep-navy border border-glass-border rounded-3xl overflow-hidden">

						{/* Animated background glow */}
						<div data-ev-id="ev_72f8c01106" className="absolute inset-0 overflow-hidden">
							<motion.div
              className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(76, 201, 240, 0.1) 0%, transparent 70%)' }}
              animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity }} />

							<motion.div
              className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)' }}
              animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
              transition={{ duration: 10, repeat: Infinity }} />

						</div>

						{/* Close button */}
						<button data-ev-id="ev_74da69e2cd"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-glass border border-glass-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-electric-blue/50 transition-all">

							<X className="w-5 h-5" />
						</button>

						{/* Content */}
						<div data-ev-id="ev_d88e972f6d" className="relative p-8">
							{/* Header */}
							<div data-ev-id="ev_59ff42fbfa" className="text-center mb-8">
								<motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="relative w-20 h-20 mx-auto mb-4">

									{/* Glowing ring */}
									<motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: 'conic-gradient(from 0deg, #4CC9F0, #8B5CF6, #00F5FF, #4CC9F0)' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />

									<div data-ev-id="ev_127cf38852" className="absolute inset-[2px] rounded-2xl bg-deep-navy flex items-center justify-center">
										<FileText className="w-8 h-8 text-electric-blue" />
									</div>
								</motion.div>

								<h2 data-ev-id="ev_cf4728585c" className="text-2xl font-bold text-text-primary mb-2">My Resume</h2>
								<p data-ev-id="ev_1e4299b813" className="text-text-secondary text-sm">Maricar Joy M. Bigalme</p>
							</div>

							{/* Resume preview card */}
							<motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-glass border border-glass-border rounded-2xl p-5 mb-6">

								<div data-ev-id="ev_6d5f671a6e" className="flex items-center gap-4">
									{/* PDF Icon */}
									<div data-ev-id="ev_1ab6224c28" className="flex-shrink-0 w-14 h-16 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center">
										<span data-ev-id="ev_fc97ce3102" className="text-red-400 font-bold text-sm">PDF</span>
									</div>
									{/* File info */}
									<div data-ev-id="ev_0e9dc06538" className="flex-1 min-w-0">
										<p data-ev-id="ev_6bc7a27440" className="text-text-primary font-medium truncate">CV- Maricar Joy M. Bigalme.pdf</p>
										<p data-ev-id="ev_21b8580eff" className="text-text-muted text-sm">Professional Resume</p>
										<div data-ev-id="ev_d13720ba39" className="flex items-center gap-3 mt-2">
											<span data-ev-id="ev_a7bf4ad489" className="flex items-center gap-1 text-xs text-electric-blue">
												<Sparkles className="w-3 h-3" />
												Updated 2024
											</span>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Action buttons */}
							<div data-ev-id="ev_7ec71edd45" className="flex flex-col gap-3">
								{/* Download button */}
								<motion.button
                onClick={handleDownload}
                disabled={isDownloading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-4 px-6 rounded-xl font-semibold text-void bg-gradient-to-r from-electric-blue to-cyan overflow-hidden group disabled:opacity-70">

									{/* Shine effect */}
									<motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

									
									<span data-ev-id="ev_2a75d7129d" className="relative flex items-center justify-center gap-2">
										{isDownloading ?
                  <>
												<motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-void/30 border-t-void rounded-full" />

												Preparing Download...
											</> :
                  downloadComplete ?
                  <>
												<CheckCircle className="w-5 h-5" />
												Download Complete!
											</> :

                  <>
												<Download className="w-5 h-5" />
												Download Resume
											</>
                  }
									</span>
								</motion.button>

								{/* Open in new tab button */}
								<motion.button
                onClick={handleOpenInNewTab}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-xl font-medium text-text-secondary bg-glass border border-glass-border hover:border-electric-blue/50 hover:text-electric-blue transition-all flex items-center justify-center gap-2">

									<ExternalLink className="w-4 h-4" />
									Open in New Tab
								</motion.button>
							</div>
						</div>

						{/* Bottom glow */}
						<div data-ev-id="ev_02cf79beee" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />
					</motion.div>
				</motion.div>
      }
		</AnimatePresence>);

}