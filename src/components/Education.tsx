import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

const educationData = [
{
  school: 'AMA Computer College',
  degree: 'Bachelor of Science in Information Technology',
  period: 'August 2020 – May 2024',
  location: 'Philippines',
  icon: GraduationCap,
  color: 'purple' as const,
  status: 'Completed'
},
{
  school: 'Mater Ecclesiae School',
  degree: 'Junior & Senior High School',
  period: '2014 – 2020',
  location: 'Philippines',
  icon: School,
  color: 'cyan' as const,
  status: 'Completed'
}];


export function Education() {
  return (
    <section data-ev-id="ev_d9705a16b2" id="education" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div data-ev-id="ev_52fe3280d3" className="max-w-4xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="Foundation of my technical expertise" />


        <div data-ev-id="ev_1e9dffb8a5" className="flex flex-col gap-6">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div data-ev-id="ev_d0d7c5ba9b"
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}>

                <GlassCard className="p-0 overflow-hidden" glowColor={edu.color}>
                  {/* Header with gradient */}
                  <div data-ev-id="ev_6664d29c02" className="relative p-6 sm:p-8 bg-gradient-to-r from-electric-blue/10 to-purple/10">
                    {/* Animated circuit pattern */}
                    <motion.div data-ev-id="ev_9d307ec604"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                          linear-gradient(90deg, rgba(76, 201, 240, 0.1) 1px, transparent 1px),
                          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                        `,
                      backgroundSize: '30px 30px'
                    }} />


                    <div data-ev-id="ev_68b6249b3d" className="relative flex items-start gap-4 sm:gap-6">
                      {/* Icon */}
                      <motion.div data-ev-id="ev_575c67989b"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${
                      edu.color === 'purple' ?
                      'from-electric-blue to-purple shadow-purple/20' :
                      'from-cyan to-electric-blue shadow-cyan/20'} flex items-center justify-center shadow-lg`
                      }>

                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-void" />
                      </motion.div>

                      {/* Content */}
                      <div data-ev-id="ev_6946552d74" className="flex-1 min-w-0">
                        <h3 data-ev-id="ev_dfc06119eb" className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-1 sm:mb-2">
                          {edu.school}
                        </h3>
                        <p data-ev-id="ev_fe983ac766" className={`text-base sm:text-lg font-medium ${
                        edu.color === 'purple' ? 'text-electric-blue' : 'text-cyan'}`
                        }>
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div data-ev-id="ev_527c665a1b" className="p-6 sm:p-8 pt-4">
                    <div data-ev-id="ev_e904795ab5" className="flex flex-wrap gap-4 sm:gap-6">
                      <div data-ev-id="ev_b1e4bd5481" className="flex items-center gap-2 text-text-secondary">
                        <Calendar className="w-5 h-5 text-purple" />
                        <span data-ev-id="ev_0236a0990e">{edu.period}</span>
                      </div>
                      <div data-ev-id="ev_030d42948a" className="flex items-center gap-2 text-text-secondary">
                        <MapPin className="w-5 h-5 text-cyan" />
                        <span data-ev-id="ev_51b81f798f">{edu.location}</span>
                      </div>
                    </div>

                    {/* Animated progress line */}
                    <motion.div data-ev-id="ev_96565a38e9" className="mt-6 h-1 rounded-full bg-deep-navy overflow-hidden">
                      <motion.div data-ev-id="ev_d1dc7667dc"
                      className={`h-full bg-gradient-to-r ${
                      edu.color === 'purple' ?
                      'from-electric-blue via-purple to-cyan' :
                      'from-cyan via-electric-blue to-purple'}`
                      }
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: 'easeOut' }} />

                    </motion.div>
                    <p data-ev-id="ev_4ae26f359f" className="mt-2 text-sm text-text-muted text-right">{edu.status}</p>
                  </div>
                </GlassCard>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}