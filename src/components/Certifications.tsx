import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  color: string;
}

const certifications: Certification[] = [
{ title: 'CPA: Advanced Programming in C++', issuer: 'Cisco Networking Academy', date: 'April 2022', color: '#4CC9F0' },
{ title: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy', date: 'April 2022', color: '#8B5CF6' },
{ title: 'Cybersecurity Essentials', issuer: 'Cisco Networking Academy', date: 'April 2023', color: '#00F5FF' }];



export function Certifications() {
  return (
    <section data-ev-id="ev_81eebe2c0e" id="certifications" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
			<div data-ev-id="ev_068625d4fc" className="max-w-6xl mx-auto">
				<SectionTitle
          title="Certifications"
          subtitle="Professional credentials and achievements" />


				{/* Holographic cards grid */}
				<div data-ev-id="ev_773eeeacab" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{certifications.map((cert, index) =>
          <motion.div data-ev-id="ev_e0a4a295f7"
          key={cert.title}
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="group perspective-1000">

							<div data-ev-id="ev_dba23e4e62" className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-6 overflow-hidden h-full transition-all duration-500 group-hover:border-transparent">
								{/* Holographic gradient border */}
								<motion.div data-ev-id="ev_402811171d"
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              style={{
                background: `linear-gradient(135deg, ${cert.color}30, transparent 50%, ${cert.color}20)`
              }} />


								{/* Animated border */}
								<div data-ev-id="ev_a5b4d47f2c"
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `conic-gradient(from 0deg, ${cert.color}40, transparent, ${cert.color}40)`,
                padding: '1px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }} />


								{/* Scan line effect */}
								<motion.div data-ev-id="ev_1d71d561d5"
              className="absolute inset-x-0 h-[1px] opacity-0 group-hover:opacity-100"
              style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />


								{/* Content */}
								<div data-ev-id="ev_1ca73517a8" className="relative">
									{/* Icon */}
									<div data-ev-id="ev_ca66045c04"
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${cert.color}15`,
                  boxShadow: `0 0 20px ${cert.color}20`
                }}>

										<Award className="w-6 h-6" style={{ color: cert.color }} />
									</div>

									{/* Title */}
									<h3 data-ev-id="ev_7ae2385fa5" className="text-lg font-bold text-text-primary mb-2 leading-tight">
										{cert.title}
									</h3>

									{/* Issuer */}
									<p data-ev-id="ev_57ad6534b8" className="text-sm text-text-muted mb-2">
										{cert.issuer}
									</p>

									{/* Date */}
									<p data-ev-id="ev_8ea5e37fac" className="text-xs text-text-muted/70 flex items-center gap-1.5">
										<Calendar className="w-3.5 h-3.5" style={{ color: cert.color }} />
										{cert.date}
									</p>

									{/* Verified badge */}
									<div data-ev-id="ev_3c4e4014fd"
                className="absolute top-0 right-0 px-2 py-1 rounded-lg text-xs font-mono"
                style={{
                  background: `${cert.color}10`,
                  color: cert.color
                }}>

										Verified
									</div>
								</div>

								{/* Glow effect */}
								<div data-ev-id="ev_941a7008f9"
              className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
              style={{ background: `${cert.color}10` }} />

							</div>
						</motion.div>
          )}
				</div>
			</div>
		</section>);

}