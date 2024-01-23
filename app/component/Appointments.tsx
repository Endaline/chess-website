import Link from "next/link";
import React from "react";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

export default function Appointments() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="max-w-[1200px] mx-auto pt-[35rem]">
          <h1 className="text-gray-400">BOOK YOUR APPOINTMENT</h1>
          <h1 className="font-bold text-4xl py-10">
            Help your child improve their <br /> strategic thinking
          </h1>
          <div className="text-gray-400 flex justify-center space-x-20 text-xl py-8">
            <div className="space-y-6">
              <p>
                We guarantee that our students will enjoy <br /> the learning
                process and progress in <br /> results!
              </p>
              <p>
                Our students come with different <br /> requests. All of them
                are personalities,
                <br /> with a different perception of the world <br /> and the
                principles of the game.
              </p>
              <div>
                <Link
                  href="/"
                  className="font-bold text-xl flex items-center hover:text-gray-400 text-white">
                  Get Study
                  <p className="pl-2">
                    <HiOutlineArrowDownRight />
                  </p>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <p>
                Our teachers adapt the methodology for <br /> each student. We
                do everything so that <br /> you get the maximum result.
              </p>
              <p>
                We are ready to spend more of our time <br /> to convey the
                necessary meanings and <br /> answer all the questions that
                arise in the <br /> process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
