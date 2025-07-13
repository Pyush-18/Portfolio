import { Menu, Moon } from "lucide-react";
import Link from "next/link";
type NavItems = {
  name: string;
  path: string;
};

const navItems: NavItems[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Header() {
  return (
    <div className="w-full h-[80px] sticky top-0 backdrop-blur-md z-10 flex items-center px-4  lg:px-40 justify-between">
      <div className="flex items-center gap-10">
        <Link href="/">
          <h2 className="font-bold text-2xl bg-[#8667b8] cursor-pointer bg-clip-text text-transparent ">
            Piyush.dev
          </h2>
        </Link>
        {navItems?.map((item: NavItems) => (
          <div className="hidden md:flex" key={item?.name}>
            <Link
              href={`${item?.path}`}
              className="font-medium cursor-pointer hover:bg-zinc-800 transition-all duration-300 p-2 rounded-md"
            >
              {item?.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="border border-gray-700 outline p-2 rounded-xl hover:bg-zinc-800 duration-200 transition-all"><Moon /></div>
        <div className="border border-gray-700 outline p-2 rounded-xl block md:hidden lg:hidden hover:bg-zinc-800 duration-200 transition-all">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Header;
