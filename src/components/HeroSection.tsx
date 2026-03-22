'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-10"
    >
      {/* Text + Photo composition */}
      <div className="relative w-full">

        {/* I'M A */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-0 text-[13vw] md:text-[14vw] font-black outfit tracking-tighter leading-[0.85] text-[#2d2d2d] select-none"
        >
          I&apos;M A
        </motion.p>

        {/* FULLSTACK — photo overlaps this line */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-0 text-[13vw] md:text-[14vw] font-black outfit tracking-tighter leading-[0.85] text-[#2d2d2d] select-none"
        >
          FULLSTACK
        </motion.p>

        {/* DEVELOPER — in front of photo */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-[13vw] md:text-[14vw] font-black outfit tracking-tighter leading-[0.85] text-[#2d2d2d] select-none"
        >
          <span className="text-[#E8895A]">DEVELOPER.</span>
        </motion.h1>

        {/* Photo — spans full height of text block, centered-right */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-y-0 left-1/2 -translate-x-1/3 w-[28vw] md:w-[24vw] z-10 pointer-events-none"
        >
          <Image
            src="/profile5.png"
            alt="Naufal Firman Dhani"
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
        </motion.div>
      </div>

      {/* Bottom meta bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex items-center justify-between mt-10 border-t border-[#2d2d2d]/10 pt-6"
      >
        {/* Availability badge */}
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#2d2d2d]/40">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8895A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8895A]" />
          </span>
          Tersedia untuk Proyek Baru
        </div>

        {/* Name / role — center */}
        <p className="hidden md:block text-[11px] text-[#2d2d2d]/25 font-light tracking-[0.25em] uppercase">
          Naufal Firman Dhani &mdash; Fullstack Developer
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {[
            { icon: <FaGithub size={17} />, link: 'https://github.com/bonnnchannn', label: 'Github' },
            { icon: <FaLinkedin size={17} />, link: 'https://www.linkedin.com/in/naufal-firman-dhani-66967b28b/', label: 'LinkedIn' },
            { icon: <FaEnvelope size={17} />, link: 'mailto:opang16012005@gmail.com', label: 'Email' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              aria-label={s.label}
              className="text-[#2d2d2d]/30 hover:text-[#E8895A] transition-colors duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
