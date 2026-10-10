'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1, margin: '-50px 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Decorative 3D images in corners with scroll-triggered entrance + subtle ambient floating */}

      {/* Top-left: Moon icon */}
      <motion.div
        initial={{ opacity: 0, x: -70, y: -40, rotate: -12 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative aspect-square"
        >
          <Image
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative 3D moon icon"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 210px"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>

      {/* Bottom-left: 3D object */}
      <motion.div
        initial={{ opacity: 0, x: -70, y: 50, rotate: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, 9, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative aspect-square"
        >
          <Image
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D geometric shape"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 100px, (max-width: 768px) 140px, 180px"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>

      {/* Top-right: Lego icon */}
      <motion.div
        initial={{ opacity: 0, x: 70, y: -40, rotate: 12 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative aspect-square"
        >
          <Image
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative 3D lego block"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 210px"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>

      {/* Bottom-right: 3D group */}
      <motion.div
        initial={{ opacity: 0, x: 70, y: 50, rotate: -8 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative aspect-square"
        >
          <Image
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D geometric group"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 640px) 130px, (max-width: 768px) 170px, 220px"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>

      {/* Center content container with scroll reveal */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </motion.div>

        {/* Animated paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center mb-16 sm:mb-20 md:mb-24"
        >
          <AnimatedText
            text="With more than seven years of experience in video editing, videography, and AI creation, i specialize in Adobe Premiere Pro, After Effects, and next-gen AI workflows. Based in Dubai, i produce high-impact real estate, commercial, and brand content that captivates audiences."
          />
        </motion.div>

        {/* Contact button */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactButton onClick={onOpenContact} />
        </motion.div>
      </div>
    </motion.section>
  );
}
