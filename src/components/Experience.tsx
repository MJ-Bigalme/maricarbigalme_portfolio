import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
{
  title: 'Customer Support Engineer – Tier 1 (Elementor Specialist)',
  company: 'Yngen Datacom Corp.',
  period: 'September 2024 – Present',
  current: true,
  responsibilities: [
  'Deliver technical support via live chat and email ticketing systems',
  'Specialize in Elementor page builder issues',
  'Diagnose and troubleshoot Elementor Theme Builder layouts',
  'Debug dynamic content tags and CSS responsiveness',
  'Provide empathetic, solution-oriented customer service',
  'Maintain strict ticket response and resolution SLAs',
  'Perform precise ticket tagging and prioritization',
  'Create comprehensive case documentation for escalations']

},
{
  title: 'Application Development & Support Intern',
  company: 'Phelps Dodge Philippines Energy Products Corp.',
  period: 'February 2024 – May 2024',
  responsibilities: [
  'Assisted in building applications using VB.NET and .NET Framework',
  'Followed organizational coding standards',
  'Designed and maintained database-driven reports using SAP Crystal Reports',
  'Provided prompt Tier 1 technical support',
  'Handled internal hardware, software, and network inquiries']

}];


export function Experience() {
  return (
    <section data-ev-id="ev_f188a3d912" id="experience" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
			<div data-ev-id="ev_cc61e5f953" className="max-w-5xl mx-auto">
				<SectionTitle
          title="Experience"
          subtitle="My professional journey in the tech industry" />


				<div data-ev-id="ev_6188f20394" className="relative">
					{/* Animated timeline line */}
					<motion.div data-ev-id="ev_4294c95bf9"
          className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-electric-blue via-purple to-cyan hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          style={{ transformOrigin: 'top' }} />


					{/* Glowing particles along timeline */}
					{[0, 1, 2, 3, 4].map((i) =>
          <motion.div data-ev-id="ev_d772b489be"
          key={i}
          className="absolute left-[30px] w-1 h-1 bg-cyan rounded-full hidden md:block"
          style={{ top: `${20 + i * 20}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            boxShadow: [
            '0 0 0px rgba(0, 245, 255, 0)',
            '0 0 20px rgba(0, 245, 255, 0.8)',
            '0 0 0px rgba(0, 245, 255, 0)']

          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity
          }} />

          )}

					{/* Experience cards */}
					<div data-ev-id="ev_20ecb04ca9" className="flex flex-col gap-8 md:pl-20">
						{experiences.map((exp, index) =>
            <motion.div data-ev-id="ev_bed10d2c43"
            key={exp.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group">

								{/* Timeline node */}
								<div data-ev-id="ev_9fad1d5bdd" className="absolute -left-20 top-6 hidden md:flex items-center justify-center">
									<motion.div data-ev-id="ev_c9713abce5"
                className={`w-4 h-4 rounded-full ${exp.current ? 'bg-cyan' : 'bg-purple'}`}
                animate={exp.current ? {
                  boxShadow: [
                  '0 0 0px rgba(0, 245, 255, 0.5)',
                  '0 0 20px rgba(0, 245, 255, 0.8)',
                  '0 0 0px rgba(0, 245, 255, 0.5)']

                } : {}}
                transition={{ duration: 2, repeat: Infinity }} />

								</div>

								{/* Card */}
								<div data-ev-id="ev_c015d8f983" className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-6 md:p-8 overflow-hidden group-hover:border-electric-blue/30 transition-colors duration-300">
									{/* Hover glow effect */}
									<div data-ev-id="ev_0d37f4ed86" className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									{/* Current badge */}
									{exp.current &&
                <motion.div data-ev-id="ev_406bc0532d"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan/20 border border-cyan/30 text-cyan text-xs font-mono">

											Current
										</motion.div>
                }

									{/* Header */}
									<div data-ev-id="ev_11155c46f2" className="relative flex flex-col md:flex-row md:items-start gap-4 mb-6">
										<div data-ev-id="ev_733cbfc232" className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-electric-blue/20 to-purple/20 border border-electric-blue/20 flex items-center justify-center">
											<Briefcase className="w-7 h-7 text-electric-blue" />
										</div>
										<div data-ev-id="ev_429c6303de">
											<h3 data-ev-id="ev_c9b26257e4" className="text-xl md:text-2xl font-bold text-text-primary mb-1">
												{exp.title}
											</h3>
											<p data-ev-id="ev_81633262af" className="text-electric-blue font-medium">{exp.company}</p>
											<div data-ev-id="ev_bd2cd3388a" className="flex items-center gap-2 mt-2 text-text-muted text-sm">
												<Calendar className="w-4 h-4" />
												<span data-ev-id="ev_1d7ab79c02">{exp.period}</span>
											</div>
										</div>
									</div>

									{/* Responsibilities */}
									<div data-ev-id="ev_71c46ef52c" className="relative">
										<h4 data-ev-id="ev_8acd00dc40" className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Key Responsibilities</h4>
										<div data-ev-id="ev_298e0f3ddf" className="grid md:grid-cols-2 gap-2">
											{exp.responsibilities.map((resp, i) =>
                    <motion.div data-ev-id="ev_c64fdee3ef"
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-2 text-text-secondary text-sm">

													<ChevronRight className="w-4 h-4 text-purple mt-0.5 flex-shrink-0" />
													<span data-ev-id="ev_0e8bcf4451">{resp}</span>
												</motion.div>
                    )}
										</div>
									</div>
								</div>
							</motion.div>
            )}
					</div>
				</div>
			</div>
		</section>);

}