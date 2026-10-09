'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  client?: string;
  location?: string;
  description?: string;
  tools?: string[];
  driveFileId?: string;
  driveFolderId?: string;
  driveLink?: string;
  aspectRatio?: '9/16' | '16/9';
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const previewUrl = project.driveFileId
    ? `https://drive.google.com/file/d/${project.driveFileId}/preview`
    : null;

  const directDriveUrl =
    project.driveLink ||
    (project.driveFileId
      ? `https://drive.google.com/file/d/${project.driveFileId}/view?usp=sharing`
      : 'https://drive.google.com/drive/folders/1qzSqwPhUFSvKmtNHKcFK6VVCZD34Sl9w?usp=drive_link');

  const isVertical = project.aspectRatio === '9/16';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full ${
            isVertical ? 'max-w-2xl' : 'max-w-4xl'
          } max-h-[94vh] overflow-y-auto rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA]`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
            aria-label="Close project preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#BBCCD7] mb-2 font-body">
              <span>{project.number}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.client || 'Milad Maghsoudi Production'}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight font-display">
                {project.title}
              </h2>
              <a
                href={directDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-white bg-white/5 hover:bg-white/10 text-xs uppercase tracking-wider font-semibold transition-all shrink-0 w-fit"
              >
                <span>Open in Drive</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-3 text-sm sm:text-base text-[#D7E2EA]/80 max-w-2xl font-light leading-relaxed font-body">
              {project.description}
            </p>
          </div>

          {/* Video Player or Gallery - respects exact video aspect ratio */}
          {previewUrl ? (
            <div
              className={`mb-8 rounded-3xl overflow-hidden border border-white/15 bg-black relative shadow-2xl ${
                isVertical
                  ? 'aspect-[9/16] w-full max-w-[360px] sm:max-w-[390px] mx-auto'
                  : 'aspect-video w-full max-w-4xl mx-auto'
              }`}
            >
              <iframe
                src={previewUrl}
                title={`${project.title} Video Preview`}
                className="w-full h-full border-0 rounded-3xl"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
              {/* Left 2 images */}
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="relative h-60 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src={project.images.col1Top}
                    alt={`${project.title} Visual 1`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src={project.images.col1Bottom}
                    alt={`${project.title} Visual 2`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Right main tall render */}
              <div className="md:col-span-7 relative min-h-[340px] md:min-h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src={project.images.col2}
                  alt={`${project.title} Main Visual`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {/* Production Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 text-xs font-body">
            <div>
              <div className="text-[#D7E2EA]/50 uppercase tracking-wider font-light">Format</div>
              <div className="text-white font-medium mt-1">
                {isVertical ? '9:16 Vertical Reel' : '16:9 Cinematic Video'}
              </div>
            </div>
            <div>
              <div className="text-[#D7E2EA]/50 uppercase tracking-wider font-light">Tools</div>
              <div className="text-white font-medium mt-1">Premiere Pro · After Effects</div>
            </div>
            <div>
              <div className="text-[#D7E2EA]/50 uppercase tracking-wider font-light">Workflow</div>
              <div className="text-white font-medium mt-1">Color Grade · 4K Master</div>
            </div>
            <div>
              <div className="text-[#D7E2EA]/50 uppercase tracking-wider font-light">Location</div>
              <div className="text-emerald-400 font-medium mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {project.location || 'Dubai, UAE'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
