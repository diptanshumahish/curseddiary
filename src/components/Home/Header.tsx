import Image from "next/image";
import React from "react";
import assets from "../services/assets";
import NotionClient from "../services/notion-client";
import moment from "moment";
import { Kosugi } from "next/font/google";
import Link from "next/link";
import { ArrowBigLeft, ArrowRight } from "lucide-react";
const ks = Kosugi({ weight: ["400"], subsets: ["latin"] });

function getRandomNumber(maxRange: number) {
  return Math.floor(Math.random() * (maxRange + 1));
}
export default async function Header() {
  const ind = getRandomNumber(2) ?? 0;

  const nc = new NotionClient();
  const featuredPosts = await nc.getPosts(true, 2, null, "🇮🇳 India");
  const fc = featuredPosts.posts[1];
  const story_id = fc.title?.split(" ").join("-").toLowerCase() + "__" + fc.id;

  return (
    <div
      className={`${ks.className} w-full  relative lg:px-[10%] px-[5%] lg:pt-[20%] pt-[50%]  pb-[2%] text-white flex-col flex justify-end`}
    >
      <div className="left-0 right-0 top-0  absolute w-full h-[70vh]">
        <Image
          unoptimized
          src={fc.cover}
          alt="home background"
          height={600}
          width={1920}
          placeholder="blur"
          blurDataURL={assets.blur_img}
          className="h-full object-cover brightness-50 w-full blur-[2px] "
        />
        <div className="bg-gradient-to-b from-transparent to-theme-bg absolute inset-0 h-[72vh] w-full" />
      </div>
      {/* <span className="text-yellow-300 ">CONTENT OF THE DAY</span> */}

      <div className="z-10 flex flex-col gap-2 border border-white border-opacity-30 rounded-md">
        {/* <div>{JSON.stringify(fc)}</div> */}

        <div className="flex flex-col gap-2 ">
          <span className="lg:px-8 px-3 pt-4">CURSED DIARY SPECIALS</span>
          <h3 className="lg:text-8xl text-4xl lg:px-8 px-3 ">{fc.title}</h3>
          <span className="text-2xl lg:px-8 px-3 text-pink-300">
            {moment().format("D MMM,YYYY")}
          </span>

          <Image
            unoptimized
            src={fc.cover}
            height={400}
            width={1920}
            placeholder="blur"
            blurDataURL={assets.blur_img}
            alt="Cover"
            className="object-cover w-full object-center lg:h-[600px] h-[300px]"
          />
          <span className="lg:text-lg  lg:px-8 px-4 text-gray-400">
            A folklore from {fc.tags[0].name}
          </span>
          <span className="lg:text-2xl text-lg lg:px-8 px-4 text-yellow-200">
            {fc.desc}
          </span>
          <div className="lg:px-8 px-4 pb-4">
            <Link
              href={"/stories/" + encodeURIComponent(story_id)}
              className=" flex items-center gap-2 text-white border-b hover:border-b-yellow-200 transition-colors py-1 lg:text-2xl text-xl w-fit"
            >
              {" "}
              Read Now <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
