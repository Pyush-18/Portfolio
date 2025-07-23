import { X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProData } from "@/types/project";
import { Button } from "./ui/button";

function Modal({
  openProject,
  setOpenModal,
}: {
  openProject: ProData;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div
    key="modal"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      exit={{ opacity: 0 , scale: -0.5}}
      className="w-[500px] min-h-[300px] flex flex-col gap-3 backdrop-blur-3xl border border-zinc-800 rounded-md p-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          {openProject?.name}
        </h2>
        <X
          onClick={() => setOpenModal(false)}
          className="size-8 border-2 p-1 rounded-md hover:border-lime-500 transition-colors duration-200"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Image
          width={500}
          height={500}
          src={`${openProject?.bgPhoto}`}
          alt={"project img"}
          className="object-cover rounded-md"
        />
        <p>
          {openProject?.shortInfo}
        </p>
      <Link href={`${openProject?.previewUrl}`} target="_blank"><Button className="bg-lime-500 text-black w-full hover:bg-lime-400 transition-colors duration-200">View Project</Button></Link>
      </div>
    </motion.div>
  );
}

export default Modal;
