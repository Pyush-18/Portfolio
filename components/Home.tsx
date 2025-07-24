"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Contact2, ProjectorIcon } from "lucide-react";
import { motion, MotionValue, useTransform } from "framer-motion";

function Home({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      id="home"
      style={{ scale, rotate }}
      className="min-h-[calc(100vh-80px)] w-full flex items-center justify-center "
    >
      <div className="relative z-1 grid grid-cols-1 rounded-xl p-4">
        <div className="flex flex-col lg:flex-row gap-3 items-center ">
          <Image
            className="w-32 h-32 object-cover rounded-full"
            src="/image.png"
            width={200}
            height={200}
            alt="photo"
            priority={true}
          />
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Hey, I &apos;m{" "}
            <span className="bg-[#C4FF00] bg-clip-text text-transparent ">
              Piyush
            </span>
            <div className="inline-block">✨</div>
            <br />A{" "}
            <span className="bg-[#C4FF00] bg-clip-text text-transparent ">
              Full-Stack Developer
              <svg
                className="hidden lg:block"
                width="500"
                height="7"
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
                  d="M0.983232 4.93757C0.986281 5.31256 0.98933 5.68754 0.992378 6.06253C9.21006 6.12072 17.4276 6.16642 25.6451 6.19961C58.515 6.33239 91.3833 6.26518 124.25 5.99797C239.283 5.06274 354.314 3.85529 469.343 2.37564C477.56 2.26995 485.776 2.16287 493.992 2.0544C493.989 1.67941 493.986 1.30443 493.983 0.929438C485.766 0.954575 477.549 0.981101 469.332 1.00902C354.295 1.39982 239.259 2.06284 124.226 2.99807C91.3589 3.26528 58.4939 3.73248 25.6305 4.39967C17.4146 4.56647 9.19888 4.74577 0.983232 4.93757Z"
                  stroke="#F60502"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h1>
        </div>
        <p className="text-lg lg:text-xl my-4 max-w-[750px] mx-auto ">
          I &apos;m a <span className="font-bold ">fullstack developer</span>{" "}
          skilled at building optimized and modern web applications using the
          latest technologies.
          <br />
          Passionate about crafting seamless user experiences, I thrive at the
          intersection of creativity and functionality.
        </p>
        <div className="flex items-center gap-3">
          <motion.a whileTap={{scale: 0.9}} href="#contact">
            <Button className="w-36">
              <Contact2 className="w-7 h-7 " /> Contact
            </Button>
          </motion.a>
          <motion.a whileTap={{scale: 0.9}} href="#projects">
            <Button variant="secondary" className="w-36">
              <ProjectorIcon className="w-7 h-7 " /> View Project
            </Button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
