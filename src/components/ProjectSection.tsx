'use client';
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: "Sapu JagaD E-Commerce",
    category: "Fullstack Web",
    description: "Platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran modern, dan panel admin.",
    image: "/sapujagadpreview.png",
    tags: ["Next.js", "Tailwind", "PHP"],
    liveUrl: "#",
    repoUrl: "https://github.com/bonnnchannn"
  },
  {
    title: "OpangFlix AI",
    category: "AI / Machine Learning",
    description: "Sistem rekomendasi film cerdas dengan machine learning untuk pengalaman menonton yang personal.",
    image: "/opangflix.png",
    tags: ["Python", "Streamlit", "ML"],
    liveUrl: "https://opangflix.streamlit.app/",
    repoUrl: "https://github.com/bonnnchannn"
  },
  {
    title: "Portal JTV",
    category: "Web Portal",
    description: "Platform portal berita dan informasi digital dengan pengalaman baca yang cepat, rapi, dan responsif.",
    image: "/logo-jtv-rek.png",
    tags: ["Portal", "News", "Responsive"],
    liveUrl: "https://portaljtv.com/",
    repoUrl: "https://github.com/bonnnchannn"
  }
];

const ProjectsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="relative z-10 flex flex-col items-center">
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[140px] -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 gap-6"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter outfit leading-tight text-[#2d2d2d]">
            Best <span className="text-[#E8895A]">Project.</span>
          </h2>
          <p className="text-muted text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Kumpulan proyek terpilih yang menunjukkan kemampuan saya dalam membangun solusi digital yang modern.
          </p>
          <a
            href="https://github.com/bonnnchannn"
            target="_blank"
            className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-[#2d2d2d]/50 hover:text-[#E8895A] transition-colors group"
          >
            Semua Proyek <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Embla Carousel */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-3xl px-8">
            <div className="overflow-hidden rounded-[2rem]" ref={emblaRef}>
              <div className="flex">
                {projects.map((project, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col group px-2"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-[#2d2d2d]/10 group-hover:border-[#E8895A]/20 transition-all duration-500 shadow-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-5 left-5">
                          <span className="px-4 py-1.5 rounded-full bg-[#FFFBF1]/90 text-[10px] font-black uppercase tracking-[0.2em] text-[#E8895A]">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="py-8 px-4 flex flex-col space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, j) => (
                            <span key={j} className="text-[10px] font-black uppercase tracking-widest text-[#2d2d2d]/40">#{tag}</span>
                          ))}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black text-[#2d2d2d] outfit leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted text-sm md:text-base leading-relaxed font-light">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#2d2d2d] text-[#FFFBF1] font-black text-[11px] uppercase tracking-widest hover:bg-[#E8895A] transition-all shadow-md"
                          >
                            Demo <ExternalLink size={14} />
                          </a>
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            className="w-[52px] h-[52px] flex items-center justify-center rounded-2xl border border-[#2d2d2d]/10 text-[#2d2d2d]/40 hover:text-[#E8895A] hover:border-[#E8895A]/20 transition-all"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-[-20px] top-[30%] -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-[#FFFBF1] border border-[#2d2d2d]/10 text-[#2d2d2d] hover:bg-[#E8895A] hover:text-white hover:border-transparent transition-all shadow-md z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-[-20px] top-[30%] -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-[#FFFBF1] border border-[#2d2d2d]/10 text-[#2d2d2d] hover:bg-[#E8895A] hover:text-white hover:border-transparent transition-all shadow-md z-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
