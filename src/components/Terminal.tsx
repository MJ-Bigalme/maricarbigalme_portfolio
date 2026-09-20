import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Minus, Square, X } from 'lucide-react';

const terminalLines = [
{ type: 'command', text: 'whoami' },
{ type: 'output', text: '' },
{ type: 'name', text: 'Maricar Joy M. Bigalme' },
{ type: 'title', text: 'Information Technology Professional' },
{ type: 'role', text: 'Web Developer' },
{ type: 'role', text: 'Application Support Specialist' },
{ type: 'role', text: 'Customer Support Engineer' },
{ type: 'output', text: '' },
{ type: 'command', text: 'cat skills.json | head -5' },
{ type: 'code', text: '{' },
{ type: 'code', text: '  "languages": ["JavaScript", "PHP", "C#", "HTML/CSS"],' },
{ type: 'code', text: '  "databases": ["MySQL", "SQL Server"],' },
{ type: 'code', text: '  "tools": ["VS Code", "Visual Studio", "Elementor"]' },
{ type: 'code', text: '}' }];


export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping) {
          setIsTyping(true);
          let line = 0;
          const interval = setInterval(() => {
            line++;
            setVisibleLines(line);
            if (line >= terminalLines.length) {
              clearInterval(interval);
            }
          }, 200);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('terminal-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isTyping]);

  const getLineStyle = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-cyan';
      case 'name':
        return 'text-electric-blue text-xl font-bold';
      case 'title':
        return 'text-purple';
      case 'role':
        return 'text-text-secondary';
      case 'code':
        return 'text-electric-blue/80';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <section data-ev-id="ev_b16386cd9e" id="terminal-section" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
			<div data-ev-id="ev_4cc4366267" className="max-w-4xl mx-auto">
				<motion.div data-ev-id="ev_3a35f0f63c"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-deep-navy border border-glass-border rounded-2xl overflow-hidden shadow-2xl shadow-electric-blue/5">

					{/* Terminal header */}
					<div data-ev-id="ev_eca5778f2c" className="flex items-center justify-between px-4 py-3 bg-glass border-b border-glass-border">
						<div data-ev-id="ev_a85cb540ed" className="flex items-center gap-2">
							<div data-ev-id="ev_03c4341b1f" className="w-3 h-3 rounded-full bg-red-500" />
							<div data-ev-id="ev_19d282b34c" className="w-3 h-3 rounded-full bg-yellow-500" />
							<div data-ev-id="ev_13a792c353" className="w-3 h-3 rounded-full bg-green-500" />
						</div>
						<div data-ev-id="ev_276bf41265" className="flex items-center gap-2 text-text-muted text-sm">
							<TerminalIcon className="w-4 h-4" />
							<span data-ev-id="ev_2b721deb04" className="font-mono">portfolio.sh</span>
						</div>
						<div data-ev-id="ev_9d07c1fd75" className="flex items-center gap-2 text-text-muted">
							<Minus className="w-4 h-4" />
							<Square className="w-3 h-3" />
							<X className="w-4 h-4" />
						</div>
					</div>

					{/* Terminal body */}
					<div data-ev-id="ev_de4a76c48e" className="p-6 font-mono text-sm md:text-base min-h-[300px]">
						{terminalLines.slice(0, visibleLines).map((line, index) =>
            <motion.div data-ev-id="ev_9784082cae"
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`${getLineStyle(line.type)} ${line.text ? 'mb-1' : 'mb-3'}`}>

								{line.type === 'command' &&
              <span data-ev-id="ev_f766b1b0dc" className="text-purple mr-2">❯</span>
              }
								{line.text}
							</motion.div>
            )}

						{/* Cursor */}
						{visibleLines >= terminalLines.length &&
            <motion.div data-ev-id="ev_20283e0af5" className="flex items-center">
								<span data-ev-id="ev_2765b891c0" className="text-purple mr-2">❯</span>
								<motion.span data-ev-id="ev_1048b46036"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-5 bg-electric-blue" />

							</motion.div>
            }
					</div>

					{/* Glow effect */}
					<div data-ev-id="ev_8a9ea56c56" className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 60px rgba(76, 201, 240, 0.03)' }} />
				</motion.div>
			</div>
		</section>);

}