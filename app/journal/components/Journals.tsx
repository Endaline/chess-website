import ArrowRightIcon from "@/app/icons/arrow-right";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { journal } from "./constants";

export default function Journals() {
  return (
    <div>
      <div className="py-10">
        {journal.map((item, index) => (
          <div key={index} className="lg:flex lg:space-x-28">
            {/* Image Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src={item.image}
                alt={item.alt}
                width={600}
                height={600}
                className="w-full"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 space-y-10">
              <Link
                href={`blog/${item.name}`}
                className="font-bold text-3xl hover:text-gray-400">
                {item.name}
              </Link>
              <p className="text-gray-400">{item.date}</p>
              <p className="font-[400]">{item.description}</p>
              <div className="space-x-2">
                <Link
                  href="#"
                  className="my-20 flex items-center text-xl font-bold hover:text-gray-400">
                  {item.read}
                  <p>
                    <ArrowRightIcon className="pl-2" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
