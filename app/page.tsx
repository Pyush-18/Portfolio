"use client";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Project from "@/components/Project";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { BotMessageSquare } from "lucide-react";
import Link from "next/link";

function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <div
      ref={containerRef}
      className="w-full relative  flex flex-col space-y-10"
    >
      <Home scrollYProgress={scrollYProgress} />
      <Project />
      <Skills />
      <Contact />
      <Link href='/talk-with-ai' className="bg-[#a8e625] p-1 hover:animate-bounce duration-200 transition-all rounded-lg ml-5 fixed right-8 z-10 bottom-8">
        <BotMessageSquare className="w-8 h-8 text-black" />
      </Link>
    </div>
  );
}

export default Page;
