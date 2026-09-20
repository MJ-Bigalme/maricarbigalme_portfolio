import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <div data-ev-id="ev_64dbb08a74" className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
			<motion.div data-ev-id="ev_cce9a535fa"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="inline-block mb-4">

				<span data-ev-id="ev_842f415721" className="px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-mono">
					{'<'}{title.toLowerCase().replace(/\s+/g, '_')}{' />'}
				</span>
			</motion.div>
			<motion.h2 data-ev-id="ev_93c0bf4f46"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">

				{title}
			</motion.h2>
			{subtitle &&
      <motion.p data-ev-id="ev_e4eb3952a6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg text-text-secondary max-w-2xl mx-auto">

					{subtitle}
				</motion.p>
      }
		</div>);

}