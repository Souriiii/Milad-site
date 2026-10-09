import type {Metadata} from 'next';
import {Kanit, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-kanit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Milad Maghsoudi -- Videographer & AI Creator',
  description: 'Portfolio of Milad Maghsoudi, a Dubai-based Videographer, Video Editor, and AI Creator with 7+ years of experience in Premiere Pro, After Effects, and cinematic storytelling.',
  openGraph: {
    title: 'Milad Maghsoudi -- Videographer & AI Creator',
    description: 'Portfolio of Milad Maghsoudi, a Dubai-based Videographer, Video Editor, and AI Creator with 7+ years of experience in Premiere Pro, After Effects, and cinematic storytelling.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milad Maghsoudi -- Videographer & AI Creator',
    description: 'Portfolio of Milad Maghsoudi, a Dubai-based Videographer, Video Editor, and AI Creator with 7+ years of experience in Premiere Pro, After Effects, and cinematic storytelling.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${kanit.variable} ${jakarta.variable}`}>
      <body className={`${jakarta.className} bg-[#0C0C0C] text-[#D7E2EA] antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
