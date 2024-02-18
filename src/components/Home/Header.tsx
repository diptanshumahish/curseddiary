import { staticText } from "@/constant/staticText";
import Image from "next/image";
import React from "react";
import assets from "../services/assets";

const images = [
  "/back/backhome.webp",
  "/back/backhome1.webp",
  "/back/backhome2.webp",
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const coolWords = ["spooky", "ghostly", "booo-ei"];

function getRandomNumber(maxRange: number) {
  return Math.floor(Math.random() * (maxRange + 1));
}
export default function Header() {
  const ind = getRandomNumber(2) ?? 0;
  const spk = getRandomNumber(2) ?? 0;
  const date = new Date();
  return (
    <div className="w-full relative lg:h-[60vh] h-[90vh] overflow-hidden px-[5%] pb-[2%] text-white flex-col flex justify-end">
      <div className="left-0 right-0 top-0  absolute w-full h-[60vh]">
        <Image
          unoptimized
          src={images[ind]}
          alt="home background"
          height={600}
          width={1920}
          placeholder="blur"
          blurDataURL={assets.blur_img}
          className="h-full object-cover w-full "
        />
        <div className="bg-gradient-to-b from-transparent to-theme-bg absolute inset-0  w-full" />
      </div>
      <div className="z-10 flex flex-col gap-2">
        <span className="w-fit ">WELCOME TO,</span>
        <h1 className="text-4xl  text-yellow-300 ">Cursed Diary.</h1>
        <span className="text-gray-400 ">{staticText.home1}</span>
        <span className="italic text-orange-200">
          Let&apos;s have a{" "}
          <span className="text-pink-300">{coolWords[spk]}</span> 👻{" "}
          {daysOfWeek[date.getDay()]}
        </span>
      </div>
    </div>
  );
}
