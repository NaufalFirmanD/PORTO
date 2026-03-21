'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#2d2d2d] overflow-hidden"
      >
        {/* Top Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-8 md:px-14 pt-10 md:pt-14">
          {/* Left */}
          <div className="space-y-1">
            <p className="text-[#FFFBF1]/40 text-[11px] font-light leading-relaxed">
              Frontend & Fullstack Developer<br />
              React, Next.js, Tailwind
            </p>
          </div>

          {/* Center */}
          <div className="hidden md:flex flex-col items-center gap-2 text-center">
            <p className="text-[#FFFBF1]/40 text-[11px]">Tersedia untuk proyek baru</p>
            <a
              href="mailto:opang16012005@gmail.com"
              className="text-[#FFFBF1] text-[11px] font-medium underline underline-offset-4 decoration-[#E8895A]/60 hover:decoration-[#E8895A] hover:text-[#E8895A] transition-colors"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Right */}
          <div className="text-right space-y-1">
            <p className="text-[#FFFBF1]/40 text-[11px]">Surabaya, Indonesia</p>
            <p className="text-[#FFFBF1]/40 text-[11px]">{currentYear}</p>
          </div>
        </div>

        {/* Big Name */}
        <div className="px-6 md:px-10 py-6 md:py-8 overflow-hidden">
          <button onClick={scrollToTop} className="w-full text-left group">
            <h2 className="text-[13vw] md:text-[11vw] font-black outfit tracking-tighter text-[#FFFBF1] leading-[0.88] group-hover:text-[#E8895A] transition-colors duration-500">
              Naufal Firman<br />Dhani.
            </h2>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-8 md:mx-14 h-px bg-[#FFFBF1]/8" />

        {/* Bottom Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-end px-8 md:px-14 py-8 md:py-10 gap-6">
          {/* Left — contact links */}
          <div className="flex flex-col gap-2">
            <a
              href="mailto:opang16012005@gmail.com"
              className="inline-flex items-center gap-1 text-[#FFFBF1]/50 text-[11px] hover:text-[#FFFBF1] transition-colors group/link w-fit"
            >
              opang16012005@gmail.com
              <ArrowUpRight size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
            <a
              href="tel:+6289616644626"
              className="inline-flex items-center gap-1 text-[#FFFBF1]/50 text-[11px] hover:text-[#FFFBF1] transition-colors group/link w-fit"
            >
              +62 896 1664 4626
              <ArrowUpRight size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Center — copyright */}
          <div className="hidden md:block text-center">
            <p className="text-[#FFFBF1]/20 text-[10px] tracking-widest uppercase">
              © {currentYear} Naufal Firman Dhani
            </p>
          </div>

          {/* Right — socials */}
          <div className="flex items-center justify-end gap-6">
            {[
              { icon: <FaGithub size={16} />, link: 'https://github.com/bonnnchannn', label: 'GitHub' },
              { icon: <FaLinkedin size={16} />, link: 'https://www.linkedin.com/in/naufal-firman-dhani-66967b28b/', label: 'LinkedIn' },
              { icon: <FaWhatsapp size={16} />, link: 'https://wa.me/+6289616644626', label: 'WhatsApp' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                aria-label={s.label}
                className="text-[#FFFBF1]/30 hover:text-[#FFFBF1] transition-colors duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
