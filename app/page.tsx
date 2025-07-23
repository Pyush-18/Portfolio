"use client"
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Project from "@/components/Project";
import { useScroll } from "framer-motion";
import { useRef } from "react";

function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })
  return (
      <div ref={containerRef} className="w-full relative  flex flex-col space-y-10">
        <Home scrollYProgress={scrollYProgress}/>
        <Project />
        <Skills />
        <Contact />
      </div>
  );
}

export default Page;
