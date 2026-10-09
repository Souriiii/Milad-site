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
    id: 'vid-azizi-venice',
    title: 'Azizi Venice Waterfront',
    tag: '4K Cinema',
    videoSrc: '/videos/azizi_venice.mp4',
    poster: '/covers/azizi_venice.jpg',
  },
  {
    id: 'vid-binghatti-cullinan',
    title: 'Binghatti Cullinan Official',
    tag: 'Luxury Reel',
    videoSrc: '/videos/binghatti_cullinan.mp4',
    poster: '/covers/binghatti_cullinan.jpg',
  },
  {
    id: 'vid-creek-bay-emaar',
    title: 'Creek Bay — Emaar Properties',
    tag: 'Emaar',
    videoSrc: '/videos/creek_bay_emaar.mp4',
    poster: '/covers/creek_bay_emaar.jpg',
  },
  {
    id: 'vid-gym-fitness',
    title: 'Gym & Fitness Commercial',
    tag: 'Action Cut',
    videoSrc: '/videos/gym_fitness.mp4',
    poster: '/covers/gym_fitness.jpg',
  },
  {
    id: 'vid-elina-downtown',
    title: 'Elina Downtown Dubai',
    tag: '4K Commercial',
    videoSrc: '/videos/elina_downtown.mp4',
    poster: '/covers/elina_downtown.jpg',
  },
  {
    id: 'vid-titania-binghatti',
    title: 'Titania Binghatti Showcase',
    tag: 'Binghatti',
    videoSrc: '/videos/titania_binghatti.mp4',
    poster: '/covers/titania_binghatti.jpg',
  },
];

const ROW_2_VIDEOS: MarqueeVideoItem[] = [
  {
    id: 'vid-jvc-apartment',
    title: 'JVC Luxury Apartment',
    tag: '4K Interior',
    videoSrc: '/videos/jvc_apartment.mp4',
    poster: '/covers/jvc_apartment.jpg',
  },
  {
    id: 'vid-reza-binghatti',
    title: 'Binghatti Campaign V3',
    tag: '4K Campaign',
    videoSrc: '/videos/reza_binghatti.mp4',
    poster: '/covers/reza_binghatti.jpg',
  },
  {
    id: 'vid-basketball',
    title: 'Basketball Cinematic Reel',
    tag: 'Sports Rhythm',
    videoSrc: '/videos/basketball.mp4',
    poster: '/covers/basketball.jpg',
  },
  {
    id: 'vid-the-edit-meraas',
    title: 'The Edit — Meraas Lifestyle',
    tag: 'Meraas',
    videoSrc: '/videos/the_edit_meraas.mp4',
    poster: '/covers/the_edit_meraas.jpg',
  },
  {
    id: 'vid-wedding-sahereh',
    title: 'Sahereh & Vahid Wedding',
    tag: '16:9 Cinema',
    videoSrc: '/videos/wedding_sahereh.mp4',
    poster: '/covers/wedding_sahereh.jpg',
  },
  {
    id: 'vid-azizi-waterfront-alt',
    title: 'Azizi Venice Cinematic Cut',
    tag: 'Dubai South',
    videoSrc: '/videos/azizi_venice.mp4',
    poster: '/covers/azizi_venice.jpg',
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
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
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
    </section>
  );
}
