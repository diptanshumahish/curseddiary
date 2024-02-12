import React from "react";
import Image from "next/image";
import { staticText } from "@/constant/staticText";

export default function StoryTop() {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h2 className="text-3xl">Curated Stories</h2>
      <span className="opacity-40">{staticText.curatedStories}</span>
      <figure className="pointer-events-none">
        <Image
          src="/back/stories.webp"
          height={1280}
          width={1920}
          alt="stories page background image"
          className="w-full h-[40vh] rounded-sm object-cover border border-white border-opacity-20"
        />
        <figcaption className="caption">
          Let&apos;s start on a journey, shall we?
        </figcaption>
      </figure>
    </div>
  );
}
