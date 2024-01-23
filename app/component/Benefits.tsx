import React from "react";
import ChessKnightIcon from "../icons/chess-knight-icon";
import ChessIllustrationIcon from "../icons/chess-illustration-icon";
import ChessKingIcon from "../icons/chess-king-icon";

export default function Benefits() {
  return (
    <>
      <div className="bg-white w-full text-black ">
        <div className="max-w-[1200px] mx-auto relative ">
          <div className="pb-[30rem] pt-20">
            <p className=" uppercase xl:w-full text-gray-400">Our Benefits</p>
            <h1 className="text-5xl font-extrabold py-16">
              Building champions: in the <br /> classroom and the community
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10 w-full">
              <div>
                <ChessIllustrationIcon className="my-8" />
                <div className="pl-8">
                  <h1 className="font-bold"> Accomplished coaches</h1>
                  <p>
                    Our chess school will be a springboard for your child in the
                    world of high achievements.
                  </p>
                </div>
              </div>
              <div>
                <ChessKingIcon className="my-8" />
                <div className="pl-6">
                  <h1 className="font-bold">Private lessons</h1>
                  <p>
                    Individual classes with a coach of high category, departure
                    of the chess coach to your home.
                  </p>
                </div>
              </div>
              <div>
                <ChessKnightIcon className="my-8" />
                <div className="pl-10">
                  <h1 className="font-bold">Online community</h1>
                  <p>
                    Our chess school holds both internal tournaments and
                    friendly meetings with pupils of other schools and clubs,
                    constantly participates in championships.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center absolute -bottom-[36%]">
            <video
              controls
              className="w-full"
              src="/videos/chessvideo.mp4"
              autoPlay={true}
              muted={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
