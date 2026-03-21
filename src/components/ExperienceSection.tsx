'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    type: 'Internship',
    title: "Fullstack Developer",
    company: "PT Jawa Pos Media Televisi",
    date: "Aug 2025 - Dec 2025",
    description: "Workshop intensif tentang implementasi AI/ML dalam pengembangan web modern dan cloud ecosystem.",
    image: "/logo-jtv-rek.png",
    tags: ["GDG", "AI", "Cloud"]
  },
  {
    type: 'Internship',
    title: "Mobile Developer",
    company: "PT Meda Technology",
    date: "Jan 2026 - Present",
    description: "Pendalaman fundamental JavaScript, ES6+, serta konsep asinkronus dalam pengembangan aplikasi.",
    image: "/meda.jpg",
    tags: ["JS", "ES6", "Basis"]
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 md:px-12 mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter outfit leading-tight text-[#2d2d2d]">
            career <span className="text-[#E8895A]">path.</span>
          </h2>
          <p className="text-muted text-sm md:text-lg max-w-2xl font-light leading-relaxed">
            Eksplorasi saya dalam teknologi melalui pelatihan intensif dan kontribusi aktif di komunitas pengembang.
          </p>
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline lineColor="#E8895A40">
          {experiences.map((exp, i) => (
            <VerticalTimelineElement
              key={i}
              date={exp.date}
              dateClassName="text-[#2d2d2d]/40 font-black text-xs uppercase tracking-widest outfit"
              icon={
                <div className="w-full h-full rounded-full overflow-hidden p-1">
                  <div className="w-full h-full relative rounded-full overflow-hidden">
                    <Image src={exp.image} alt={exp.title} fill className="object-cover" />
                  </div>
                </div>
              }
              iconStyle={{
                background: '#2d2d2d',
                border: '3px solid #E8895A',
                boxShadow: '0 0 0 3px #E8895A40',
              }}
              contentStyle={{
                background: '#2d2d2d',
                border: '1px solid rgba(255,251,241,0.1)',
                borderRadius: '1rem',
                boxShadow: '0 4px 24px rgba(45,45,45,0.1)',
                padding: '1.5rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid #2d2d2d',
              }}
            >
              <div className="space-y-2.5">
                <span className="text-[#E8895A] text-[9px] font-black uppercase tracking-[0.2em] bg-[#E8895A]/10 px-3 py-1 rounded-full border border-[#E8895A]/20 inline-block">
                  {exp.type}
                </span>
                <h3 className="text-lg md:text-2xl font-black text-[#FFFBF1] outfit leading-tight">
                  {exp.title}
                </h3>
                <p className="text-[#FFFBF1]/75 text-xs md:text-sm font-semibold uppercase tracking-[0.12em]">
                  {exp.company}
                </p>
                <p className="text-[#FFFBF1]/50 text-sm leading-relaxed font-light">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1.5 bg-[#FFFBF1]/8 rounded-lg text-[9px] text-[#FFFBF1]/40 font-bold uppercase tracking-wider border border-[#FFFBF1]/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>
    </section>
  );
};

export default ExperienceSection;
