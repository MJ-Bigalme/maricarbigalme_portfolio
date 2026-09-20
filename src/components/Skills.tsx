import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface Skill {
  name: string;
  category: string;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
{
  title: 'Elementor & Web',
  color: '#4CC9F0',
  skills: ['Elementor Pro', 'Theme Builder', 'Plugin & Theme Setup', 'Site Migration & Hosting', 'Responsive Breakpoints', 'Layout Debugging']
},
{
  title: 'Customer Experience',
  color: '#8B5CF6',
  skills: ['Live Chat Support', 'Email Ticketing', 'Customer Empathy', 'Ticket Prioritization', 'SLA Management', 'Issue Resolution', 'Technical Writing']
},
{
  title: 'Programming & DB',
  color: '#00F5FF',
  skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'C++', 'VB.NET', 'MySQL', 'MS SQL Server']
},
{
  title: 'Tools & Systems',
  color: '#4CC9F0',
  skills: ['Kustomer', 'Visual Studio Code', 'Visual Studio', 'SAP Crystal Reports']
}];


const allSkills: Skill[] = skillCategories.flatMap((cat) =>
cat.skills.map((skill) => ({ name: skill, category: cat.title }))
);

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getSkillPosition = (index: number, total: number) => {
    const angle = index / total * 2 * Math.PI - Math.PI / 2;
    const radius = Math.min(250, window.innerWidth * 0.3);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <section data-ev-id="ev_92baeb0c1b" id="skills" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
			<div data-ev-id="ev_8a8e1df558" className="max-w-7xl mx-auto">
				<SectionTitle
          title="Skills"
          subtitle="Interactive skill galaxy — hover to explore" />


				{/* Category filters */}
				<motion.div data-ev-id="ev_3fd48a76ed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-16">

					<button data-ev-id="ev_d1cf6bf52f"
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedCategory === null ?
          'bg-electric-blue text-void' :
          'bg-glass border border-glass-border text-text-secondary hover:border-electric-blue/50'}`
          }>

						All Skills
					</button>
					{skillCategories.map((cat) =>
          <button data-ev-id="ev_b2a0f5841c"
          key={cat.title}
          onClick={() => setSelectedCategory(cat.title)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedCategory === cat.title ?
          'text-void' :
          'bg-glass border border-glass-border text-text-secondary hover:border-electric-blue/50'}`
          }
          style={selectedCategory === cat.title ? { backgroundColor: cat.color } : {}}>

							{cat.title}
						</button>
          )}
				</motion.div>

				{/* Skill Galaxy */}
				<div data-ev-id="ev_ae35d7f598" className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
					{/* Center orb */}
					<motion.div data-ev-id="ev_1128fc2ba4"
          className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-electric-blue/20 to-purple/20 border border-electric-blue/30 flex items-center justify-center z-10"
          animate={{
            boxShadow: [
            '0 0 30px rgba(76, 201, 240, 0.2)',
            '0 0 60px rgba(76, 201, 240, 0.4)',
            '0 0 30px rgba(76, 201, 240, 0.2)']

          }}
          transition={{ duration: 3, repeat: Infinity }}>

						<span data-ev-id="ev_f01eceb957" className="text-lg sm:text-xl md:text-2xl font-bold text-electric-blue">{allSkills.length}+</span>
					</motion.div>

					{/* Orbital rings */}
					{[1, 2, 3].map((ring) =>
          <motion.div data-ev-id="ev_e3b718eece"
          key={ring}
          className="absolute rounded-full border border-electric-blue/10"
          style={{
            width: ring * 180 + 100,
            height: ring * 180 + 100
          }}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 60 + ring * 20,
            repeat: Infinity,
            ease: 'linear'
          }} />

          )}

					{/* Skill nodes */}
					<AnimatePresence mode="popLayout">
						{allSkills.
            filter((skill) => !selectedCategory || skill.category === selectedCategory).
            map((skill, index, arr) => {
              const pos = getSkillPosition(index, arr.length);
              const category = skillCategories.find((c) => c.title === skill.category);
              const color = category?.color || '#4CC9F0';

              return (
                <motion.div data-ev-id="ev_7c6a6de8ee"
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: pos.x,
                  y: pos.y
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  delay: index * 0.03
                }}
                whileHover={{ scale: 1.2, zIndex: 50 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="absolute cursor-pointer">

										{/* Skill node */}
										<div data-ev-id="ev_1f3b6c4b03"
                  className="relative px-4 py-2 rounded-xl bg-glass backdrop-blur-sm border transition-all duration-300"
                  style={{
                    borderColor: hoveredSkill === skill.name ? color : 'rgba(76, 201, 240, 0.2)',
                    boxShadow: hoveredSkill === skill.name ? `0 0 30px ${color}40` : 'none'
                  }}>

											<span data-ev-id="ev_29a303aab9"
                    className="text-sm font-medium whitespace-nowrap"
                    style={{ color: hoveredSkill === skill.name ? color : '#94a3b8' }}>

												{skill.name}
											</span>

											{/* Tooltip */}
											<AnimatePresence>
												{hoveredSkill === skill.name &&
                      <motion.div data-ev-id="ev_9de88174f5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 rounded-lg bg-deep-navy border text-xs whitespace-nowrap z-50"
                      style={{ borderColor: color }}>

														<span data-ev-id="ev_b5ae353de9" style={{ color }}>{skill.category}</span>
													</motion.div>
                      }
											</AnimatePresence>
										</div>

										{/* Connection line to center */}
										<svg data-ev-id="ev_12ef0286ac"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ width: 500, height: 500, zIndex: -1 }}>

											<line data-ev-id="ev_8382708e99"
                    x1="250"
                    y1="250"
                    x2={250 - pos.x}
                    y2={250 - pos.y}
                    stroke={hoveredSkill === skill.name ? color : 'rgba(76, 201, 240, 0.1)'}
                    strokeWidth={hoveredSkill === skill.name ? 2 : 1} />

										</svg>
									</motion.div>);

            })}
					</AnimatePresence>
				</div>

				{/* Skills list for mobile */}
				<div data-ev-id="ev_6b958cbc50" className="md:hidden mt-8">
					{skillCategories.
          filter((cat) => !selectedCategory || cat.title === selectedCategory).
          map((category, catIndex) =>
          <motion.div data-ev-id="ev_4268b450a0"
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: catIndex * 0.1 }}
          className="mb-6">

								<h4 data-ev-id="ev_870f995826"
            className="text-lg font-semibold mb-3"
            style={{ color: category.color }}>

									{category.title}
								</h4>
								<div data-ev-id="ev_b033989b99" className="flex flex-wrap gap-2">
									{category.skills.map((skill) =>
              <span data-ev-id="ev_9d7c9a665c"
              key={skill}
              className="px-3 py-1.5 rounded-lg bg-glass border border-glass-border text-text-secondary text-sm">

											{skill}
										</span>
              )}
								</div>
							</motion.div>
          )}
				</div>
			</div>
		</section>);

}