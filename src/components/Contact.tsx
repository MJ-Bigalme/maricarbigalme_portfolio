import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MagneticButton } from '@/components/ui/MagneticButton';

const contactInfo = [
{ icon: Phone, label: 'Phone', value: '09656526242', href: 'tel:09656526242', color: '#4CC9F0' },
{ icon: Mail, label: 'Email', value: 'maricarbigalmeeee@gmail.com', href: 'mailto:maricarbigalmeeee@gmail.com', color: '#8B5CF6' },
{ icon: MapPin, label: 'Location', value: 'San Pedro City, Laguna', href: '#', color: '#00F5FF' }];


const socialLinks = [
{ icon: Github, label: 'GitHub', href: 'https://github.com/MJ-Bigalme', color: '#4CC9F0' },
{ icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/maricar-bigalme-bba3332b0', color: '#8B5CF6' }];



export function Contact() {
  return (
    <section data-ev-id="ev_a79ff8a049" id="contact" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
			<div data-ev-id="ev_ee76d2b093" className="max-w-5xl mx-auto">
				<SectionTitle
          title="Contact"
          subtitle="Let's connect and build something amazing together" />


				<div data-ev-id="ev_929293765c" className="grid lg:grid-cols-2 gap-12">
					{/* Contact info */}
					<div data-ev-id="ev_302b7bd219" className="flex flex-col gap-6">
						{contactInfo.map((info, index) =>
            <motion.a data-ev-id="ev_82ab1cf07f"
            key={info.label}
            href={info.href}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 10 }}
            className="group">

								<div data-ev-id="ev_0a65040af4" className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-6 overflow-hidden group-hover:border-electric-blue/30 transition-all duration-300">
									{/* Hover glow */}
									<div data-ev-id="ev_7fa894527d"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${info.color}10, transparent)` }} />


									<div data-ev-id="ev_59c68a9cd5" className="relative flex items-center gap-5">
										<div data-ev-id="ev_7ecbd61e86"
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${info.color}15` }}>

											<info.icon className="w-6 h-6" style={{ color: info.color }} />
										</div>
										<div data-ev-id="ev_667c64cf88">
											<p data-ev-id="ev_02f50767a0" className="text-sm text-text-muted mb-1">{info.label}</p>
											<p data-ev-id="ev_3839635814" className="text-sm sm:text-lg text-text-primary font-medium break-all sm:break-normal">{info.value}</p>
										</div>
									</div>
								</div>
							</motion.a>
            )}

						{/* Social links */}
						<motion.div data-ev-id="ev_f856845df8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-6">

							<p data-ev-id="ev_f2424f3532" className="text-sm text-text-muted mb-4">Connect with me</p>
							<div data-ev-id="ev_d68761a388" className="flex gap-4">
								{socialLinks.map((social) =>
                <motion.a data-ev-id="ev_2f39d86992"
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-glass border border-glass-border flex items-center justify-center transition-all duration-300 hover:border-electric-blue/50"
                style={{ '--hover-color': social.color } as React.CSSProperties}>

										<social.icon className="w-5 h-5 text-text-secondary hover:text-electric-blue transition-colors" />
									</motion.a>
                )}
							</div>
						</motion.div>
					</div>

					{/* Contact card */}
					<GlassCard className="p-8" glowColor="cyan">
						<div data-ev-id="ev_dc6ac79a2b" className="text-center">
							<motion.div data-ev-id="ev_6c4ca42c67"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-purple mx-auto mb-6 flex items-center justify-center">

								<Send className="w-8 h-8 text-void" />
							</motion.div>

							<h3 data-ev-id="ev_c63b947c7c" className="text-2xl font-bold text-text-primary mb-3">Ready to Collaborate?</h3>
							<p data-ev-id="ev_b442b637f8" className="text-text-secondary mb-8">
								I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
							</p>

							<MagneticButton
                variant="primary"
                href="mailto:maricarbigalmeeeee@gmail.com"
                className="w-full justify-center text-base">

								<Mail className="w-5 h-5" />
								<span data-ev-id="ev_e58b41cf28" className="font-semibold">Send Me a Message</span>
							</MagneticButton>

							{/* Decorative elements */}
							<div data-ev-id="ev_3ba8c46955" className="mt-8 pt-6 border-t border-glass-border">
								<p data-ev-id="ev_73eda8a57e" className="text-sm text-text-muted">
									Response time: <span data-ev-id="ev_62550371bc" className="text-cyan">Within 24 hours</span>
								</p>
							</div>
						</div>
					</GlassCard>
				</div>
			</div>
		</section>);

}