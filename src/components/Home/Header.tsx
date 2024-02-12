import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="w-full px-[5%] py-[5%] text-white flex-col flex gap-4">
      <h1 className="text-4xl font-bold">Cursed Diary.</h1>
      <span className="text-gray-400">
        Step into this realm of surreal adventure where fiction comes to life
        with a twist of horror and reality is a mere bystander. Greetings,
        reader. Have you stumbled upon this domain accidentally, or are you
        lured by the eerie whispers of the unknown? Join us as we navigate the
        intricate web of tales—some purely imaginative, others dipped in the
        chilling embrace of horror, and a few that blur the line between reality
        and nightmare. Beware, for these woods conceal unmarked trails that lead
        to the depths of the uncanny. Are you ready to tread the haunting path
        and uncover the secrets that lie within? Welcome to a world where the{" "}
        <b>shadows tell stories</b>, and the ordinary becomes extraordinary.
      </span>
      <figure className="pointer-events-none">
        <Image
          src="/back/back.webp"
          height={1280}
          width={1920}
          alt="cursed diary background image"
          className="w-full h-[40vh] rounded-sm object-cover border border-white border-opacity-20"
        />
        <figcaption className="caption">
          Come on buddy, the woods are calling you.
        </figcaption>
      </figure>
    </div>
  );
}
