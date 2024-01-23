import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JournalDetails() {
  return (
    <div className="bg-white text-black w-full ">
      <div className=" flex flex-col  max-w-[800px] mx-auto gap-10">
        <div>
          <h1 className="font-bold text-3xl">
            Reyansh Bhansal - champion of the week
          </h1>
          <div className="text-gray-400 flex items-center space-x-2">
            <p>By</p>
            <Link href="/journal">admin</Link>
            <p>In</p>
            <Link href="/journal">journal</Link>
            <p id="comments"> 0 Comments(s)</p>
          </div>
          <Image
            src="/images/journal1.webp"
            alt=""
            width={600}
            height={600}></Image>
          <h1>What is more important - talent or perseverance?</h1>
          <p>
            Reyansh Bhansal won the World Junior Championship in the under-20
            age category, which ends in India. In 2018, he became a grandmaster,
            and the next year he won silver medals of the youth world
            championship and the championship of India. Later there was a series
            of other successful youth tournaments. A very valuable victory for a
            novice athlete was the victory at the world championship in Goa in
            2022 in the category of rivals under 20 years old. It coincided with
            the entire family moving to India from America. Then obtaining the
            title became a convincing factor in the process of choosing the
            profession of a chess player.
          </p>
          <ol>
            <li>
              In the spring, he took first place during the GRENKE Chess Classic
              super tournament.
            </li>
            <li>In February 2023, he moved to the US Chess Federation</li>
          </ol>
          <p>
            During his career, Reyansh Bhansal took many first places in the
            largest tournaments: Bilbao, Linares, Vein an Zee, Tal Memorial in
            Moscow.
          </p>
          <h1 className="font-bold">01. Style and tactics of the game</h1>
          <p>
            Reyansh Bhansa has a bright memorable style in the game. He is a
            rare peculiar chess player with exceptional power in double-edged
            positions. Among other things, this allows him to brilliantly play
            blitz chess. At the same time, he attaches great importance to
            psychological factors. Even sometimes, by his own admission, he
            bends his stick, embarking on unreasonable adventures.
          </p>
          <h1 className="font-bold">02. Best parties</h1>
          <p>
            At the 38th Chess Olympics, Reyansh Bhansa defeats a strong Swedish
            grandmaster in French defense, sacrificing one figure after another.
            A beautiful and unexpected combination in the game of Caruana –
            Bhansa at the super tournament in Dortmund completes the fight, and
            the ex-FIDE champion gets a mat.
          </p>

          <Image
            src="/images/journal1.webp"
            alt=""
            width={600}
            height={600}></Image>
        </div>
        <h1 className="font-bold text-3xl">Game strategy - life strategy</h1>
        <p>
          The stories and fates of famous chess players are not only an
          opportunity to touch the history of chess, but also to understand
          their specifics. Here you can get acquainted with their achievements
          and the most outstanding parties.
        </p>
        <div>
          <h1 className="font-bold">Leave a Reply</h1>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form action="">
            <Textarea
              placeholder="Comments *"
              disableAnimation
              disableAutosize
              classNames={{
                base: "max-w-4xl",
                input: "resize-y min-h-[40px]",
              }}
              style={{
                background: "white",
                border: "1px solid gray",
                outline: "none",
                borderRadius: "rounded",
                padding: "2px",
              }}
            />

            <Input
              type="text"
              placeholder="Name*"
              className="max-w-4xl space-x-2"
              style={{
                background: "white",
                border: "1px solid gray",
                outline: "none",
                borderRadius: "rounded",
                padding: "4px",
              }}
            />

            <Input
              type="email"
              placeholder="Email*"
              className="max-w-4xl space-x-2"
              style={{
                background: "white",
                border: "1px solid gray",
                outline: "none",
                borderRadius: "rounded",
                padding: "4px",
              }}
            />

            <Input
              type="text"
              placeholder="Website*"
              className="max-w-4xl space-x-2"
              radius="lg"
              style={{
                background: "white",
                border: "1px solid gray",
                outline: "none",
                borderRadius: "rounded",
                padding: "4px",
              }}
            />
            <div className="flex items-center">
              <input type="checkbox" className="bg-white" />
              <p>
                Send my name,email, and website in this browser for the next
                time l comment
              </p>
            </div>

            <Button
              radius="md"
              className="w-full uppercase text-sm my-10 outline-none border-2 rounded-sm bg-black text-white p-2">
              Submit comment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
