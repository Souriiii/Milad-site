'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export default function LiveProjectButton({
  onClick,
  className = '',
  label = 'Live Project',
}: LiveProjectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#D7E2EA] bg-white/[0.04] backdrop-blur-sm text-[#D7E2EA] font-semibold uppercase tracking-widest whitespace-nowrap cursor-pointer transition-all duration-300 ease-out hover:bg-[#D7E2EA] hover:text-[#0C0C0C] hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_25px_rgba(215,226,234,0.35)] px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base select-none shrink-0 min-h-[46px] sm:min-h-[50px] ${className}`}
    >
      <span className="transition-transform duration-200">
        {label}
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className="w-4 h-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </button>
  );
}
