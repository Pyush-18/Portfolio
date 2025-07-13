"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProjectCard from "@/app/items/ProjectCard/page";
import { projects } from "@/lib/constant";
import { ProData } from "@/types/project";

const getProjectData = (id: string) => {
  const matchedProject = projects?.filter(
    (project) => project?.id === id
  );
  return matchedProject;
};



function ProjectDetail() {
  const [data, setData] = useState<ProData | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const result = getProjectData(id);
    if (result && result?.length > 0) {     
      setData(result[0]);
    }
  }, [id]);
  return (
    <div className="h-[calc(100vh-80px)] mt-36 md:mt-10 lg:mt-16 flex items-center justify-center w-full">
      {
        data && <ProjectCard data={data} />
      }
    </div>
  );
}

export default ProjectDetail;
