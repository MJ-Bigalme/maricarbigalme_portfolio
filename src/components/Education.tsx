import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Education() {
  return (
    <section data-ev-id="ev_acdc08692b" id="education" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
			<div data-ev-id="ev_bc49676c5f" className="max-w-4xl mx-auto">
				<SectionTitle
          title="Education"
          subtitle="Foundation of my technical expertise" />


				<GlassCard className="p-0 overflow-hidden" glowColor="purple">
					{/* Header with gradient */}
					<div data-ev-id="ev_a4e3ea72ed" className="relative p-8 bg-gradient-to-r from-electric-blue/10 to-purple/10">
						{/* Animated circuit pattern */}
						<motion.div data-ev-id="ev_564831e95e"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
									linear-gradient(90deg, rgba(76, 201, 240, 0.1) 1px, transparent 1px),
									linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)
								`,
              backgroundSize: '30px 30px'
            }} />


						<div data-ev-id="ev_52fe3280d3" className="relative flex items-start gap-6">
							{/* Icon */}
							<motion.div data-ev-id="ev_5c4cbc81b7"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-blue to-purple flex items-center justify-center shadow-lg shadow-purple/20">

								<GraduationCap className="w-10 h-10 text-void" />
							</motion.div>

							{/* Content */}
							<div data-ev-id="ev_71b81d7b96" className="flex-1">
								<motion.h3 data-ev-id="ev_c544701962"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-text-primary mb-2">

									AMA Computer College
								</motion.h3>
								<motion.p data-ev-id="ev_162bd982de"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-electric-blue font-medium">

									Bachelor of Science in Information Technology
								</motion.p>
							</div>
						</div>
					</div>

					{/* Details */}
					<div data-ev-id="ev_3bb8ef9126" className="p-8 pt-4">
						<div data-ev-id="ev_06601992d8" className="flex flex-wrap gap-6">
							<motion.div data-ev-id="ev_38099bd58e"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-text-secondary">

								<Calendar className="w-5 h-5 text-purple" />
								<span data-ev-id="ev_8b74cce3f8">August 2020 – May 2024</span>
							</motion.div>
							<motion.div data-ev-id="ev_d220956050"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-text-secondary">

								<MapPin className="w-5 h-5 text-cyan" />
								<span data-ev-id="ev_41f629a010">Philippines</span>
							</motion.div>
						</div>

						{/* Animated progress line */}
						<motion.div data-ev-id="ev_7c4dc8849d"
            className="mt-6 h-1 rounded-full bg-deep-navy overflow-hidden">

							<motion.div data-ev-id="ev_780d386792"
              className="h-full bg-gradient-to-r from-electric-blue via-purple to-cyan"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }} />

						</motion.div>
						<p data-ev-id="ev_371ad87d85" className="mt-2 text-sm text-text-muted text-right">Completed</p>
					</div>
				</GlassCard>
			</div>
		</section>);

}