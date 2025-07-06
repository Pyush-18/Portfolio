import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link"
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
    <div className="w-full h-[80px] border-b border-gray-800 flex items-center px-40 justify-between">
      <div className="flex items-center gap-10">
        <Link href='/'>
          <h2 className="font-bold text-2xl bg-[#8667b8] cursor-pointer bg-clip-text text-transparent ">
            Piyush.dev
          </h2>
        </Link>
        {navItems?.map((item: NavItems) => (
          <div key={item?.name}>
            <Link href={`${item?.path}`} className="font-medium cursor-pointer hover:bg-gray-500 transition-all duration-300 p-3 rounded-md">
              {item?.name}
            </Link>
          </div>
        ))}
      </div>
      <ShinyButton>Theme Mode</ShinyButton>
    </div>
  );
}

export default Header;
