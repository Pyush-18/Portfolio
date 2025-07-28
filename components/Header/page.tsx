"use client";

import { FolderKanban, House, Menu, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "../MobileNavbar";
import { AnimatePresence, motion } from "framer-motion";
export type NavItems = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItems[] = [
  {
    name: "Home",
    path: "home",
    icon: <House />,
  },
  {
    name: "Projects",
    path: "projects",
    icon: <FolderKanban />,
  },
  {
    name: "Contact",
    path: "contact",
    icon: <User />,
  },
];

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="w-full h-[80px] sticky top-0 backdrop-blur-md z-10 flex items-center px-4  lg:px-40 justify-between">
      <div className="flex justify-between w-full items-center gap-10">
        <Link href="/#home">
          <h2 className="font-bold text-2xl bg-[#C4FF00] cursor-pointer bg-clip-text text-transparent ">
            Piyush.dev
          </h2>
        </Link>
        <div className="flex  items-center gap-4">
          {navItems?.map((item: NavItems) => (
            <div className="hidden md:flex" key={item?.name}>
              <Link href={`/#${item?.path}`}>
                <motion.div
                  whileTap={{ scale: 0.2 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="font-medium cursor-pointer hover:bg-zinc-900 transition-all duration-300 p-2 rounded-md flex items-center gap-2"
                >
                  {item?.icon}
                  <p className="tracking-wide">{item?.name}</p>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="border relative border-gray-700 outline p-2 rounded-xl block md:hidden lg:hidden hover:bg-zinc-800 duration-200 transition-all">
        <Menu onClick={() => setShowNav((prev) => !prev)} />
        <AnimatePresence>{showNav && <MobileNavbar />}</AnimatePresence>
      </div>

      
    </div>
  );
}

export default Header;
