'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', agreed: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
    const inputClassName =
        'w-full bg-[#FFFBF1]/90 border border-[#2d2d2d]/10 rounded-xl px-4 py-3 text-sm font-medium text-[#2d2d2d] placeholder:text-[#9e8e7e] focus:outline-none focus:border-[#E8895A] focus:ring-4 focus:ring-[#E8895A]/15 transition-all';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agreed) {
            alert("Harap setujui Privacy Policy terlebih dahulu.");
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '', agreed: false });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-24 md:py-32 flex flex-col items-center bg-[#FFFBF1] overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -left-20 w-80 h-80 bg-[#E8895A]/10 blur-[100px] rounded-full" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 w-96 h-96 bg-[#FFB2B2]/20 blur-[110px] rounded-full" />

            <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Text & Info */}
                    <div className="flex flex-col justify-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-black text-[#000000] uppercase mb-8 tracking-tighter leading-[0.95]"
                        >
                            Contact  <span className="text-[#E8895A]">Me.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#2d2d2d]/80 font-medium leading-relaxed mb-12 max-w-md text-sm md:text-base"
                        >
                            Saya Naufal Firman Dhani, berlokasi di Indonesia. Jangan ragu untuk mendiskusikan ide proyek luar biasa, peluang kolaborasi, atau sekadar menyapa saya melalui email maupun telepon.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-7"
                        >
                            {/* Address */}
                            <div>
                                <a href="#" className="group flex items-center gap-2 text-xl font-bold text-[#000000] hover:opacity-80 transition-opacity w-max">
                                    Indonesia <ArrowRight className="w-5 h-5 text-[#E8895A] group-hover:translate-x-0.5 transition-transform" />
                                </a>
                                <p className="text-sm font-medium text-[#2d2d2d]/70 mt-2">Senin - Jumat | 09:00 - 17:00 WIB</p>
                            </div>

                            {/* Phone */}
                            <div>
                                <a href="tel:+628xxxxxxxxxx" className="group flex items-center gap-2 text-xl font-bold text-[#000000] hover:opacity-80 transition-opacity w-max">
                                    +62 812 5925 4497   <ArrowRight className="w-5 h-5 text-[#E8895A] group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>

                            {/* Email */}
                            <div>
                                <a href="mailto:opang16012005@gmail.com" className="group flex items-center gap-2 text-xl font-bold text-[#000000] hover:opacity-80 transition-opacity w-max">
                                    opang16012005@gmail.com <ArrowRight className="w-5 h-5 text-[#E8895A] group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex items-center gap-4 mt-14"
                        >
                            <a href="#" className="w-10 h-10 bg-[#E5E0D5] flex items-center justify-center hover:bg-[#E8895A] hover:text-white transition-all duration-300 text-[#2d2d2d] rounded-lg relative z-20 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                <Facebook size={18} fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#E5E0D5] flex items-center justify-center hover:bg-[#E8895A] hover:text-white transition-all duration-300 text-[#2d2d2d] rounded-lg relative z-20 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                <Instagram size={18} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/85 backdrop-blur-sm border border-[#2d2d2d]/10 rounded-2xl p-8 md:p-10 h-full flex flex-col shadow-[0_16px_45px_-24px_rgba(45,45,45,0.45)] relative z-20"
                    >
                        <h3 className="text-lg md:text-xl font-black text-[#2d2d2d] mb-8 outfit tracking-tight">Mengobrol atau isi formulir ini:</h3>

                        <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                            <div className="flex flex-col gap-5 flex-1">
                                {/* Name Input */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#2d2d2d]/60">Name</span>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className={inputClassName}
                                        placeholder="Masukkan nama"
                                    />
                                </label>

                                {/* Email Input */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#2d2d2d]/60">Email</span>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className={inputClassName}
                                        placeholder="nama@email.com"
                                    />
                                </label>

                                {/* Message Input */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#2d2d2d]/60">Describe your project</span>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className={`${inputClassName} resize-none`}
                                        placeholder="Ceritakan ide project kamu"
                                    />
                                </label>
                            </div>

                            <div className="mt-8 border-t border-[#2d2d2d]/10 pt-6">
                                <label className="flex items-start gap-2.5 text-xs text-[#2d2d2d]/70 font-medium cursor-pointer mb-6 select-none relative z-20 leading-relaxed">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreed}
                                        onChange={e => setFormData({ ...formData, agreed: e.target.checked })}
                                        className="mt-[2px] w-4 h-4 accent-[#E8895A] border border-gray-300 rounded focus:ring-0 cursor-pointer"
                                        required
                                    />
                                    <span>Dengan mengirim, Anda mengetahui <a href="#" className="hover:underline text-[#2d2d2d] font-bold">Privacy Policy</a>.</span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#E8895A] text-white font-bold text-sm hover:bg-[#d67b4e] hover:shadow-[0_10px_24px_-10px_rgba(232,137,90,0.8)] transition-all disabled:opacity-70 disabled:hover:shadow-none relative z-20"
                                >
                                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                                </button>

                                {submitStatus === 'success' && (
                                    <p className="text-[#E8895A] text-xs font-bold mt-4">Pesan berhasil dikirim!</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-500 text-xs font-bold mt-4">Terjadi kesalahan. Coba lagi.</p>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
