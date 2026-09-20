import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ResumeModal } from '@/components/ResumeModal';

const navLinks = [
{ label: 'About', href: '#about' },
{ label: 'Experience', href: '#experience' },
{ label: 'Skills', href: '#skills' },
{ label: 'Projects', href: '#projects' },
{ label: 'Contact', href: '#contact' }];


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
			<motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'}`
        }>

				<div data-ev-id="ev_0fc5268c68" className="max-w-7xl mx-auto px-6">
					<div data-ev-id="ev_0d62c8ddd3"
          className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled ?
          'bg-glass/80 backdrop-blur-xl border border-glass-border shadow-lg shadow-electric-blue/5' :
          'bg-transparent'}`
          }>

						{/* Logo */}
						<motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2">

							<div data-ev-id="ev_b1839464bb" className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric-blue to-purple flex items-center justify-center">
								<span data-ev-id="ev_f02e680cdf" className="text-sm font-bold text-void">MJ</span>
							</div>
							<span data-ev-id="ev_c033cdba09" className="hidden sm:block font-semibold text-text-primary">Maricar Joy</span>
						</motion.a>

						{/* Desktop nav links */}
						<div data-ev-id="ev_ca8cc969f7" className="hidden md:flex items-center gap-1">
							{navLinks.map((link) =>
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm text-text-secondary hover:text-electric-blue transition-colors rounded-lg hover:bg-electric-blue/5">

									{link.label}
								</motion.button>
              )}
						</div>

						{/* Resume button */}
						<div data-ev-id="ev_ffa70ca0b2" className="hidden md:block">
							<motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsResumeModalOpen(true)}
                className="px-4 py-2 text-sm font-medium text-void bg-gradient-to-r from-electric-blue to-cyan rounded-lg hover:shadow-lg hover:shadow-electric-blue/20 transition-shadow">

								Resume
							</motion.button>
						</div>

						{/* Mobile menu button */}
						<button data-ev-id="ev_4f01acf257"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-glass border border-glass-border flex items-center justify-center text-text-primary">

							{isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 md:hidden">

						{/* Backdrop */}
						<div data-ev-id="ev_e46e55aa56"
          className="absolute inset-0 bg-void/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)} />


						{/* Menu content */}
						<div data-ev-id="ev_db2753f7b1" className="relative flex flex-col items-center justify-center h-full gap-6">
							{navLinks.map((link, index) =>
            <motion.button
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-semibold text-text-primary hover:text-electric-blue transition-colors">

									{link.label}
								</motion.button>
            )}
							<motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => { setIsMobileMenuOpen(false); setIsResumeModalOpen(true); }}
              className="mt-4 px-8 py-3 text-lg font-medium text-void bg-gradient-to-r from-electric-blue to-cyan rounded-xl">

								Download Resume
							</motion.button>
						</div>
					</motion.div>
        }
			</AnimatePresence>

			{/* Resume Modal */}
			<ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
		</>);

}