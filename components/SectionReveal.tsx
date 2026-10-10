'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

export interface SectionRevealProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-scale' | 'fade-slide' | 'zoom-in' | 'reveal-curtain';
  delay?: number;
  duration?: number;
  amount?: number | 'some' | 'all';
  once?: boolean;
  className?: string;
  id?: string;
}

export default function SectionReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.85,
  amount = 0.12,
  once = true,
  className = '',
  id,
  ...props
}: SectionRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case 'fade-scale':
        return {
          initial: { opacity: 0, scale: 0.96, y: 40 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
        };
      case 'fade-slide':
        return {
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
        };
      case 'zoom-in':
        return {
          initial: { opacity: 0, scale: 0.92 },
          whileInView: { opacity: 1, scale: 1 },
        };
      case 'reveal-curtain':
        return {
          initial: { opacity: 0, y: 40, clipPath: 'inset(8% 0% 8% 0%)' },
          whileInView: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' },
        };
      case 'fade-up':
      default:
        return {
          initial: { opacity: 0, y: 45 },
          whileInView: { opacity: 1, y: 0 },
        };
    }
  };

  const anim = getVariants();

  return (
    <motion.section
      id={id}
      initial={anim.initial}
      whileInView={anim.whileInView}
      viewport={{ once, amount, margin: '-60px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Cinematic ease-out
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
