"use client";

import MagneticEffect from "@/components/MagneticEffect";
import { skills } from "@/lib/constant";
import Image from "next/image";
import { motion } from "framer-motion";
function Card() {
  return (
    <section id="skills" className="w-full min-h-[calc(100vh-80px)]">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className="ml-10 lg:ml-28 mt-12 text-6xl font-bold bg-gradient-to-r from-[#C4FF00] to-zinc-300 text-transparent bg-clip-text"
      >
        Skills
        <svg
          className="absolute -z-1"
          width="150"
          height="10"
          viewBox="0 0 494 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 1.25,
              ease: "easeInOut",
            }}
            d="M0.979675 5.5082C9.1977 5.60806 17.4157 5.69959 25.6335 5.78278C99.5945 6.53151 173.55 6.60527 247.5 6.00405C321.45 5.40283 395.394 4.12664 469.333 2.17546C477.549 1.95866 485.764 1.73353 493.98 1.50007C485.762 1.40021 477.544 1.30869 469.326 1.22549C395.365 0.476757 321.409 0.402998 247.459 1.00422C173.509 1.60544 99.5648 2.88163 25.6258 4.83281C17.4104 5.04961 9.19499 5.27474 0.979675 5.5082Z"
            stroke="#F60502"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6 justify-center mt-8 px-4 sm:px-8 md:px-14 lg:px-28">
        {skills?.map((skill, idx) => (
          <MagneticEffect key={idx}>
            <div className="w-[140px] h-[140px] aspect-auto rounded-md p-2 flex flex-col items-center justify-around gap-3 py-4 bg-zinc-900 transition-colors duration-200 hover:shadow-[inset_0_-2px_12px_rgba(163,230,53,0.5)]">
              <Image
                src={skill.src}
                alt={skill.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <h2 className="text-zinc-300 text-sm">{skill.name}</h2>
            </div>
          </MagneticEffect>
        ))}
      </div>
    </section>
  );
}

export default Card;
