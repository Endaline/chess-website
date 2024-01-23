import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

export default function ChessSchool() {
  return (
    <>
      <div className="bg-black w-full text-white">
        <div className="w-full pt-10 max-w-[1200px] mx-auto   ">
          <div className="flex justify-between">
            <div className="pt-40">
              <h1 className="text-9xl font-bold">Chess</h1>
              <div className=" pl-20">
                <h1 className="text-9xl font-bold ">School</h1>
                <p className="text-gray-500 leading-6 text-lg my-10">
                  Starting chess is easy! Leave your <br />
                  application and we&lsquo;ll contact you as soon <br />
                  as possible!
                </p>
                <div>
                  <Link
                    href="/"
                    className="font-bold text-xl flex items-center hover:text-gray-400">
                    Get Study
                    <p className="pl-2">
                      <HiOutlineArrowDownRight />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/home-chess.webp"
                alt="home page chesse image"
                width={800}
                height={800}></Image>
            </div>
          </div>
          <div>
            <p className="text-gray-500 leading-6 text-lg my-10">
              VISIT OUR CHESS CLUB
            </p>
            <h1>
              Building champions: in the <br /> classroom and the community
            </h1>
            <p>
              Our goal is to make chess a new trend in society. Create a useful
              <br />
              alternative to social networks, primarily for the younger
              generation.
            </p>
          </div>
          <div className="flex justify-center  space-x-20 py-20">
            <Image
              src="/images/child-chess1.webp"
              alt=""
              width={500}
              height={500}></Image>
            <div>
              <h1 className="text-gray-500 text-lg">
                We&lsquo;re changing the idea of chess. Chess is <br /> not only
                skill and victories <br />
                in competitions. This is primarily the <br /> development of the
                logic and thinking of <br /> the child.
              </h1>
              <p className="pt-14 font-bold text-lg">
                Interested in joining chess team? Call us:
              </p>
              <div className="flex items-center font-extrabold text-4xl pt-3">
                <p>
                  <FaPhoneVolume />
                </p>
                <p> +2348756453907</p>
              </div>

              <div className="pt-16 font-bold hover:text-gray-400">
                <Link href="/about" className="flex items-center">
                  MORE ABOUT
                  <p className="pl-2">
                    <HiOutlineArrowDownRight />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
