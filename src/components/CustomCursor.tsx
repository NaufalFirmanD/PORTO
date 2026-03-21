'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', moveMouse);
        return () => window.removeEventListener('mousemove', moveMouse);
    }, [isVisible, mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full border-2 border-[#E8895A] pointer-events-none z-[9999] hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
                opacity: isVisible ? 1 : 0,
            }}
        />
    );
};

export default CustomCursor;
