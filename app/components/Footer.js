import Link from "next/link";
import React from "react";
import ChessLogo from "../icons/chess-logo";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const email = "iendaline@yahoo.com";
  return (
    <footer className="bg-black text-white">
      <div className="flex xl:w-[1400px] mx-auto py-40">
        <div className="space-y-10">
          <Link href="/" className="flex items-center">
            <p>
              <ChessLogo />
            </p>
            <div>
              <p className="text-lg">Check</p>
              <p className="text-2xl">MATE</p>
            </div>
          </Link>
          <p className="text-xl">
            2099 Walnut, <br /> Hill Ln undefined Lafayette, <br /> California
            55262
          </p>
          <div className="flex items-center font-extrabold text-2xl pt-3">
            <p>
              <FaPhoneVolume />
            </p>
            <p> +2348756453907</p>
          </div>
          <Link
            href={`mailto:${email}`}
            className="text-gray-400 hover:text-gray-50 hover:underline">
            {email}
          </Link>
        </div>
        <div className="space-y-10 ml-[12rem]">
          <h1 className="text-5xl font-extrabold">
            We&apos;re ready to share our <br /> advice and experience
          </h1>
          <p>
            Review the training program and sign up for a trial <br /> session.
            Prices listed on the site are not final.
          </p>
          <Link
            href="/contact"
            className="font-bold text-lg flex items-center hover:text-gray-400 uppercase">
            Contact Us Now
            <p className="pl-2">
              <HiOutlineArrowDownRight />
            </p>
          </Link>
          <div className="flex justify-between">
            <div className="space-y-3">
              <p>Zemez ©. All rights reserved.</p>
              <p className="text-gray-400">
                The use of information is possible only with the <br />
                permission of the copyright holder.
              </p>
            </div>
            <div className="flex space-x-10 text-2xl items-center ml-10 ">
              <p className="rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer p-3 flex items-center ">
                <TfiFacebook />
              </p>
              <p className="rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer p-3 flex items-center ">
                <AiFillInstagram />
              </p>
              <p className="rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer p-3 flex items-center ">
                <FaYoutube />
              </p>
              <p className="rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer p-3 flex items-center ">
                <FaXTwitter />
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-400">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
