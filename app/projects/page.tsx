import React from "react";
import { projects } from "@/lib/constant";
import Link from "next/link";


function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 mt-12 p-6 md:px-16 lg:px-28">
  {projects?.map((project) => (
    <Link href={`/ProjectDetail/${project?.id}`}
      key={project?.id}
      className="relative max-w-full group rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-700/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer  border border-gray-700"
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
            <div
              key={techIndex}
              className="rounded-full bg-purple-700 px-4 py-1 text-sm font-medium text-white shadow-md hover:bg-purple-600 transition-colors duration-200"
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
    </Link>
  ))}
</div>
  );
}

export default Projects;
