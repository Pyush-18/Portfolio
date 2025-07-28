"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems: {
  name: string;
  path: string;
}[] = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Contact",
    path: "#contact",
  },
  {
    name: "Ai Chat",
    path: "talk-with-ai",
  },
];

function MobileNavbar() {
  const fadeInStaggerAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    aniamtion: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
      <motion.div key="modal" exit={
        {
          opacity: 0,
          y: 100,
        }
    } 

        className="w-[200px] h-[250px] bg-[#C4FF00] text-black rounded-md absolute top-12 p-4 right-6">
        <div className="flex flex-col gap-2">
          {navItems?.map((item, idx) => (
            <Link
              href={`/${item?.path}`}
              key={idx}
              className="flex items-center gap-4"
            >
              <motion.p
                variants={fadeInStaggerAnimation}
                initial="initial"
                whileInView="aniamtion"
                whileTap={{
                  scale: 0.9,
                }}
                custom={idx}
                className="text-3xl font-bold"
              >
                {item?.name}
              </motion.p>
            </Link>
          ))}
        </div>
      </motion.div>
  );
}

export default MobileNavbar;
