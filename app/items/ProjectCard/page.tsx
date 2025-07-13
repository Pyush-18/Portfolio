import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { ProData } from "@/types/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCardProps {
  data: ProData;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  return (
    <div className="w-full max-w-6xl mx-auto bg-black text-white p-8 rounded-xl flex flex-col md:flex-row items-start gap-10 shadow-lg border border-neutral-800">
      <div className="md:w-1/2 border-r border-gray-300 bg-gradient-to-t from-zinc-500 to-transparent flex items-center justify-center w-full md:h-[500px] lg:h-[500px] rounded-lg overflow-hidden">
  
        <Carousel className="w-full max-w-sm"> 
          <CarouselContent> 
            {data?.bgPhoto?.map((pic, index) => (
              <CarouselItem 
                className="flex items-center justify-center" 
                key={index}
              >
                <Image
                  src={pic}
                  alt={data?.name}
                  width={800}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>

      <div className="md:w-1/2 w-full space-y-4">
        <h2 className="text-3xl font-bold">{data?.name}</h2>
        <p className="text-sm text-gray-400">{data?.shortInfo}</p>

        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-lg font-semibold mb-2">What Is It ?</h3>
          <p className="text-gray-300 text-md">{data?.description}</p>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {data?.techStack?.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 bg-purple-600 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link href={data?.previewUrl} target="_blank">
          <ShinyButton>Visit detail</ShinyButton>
        </Link>
      </div>
    </div>
  );
}