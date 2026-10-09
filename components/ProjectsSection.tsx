'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ExternalLink, Video } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { type ProjectData } from './ProjectModal';

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: 'project-1',
    number: '01',
    title: 'Azizi Venice & Emaar Creek',
    category: 'AI Real Estate · Dubai',
    client: 'Azizi & Emaar Properties',
    location: 'Dubai South & Creek Harbour',
    driveFileId: '1kg_i-0PpGUdcNHrFZjvOqNSlKAP5YY6x', // Azizi Venice.mp4
    aspectRatio: '9/16',
    driveLink:
      'https://drive.google.com/drive/folders/14TQX-M94WAG_YduheZ7WBx8MIR36WNTM?usp=drive_link',
    description:
      'Flagship architectural video and AI-enhanced campaign film for Azizi Venice and Emaar Creek Bay. Crafted with cinematic camera movement, refined sound design, and photorealistic pacing.',
    images: {
      col1Top: '/covers/creek_bay_emaar.jpg',
      col1Bottom: '/covers/sobha_solis.jpg',
      col2: '/covers/azizi_venice.jpg',
    },
  },
  {
    id: 'project-2',
    number: '02',
    title: 'Binghatti Cullinan & DIFC',
    category: 'Commercial Video · Architecture',
    client: 'Binghatti Developers & Eivan',
    location: 'Business Bay & DIFC, Dubai',
    driveFileId: '1uE0-P5WLC_88Wy68vjaPJnBW7U720tVf', // BINGHATTI-Cullinan-PERSIAN.mp4
    aspectRatio: '9/16',
    driveLink:
      'https://drive.google.com/drive/folders/1UE6OZ7En1NISdb9INfVkAqeEtYyVcAO4?usp=drive_link',
    description:
      'High-energy luxury real estate commercial series highlighting Binghatti Cullinan and DIFC residences. Multi-camera videography, dynamic speed ramping, and commercial color grading.',
    images: {
      col1Top: '/covers/difc_luxury.jpg',
      col1Bottom: '/covers/arshia_downtown.jpg',
      col2: '/covers/binghatti_cullinan.jpg',
    },
  },
  {
    id: 'project-3',
    number: '03',
    title: 'Sports Reel & Wedding Cinema',
    category: 'Pacing & Narrative Cinema',
    client: 'Commercial & Private Commissions',
    location: 'Dubai & International',
    driveFileId: '1xmP-AE6v9H_62wztWoEcPCXHGF8aJBmi', // Gym Fitness.mp4
    aspectRatio: '9/16',
    driveLink:
      'https://drive.google.com/drive/folders/1WjKpJJjkhu2cRsWSUTaVEpQJDkS0wjlj?usp=drive_link',
    description:
      'Dynamic commercial storytelling spanning explosive gym fitness & basketball rhythm reels to emotive luxury wedding cinema (WED-001). Mastered in Adobe Premiere Pro and After Effects.',
    images: {
      col1Top: '/covers/basketball.jpg',
      col1Bottom: '/covers/wedding_sahereh.jpg',
      col2: '/covers/gym_fitness.jpg',
    },
  },
];

export interface DriveWorkItem {
  id: string;
  title: string;
  folder: string;
  category: 'ai' | 'real-estate' | 'sports' | 'wedding';
  fileId: string;
  type: string;
  tag: string;
  cover: string;
  width: number;
  height: number;
  aspectRatio: '9/16' | '16/9';
  resolution: string;
}

// All individual works from Milad's Google Drive folders with exact native pixel sizes and aspect ratios
export const DRIVE_WORKS: DriveWorkItem[] = [
  {
    id: 'work-azizi-venice',
    title: 'Azizi Venice Waterfront',
    folder: 'AI Real Estate',
    category: 'ai',
    fileId: '1kg_i-0PpGUdcNHrFZjvOqNSlKAP5YY6x',
    type: '9:16 Video Reel',
    tag: '4K Cinema',
    cover: '/covers/azizi_venice.jpg',
    width: 2160,
    height: 3840,
    aspectRatio: '9/16',
    resolution: '4K (2160×3840)',
  },
  {
    id: 'work-binghatti-cullinan',
    title: 'Binghatti Cullinan Official',
    folder: 'AI Real Estate',
    category: 'ai',
    fileId: '1uE0-P5WLC_88Wy68vjaPJnBW7U720tVf',
    type: '9:16 Commercial Reel',
    tag: 'Luxury',
    cover: '/covers/binghatti_cullinan.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-creek-bay-emaar',
    title: 'Creek Bay — Emaar Properties',
    folder: 'AI Real Estate',
    category: 'ai',
    fileId: '1_vvxGu8WocnOygq6UXWLeFNuyG7fn4je',
    type: '9:16 Architectural Reel',
    tag: 'Emaar',
    cover: '/covers/creek_bay_emaar.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-sobha-solis',
    title: 'Sobha Solis Launch Reel',
    folder: 'AI Real Estate',
    category: 'ai',
    fileId: '1fzvFpASxYqY46OXPhssQvV0MFDdP_tEo',
    type: '9:16 Social Reel',
    tag: 'Sobha',
    cover: '/covers/sobha_solis.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-the-edit-meraas',
    title: 'The Edit — Meraas Lifestyle',
    folder: 'AI Real Estate',
    category: 'ai',
    fileId: '14lgI9eTEzwNQvvjWhcKiFyxya3HCNU4v',
    type: '9:16 Commercial Reel',
    tag: 'Meraas',
    cover: '/covers/the_edit_meraas.jpg',
    width: 720,
    height: 1280,
    aspectRatio: '9/16',
    resolution: 'HD (720×1280)',
  },
  {
    id: 'work-titania-binghatti',
    title: 'Titania Binghatti Showcase',
    folder: 'AI Real Estate',
    category: 'ai',
    fileId: '11rufe-RewUEiu-bntvRHz6H1g_mpFc-f',
    type: '9:16 Promo Film',
    tag: 'Binghatti',
    cover: '/covers/titania_binghatti.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-emirates-national-day',
    title: 'Emirates National Day Final',
    folder: 'AI Real Estate',
    category: 'ai',
    fileId: '14XdvM-zI-feE3GRnahe4nqEyEbPKVT6O',
    type: '9:16 Celebration Film',
    tag: 'Official',
    cover: '/covers/emirates_national_day.jpg',
    width: 1068,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'Cinema (1068×1920)',
  },
  {
    id: 'work-difc',
    title: 'DIFC Luxury Living',
    folder: 'Dubai Real Estate',
    category: 'real-estate',
    fileId: '1SBgoxinTYmRUoMgKRTXYqg__1Q9ZgDOq',
    type: '9:16 Interior & Exterior',
    tag: 'DIFC',
    cover: '/covers/difc_luxury.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-elina-downtown',
    title: 'Elina Downtown Dubai',
    folder: 'Dubai Real Estate',
    category: 'real-estate',
    fileId: '16vdxlKU2ZAd3RFjs0EnJbSL-HTTT8u53',
    type: '9:16 Commercial Reel',
    tag: 'Downtown',
    cover: '/covers/elina_downtown.jpg',
    width: 2160,
    height: 3840,
    aspectRatio: '9/16',
    resolution: '4K (2160×3840)',
  },
  {
    id: 'work-arshia-downtown',
    title: 'Arshia Downtown Series',
    folder: 'Dubai Real Estate',
    category: 'real-estate',
    fileId: '15rgxSWGTWW9vqJDJjRWd2cz0x0bCemLE',
    type: '9:16 Video Reel',
    tag: 'Commercial',
    cover: '/covers/arshia_downtown.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-reza-binghatti',
    title: 'Binghatti Campaign V3',
    folder: 'Dubai Real Estate',
    category: 'real-estate',
    fileId: '1Uh764LJ6hUSM-Ag0YrrWxwBCcPeETk1u',
    type: '9:16 Campaign Reel',
    tag: 'Reel',
    cover: '/covers/reza_binghatti.jpg',
    width: 2160,
    height: 3840,
    aspectRatio: '9/16',
    resolution: '4K (2160×3840)',
  },
  {
    id: 'work-jvc-apartment',
    title: 'JVC Luxury Apartment',
    folder: 'Dubai Real Estate',
    category: 'real-estate',
    fileId: '1NCHHkO_Wd0QGTtRjou3DFWe-4gch9KYa',
    type: '9:16 Interior Reel',
    tag: 'JVC',
    cover: '/covers/jvc_apartment.jpg',
    width: 2160,
    height: 3840,
    aspectRatio: '9/16',
    resolution: '4K (2160×3840)',
  },
  {
    id: 'work-gym-fitness',
    title: 'Gym & Fitness Commercial',
    folder: 'Sports & Commercials',
    category: 'sports',
    fileId: '1xmP-AE6v9H_62wztWoEcPCXHGF8aJBmi',
    type: '9:16 Action Reel',
    tag: 'High Energy',
    cover: '/covers/gym_fitness.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-basketball',
    title: 'Basketball Cinematic Reel',
    folder: 'Sports & Commercials',
    category: 'sports',
    fileId: '1spsEz-9MeEX4mpkI4YxBB3YzWIAvH79C',
    type: '9:16 Sports Reel',
    tag: 'Fast Cut',
    cover: '/covers/basketball.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-wedding-wed001',
    title: 'Wedding Cinema WED-001',
    folder: 'Wedding Cinema',
    category: 'wedding',
    fileId: '1Kv9vKdtMKmbfAhKrxpUCU5x1dTFh1bJN',
    type: '16:9 Cinematic Film',
    tag: 'Widescreen',
    cover: '/covers/wedding_wed001.jpg',
    width: 1280,
    height: 720,
    aspectRatio: '16/9',
    resolution: '16:9 HD (1280×720)',
  },
  {
    id: 'work-wedding-sahereh',
    title: 'Sahereh & Vahid Wedding',
    folder: 'Wedding Cinema',
    category: 'wedding',
    fileId: '1TqTy5KD4OqKfivQ8_rNdxjoFlAp8wjdY',
    type: '16:9 Highlight Film',
    tag: 'Widescreen',
    cover: '/covers/wedding_sahereh.jpg',
    width: 1920,
    height: 1080,
    aspectRatio: '16/9',
    resolution: '16:9 FHD (1920×1080)',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectData) => void;
}

function ProjectCard({ project, index, totalCards, onOpenProject }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] relative flex items-start justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(clamp(5rem, 8vw, 8rem) + ${index * 28}px)`,
        }}
        className="sticky top-24 md:top-32 w-full max-w-5xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {/* Number (huge, same style as services) */}
            <span className="font-black text-[#D7E2EA] text-[clamp(3rem,10vw,140px)] leading-none tabular-nums font-heading">
              {project.number}
            </span>

            {/* Category label + Project name stacked vertically */}
            <div className="flex flex-col">
              <span className="font-light uppercase tracking-widest text-xs sm:text-sm text-[#D7E2EA]/70 font-body">
                {project.category}
              </span>
              <h3 className="font-medium uppercase tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#D7E2EA] font-display">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <LiveProjectButton
            label="Watch Video"
            onClick={() => onOpenProject(project)}
          />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-6">
          {/* Left column (40% width) - 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            {/* Top image */}
            <div
              onClick={() => onOpenProject(project)}
              className="relative w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 cursor-pointer group"
            >
              <Image
                src={project.images.col1Top}
                alt={`${project.title} Video Frame 1`}
                fill
                className="object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
            </div>

            {/* Bottom image */}
            <div
              onClick={() => onOpenProject(project)}
              className="relative w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 cursor-pointer group"
            >
              <Image
                src={project.images.col1Bottom}
                alt={`${project.title} Video Frame 2`}
                fill
                className="object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right column (60% width) - 1 tall image */}
          <div
            onClick={() => onOpenProject(project)}
            className="w-full md:w-[60%] relative min-h-[300px] md:min-h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 cursor-pointer group"
          >
            <Image
              src={project.images.col2}
              alt={`${project.title} Main Video Frame`}
              fill
              className="object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectData) => void;
}

export default function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'real-estate' | 'sports' | 'wedding'>('all');

  const filteredWorks =
    activeCategory === 'all'
      ? DRIVE_WORKS
      : DRIVE_WORKS.filter((item) => item.category === activeCategory);

  const openDriveWork = (work: DriveWorkItem) => {
    onOpenProject({
      id: work.id,
      number: work.tag,
      title: work.title,
      category: work.folder,
      client: work.tag,
      driveFileId: work.fileId,
      aspectRatio: work.aspectRatio,
      description: `Official ${work.type} produced by Milad Maghsoudi from the ${work.folder} collection. Streamed in native ${work.aspectRatio} format (${work.resolution}).`,
      images: {
        col1Top: work.cover,
        col1Bottom: work.cover,
        col2: work.cover,
      },
    });
  };

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-32 px-5 sm:px-8 md:px-10 z-20 select-none"
    >
      {/* Heading: "Projects" */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight font-heading">
          Projects
        </h2>
      </FadeIn>

      {/* 3 Sticky-stacking project cards */}
      <div className="w-full flex flex-col mb-28">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={FEATURED_PROJECTS.length}
            onOpenProject={onOpenProject}
          />
        ))}
      </div>

      {/* Drive Portfolio Works Collection */}
      <div id="video-works" className="max-w-7xl mx-auto mt-20 pt-16 border-t border-white/10 scroll-mt-24">
        <FadeIn delay={0.1} y={20} className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#BBCCD7] font-body">
            Google Drive Portfolio Vault
          </span>
          <h3 className="text-3xl sm:text-5xl font-black uppercase text-white mt-1 font-heading">
            All Video Works
          </h3>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto mt-2 font-body font-light">
            Real video reels and productions from my Google Drive archive. Each preview photo is rendered in its exact native video dimensions and aspect ratio (9:16 vertical reels & 16:9 cinema).
          </p>
        </FadeIn>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Works (16)' },
            { id: 'ai', label: 'AI Real Estate (9:16)' },
            { id: 'real-estate', label: 'Dubai Real Estate (9:16)' },
            { id: 'sports', label: 'Sports & Commercials (9:16)' },
            { id: 'wedding', label: 'Wedding Cinema (16:9)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#D7E2EA] text-[#0C0C0C] shadow-lg shadow-white/10'
                  : 'bg-white/5 text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid layout: Displays videos in their exact native size and aspect ratios */}
        <div
          className={
            activeCategory === 'wedding'
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
              : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
          }
        >
          {filteredWorks.map((work) => {
            const isVertical = work.aspectRatio === '9/16';
            return (
              <div
                key={work.id}
                onClick={() => openDriveWork(work)}
                className="break-inside-avoid group relative rounded-3xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Real Video Frame Preview in EXACT Native Video Aspect Ratio and Pixel Proportion */}
                <div
                  className="relative w-full rounded-2xl overflow-hidden mb-4 bg-neutral-900 border border-white/10 group-hover:border-white/30 transition-all shadow-xl"
                  style={{ aspectRatio: `${work.width} / ${work.height}` }}
                >
                  <Image
                    src={work.cover}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    priority={work.id === 'work-azizi-venice' || work.id === 'work-binghatti-cullinan'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none" />
                  
                  {/* Play badge on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-2xl scale-95 group-hover:scale-100 transition-transform border border-white/30">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Exact Aspect Ratio Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white font-medium text-[10px] sm:text-[11px] tracking-wider flex items-center gap-1.5 border border-white/15">
                    <span className={`w-1.5 h-1.5 rounded-full ${isVertical ? 'bg-purple-400' : 'bg-cyan-400'}`} />
                    <span className="font-mono">{isVertical ? '9:16 Reel' : '16:9 Cinema'}</span>
                  </div>

                  {/* Exact Video Resolution & Pixel Dimension Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#D7E2EA] font-medium text-[10px] tracking-wider font-mono border border-white/15">
                    {work.width}×{work.height}
                  </div>
                </div>

                <div className="px-1">
                  <div className="flex items-center justify-between text-xs text-[#D7E2EA]/60 uppercase tracking-wider mb-1 font-body">
                    <span>{work.folder}</span>
                    <span className="font-mono text-[10px] text-purple-300/80">{work.resolution}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold uppercase text-white group-hover:text-purple-300 transition-colors font-display leading-snug">
                    {work.title}
                  </h4>
                  <p className="text-xs text-[#D7E2EA]/50 mt-1 uppercase font-light font-body">
                    {work.type} · Master Cut
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10 font-body px-1">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA] font-semibold group-hover:translate-x-1 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current text-purple-400" />
                    <span>Watch Video ({work.aspectRatio})</span>
                  </span>
                  <span className="text-[11px] text-white/40 group-hover:text-white transition-colors">
                    Drive ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Google Drive link button */}
        <div className="mt-14 text-center">
          <a
            href="https://drive.google.com/drive/folders/1k1JfMh-jmO_svnMlotdorxNOGJlMSZ2Q?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-[#D7E2EA] bg-white/[0.04] text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] font-semibold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Open Complete Google Drive Vault</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
