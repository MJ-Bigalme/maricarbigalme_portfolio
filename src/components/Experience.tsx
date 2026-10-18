import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, TrendingUp } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface Role {
  title: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
}

interface ExperienceItem {
  company: string;
  roles: Role[];
}

const experiences: ExperienceItem[] = [
{
  company: 'Elementor · Yngen Datacom Corp.',
  roles: [
  {
    title: 'Technical Support Engineer – Tier 2',
    period: 'October 2026 – Present',
    current: true,
    responsibilities: [
    'Provide advanced troubleshooting for complex Elementor cases',
    'Collaborate with development teams on bug reports',
    'Create technical documentation and knowledge base articles',
    'Analyze recurring issues and propose systematic solutions',
    'Maintain high customer satisfaction scores',
    'Participate in product feedback and improvement discussions']

  },
  {
    title: 'Technical Support Engineer – Tier 1',
    period: 'September 2024 – September 2026',
    responsibilities: [
    'Delivered technical support via live chat and email ticketing systems',
    'Specialized in Elementor page builder issues',
    'Diagnosed and troubleshot Elementor Theme Builder layouts',
    'Debugged dynamic content tags and CSS responsiveness',
    'Provided empathetic, solution-oriented customer service',
    'Maintained strict ticket response and resolution SLAs',
    'Performed precise ticket tagging and prioritization',
    'Created comprehensive case documentation for escalations']

  }]

},
{
  company: 'Phelps Dodge Philippines Energy Products Corp.',
  roles: [
  {
    title: 'Application Development & Support Intern',
    period: 'February 2024 – May 2024',
    responsibilities: [
    'Assisted in building applications using VB.NET and .NET Framework',
    'Followed organizational coding standards',
    'Designed and maintained database-driven reports using SAP Crystal Reports',
    'Provided prompt Tier 1 technical support',
    'Handled internal hardware, software, and network inquiries']

  }]

}];

export function Experience() {
  return (
    <section data-ev-id="ev_e4826ce042" id="experience" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div data-ev-id="ev_d3661c84ef" className="max-w-5xl mx-auto">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey in the tech industry" />


        <div data-ev-id="ev_979c74499a" className="relative">
          {/* Animated timeline line */}
          <motion.div data-ev-id="ev_696647cb25"
          className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-electric-blue via-purple to-cyan hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          style={{ transformOrigin: 'top' }} />


          {/* Glowing particles along timeline */}
          {[0, 1, 2, 3, 4].map((i) =>
          <motion.div data-ev-id="ev_a765a3c32a"
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
          <div data-ev-id="ev_88e8192acb" className="flex flex-col gap-8 md:pl-20">
            {experiences.map((exp, expIndex) =>
            <motion.div data-ev-id="ev_dd325c5948"
            key={exp.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: expIndex * 0.2 }}
            className="relative group">

                {/* Timeline node */}
                <div data-ev-id="ev_0d5c35d4c5" className="absolute -left-20 top-6 hidden md:flex items-center justify-center">
                  <motion.div data-ev-id="ev_95904a181f"
                className={`w-4 h-4 rounded-full ${exp.roles[0].current ? 'bg-cyan' : 'bg-purple'}`}
                animate={exp.roles[0].current ? {
                  boxShadow: [
                  '0 0 0px rgba(0, 245, 255, 0.5)',
                  '0 0 20px rgba(0, 245, 255, 0.8)',
                  '0 0 0px rgba(0, 245, 255, 0.5)']

                } : {}}
                transition={{ duration: 2, repeat: Infinity }} />

                </div>

                {/* Card */}
                <div data-ev-id="ev_9b57c69eac" className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-6 md:p-8 overflow-hidden group-hover:border-electric-blue/30 transition-colors duration-300">
                  {/* Hover glow effect */}
                  <div data-ev-id="ev_6dd1c2a7c5" className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Current badge */}
                  {exp.roles[0].current &&
                <motion.div data-ev-id="ev_336945f1e9"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan/20 border border-cyan/30 text-cyan text-xs font-mono">

                      Current
                    </motion.div>
                }

                  {/* Company Header */}
                  <div data-ev-id="ev_35fa26d9ac" className="relative flex flex-col md:flex-row md:items-start gap-4 mb-6">
                    <div data-ev-id="ev_3c8958d30a" className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-electric-blue/20 to-purple/20 border border-electric-blue/20 flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-electric-blue" />
                    </div>
                    <div data-ev-id="ev_6f344de863">
                      <p data-ev-id="ev_4ec3704600" className="text-electric-blue font-semibold text-lg mb-1">{exp.company}</p>
                      <div data-ev-id="ev_b57cd937af" className="flex items-center gap-2 text-text-muted text-sm">
                        <Calendar className="w-4 h-4" />
                        <span data-ev-id="ev_6cb97a82d9">
                          {exp.roles[exp.roles.length - 1].period.split(' – ')[0]} – {exp.roles[0].current ? 'Present' : exp.roles[0].period.split(' – ')[1]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Roles */}
                  <div data-ev-id="ev_10fe1d26a2" className="relative flex flex-col gap-6">
                    {exp.roles.map((role, roleIndex) =>
                  <div data-ev-id="ev_4aa67cc90c" key={role.title} className="relative">
                        {/* Promotion indicator between roles */}
                        {roleIndex > 0 &&
                    <div data-ev-id="ev_a8846c5fb3" className="absolute -top-3 left-0 right-0 flex items-center justify-center">
                            <div data-ev-id="ev_bd1566aa61" className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20">
                              <TrendingUp className="w-3 h-3 text-purple" />
                              <span data-ev-id="ev_9ad2a02886" className="text-xs text-purple font-medium">Promoted</span>
                            </div>
                          </div>
                    }

                        {/* Role header */}
                        <div data-ev-id="ev_c4eaea1259" className={`${roleIndex > 0 ? 'mt-4 pt-4 border-t border-glass-border' : ''}`}>
                          <div data-ev-id="ev_1a6f0a111b" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                            <h3 data-ev-id="ev_da0a43cd30" className="text-lg md:text-xl font-bold text-text-primary">
                              {role.title}
                            </h3>
                            <span data-ev-id="ev_9aef482e47" className="text-text-muted text-sm font-mono">
                              {role.period}
                            </span>
                          </div>

                          {/* Responsibilities */}
                          <div data-ev-id="ev_e92b642762" className="grid md:grid-cols-2 gap-2">
                            {role.responsibilities.map((resp, i) =>
                        <motion.div data-ev-id="ev_f485973681"
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-start gap-2 text-text-secondary text-sm">

                                <ChevronRight className="w-4 h-4 text-purple mt-0.5 flex-shrink-0" />
                                <span data-ev-id="ev_370ae05171">{resp}</span>
                              </motion.div>
                        )}
                          </div>
                        </div>
                      </div>
                  )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}