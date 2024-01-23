"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ChessLogo from "../icons/chess-logo";
import DownArrowIcon from "../icons/down-arrow";
import ThemeSwitch from "./ThemeSwitch";

interface NavLink {
  name: string;
  route: string;
  icon?: React.JSX.Element;
}
const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();
  const navLinks: NavLink[] = [
    {
      name: "ABOUT",
      route: "/about",
    },
    {
      name: "CONTACTS",
      route: "/contacts",
    },
    {
      name: "MEMBERSHIP",
      route: "/membership",
    },
    {
      name: "JOURNAL",
      route: "/journal",
    },
    {
      name: "FAQ",
      route: "/faq",
    },
    {
      name: "Products",
      route: "/products",
    },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 text-black z-50 ${
        scrolling ? "bg-black" : "bg-transparent text-black"
      }`}>
      <div className="max-w-[1200px] mx-auto py-4 flex items-center justify-between text-white bg-transparent">
        <Link href="/" className="flex items-center">
          <p>
            <ChessLogo />
          </p>
          <div>
            <p className="text-lg">Check</p>
            <p className="text-2xl">MATE</p>
          </div>
        </Link>
        {/* </div> */}
        <ul className="flex space-x-4 text-white items-center">
          <li className="relative group">
            <div className="flex  items-center">
              <Link
                href="/education"
                className="hover:text-gray-400 flex items-center">
                Education
                <p>
                  <MdOutlineArrowDropDown />
                </p>
              </Link>
            </div>

            {/* Dropdown content */}
            <div className="hidden group-hover:block absolute top-full left-0 bg-white py-6 pl-4 px-8  rounded-md text-xs w-[200px] space-y-2 ">
              <Link href="#" className="block text-black hover:text-gray-400">
                SCHOOL PROGRAMS
              </Link>
              <Link href="#" className="block text-black hover:text-gray-400">
                DIGITAL CLASSROOM
              </Link>
              <Link href="#" className="block text-black hover:text-gray-400">
                SCHOLARSTIC TOURNAMENTS
              </Link>
              <Link href="#" className="block text-black hover:text-gray-400">
                CHESS SUMMER CAMP
              </Link>
              <Link href="#" className="block text-black hover:text-gray-400">
                READ & WRITE CHESS
              </Link>
              <Link href="#" className="block text-black hover:text-gray-400">
                PRIVATE LESSONS
              </Link>
              <Link href="#" className="block text-black hover:text-gray-400">
                CHESS CURRICULUM
              </Link>
              <Link href="#" className="block text-black hover:text-gray-400">
                CHESS CURRICULUM
              </Link>
              <Link href="#" className="block text-black hover:text-gray-400">
                CHESS STANDARDS
              </Link>
            </div>
          </li>
          {navLinks.map((item, index) => {
            const isActive = pathname.startsWith(item.route);
            return (
              <div
                key={index}
                className={
                  isActive
                    ? "border-b-2  text-gray-400  border-gray-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] "
                    : "border-b-2 border-transparent hover:text-gray-400"
                }>
                <Link as={item.route} href={item.route}>
                  <div
                    className={
                      " py-2.5 pl-4 flex items-center flex-row gap-3 text-sm " +
                      (isActive ? " rounded-sm" : "")
                    }>
                    {item.name}
                  </div>
                </Link>
              </div>
            );
          })}
          <ThemeSwitch />
          <div className="border outline-1 border-solid bg-white text-black hover:bg-black hover:text-white py-3 px-6 duration-300 ease-in ">
            <Link href="#"> Get Study</Link>
          </div>
        </ul>
      </div>
      {/* <div className="flex items-center"> */}
    </nav>
  );
};
export default Navbar;
