'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin, Check, Send, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Videography & Shooting',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('miladmaghsoudi1994@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+971503910768');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-3xl border border-[#D7E2EA]/20 bg-[#0C0C0C] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden text-[#D7E2EA]"
          >
            {/* Top Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            {!submitted ? (
              <div>
                <div className="mb-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#BBCCD7]">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>Dubai, UAE · Business Bay</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                    Contact Milad
                  </h3>
                  <p className="text-[#D7E2EA]/70 text-sm mt-1 font-light">
                    Have a video shoot, post-production editing, or AI creative project? Reach out directly.
                  </p>
                </div>

                {/* Direct Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {/* Email */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-[10px] text-[#D7E2EA]/60 uppercase tracking-wider font-light">
                          Email
                        </div>
                        <div className="text-xs font-medium text-white truncate">
                          miladmaghsoudi1994@gmail.com
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider rounded-lg border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-white/10 transition-colors shrink-0 ml-2"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : 'Copy'}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="text-[10px] text-[#D7E2EA]/60 uppercase tracking-wider font-light">
                          Phone / WhatsApp
                        </div>
                        <div className="text-xs font-medium text-white truncate">
                          (+971) 50 391 0768
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider rounded-lg border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-white/10 transition-colors shrink-0 ml-2"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Google Drive Reel Link Banner */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-purple-950/40 to-transparent border border-purple-500/20 mb-5">
                  <div className="text-xs text-[#D7E2EA]/90">
                    <span className="font-semibold text-white">Full Video Portfolio</span> on Google Drive
                  </div>
                  <a
                    href="https://drive.google.com/drive/folders/1qzSqwPhUFSvKmtNHKcFK6VVCZD34Sl9w?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-white text-xs font-medium transition-colors"
                  >
                    <span>Open Drive</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1 font-medium">
                      Project Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                    >
                      <option value="Videography & Shooting">Videography & Camera Shooting</option>
                      <option value="Video Editing (Premiere / AE)">Video Editing (Premiere Pro / After Effects)</option>
                      <option value="AI Video & Visual Creation">AI Video & Generative Visual Creation</option>
                      <option value="Real Estate & Architectural Media">Real Estate & Architectural Media</option>
                      <option value="Commercial Photography">Commercial Photography</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 mb-1 font-medium">
                      Project Brief
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your video shoot, timeline, deliverables..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-white font-semibold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_25px_rgba(182,0,168,0.35)] cursor-pointer"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow:
                        '0 8px 30px -4px rgba(182, 0, 168, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.25)',
                      outline: '2px solid rgba(255, 255, 255, 0.85)',
                      outlineOffset: '-3px',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold uppercase text-white mb-2">Message Sent</h4>
                <p className="text-sm text-[#D7E2EA]/70 max-w-sm mx-auto mb-6">
                  Thanks for reaching out, {formData.name}! Milad will review your project details and get back to you shortly.
                </p>
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-white text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
