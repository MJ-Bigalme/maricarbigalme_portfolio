import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'word' | 'char';
}

export function AnimatedText({ text, className = '', delay = 0, type = 'word' }: AnimatedTextProps) {
  const items = type === 'word' ? text.split(' ') : text.split('');

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-flex flex-wrap ${className}`}>

			{items.map((item, i) =>
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
        className="inline-block">

					{item}{type === 'word' && <span data-ev-id="ev_6bd17ea240">&nbsp;</span>}
				</motion.span>
      )}
		</motion.span>);

}