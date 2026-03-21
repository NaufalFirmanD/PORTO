"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs));
}

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0;
      const direction = current - previous;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto z-[100] flex items-center justify-center",
          className
        )}
      >
        <div className="flex items-center gap-2 md:gap-4 px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-[#2d2d2d]/[0.12] bg-[#FFFBF1]/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(45,45,45,0.08)] mt-2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-sm md:text-base font-semibold text-[#2d2d2d]/70 hover:text-[#2d2d2d] transition-colors duration-200 group"
              )}
            >
              {item.icon && (
                <span className="text-[#2d2d2d]/50 group-hover:text-[#E8895A] transition-colors [&>svg]:w-4 [&>svg]:h-4">
                  {item.icon}
                </span>
              )}
              <span>{item.name}</span>
            </a>
          ))}

          {/* Separator */}
          <div className="w-px h-5 bg-[#2d2d2d]/15 mx-2 md:mx-4" />

          {/* CTA */}
          <a
            href="#contact"
            className="px-6 py-2 md:px-8 md:py-2.5 rounded-full border border-[#2d2d2d]/20 text-[#2d2d2d] text-sm md:text-base font-bold hover:bg-[#E8895A] hover:text-[#FFFBF1] hover:border-transparent transition-all duration-200"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
