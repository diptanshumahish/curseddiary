import React from "react";
import Image from "next/image";

export default function RealTop() {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h2 className="text-3xl">Real Stories / Folklore</h2>
      <span className="opacity-40">
        This section contains all the real life stories- incidents which took
        place in the real world, something really &apos;Haunted and eerie&apos;
        while some may just be a hoax? Some of the stories are about places
        which has that &apos; musty thing&apos;. We have divided this list on
        the basis of countries where this &apos;thing&apos; was found.
      </span>
      <figure className="pointer-events-none">
        <Image
          src="/back/folk.webp"
          height={1280}
          width={1920}
          alt="stories page background image"
          className="w-full h-[40vh] rounded-sm object-cover border border-white border-opacity-20"
        />
        <figcaption className="caption">The truth is horrifying.</figcaption>
      </figure>
    </div>
  );
}
