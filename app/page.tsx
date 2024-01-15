"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import ChessIllustrationIcon from "./icons/chess-illustration-icon";
import ChessKnightIcon from "./icons/chess-knight-icon";
import ChessKingIcon from "./icons/chess-king-icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { SampleNextArrow, SamplePrevArrow } from "./components/SampleNextArrow";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
  };
  return (
    <div>
      <div className="bg-black w-full text-white">
        <div className="w-full pt-10 xl:w-[1400px] mx-auto   ">
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

      <div className="bg-white w-full text-black ">
        <div className="xl:w-[1400px] mx-auto relative ">
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
      <div className="bg-black text-white">
        <div className="xl:w-[1400px] mx-auto pt-[35rem]">
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
      <div className="bg-white text-black w-full h-screen">
        <div className="xl:w-[1400px] mx-auto">
          <h1 className="text-gray-400">TESTIMONIALS</h1>
          <h1 className="font-bold text-5xl py-10">
            Kind words from our happy <br />
            clients
          </h1>
          <div>
            <div>
              <q>
                Thank you for organizing classes for <br /> our attentive,
                caring coach! My son is <br /> delighted with chess!.
              </q>
            </div>
          </div>
        </div>
        <div>
          <h2>Center Mode</h2>
          <CountUp start={0} end={100} duration={2} />
        </div>
        <div>
          <h2>Custom Arrows</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
