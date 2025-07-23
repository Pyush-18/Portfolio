"use client";
import { projects } from "@/lib/constant";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Modal from "./Modal";
import { ProData } from "@/types/project";

const COLORS = ["#0D1117", "#161B22", "#1F2937", "#2A313C"];

function Project() {
  const [openModal, setOpenModal] = useState(false);
  const [openProject, setOpenProject] = useState<ProData | null>(null);
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const modalhandler = (project: ProData) => {
    setOpenProject(project);
    setOpenModal((prev) => !prev);
  };

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      id="projects"
      className="w-full min-h-[calc(100vh-80px)] relative top-10  mt-10 z-2 "
    >
      <div
        onClick={() => setOpenModal(false)}
        className={`flex justify-center items-center w-full min-h-screen ${openModal ? "bg-black/70" : ""} absolute z-20 ${
          openModal ? "block" : "hidden"
        }`}
      >
        <div
          className="flex items-center justify-center w-full min-h-screen p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence>
            {openModal && openProject && (
              <Modal setOpenModal={setOpenModal} openProject={openProject} />
            )}
          </AnimatePresence>
        </div>
      </div>
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
        className="lg:ml-24 mt-6 p-4 text-6xl font-bold relative bg-gradient-to-r from-[#C4FF00] to-zinc-300 text-transparent bg-clip-text "
      >
        Projects
        <svg
          className="absolute -z-1"
          width="250"
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
            d="M0.979675 5.5082C9.1977 5.60806 17.4157 5.69959 25.6335 5.78278C99.5945 6.53151 173.55 6.60527 247.5 6.00405C321.45 5.40283 395.394 4.12664 469.333 2.17546C477.549 1.95866 485.764 1.73353 493.98 1.50007C485.762 1.40021 477.544 1.30869 469.326 1.22549C395.365 0.476757 321.409 0.402998 247.459 1.00422C173.509 1.60544 99.5648 2.88163 25.6258 4.83281C17.4104 5.04961 9.19499 5.27474 0.979675 5.5082Z"
            stroke="#F60502"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </motion.h1>
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 mt-12 p-6 md:px-16 lg:px-28">
        {projects?.map((project) => (
          <div
            onClick={() => modalhandler(project)}
            key={project?.id}
            className={`relative max-w-full group rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer  border border-gray-700`}
          >
            <div className=" p-6 bg-gradient-to-t from-black to-transparent  text-white">
              <h1 className="text-3xl font-extrabold mb-2 text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                {project?.name}
              </h1>
              <p className="text-base font-light text-gray-300 mb-4 line-clamp-3">
                {project?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project?.techStack?.map((stack, techIndex) => (
                  <motion.div
                    style={{
                      border,
                      boxShadow,
                    }}
                    key={techIndex}
                    className="rounded-full px-4 py-1 text-sm font-medium text-white shadow-md"
                  >
                    {stack}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[-1]">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.div>
  );
}

export default Project;
