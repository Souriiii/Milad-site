'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  className?: string;
  as?: React.ElementType;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.75,
  x = 0,
  y = 30,
  scale = 1,
  className = '',
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale: scale !== 1 ? scale : undefined }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px 0px', amount: 0.1 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
