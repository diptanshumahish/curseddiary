import React from "react";
import Image from "next/image";
import { staticText } from "@/constant/staticText";
import assets from "../services/assets";

export default function StoryTop() {
  return (
    <div className="w-full relative lg:h-[60vh] h-[60vh] overflow-hidden pr-[5%] pb-[2%] text-white flex-col flex justify-end">
      <div className="left-0 right-0 top-0  absolute w-full h-[60vh]">
        <Image
          unoptimized
          src="/back/stories.webp"
          alt="home background"
          height={600}
          width={1920}
          placeholder="blur"
          blurDataURL={assets.blur_img}
          className="h-full object-cover w-full "
        />
        <div className="bg-gradient-to-b from-transparent from-30%  to-theme-bg absolute inset-0  w-full" />
        <div className="bg-gradient-to-l from-transparent from-30%  to-theme-bg absolute inset-0  w-full" />
        <div className="bg-gradient-to-r from-transparent from-30%  to-theme-bg absolute inset-0  w-full" />
      </div>
      <div className="z-10 flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-yellow-300 ">Curated Stories</h2>
        <span className="text-gray-400 ">{staticText.curatedStories}</span>
      </div>
    </div>
  );
}
