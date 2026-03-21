'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, SkipBack, SkipForward, Music } from 'lucide-react';
import Image from 'next/image';

interface MusicPlayerProps {
    isOpen: boolean;
    onClose: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isOpen, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (!isOpen) {
            audioRef.current?.pause();
            setIsPlaying(false);
        } else {
            // Auto play when opened
            audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9, rotateX: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-6 right-6 z-[200] w-[320px] bg-[#FFFBF1]/80 backdrop-blur-2xl border border-[#2d2d2d]/10 rounded-[2rem] shadow-[0_30px_60px_rgba(45,45,45,0.15)] p-5 overflow-hidden"
                    style={{ perspective: 1000 }}
                >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8895A]/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2d2d2d]/5 hover:bg-[#2d2d2d]/10 text-[#2d2d2d]/60 hover:text-[#2d2d2d] transition-colors z-[100] cursor-pointer"
                    >
                        <X size={16} />
                    </button>

                    <div className="flex gap-4 items-center">
                        {/* Rotating Vinyl Cover Art */}
                        <div className="relative w-[84px] h-[84px] flex-shrink-0">
                            <motion.div
                                className="relative w-full h-full rounded-full overflow-hidden shadow-xl z-10 border-4 border-black bg-[#2d2d2d] flex items-center justify-center"
                                animate={{ rotate: isPlaying ? 360 : 0 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            >
                                <Image
                                    src="/iniabadi.jpg"
                                    alt="Album Art"
                                    fill
                                    className="object-cover"
                                />
                                {/* Vinyl Center Hole */}
                                <div className="absolute w-[20px] h-[20px] rounded-full bg-[#FFFBF1] border-2 border-zinc-800 shadow-inner z-20" />
                            </motion.div>
                        </div>

                        {/* Title & Artist */}
                        <div className="flex-1 min-w-0 pr-4 z-10">
                            <div className="flex items-center gap-1.5 mb-1 text-[10px] font-black uppercase tracking-widest text-[#E8895A]">
                                <Music size={10} />
                                Now Playing
                            </div>
                            <h4 className="font-black text-lg text-[#2d2d2d] truncate leading-tight outfit">Ini Abadi</h4>
                            <p className="text-[#2d2d2d]/50 text-xs font-semibold truncate uppercase tracking-widest">Perunggu</p>

                            {/* Audio Wave Animation */}
                            <div className="mt-3 flex items-end gap-1 h-3">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-[#2d2d2d]/30 rounded-full origin-bottom"
                                        animate={isPlaying ? { height: ["20%", "100%", "30%", "80%", "20%"] } : { height: "20%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                    />
                                ))}
                                <div className="flex-1" />
                                <span className="text-[9px] font-black text-[#2d2d2d]/30">4:03</span>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="mt-5 flex items-center justify-center gap-6 z-10 relative">
                        <button className="text-[#2d2d2d]/40 hover:text-[#2d2d2d] transition-colors">
                            <SkipBack size={20} fill="currentColor" />
                        </button>
                        <button
                            onClick={togglePlay}
                            className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2d2d2d] text-[#FFFBF1] hover:bg-[#E8895A] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(45,45,45,0.2)]"
                        >
                            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                        </button>
                        <button className="text-[#2d2d2d]/40 hover:text-[#2d2d2d] transition-colors">
                            <SkipForward size={20} fill="currentColor" />
                        </button>
                    </div>

                    {/* Audio element - royalty free music loop */}
                    <audio ref={audioRef} src="/Perunggu - Ini Abadi _ Lirik Lagu.mp3" loop />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default MusicPlayer;
