import NavbarItem from "./NavbarItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { SiThemoviedatabase } from "react-icons/si";
import { RiTodoFill } from "react-icons/ri";
import { BsCalculator } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-t from-[#f6f7b2] to-[#a7fdf7] dark:bg-gray-600  rounded-lg text-gray-700">
      <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        <div className="flex">
          <NavbarItem title="Home" address="/" Icon={AiFillHome} />
          <NavbarItem title="IMDB" address="/imdb" Icon={SiThemoviedatabase} />
          <NavbarItem title="ToDo's" address="/todos" Icon={RiTodoFill} />
          <NavbarItem
            title="Credit Calculator"
            address="/credit"
            Icon={BsCalculator}
          />
          <NavbarItem
            title="More About Me"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
        </div>
        <div className="flex items-center space-x-5">
          <DarkModeSwitch />
          <Link href="/">
            <h2 className="text-xs sm:text-xl md:text-3xl hover:text-cyan-500 duration-300">
              <span className="font-bold bg-amber-500 py-1 px-1 rounded-lg mr-1">
                Portfolio
              </span>
              <span className="hidden sm:inline">Website</span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
