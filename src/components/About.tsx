import { motion } from 'framer-motion';
import { Code2, Server, HeadphonesIcon, Database, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function About() {
  const highlights = [
  { icon: Code2, label: 'Elementor Expert', color: 'electric-blue' },
  { icon: HeadphonesIcon, label: 'Customer Experience', color: 'purple' },
  { icon: Server, label: 'Technical Support', color: 'cyan' },
  { icon: Database, label: 'Web Troubleshooting', color: 'electric-blue' }];


  return (
    <section data-ev-id="ev_c1ff85c6fb" id="about" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
			<div data-ev-id="ev_2f82dcacfd" className="max-w-6xl mx-auto">
				<SectionTitle
          title="About Me"
          subtitle="Passionate about creating digital solutions that make a difference" />


				<div data-ev-id="ev_5a534bde8d" className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Main content card */}
					<GlassCard className="p-8" glowColor="blue">
						<div data-ev-id="ev_a839f3b2ef" className="flex items-center gap-3 mb-6">
							<div data-ev-id="ev_8447e572ec" className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue to-purple flex items-center justify-center">
								<Sparkles className="w-6 h-6 text-void" />
							</div>
							<div data-ev-id="ev_db2d677aeb">
								<h3 data-ev-id="ev_41fe21d159" className="text-xl font-bold text-text-primary">Who I Am</h3>
								<p data-ev-id="ev_bb63392dad" className="text-sm text-text-muted">IT Professional • Problem Solver • Lifelong Learner</p>
							</div>
						</div>

						<p data-ev-id="ev_e042ed1c9c" className="text-text-secondary leading-relaxed text-lg">
							Customer-centric <span data-ev-id="ev_a7cbbb0c90" className="text-electric-blue">Technical Specialist</span> and IT Professional with expertise in <span data-ev-id="ev_e3867673d5" className="text-purple">web troubleshooting</span>, <span data-ev-id="ev_900e270972" className="text-cyan">site builder configurations</span>, and <span data-ev-id="ev_bff17aa1f4" className="text-electric-blue">omnichannel user support</span>.
						</p>
						<p data-ev-id="ev_d77990a6e9" className="text-text-secondary leading-relaxed text-lg mt-4">
							Adept at resolving complex <span data-ev-id="ev_7d95fcd66b" className="text-purple">Elementor layout</span> and <span data-ev-id="ev_b927558407" className="text-cyan">CSS/JS conflict issues</span> through email and live chat while delivering exceptional customer experiences.
						</p>

						{/* Animated line */}
						<motion.div data-ev-id="ev_10395e41a6"
            className="h-[1px] bg-gradient-to-r from-electric-blue via-purple to-cyan mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }} />

					</GlassCard>

					{/* Highlights grid */}
					<div data-ev-id="ev_45da6c3611" className="grid grid-cols-2 gap-4">
						{highlights.map((item, i) =>
            <GlassCard key={item.label} className="p-6" glowColor={i % 2 === 0 ? 'blue' : 'purple'} delay={i * 0.1}>
								<motion.div data-ev-id="ev_855e24784f"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="flex flex-col items-center text-center gap-4">

									<div data-ev-id="ev_c31e807bbe" className={`w-14 h-14 rounded-xl bg-${item.color}/10 border border-${item.color}/30 flex items-center justify-center`}>
										<item.icon className={`w-7 h-7 text-${item.color}`} />
									</div>
									<span data-ev-id="ev_6ed16c29bb" className="text-text-primary font-medium">{item.label}</span>
								</motion.div>
							</GlassCard>
            )}
					</div>
				</div>
			</div>
		</section>);

}