import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
  lines: {text: string;className?: string;}[];
  delayBetweenLines?: number;
  typingSpeed?: number;
  startDelay?: number;
  loopDelay?: number;
  loop?: boolean;
}

export function TypeWriter({
  lines,
  delayBetweenLines = 300,
  typingSpeed = 80,
  startDelay = 500,
  loopDelay = 3000,
  loop = true
}: TypeWriterProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  // Start delay
  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay, cycleKey]);

  // Typing logic
  useEffect(() => {
    if (!hasStarted) return;

    // All lines completed
    if (currentLineIndex >= lines.length) {
      if (loop) {
        // Wait then restart
        const restartTimer = setTimeout(() => {
          setCompletedLines([]);
          setCurrentLineIndex(0);
          setCurrentText('');
          setHasStarted(false);
          setCycleKey((k) => k + 1);
        }, loopDelay);
        return () => clearTimeout(restartTimer);
      }
      return;
    }

    const currentLine = lines[currentLineIndex].text;

    // Still typing current line
    if (currentText.length < currentLine.length) {
      const typeTimer = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(typeTimer);
    }

    // Line complete, move to next
    const nextLineTimer = setTimeout(() => {
      setCompletedLines((prev) => [...prev, currentLine]);
      setCurrentText('');
      setCurrentLineIndex((i) => i + 1);
    }, delayBetweenLines);
    return () => clearTimeout(nextLineTimer);

  }, [currentText, currentLineIndex, lines, hasStarted, typingSpeed, delayBetweenLines, loop, loopDelay]);

  const isComplete = currentLineIndex >= lines.length;
  const isLastLine = (index: number) => index === lines.length - 1;

  const Cursor = () =>
  <motion.span
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 0.6, repeat: Infinity }}
    className="inline-block w-[4px] h-[0.85em] bg-electric-blue ml-1 align-middle rounded-sm" />;



  return (
    <div data-ev-id="ev_5ca9396d38" className="inline">
			{/* Completed lines */}
			{completedLines.map((line, index) =>
      <span data-ev-id="ev_55b13a804b" key={`${cycleKey}-${index}`} className={lines[index]?.className}>
					{line}
					{/* Show cursor after last completed line when all done */}
					{isComplete && isLastLine(index) && loop && <Cursor />}
				</span>
      )}

			{/* Currently typing line */}
			{currentLineIndex < lines.length && hasStarted &&
      <span data-ev-id="ev_35c567e24f" className={lines[currentLineIndex]?.className}>
					{currentText}
					<Cursor />
				</span>
      }
		</div>);

}