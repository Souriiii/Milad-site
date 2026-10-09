'use client';

import React from 'react';
import { ArrowUp, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-12 py-12 text-[#D7E2EA] select-none z-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Statement */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-xl font-black uppercase tracking-tight text-white font-display">
            Milad Maghsoudi
          </span>
          <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-purple-400" />
            <span>Dubai, UAE · Business Bay</span>
            <span>·</span>
            <span>Videographer & AI Creator</span>
          </p>
        </div>

        {/* Center: Contact Pill */}
        <div className="flex items-center gap-4 text-xs font-medium text-[#D7E2EA]/80 flex-wrap justify-center">
          <a
            href="mailto:miladmaghsoudi1994@gmail.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>miladmaghsoudi1994@gmail.com</span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href="tel:+971503910768"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(+971) 50 391 0768</span>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-medium">
          <a
            href="https://drive.google.com/drive/folders/1k1JfMh-jmO_svnMlotdorxNOGJlMSZ2Q?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Drive Reel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D7E2EA]/40 uppercase tracking-widest font-light gap-2">
        <span>© 2026 Milad Maghsoudi. All rights reserved.</span>
        <span>Crafting striking and unforgettable visual narratives</span>
      </div>
    </footer>
  );
}
