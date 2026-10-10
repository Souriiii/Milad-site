'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface MarqueeVideoItem {
  id: string;
  title: string;
  tag: string;
  videoSrc: string;
  poster: string;
}

const ROW_1_VIDEOS: MarqueeVideoItem[] = [
  {
    id: 'vid-f1-ai',
    title: 'F1 Formula One AI Reel',
    tag: 'AI Cinema',
    videoSrc: '/videos/f1_ai.mp4',
    poster: '/covers/f1_ai.jpg',
  },
  {
    id: 'vid-beach-front-emaar',
    title: 'Beachfront Emaar Dubai',
    tag: 'Emaar Properties',
    videoSrc: '/videos/beach_front_emaar.mp4',
    poster: '/covers/beach_front_emaar.jpg',
  },
  {
    id: 'vid-villa-02',
    title: 'Exclusive Villa 02 Tour',
    tag: 'Luxury Villa',
    videoSrc: '/videos/villa_02.mp4',
    poster: '/covers/villa_02.jpg',
  },
  {
    id: 'vid-patrick-ta-eyes',
    title: 'Patrick Ta For Eyes',
    tag: 'Beauty & Makeup',
    videoSrc: '/videos/patrick_ta_eyes.mp4',
    poster: '/covers/patrick_ta_eyes.jpg',
  },
  {
    id: 'vid-the-edit-meras',
    title: 'The Edit — Meraas',
    tag: 'Meraas Lifestyle',
    videoSrc: '/videos/the_edit_meras.mp4',
    poster: '/covers/the_edit_meras.jpg',
  },
  {
    id: 'vid-cold-symptoms',
    title: 'Cold Symptoms Explainer',
    tag: 'Medical & Health',
    videoSrc: '/videos/cold_symptoms.mp4',
    poster: '/covers/cold_symptoms.jpg',
  },
  {
    id: 'vid-basketball-reel',
    title: 'Basketball Energy Reel',
    tag: 'Sports Cinema',
    videoSrc: '/videos/basketball_reel.mp4',
    poster: '/covers/basketball_reel.jpg',
  },
];

const ROW_2_VIDEOS: MarqueeVideoItem[] = [
  {
    id: 'vid-villa-showcase',
    title: 'Architectural Villa Showcase',
    tag: '16:9 Architecture',
    videoSrc: '/videos/villa_showcase.mp4',
    poster: '/covers/villa_showcase.jpg',
  },
  {
    id: 'vid-emaar-beach',
    title: 'Emaar Beachfront Luxury',
    tag: 'Emaar Coast',
    videoSrc: '/videos/emaar_beach.mp4',
    poster: '/covers/emaar_beach.jpg',
  },
  {
    id: 'vid-zombie-story-love',
    title: 'Zombie Story Love',
    tag: '16:9 AI Cinema',
    videoSrc: '/videos/zombie_story_love.mp4',
    poster: '/covers/zombie_story_love.jpg',
  },
  {
    id: 'vid-gym-fitness-reel',
    title: 'Gym & Fitness Commercial',
    tag: 'Action Cut',
    videoSrc: '/videos/gym_fitness_reel.mp4',
    poster: '/covers/gym_fitness_reel.jpg',
  },
  {
    id: 'vid-real-estate-o1ne',
    title: 'Real Estate O1NE Campaign',
    tag: 'Commercial Reel',
    videoSrc: '/videos/real_estate_o1ne.mp4',
    poster: '/covers/real_estate_o1ne.jpg',
  },
  {
    id: 'vid-flu-vaccine',
    title: 'Flu Vaccine Awareness',
    tag: 'Public Health',
    videoSrc: '/videos/flu_vaccine.mp4',
    poster: '/covers/flu_vaccine.jpg',
  },
  {
    id: 'vid-flu-overview',
    title: 'Flu Diagnosis & Care',
    tag: 'Healthcare',
    videoSrc: '/videos/flu_overview.mp4',
    poster: '/covers/flu_overview.jpg',
  },
];

// Duplicate items 4 times to ensure seamless infinite looping
const ROW_1_REPEATED = [...ROW_1_VIDEOS, ...ROW_1_VIDEOS, ...ROW_1_VIDEOS, ...ROW_1_VIDEOS];
const ROW_2_REPEATED = [...ROW_2_VIDEOS, ...ROW_2_VIDEOS, ...ROW_2_VIDEOS, ...ROW_2_VIDEOS];

function VideoMarqueeCard({ item }: { item: MarqueeVideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt play on mount with muted
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <div className="w-[360px] sm:w-[420px] md:w-[460px] h-[220px] sm:h-[260px] md:h-[280px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 relative group shadow-2xl">
      {/* Video is set to object-cover (fill) so it completely fills the horizontal frame */}
      <video
        ref={videoRef}
        src={item.videoSrc}
        poster={item.poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay for typography readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

      {/* Tag badge top-right */}
      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#D7E2EA] text-[10px] sm:text-[11px] uppercase tracking-wider font-mono border border-white/15">
        {item.tag}
      </div>

      {/* Bottom info pill */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/15 max-w-[85%] truncate">
          <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0 animate-pulse" />
          <span className="truncate">{item.title}</span>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg">
          <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
        </div>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = window.scrollY - lastScrollY;
          setScrollSpeed(delta * 0.15);
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1, margin: '-40px 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      {/* Scroll-revealed intro badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px 0px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-center mb-6 sm:mb-8 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-[11px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-mono shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>Continuous Reel Highlights</span>
        </div>
      </motion.div>

      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1 - Smooth continuous marquee streaming right-to-left */}
        <div className="relative w-full overflow-hidden flex">
          <motion.div
            className="flex gap-4 sm:gap-6 shrink-0"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 40,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={{
              transform: `translateX(${scrollSpeed}px)`,
            }}
          >
            {ROW_1_REPEATED.map((item, index) => (
              <VideoMarqueeCard key={`row1-${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Smooth continuous marquee streaming left-to-right */}
        <div className="relative w-full overflow-hidden flex">
          <motion.div
            className="flex gap-4 sm:gap-6 shrink-0"
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              duration: 45,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={{
              transform: `translateX(${-scrollSpeed}px)`,
            }}
          >
            {ROW_2_REPEATED.map((item, index) => (
              <VideoMarqueeCard key={`row2-${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
