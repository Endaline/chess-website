import Image from "next/image";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import ChessIllustrationIcon from "./icons/chess-illustration-icon";
import ChessKnightIcon from "./icons/chess-knight-icon";
import ChessKingIcon from "./icons/chess-king-icon";

export default function Home() {
  return (
    <div>
      <div className="w-full pt-10 xl:w-[1200px] mx-auto ">
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
      <div className="bg-white w-full text-black py-40 ">
        <div className="xl:w-[1200px] mx-auto ">
          <p className=" uppercase xl:w-full text-gray-400">Our Benefits</p>
          <h1 className="text-5xl font-extrabold py-20">
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
                  Individual classes with a coach of high category, departure of
                  the chess coach to your home.
                </p>
              </div>
            </div>
            <div>
              <ChessKnightIcon className="my-8" />
              <div className="pl-10">
                <h1 className="font-bold">Online community</h1>
                <p>
                  Our chess school holds both internal tournaments and friendly
                  meetings with pupils of other schools and clubs, constantly
                  participates in championships.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <video
              controls
              className="w-full"
              src="/images/chessvideo.mp4"
              // type="video/mp4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
