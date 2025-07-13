import Image from "next/image";
import React from "react";
import image from "@/public/photo.png";
import { Button } from "@/components/ui/button";
import { Contact2, ProjectorIcon } from "lucide-react";
import Link from "next/link";
function Home() {
  return (
    <div className=" min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="grid grid-cols-1 rounded-xl p-4 ">
        <div className="flex flex-col lg:flex-row gap-3 items-center ">
          <Image
            className="w-32 h-32 object-cover rounded-full"
            src={image}
            alt="photo"
          />
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Hey, I m{" "}
            <span className="bg-[#8667b8] bg-clip-text text-transparent ">
              Piyush
            </span>
            <div className="inline-block">✨</div>
            <br />A{" "}
            <span className="bg-[#8667b8] bg-clip-text text-transparent ">
              Software Developer
            </span>
          </h1>
        </div>
        <p className="text-lg lg:text-xl my-4 max-w-[750px] ">
          A <span className="font-bold">fullstack developer</span> able to build
          optimized web applications using modern technologies.
          <br />
          Passionate about crafting seamless user experiences, I thrive at the
          intersection of creativity and functionality.
        </p>
        <div className="flex items-center gap-3">
          <Button className="w-36">
            <Contact2 className="w-7 h-7 " /> Contact
          </Button>
          <Link href='/projects'>
            <Button variant="secondary" className="w-36">
              <ProjectorIcon className="w-7 h-7 " /> View Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
