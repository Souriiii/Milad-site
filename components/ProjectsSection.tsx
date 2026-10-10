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
    title: 'Emaar Beachfront & O1NE',
    category: 'Commercial Real Estate · Dubai',
    client: 'Emaar Properties & O1NE',
    location: 'Dubai Harbour & Coast',
    driveFileId: '1hJcgqVu70DJj2nfI6em0ZQfxS_vb5SPP', // Beach Front EMAAR.mp4
    aspectRatio: '9/16',
    driveLink:
      'https://drive.google.com/drive/folders/10JBuLco9Cx4qEcRPz56xDXP2fDoknhK8?usp=drive_link',
    description:
      'Flagship commercial film and luxury real estate series for Emaar Beachfront and O1NE developments. High-energy cinematography, precision pacing, and commercial color grading.',
    images: {
      col1Top: '/covers/emaar_beach.jpg',
      col1Bottom: '/covers/real_estate_o1ne.jpg',
      col2: '/covers/beach_front_emaar.jpg',
    },
  },
  {
    id: 'project-2',
    number: '02',
    title: 'Architectural Villa & Estates',
    category: 'Luxury Villa Architecture',
    client: 'Private Architectural Estates',
    location: 'Dubai, UAE',
    driveFileId: '13HIV_rkAx-X15QHkFga9Yc54WwkKM4qJ', // Villa 02.mp4
    aspectRatio: '9/16',
    driveLink:
      'https://drive.google.com/drive/folders/1mnVdTa0v3b2S8sJRm3M_46Fm4XltFUw1?usp=drive_link',
    description:
      'Ultra-luxury private villa tour and architectural cinematic showcase. Combining 4K vertical social reels and widescreen cinematic exterior tours with smooth stabilized motion.',
    images: {
      col1Top: '/covers/villa_showcase.jpg',
      col1Bottom: '/covers/villa_02.jpg',
      col2: '/covers/villa_02.jpg',
    },
  },
  {
    id: 'project-3',
    number: '03',
    title: 'F1 AI Cinema & Meraas',
    category: 'AI Cinema & Motion Narratives',
    client: 'Meraas & AI Creative Lab',
    location: 'Dubai & International',
    driveFileId: '1V4bNzNHapab1FrRN8NzA4gTw-EbuQMaP', // F1.MOV
    aspectRatio: '9/16',
    driveLink:
      'https://drive.google.com/drive/folders/1iKX-FzbTAuqwJv0BeRHRoq6QZtdUF9_k?usp=drive_link',
    description:
      'High-octane AI Formula 1 cinema concept, Meraas lifestyle commercial cuts, and creative narrative filmmaking. Mastered with dynamic audio mixing and generative motion enhancements.',
    images: {
      col1Top: '/covers/the_edit_meras.jpg',
      col1Bottom: '/covers/zombie_story_love.jpg',
      col2: '/covers/f1_ai.jpg',
    },
  },
];

export interface DriveWorkItem {
  id: string;
  title: string;
  folder: string;
  category: 'ai' | 'real-estate' | 'sports' | 'commercial' | 'explainer';
  fileId: string;
  type: string;
  tag: string;
  cover: string;
  width: number;
  height: number;
  aspectRatio: '9/16' | '16/9';
  resolution: string;
}

// All individual works from the user's Google Drive folder (1qzSqwPhUFSvKmtNHKcFK6VVCZD34Sl9w)
export const DRIVE_WORKS: DriveWorkItem[] = [
  {
    id: 'work-f1-ai',
    title: 'F1 Formula One AI Reel',
    folder: 'AI Video',
    category: 'ai',
    fileId: '1V4bNzNHapab1FrRN8NzA4gTw-EbuQMaP',
    type: '9:16 AI Cinema Reel',
    tag: 'AI Cinema',
    cover: '/covers/f1_ai.jpg',
    width: 1074,
    height: 1920,
    aspectRatio: '9/16',
    resolution: '1074×1920 (9:16)',
  },
  {
    id: 'work-the-edit-meras',
    title: 'The Edit — Meraas',
    folder: 'AI Video',
    category: 'ai',
    fileId: '1Xz1sIZ6TeeQ7rNcXvdeH937SIJTmMvsI',
    type: '9:16 Lifestyle Reel',
    tag: 'Meraas',
    cover: '/covers/the_edit_meras.jpg',
    width: 720,
    height: 1280,
    aspectRatio: '9/16',
    resolution: 'HD (720×1280)',
  },
  {
    id: 'work-zombie-story-love',
    title: 'Zombie Story Love',
    folder: 'AI Video',
    category: 'ai',
    fileId: '1L9zG5dCraWPW8hmDgOPy2ldkK2rzSend',
    type: '16:9 Cinematic Story',
    tag: 'AI Narrative',
    cover: '/covers/zombie_story_love.jpg',
    width: 1600,
    height: 900,
    aspectRatio: '16/9',
    resolution: '16:9 FHD (1920×1080)',
  },
  {
    id: 'work-beachfront-emaar',
    title: 'Beachfront Emaar Dubai',
    folder: 'Real Estate Commercial',
    category: 'real-estate',
    fileId: '1hJcgqVu70DJj2nfI6em0ZQfxS_vb5SPP',
    type: '9:16 Commercial Reel',
    tag: 'Emaar',
    cover: '/covers/beach_front_emaar.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-emaar-beach',
    title: 'Emaar Beachfront Luxury',
    folder: 'Real Estate Commercial',
    category: 'real-estate',
    fileId: '1AEOb147JlLGwvy6re9rkGNnQ2dp7Inlf',
    type: '9:16 Architectural Reel',
    tag: 'Luxury Coast',
    cover: '/covers/emaar_beach.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-real-estate-o1ne',
    title: 'Real Estate O1NE Campaign',
    folder: 'Real Estate Commercial',
    category: 'real-estate',
    fileId: '19Qz5xk6X8kP1wgADfx_aNZ3Rbr3uB_k7',
    type: '9:16 Commercial Reel',
    tag: 'O1NE',
    cover: '/covers/real_estate_o1ne.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-villa-02',
    title: 'Exclusive Villa 02 Tour',
    folder: 'Real Estate Villa',
    category: 'real-estate',
    fileId: '13HIV_rkAx-X15QHkFga9Yc54WwkKM4qJ',
    type: '4K 9:16 Villa Tour',
    tag: '4K Villa',
    cover: '/covers/villa_02.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: '4K UHD (2160×3840)',
  },
  {
    id: 'work-villa-showcase',
    title: 'Architectural Villa Showcase',
    folder: 'Real Estate Villa',
    category: 'real-estate',
    fileId: '1lQLVfnpD0R8Af7_P3j47-__gGpo8ojBg',
    type: '16:9 Architecture Film',
    tag: 'Widescreen',
    cover: '/covers/villa_showcase.jpg',
    width: 1600,
    height: 901,
    aspectRatio: '16/9',
    resolution: '3.4K Cinema (3410×1920)',
  },
  {
    id: 'work-basketball-reel',
    title: 'Basketball Energy Reel',
    folder: 'Sports & Fitness',
    category: 'sports',
    fileId: '1kZbJ-FOKvYmoninkI1nj7umKggtqx1zL',
    type: '9:16 Sports Reel',
    tag: 'Action Cut',
    cover: '/covers/basketball_reel.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-gym-fitness-reel',
    title: 'Gym & Fitness Commercial',
    folder: 'Sports & Fitness',
    category: 'sports',
    fileId: '1kTUqM6lTuIcvGs7GOUECQlHgym1KU4ZL',
    type: '9:16 Commercial Reel',
    tag: 'Fitness',
    cover: '/covers/gym_fitness_reel.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-patrick-ta-eyes',
    title: 'Patrick Ta For Eyes',
    folder: 'Beauty & Makeup',
    category: 'commercial',
    fileId: '1zxq_AsW3LmVW6JBJfHD_CZNGcyhAbYqr',
    type: '9:16 Beauty Commercial',
    tag: 'Beauty',
    cover: '/covers/patrick_ta_eyes.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-cold-symptoms',
    title: 'Cold Symptoms Explainer',
    folder: 'Healthcare & Medical',
    category: 'explainer',
    fileId: '1ozzbhnTc6qAXpKlbR_rdn718KqbkErXA',
    type: '9:16 Explainer Reel',
    tag: 'Medical',
    cover: '/covers/cold_symptoms.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-flu-vaccine',
    title: 'Flu Vaccine Awareness',
    folder: 'Healthcare & Medical',
    category: 'explainer',
    fileId: '1my4_rg_dMPuPep_AgipZpqXL3_n8XDqN',
    type: '9:16 Awareness Reel',
    tag: 'Public Health',
    cover: '/covers/flu_vaccine.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
  },
  {
    id: 'work-flu-overview',
    title: 'Flu Diagnosis & Care',
    folder: 'Healthcare & Medical',
    category: 'explainer',
    fileId: '1YqZLVDUdm-FfbKg8c_7aev5eISmS7Jv_',
    type: '9:16 Healthcare Reel',
    tag: 'Diagnosis',
    cover: '/covers/flu_overview.jpg',
    width: 1080,
    height: 1920,
    aspectRatio: '9/16',
    resolution: 'FHD (1080×1920)',
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
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'real-estate' | 'ai' | 'sports' | 'commercial' | 'explainer'
  >('all');

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
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: '-50px 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-32 px-5 sm:px-8 md:px-10 z-20 select-none shadow-2xl"
    >
      {/* Heading: "Projects" with scroll reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="w-full text-center mb-16 sm:mb-20 md:mb-28"
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-[#D7E2EA]/50 block mb-2 font-mono">
          Featured Commercial Work
        </span>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight font-heading">
          Projects
        </h2>
      </motion.div>

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
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#BBCCD7] font-body">
            Google Drive Portfolio Vault
          </span>
          <h3 className="text-3xl sm:text-5xl font-black uppercase text-white mt-1 font-heading">
            All Video Works
          </h3>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto mt-2 font-body font-light">
            Real video reels and productions from my Google Drive archive. Each preview photo is rendered in its exact native video dimensions and aspect ratio (9:16 vertical reels & 16:9 cinema).
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
        >
          {[
            { id: 'all', label: 'All Works (14)' },
            { id: 'real-estate', label: 'Real Estate & Villas (5)' },
            { id: 'ai', label: 'AI Video & Cinema (3)' },
            { id: 'sports', label: 'Sports & Fitness (2)' },
            { id: 'commercial', label: 'Commercial & Beauty (1)' },
            { id: 'explainer', label: 'Healthcare & Explainer (3)' },
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
        </motion.div>

        {/* Masonry / Grid layout: Displays videos with individual scroll reveal animations */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredWorks.map((work, index) => {
            const isVertical = work.aspectRatio === '9/16';
            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15, margin: '-30px 0px' }}
                transition={{
                  duration: 0.7,
                  delay: (index % 4) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
                    priority={work.id === 'work-f1-ai' || work.id === 'work-beachfront-emaar'}
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
              </motion.div>
            );
          })}
        </div>

        {/* Global Google Drive link button */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1qzSqwPhUFSvKmtNHKcFK6VVCZD34Sl9w?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-[#D7E2EA] bg-white/[0.04] text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] font-semibold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Open Complete Google Drive Vault</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
