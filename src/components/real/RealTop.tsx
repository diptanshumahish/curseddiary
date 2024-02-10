import React from "react";
import Image from "next/image";

export default function RealTop() {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h2 className="text-3xl">Real Stories / Folklore</h2>
      <span className="opacity-40">
        This is the collection of all <b>real life stuff</b>, the incidents that
        took place in the real world, some really <i> &apos;Haunted&pos;</i>,
        while some maybe a hoax? Many of these are just mere urban games. While
        many others are about places that are having the &apos;thing&apos;. We
        have divided these on the basis of the{" "}
        <b> countries, where the thing is about.</b> Make sure to check them out
        :)
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
