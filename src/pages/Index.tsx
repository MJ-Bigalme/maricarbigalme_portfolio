import { useState } from 'react';
import { motion } from 'framer-motion';

// Effects
import { GradientBackground } from '@/components/effects/GradientBackground';
import { ParticleField } from '@/components/effects/ParticleField';
import { CodeRain } from '@/components/effects/CodeRain';
import { AnimatedGrid } from '@/components/effects/AnimatedGrid';
import { MouseSpotlight } from '@/components/effects/MouseSpotlight';

// Components
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Terminal } from '@/components/Terminal';
import { Statistics } from '@/components/Statistics';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main content */}
      {!isLoading &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen bg-void text-text-primary overflow-hidden">

          {/* Background effects */}
          <GradientBackground />
          <CodeRain />
          <AnimatedGrid />
          <ParticleField />
          <MouseSpotlight />

          {/* Navigation */}
          <Navigation />

          {/* Sections */}
          <main data-ev-id="ev_d4840824c9" className="relative z-10">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Terminal />
            <Statistics />
            <Contact />
            <Footer />
          </main>
        </motion.div>
      }
    </>);

}