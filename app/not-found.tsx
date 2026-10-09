import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#B4F481] mb-6">
        404 — Page Not Found
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 font-sans">
        Lost in Cine-space
      </h1>
      <p className="text-base sm:text-lg text-white/60 max-w-md mb-8">
        The page or project cut you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B4F481] text-black font-semibold text-sm tracking-wide transition-all hover:bg-[#a0ea67] hover:scale-105 active:scale-95 shadow-lg shadow-[#B4F481]/20"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
