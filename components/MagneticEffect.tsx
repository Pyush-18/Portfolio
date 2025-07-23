"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

function MagneticEffect({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const data = ref.current?.getBoundingClientRect();
    if(!data) return
    const { width, height, left, top }  = data
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={reset}
      ref={ref}
      animate={{ x, y }}
      transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
      className=""
    >
      {children}
    </motion.div>
  );
}

export default MagneticEffect;
