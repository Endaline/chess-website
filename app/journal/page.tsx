import React from "react";
import Journals from "./components/Journals";

export default function Journal() {
  return (
    <div className=" bg-white mt-10">
      <div className=" text-black w-full min-h-screen max-w-[1200px]  mx-auto">
        <h1 className="text-gray-400 text-sm py-20">JOURNAL</h1>
        <div>
          <h2 className="font-semibold text-4xl py-10">
            Read our latest articles <br /> tips & news
          </h2>
          <p className="text-xl">
            On our website you will find a huge amount of materials and lessons
            <br />
            that will help you master and improve your chess skills.
          </p>
        </div>
        <Journals />
      </div>
    </div>
  );
}
