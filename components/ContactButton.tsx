'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export default function ContactButton({
  onClick,
  className = '',
  label = 'Contact Me',
  showIcon = true,
}: ContactButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-full text-white font-semibold uppercase tracking-widest whitespace-nowrap cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-4.5 text-xs sm:text-sm md:text-base select-none overflow-hidden shrink-0 min-h-[46px] sm:min-h-[50px] md:min-h-[54px] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0 8px 30px -4px rgba(182, 0, 168, 0.45), inset 0 2px 8px rgba(255, 255, 255, 0.3), inset 4px 4px 12px #7721B1',
        outline: '2px solid rgba(255, 255, 255, 0.95)',
        outlineOffset: '-3px',
      }}
    >
      {/* Light sheen overlay */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      <span className="relative z-10 transition-transform duration-200 group-hover:-translate-x-0.5">
        {label}
      </span>

      {showIcon && (
        <ArrowUpRight
          aria-hidden="true"
          className="relative z-10 w-4 h-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white"
        />
      )}
    </button>
  );
}
