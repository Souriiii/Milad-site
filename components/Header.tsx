'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-4 sm:px-8 md:px-10 ${
        isScrolled
          ? 'bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4 shadow-2xl'
          : 'bg-transparent pt-6 md:pt-8 pb-3 border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="w-full max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-7 md:gap-10 lg:gap-12 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.15rem]"
      >
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="hover:text-white hover:opacity-100 opacity-80 transition-all duration-200 cursor-pointer"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => scrollTo('services')}
          className="hover:text-white hover:opacity-100 opacity-80 transition-all duration-200 cursor-pointer"
        >
          Services
        </button>
        <button
          type="button"
          onClick={() => scrollTo('projects')}
          className="hover:text-white hover:opacity-100 opacity-80 transition-all duration-200 cursor-pointer"
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => scrollTo('video-works')}
          className="hover:text-white hover:opacity-100 opacity-80 transition-all duration-200 cursor-pointer"
        >
          Works
        </button>
        <button
          type="button"
          onClick={onOpenContact}
          className="hover:text-white hover:opacity-100 opacity-80 transition-all duration-200 cursor-pointer"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
