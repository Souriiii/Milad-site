'use client';

import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ children, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {children}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-text">
        {children}
      </motion.span>
    </span>
  );
}

interface ProcessedChar {
  char: string;
  start: number;
  end: number;
}

interface ProcessedWord {
  chars: ProcessedChar[];
  spaceAfter: ProcessedChar | null;
}

function parseTextToWords(text: string): ProcessedWord[] {
  const rawWords = text.split(' ');
  const totalChars = text.length;
  let index = 0;
  const result: ProcessedWord[] = [];

  for (let w = 0; w < rawWords.length; w++) {
    const word = rawWords[w];
    const chars: ProcessedChar[] = [];
    for (let c = 0; c < word.length; c++) {
      const char = word[c];
      const start = index / totalChars;
      const end = (index + 1) / totalChars;
      index += 1;
      chars.push({ char, start, end });
    }

    let spaceAfter: ProcessedChar | null = null;
    if (w < rawWords.length - 1) {
      const start = index / totalChars;
      const end = (index + 1) / totalChars;
      index += 1;
      spaceAfter = { char: '\u00A0', start, end };
    }

    result.push({ chars, spaceAfter });
  }

  return result;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const structuredWords = useMemo(() => parseTextToWords(text), [text]);

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] ${className}`}
    >
      {structuredWords.map((wordObj, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {wordObj.chars.map((charItem, charIndex) => (
            <Char
              key={charIndex}
              progress={scrollYProgress}
              range={[charItem.start, Math.min(1, charItem.end + 0.05)]}
            >
              {charItem.char}
            </Char>
          ))}
          {wordObj.spaceAfter && (
            <span className="inline-block">
              <Char
                progress={scrollYProgress}
                range={[wordObj.spaceAfter.start, Math.min(1, wordObj.spaceAfter.end + 0.05)]}
              >
                {wordObj.spaceAfter.char}
              </Char>
            </span>
          )}
        </span>
      ))}
    </p>
  );
}
