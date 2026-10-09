'use client';

import React from 'react';
import FadeIn from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Videography',
    description:
      'Cinematic multi-camera shooting, commercial productions, and high-end luxury real estate films across Dubai and international locations.',
  },
  {
    number: '02',
    name: 'Video Editing',
    description:
      'Expert narrative pacing, sound design, color grading, and dynamic cuts using Adobe Premiere Pro, After Effects, and CapCut.',
  },
  {
    number: '03',
    name: 'AI Visual Creation',
    description:
      'Next-generation AI-generated video assets, prompt-engineered visual sequences, and creative concepting using Claude, ChatGPT, and AI tools.',
  },
  {
    number: '04',
    name: 'Photography',
    description:
      'Professional architectural, interior, and commercial photography with precision lighting, composition, and high-resolution retouching.',
  },
  {
    number: '05',
    name: 'Motion Graphics & VFX',
    description:
      'Dynamic title sequences, animated brand intros, 2D/3D screen replacements, and social-first video formats engineered for maximum engagement.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none z-10"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Services
        </h2>
      </FadeIn>

      {/* Services List */}
      <div className="max-w-5xl mx-auto flex flex-col border-t border-[rgba(12,12,12,0.15)]">
        {SERVICES.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={20}
            className="w-full py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-12"
          >
            {/* Left: Number */}
            <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none shrink-0 tabular-nums">
              {service.number}
            </div>

            {/* Right: Name + Description stacked vertically */}
            <div className="flex flex-col gap-2 max-w-2xl flex-1">
              <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] tracking-tight">
                {service.name}
              </h3>
              <p className="font-light leading-relaxed text-[#0C0C0C] opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
