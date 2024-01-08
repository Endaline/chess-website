"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface NavLink {
  name: string;
  route: string;
  icon?: React.JSX.Element;
}
const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    {
      name: "ABOUTS",
      route: "/abouts",
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
  ];
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-4 text-white">
        <li className="relative group">
          <div className="flex  items-center">
            <Link href="/education">Education</Link>
            <p>
              <MdOutlineArrowDropDown />
            </p>
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
      </ul>
    </nav>
  );
};
export default Navbar;
