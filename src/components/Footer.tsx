import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer data-ev-id="ev_cc9594f40b" className="relative py-8 sm:py-12 px-4 sm:px-6">
			<div data-ev-id="ev_112ee2fb6d" className="max-w-6xl mx-auto">
				<motion.div data-ev-id="ev_d25e733145"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center">

					{/* Logo */}
					<motion.div data-ev-id="ev_2cff7183db"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 mb-6">

						<div data-ev-id="ev_4d34ea44b1" className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-blue to-purple flex items-center justify-center">
							<span data-ev-id="ev_65107a2d49" className="text-lg font-bold text-void">MJ</span>
						</div>
						<span data-ev-id="ev_854d9cd45e" className="text-xl font-bold bg-gradient-to-r from-electric-blue to-purple bg-clip-text text-transparent">
							Maricar Joy
						</span>
					</motion.div>

					{/* Credit */}
					<p data-ev-id="ev_6ad45572ba" className="text-text-secondary text-sm flex items-center justify-center gap-2 mb-4">
						<Code2 className="w-4 h-4 text-electric-blue" />
						Designed and Developed by
						<span data-ev-id="ev_63067f264e" className="text-electric-blue font-medium">Maricar Joy M. Bigalme</span>
					</p>

					{/* Copyright */}
					<p data-ev-id="ev_5074fa52ae" className="text-text-muted text-xs mt-4">
						© {new Date().getFullYear()} All rights reserved.
					</p>
				</motion.div>
			</div>
		</footer>);

}