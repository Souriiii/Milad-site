/**
 * Jack 3D Creator - Design System Tokens & Styles
 * Pure, high-contrast brutalist & dark-glass aesthetic.
 */

export const designSystem = {
  colors: {
    bgDark: '#0C0C0C',
    textMain: '#D7E2EA',
    textMuted: '#646973',
    silverLight: '#BBCCD7',
    borderLight: 'rgba(215, 226, 234, 0.15)',
    borderActive: 'rgba(215, 226, 234, 0.4)',
  },
  fonts: {
    display: "var(--font-kanit), 'Kanit', sans-serif",
    body: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
  },
  buttons: {
    primary:
      'relative inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest text-white transition-all duration-300 ease-out cursor-pointer overflow-hidden group select-none shadow-[0_10px_35px_-8px_rgba(147,51,234,0.45)] hover:shadow-[0_14px_45px_-6px_rgba(147,51,234,0.65)] hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'relative inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 ease-out cursor-pointer border border-[#D7E2EA]/40 hover:border-[#D7E2EA] bg-white/[0.04] hover:bg-white/[0.12] backdrop-blur-md select-none group hover:scale-[1.02] active:scale-[0.98]',
  },
} as const;
