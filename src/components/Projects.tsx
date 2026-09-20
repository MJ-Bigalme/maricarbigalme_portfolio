import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Calendar, ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

// Logos
import logoFurrProject from '@/assets/uploads/project-furrproject.jpg';
import logoSuccessLog from '@/assets/uploads/project-successlog.jpg';

// Mockups
import mockupFurrProject from '@/assets/generated/project-furrproject-mockup.png';
import mockupSuccessLog from '@/assets/generated/project-successlog-mockup.png';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  technologies: string[];
  gradient: string;
  accentColor: string;
  logo: string;
  mockup: string;
  link?: string;
}

const projects: Project[] = [
{
  id: 1,
  title: 'The Furr Project',
  subtitle: 'Veterinary Clinic Website',
  period: 'June 2023 – December 2023',
  description: 'Designed and developed a responsive veterinary clinic website featuring appointment scheduling, seamless communication between pet owners and staff, and responsive layouts for multiple devices.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  gradient: 'from-electric-blue to-cyan',
  accentColor: '#4CC9F0',
  logo: logoFurrProject,
  mockup: mockupFurrProject
},
{
  id: 2,
  title: 'Success Log',
  subtitle: 'Yngen Coaching Log Website',
  period: 'May 2025 – Present',
  description: 'Developed a centralized coaching log management platform that allows coaches and trainees to manage coaching sessions, monitor employee progress, organize performance data, and improve workflow efficiency using a clean and responsive interface.',
  technologies: ['PHP', 'JavaScript', 'MySQL', 'Elementor', 'Responsive Design'],
  gradient: 'from-purple to-electric-blue',
  accentColor: '#8B5CF6',
  logo: logoSuccessLog,
  mockup: mockupSuccessLog,
  link: 'https://tokznyxn.elementor.cloud/'
}];


export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section data-ev-id="ev_51f4da7991" id="projects" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
			<div data-ev-id="ev_be5a12db10" className="max-w-6xl mx-auto">
				<SectionTitle
          title="Projects"
          subtitle="Explore my featured work and digital creations" />


				{/* Project grid */}
				<div data-ev-id="ev_d79172f20c" className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) =>
          <motion.div data-ev-id="ev_819cfdce57"
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          layoutId={`project-${project.id}`}
          onClick={() => setSelectedProject(project)}
          className="relative group cursor-pointer">

							{/* Card */}
							<motion.div data-ev-id="ev_1f64065478"
            className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl overflow-hidden h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}>

								{/* Hover glow effect */}
								<div data-ev-id="ev_caaa6ed292"
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: `0 0 60px ${project.accentColor}30, inset 0 0 60px ${project.accentColor}10`
              }} />


								{/* Project Mockup Image */}
								<div data-ev-id="ev_a24b87e9a8" className="relative h-56 overflow-hidden">
									<img data-ev-id="ev_94e97fc3e8"
                src={project.mockup}
                alt={`${project.title} mockup`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

									
									{/* Gradient overlay */}
									<div data-ev-id="ev_07371a8c24" className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent" />

									{/* Company Logo Badge */}
									<div data-ev-id="ev_2c9ac35153" className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white shadow-lg overflow-hidden border-2 border-white/20">
										<img data-ev-id="ev_94b53cb814"
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="w-full h-full object-contain p-1" />

									</div>

									{/* Live badge */}
									{project.link &&
                <div data-ev-id="ev_fa8d85219a" className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan/20 backdrop-blur-sm border border-cyan/30">
											<span data-ev-id="ev_7ec72325c9" className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
											<span data-ev-id="ev_04ace539b7" className="text-cyan text-xs font-semibold">Live</span>
										</div>
                }
								</div>

								{/* Content */}
								<div data-ev-id="ev_7d28a69f64" className="relative p-6">
									<h3 data-ev-id="ev_1d40a61b7b" className="text-2xl font-bold text-text-primary mb-1">
										{project.title}
									</h3>
									<p data-ev-id="ev_4fb73369a3" className="text-lg mb-3" style={{ color: project.accentColor }}>
										{project.subtitle}
									</p>
									<div data-ev-id="ev_5d21e4673b" className="flex items-center gap-2 text-text-muted text-sm mb-4">
										<Calendar className="w-4 h-4" />
										<span data-ev-id="ev_d43d3214ac">{project.period}</span>
									</div>
									<p data-ev-id="ev_c8c61e5972" className="text-text-secondary text-sm line-clamp-2 mb-4">
										{project.description}
									</p>

									{/* Technologies */}
									<div data-ev-id="ev_65580c0ad1" className="flex flex-wrap gap-2 mb-4">
										{project.technologies.slice(0, 4).map((tech) =>
                  <span data-ev-id="ev_40275f47c5"
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium border"
                  style={{
                    background: `${project.accentColor}10`,
                    borderColor: `${project.accentColor}25`,
                    color: project.accentColor
                  }}>

												{tech}
											</span>
                  )}
										{project.technologies.length > 4 &&
                  <span data-ev-id="ev_1df8cc3b93" className="px-2.5 py-1 rounded-lg text-xs font-medium border border-glass-border text-text-muted">
												+{project.technologies.length - 4}
											</span>
                  }
									</div>

									{/* CTA */}
									<div data-ev-id="ev_86df42c5e7"
                className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-2 transition-transform"
                style={{ color: project.accentColor }}>

										<span data-ev-id="ev_45b680881c">View Details</span>
										<ArrowRight className="w-4 h-4" />
									</div>
								</div>
							</motion.div>
						</motion.div>
          )}
				</div>

				{/* Fullscreen modal */}
				<AnimatePresence>
					{selectedProject &&
          <motion.div data-ev-id="ev_93cf9df7ea"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-void/95 backdrop-blur-xl">

							<motion.div data-ev-id="ev_3c5a22d5da"
            layoutId={`project-${selectedProject.id}`}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-deep-navy border border-glass-border rounded-3xl">

								{/* Close button */}
								<button data-ev-id="ev_891f75d2f6"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-void/80 backdrop-blur-sm border border-glass-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-electric-blue/50 transition-all">

									<X className="w-5 h-5" />
								</button>

								{/* Header with mockup image */}
								<div data-ev-id="ev_2b3855d70f" className="relative h-72 md:h-96 overflow-hidden">
									<img data-ev-id="ev_e13eb7b14b"
                src={selectedProject.mockup}
                alt={`${selectedProject.title} mockup`}
                className="w-full h-full object-cover" />

									<div data-ev-id="ev_2d779cb829" className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/50 to-transparent" />

									{/* Company Logo */}
									<div data-ev-id="ev_ac3bcd3a4b" className="absolute top-6 left-6 w-20 h-20 rounded-2xl bg-white shadow-2xl overflow-hidden border-2 border-white/20">
										<img data-ev-id="ev_0eec344f6e"
                  src={selectedProject.logo}
                  alt={`${selectedProject.title} logo`}
                  className="w-full h-full object-contain p-2" />

									</div>

									{/* Live badge */}
									{selectedProject.link &&
                <div data-ev-id="ev_7b012e7bf7" className="absolute top-6 right-16 flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/20 backdrop-blur-sm border border-cyan/30">
											<span data-ev-id="ev_85cf26c99d" className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
											<span data-ev-id="ev_af2ca94285" className="text-cyan text-sm font-semibold">Live Project</span>
										</div>
                }
								</div>

								{/* Content */}
								<div data-ev-id="ev_b106c853ae" className="p-6 md:p-8">
									<h2 data-ev-id="ev_302431478d" className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
										{selectedProject.title}
									</h2>
									<p data-ev-id="ev_6bb7a06126" className="text-xl mb-4" style={{ color: selectedProject.accentColor }}>
										{selectedProject.subtitle}
									</p>
									<div data-ev-id="ev_fe21cea40c" className="flex items-center gap-2 text-text-muted mb-6">
										<Calendar className="w-5 h-5" />
										<span data-ev-id="ev_8a7ccff33f">{selectedProject.period}</span>
									</div>

									<h3 data-ev-id="ev_dc8905cda2" className="text-lg font-semibold text-text-primary mb-3">Description</h3>
									<p data-ev-id="ev_1d759058c0" className="text-text-secondary leading-relaxed mb-8">
										{selectedProject.description}
									</p>

									<h3 data-ev-id="ev_730e10c28f" className="text-lg font-semibold text-text-primary mb-4">Technologies Used</h3>
									<div data-ev-id="ev_605331c2b4" className="flex flex-wrap gap-3 mb-8">
										{selectedProject.technologies.map((tech) =>
                  <span data-ev-id="ev_d1bcf05ef0"
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-medium border"
                  style={{
                    background: `${selectedProject.accentColor}15`,
                    borderColor: `${selectedProject.accentColor}30`,
                    color: selectedProject.accentColor
                  }}>

												{tech}
											</span>
                  )}
									</div>

									{/* Live link button */}
									{selectedProject.link &&
                <motion.a data-ev-id="ev_859d107412"
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${selectedProject.accentColor}, ${selectedProject.accentColor}cc)`,
                  boxShadow: `0 10px 40px ${selectedProject.accentColor}40`
                }}>

											<ExternalLink className="w-5 h-5" />
											View Live Project
										</motion.a>
                }
								</div>
							</motion.div>
						</motion.div>
          }
				</AnimatePresence>
			</div>
		</section>);

}