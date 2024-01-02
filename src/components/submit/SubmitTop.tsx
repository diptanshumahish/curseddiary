import React from "react";
import SubmitType from "./SubmitType";
import Image from "next/image";

export default function SubmitTop() {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between">
      <div className="flex flex-col gap-2 lg:w-[40%]">
        <h2 className="lg:text-6xl text-xl">Contributions & Submissions</h2>

        <span className="opacity-45">
          Hey there, hope you liked this website and are among those who want to
          contribute to us. You can can contrubite about the following type of
          things:
        </span>
        <hr className="opacity-20" />

        <div className="flex flex-col gap-3 py-4">
          <span className="opacity-50">
            STEP 1: Check whether you have the correct content
          </span>
          <SubmitType type="Your own perosnal life experiences about hauntings or any such other things" />
          <SubmitType type="Some fictional stories that you have written and want to share with others" />
          <SubmitType type="Any real life popular incidents that you have read or heard about" />
          <SubmitType type="Urban Legends or urban legend based games and other folklore" />
        </div>
      </div>
      <div className="flex gap-6 lg:w-[40%] h-full">
        <Image
          src="/submitimages/s1.webp"
          height={500}
          width={300}
          alt="Submit images"
          className="object-cover w-[50%] h-full aspect-[8/16] border border-white border-opacity-10"
        />
        <Image
          src="/submitimages/s2.webp"
          height={500}
          width={300}
          alt="Submit images"
          className="object-cover w-[50%] h-auto aspect-[8/16] border border-white border-opacity-10"
        />
        {/* <Image
          src="/submitimages/s2.webp"
          height={500}
          width={300}
          alt="Submit images"
          className="object-cover w-[33%] h-auto aspect-[9/16]"
        /> */}
      </div>
    </div>
  );
}
