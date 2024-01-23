import React from "react";

export default function Testimonials() {
  return (
    <>
      <div className="bg-white text-black w-full h-screen">
        <div className="max-w-[1200px] mx-auto">
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
        {/* <div>
          <h2>Center Mode</h2>
          <CountUp start={0} end={100} duration={2} />
        </div> */}
      </div>
    </>
  );
}
