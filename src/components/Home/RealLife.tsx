import Image from "next/image";
import React from "react";

export default function RealLife() {
  return (
    <div className="w-full px-[5%] py-[5%] text-white flex-col flex gap-4">
      <h2 className="text-3xl">Real Life events</h2>
      <span>
        get to know about the popular known stories that have been around the
        people. Stories, rather real life incidents, chill enough to bring in
        the scare of a lifetime
      </span>
      <figure className="pointer-events-none">
        <Image
          src="/back/back2.webp"
          height={1280}
          width={1920}
          alt="cursed diary background image"
          className="w-full h-[80vh] rounded-sm object-cover border border-white border-opacity-20"
        />
        <figcaption className="caption">
          The mystical stories we all knew
        </figcaption>
      </figure>
      <span>Coming soon.</span>
    </div>
  );
}
