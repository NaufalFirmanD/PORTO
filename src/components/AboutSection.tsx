'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMysql
} from 'react-icons/si';
import { Music } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

const techs = [
    { name: 'Next.js', icon: <SiNextdotjs size={32} />, color: '#000000' },
    { name: 'React', icon: <SiReact size={32} />, color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript size={32} />, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, color: '#06B6D4' },
    { name: 'Node.js', icon: <SiNodedotjs size={32} />, color: '#339933' },
    { name: 'Express.js', icon: <SiExpress size={32} />, color: '#000000' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, color: '#4169E1' },
    { name: 'MySQL', icon: <SiMysql size={32} />, color: '#4479A1' },
];

const AboutSection: React.FC = () => {
    const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);
    const [hoveredTech, setHoveredTech] = useState<number | null>(null);

    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden flex flex-col items-center">
            {/* Background blur elements */}
            <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-[#E8895A]/10 rounded-full blur-[100px] -z-10" />

            <div className="w-full max-w-6xl px-6 md:px-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter outfit leading-tight text-[#2d2d2d]">
                            Getting to know<span className="text-[#E8895A]"> me better.</span>
                        </h2>
                        <p className="text-base md:text-lg font-light leading-relaxed text-[#2d2d2d]/70">
                            Halo! Saya Naufal Firman Dhani, seorang full-stack developer yang suka membangun aplikasi digital yang bukan cuma terlihat bagus, tapi juga berjalan dengan baik di balik layar.
                            <br /><br />
                            Saya menikmati proses menggabungkan desain antarmuka dengan logika di sisi server untuk membuat aplikasi web yang modern, cepat, dan interaktif. Mulai dari tampilan yang nyaman dipakai sampai sistem yang berjalan stabil di belakangnya, semuanya jadi bagian yang seru buat saya.
                            <br /><br />
                            Saya juga tertarik dengan perkembangan teknologi web terbaru dan AI, jadi saya selalu mencoba hal-hal baru dan terus bereksperimen di setiap proyek yang saya kerjakan.
                        </p>

                        <motion.div
                            className="w-32 h-1 bg-gradient-to-r from-[#E8895A] to-transparent mt-4 mb-6"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{ transformOrigin: 'left' }}
                        />

                        {/* Music Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            onClick={() => setIsMusicPlayerOpen(true)}
                            className="flex items-center gap-3 w-max px-6 py-3 rounded-full border border-[#2d2d2d]/10 bg-[#FFFBF1] text-[#2d2d2d] text-sm font-bold shadow-sm hover:shadow-md hover:border-[#E8895A]/30 hover:text-[#E8895A] transition-all group"
                        >
                            <div className="relative flex items-center justify-center">
                                <span className="absolute inset-0 bg-[#E8895A] rounded-full opacity-20 group-hover:animate-ping" />
                                <Music className="w-4 h-4 relative z-10" />
                            </div>
                            My Favorite Music
                        </motion.button>
                    </motion.div>

                    {/* Tech Stack Grid Cards with Floating Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                    >
                        {techs.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                whileHover={{ y: -10, scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)" }}
                                onHoverStart={() => setHoveredTech(i)}
                                onHoverEnd={() => setHoveredTech(null)}
                                className="flex flex-col items-center justify-center p-4 bg-[#FFFBF1] border border-[#2d2d2d]/10 rounded-2xl shadow-sm group hover:border-[#E8895A]/30 transition-colors duration-300"
                            >
                                <div
                                    className="mb-3"
                                    style={{
                                        color: hoveredTech === i ? tech.color : 'rgba(45,45,45,0.4)',
                                        transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    {tech.icon}
                                </div>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-[#2d2d2d]/50 group-hover:text-[#2d2d2d] transition-colors text-center">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Music Player Widget */}
            <MusicPlayer
                isOpen={isMusicPlayerOpen}
                onClose={() => setIsMusicPlayerOpen(false)}
            />
        </section>
    );
};

export default AboutSection;
