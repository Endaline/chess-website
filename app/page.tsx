/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import Benefits from "./component/Benefits";
import Testimonials from "./component/Testimonials";
import Appointments from "./component/Appointments";
import ChessSchool from "./component/ChessSchool";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen">
        {/* Video element with autoplay, muted, loop, and playsinline attributes */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline>
          {/* // src="/videos/video1.mp4" */}
          <source src="/videos/video1.mp4" type="video/mp4" />
          {/* Add additional source elements for different video formats if needed */}
        </video>

        {/* Your content on top of the video */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Real Estate Management
          </h1>
        </div>
      </div>
      <ChessSchool />
      <Benefits />
      <Appointments />
      <Testimonials />
    </div>
  );
}
