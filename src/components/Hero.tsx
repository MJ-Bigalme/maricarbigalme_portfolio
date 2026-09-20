import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, FolderOpen, ChevronDown, Code2, Headphones, Settings } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { HolographicFrame } from '@/components/ui/HolographicFrame';
import { TypeWriter } from '@/components/ui/TypeWriter';
import { ResumeModal } from '@/components/ResumeModal';
import profileImage from '@/assets/uploads/profile.jpg';

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const roles = [
  { title: 'Elementor Specialist', icon: Code2, color: '#4CC9F0' },
  { title: 'Customer Experience', icon: Headphones, color: '#8B5CF6' },
  { title: 'Technical Support', icon: Settings, color: '#00F5FF' }];


  const [activeRole, setActiveRole] = useState(0);


  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section data-ev-id="ev_87dc2c6abe" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
			{/* Floating geometric shapes */}
			<motion.div data-ev-id="ev_057a005c55"
      className="absolute top-20 left-10 w-32 h-32 border border-electric-blue/20 rounded-lg"
      animate={{ rotate: 360, y: [0, -20, 0] }}
      transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 5, repeat: Infinity } }} />

			<motion.div data-ev-id="ev_f3c0fba71a"
      className="absolute bottom-40 right-20 w-24 h-24 border border-purple/20 rotate-45"
      animate={{ rotate: [45, 405], scale: [1, 1.1, 1] }}
      transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, scale: { duration: 4, repeat: Infinity } }} />

			<motion.div data-ev-id="ev_df3dfe7c38"
      className="absolute top-1/3 right-1/4 w-4 h-4 bg-cyan/30 rounded-full"
      animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 4, repeat: Infinity }} />


			<div data-ev-id="ev_17333845a5" className="max-w-7xl mx-auto w-full">
				<div data-ev-id="ev_03c4b5bfc7" className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
					{/* Text content */}
					<div data-ev-id="ev_68e172e138" className="flex-1 text-center lg:text-left max-w-2xl overflow-hidden">
						{/* Status badge */}
						<motion.div data-ev-id="ev_f8e3562a50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-glass-border mb-8">

							<span data-ev-id="ev_bed31e1d1f" className="relative flex h-2 w-2">
								<span data-ev-id="ev_f589e8a710" className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
								<span data-ev-id="ev_6882e21b91" className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
							</span>
							<span data-ev-id="ev_748168c031" className="text-sm text-text-secondary">Available for opportunities</span>
						</motion.div>

						{/* Name with Typing Effect */}
						<motion.h1 data-ev-id="ev_c48c4f17fd"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
							<TypeWriter
                lines={[
                { text: 'MARICAR JOY', className: 'text-text-primary block' },
                { text: 'M. BIGALME', className: 'bg-gradient-to-r from-electric-blue via-cyan to-purple bg-clip-text text-transparent block' }]
                }
                typingSpeed={90}
                delayBetweenLines={500}
                startDelay={800}
                loopDelay={4000}
                loop={true} />

						</motion.h1>

						{/* Title */}
						<motion.p data-ev-id="ev_74f9bab600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-electric-blue font-medium mb-4">

							Elementor Specialist | CX & Technical Support
						</motion.p>

						{/* Roles - Lively animated cards */}
						<motion.div data-ev-id="ev_13c54837f0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">

							{roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div data-ev-id="ev_521ddb4724"
                  key={role.title}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setActiveRole(i)}
                  className="group relative cursor-pointer">

                    {/* Animated glow background */}
                    <motion.div data-ev-id="ev_c0bf7f1133"
                    className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                    style={{ background: `${role.color}40` }}
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }} />

                    
                    {/* Card */}
                    <div data-ev-id="ev_66f2a546b2"
                    className="relative flex items-center gap-1.5 px-3 py-2 rounded-full bg-glass backdrop-blur-xl border transition-all duration-300 whitespace-nowrap"
                    style={{
                      borderColor: activeRole === i ? `${role.color}60` : 'rgba(255,255,255,0.1)',
                      boxShadow: activeRole === i ? `0 0 30px ${role.color}30, inset 0 0 20px ${role.color}10` : 'none'
                    }}>

                      {/* Animated icon container */}
                      <motion.div data-ev-id="ev_4871ce77ca"
                      className="relative w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${role.color}20` }}
                      animate={{
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}>

                        <Icon
                          className="w-3 h-3 transition-all duration-300 group-hover:scale-110"
                          style={{ color: role.color }} />

                        
                        {/* Icon pulse ring */}
                        <motion.div data-ev-id="ev_7e893f857b"
                        className="absolute inset-0 rounded-full"
                        style={{ border: `1px solid ${role.color}` }}
                        animate={{
                          scale: [1, 1.5],
                          opacity: [0.5, 0]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} />

                      </motion.div>
                      
                      {/* Text */}
                      <span data-ev-id="ev_01e5f64030"
                      className="text-xs font-medium transition-colors duration-300"
                      style={{ color: activeRole === i ? role.color : 'rgba(255,255,255,0.7)' }}>

                        {role.title}
                      </span>
                      
                      {/* Active indicator dot */}
                      <motion.div data-ev-id="ev_4c1bd23eb7"
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: role.color }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />

                    </div>
                    
                    {/* Floating particles */}
                    {[...Array(3)].map((_, j) =>
                    <motion.div data-ev-id="ev_3ba4ef72f3"
                    key={j}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: role.color,
                      left: `${20 + j * 30}%`,
                      top: '50%'
                    }}
                    animate={{
                      y: [-20, -40],
                      x: [0, (j - 1) * 10],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: j * 0.2,
                      repeatDelay: 0.5
                    }} />

                    )}
                  </motion.div>);

              })}
						</motion.div>

						{/* Tagline */}
						<motion.p data-ev-id="ev_8948b063ae"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 mb-10">

							Customer-centric Technical Specialist with expertise in web troubleshooting and omnichannel support.
						</motion.p>

						{/* Buttons */}
						<motion.div data-ev-id="ev_f04f04ae65"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4">

							<MagneticButton variant="primary" onClick={scrollToProjects}>
								<FolderOpen className="w-5 h-5" />
								View Projects
							</MagneticButton>
							<MagneticButton variant="secondary" onClick={() => setIsResumeModalOpen(true)}>
								<Download className="w-5 h-5" />
								Download Resume
							</MagneticButton>
							<MagneticButton variant="ghost" onClick={scrollToContact}>
								<Mail className="w-5 h-5" />
								Contact Me
							</MagneticButton>
						</motion.div>
					</div>

					{/* Profile image */}
					<motion.div data-ev-id="ev_305b1e47ec"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 lg:mr-8">

						<HolographicFrame
              src={profileImage}
              alt="Maricar Joy M. Bigalme - Information Technology Professional" />

					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div data-ev-id="ev_5b6f33ae28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

				<span data-ev-id="ev_86e7c62c56" className="text-xs text-text-muted font-mono">Scroll to explore</span>
				<motion.div data-ev-id="ev_2a186991ce"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}>

					<ChevronDown className="w-5 h-5 text-electric-blue" />
				</motion.div>
			</motion.div>

			{/* Resume Modal */}
			<ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
		</section>);

}