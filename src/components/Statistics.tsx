import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FolderCode, Code2, Award, Briefcase } from 'lucide-react';

// Calculate years of experience from September 2024
function calculateYearsExperience(): number {
  const startDate = new Date(2024, 8, 1); // September 2024 (month is 0-indexed)
  const now = new Date();
  const diffInMs = now.getTime() - startDate.getTime();
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(1, Math.floor(years)); // At least 1 year, rounded down
}

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
{ icon: FolderCode, value: 2, suffix: '+', label: 'Projects Completed', color: '#4CC9F0' },
{ icon: Code2, value: 15, suffix: '+', label: 'Technologies', color: '#8B5CF6' },
{ icon: Award, value: 3, suffix: '', label: 'Certifications', color: '#00F5FF' },
{ icon: Briefcase, value: calculateYearsExperience(), suffix: '+', label: 'Years Experience', color: '#4CC9F0' }];


function AnimatedCounter({ value, suffix, inView }: {value: number;suffix: string;inView: boolean;}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span data-ev-id="ev_18f8d30c2a">{count}{suffix}</span>);

}

export function Statistics() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section data-ev-id="ev_84d2ba5db2" ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
			{/* Background gradient */}
			<div data-ev-id="ev_42d8043fb5" className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent" />

			<div data-ev-id="ev_1f80d291ee" className="max-w-6xl mx-auto relative">
				<div data-ev-id="ev_a048172806" className="grid grid-cols-2 lg:grid-cols-4 gap-6">
					{stats.map((stat, index) =>
          <motion.div data-ev-id="ev_976b9c9887"
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group">

							<div data-ev-id="ev_c993ebd0b8" className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl p-6 text-center overflow-hidden h-full">
								{/* Hover glow */}
								<div data-ev-id="ev_a1453165c8"
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at center, ${stat.color}10, transparent 70%)` }} />


								{/* Icon */}
								<motion.div data-ev-id="ev_631cce69fa"
              className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: `${stat.color}15` }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}>

									<stat.icon className="w-7 h-7" style={{ color: stat.color }} />
								</motion.div>

								{/* Value */}
								<div data-ev-id="ev_d804fe483e"
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: stat.color }}>

									<AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
								</div>

								{/* Label */}
								<p data-ev-id="ev_283d34be42" className="text-text-secondary text-sm">{stat.label}</p>

								{/* Animated ring */}
								<motion.div data-ev-id="ev_5b29e867cd"
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border opacity-10"
              style={{ borderColor: stat.color }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }} />

							</div>
						</motion.div>
          )}
				</div>
			</div>
		</section>);

}