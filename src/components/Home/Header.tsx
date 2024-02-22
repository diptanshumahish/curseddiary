import Image from "next/image";
import React from "react";
import assets from "../services/assets";
import NotionClient from "../services/notion-client";
import moment from "moment";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PostComponent from "../Post/PostComponent";

function getRandomNumber(maxRange: number) {
  return Math.floor(Math.random() * (maxRange + 1));
}
export default async function Header() {
  const ind = getRandomNumber(4) ?? 0;

  const nc = new NotionClient();
  const featuredPosts = await nc.getPosts(true, 5, null, "");
  const fc1 = featuredPosts.posts[0];
  const story_id =
    fc1.title?.split(" ").join("-").toLowerCase() + "__" + fc1.id;

  return (
    <div
      className={` w-full  relative lg:px-[10%] px-[5%] lg:pt-[15%] pt-[30%]  pb-[2%] text-white flex-col flex justify-end`}
    >
      <div className="left-0 right-0 top-0  absolute w-full h-[70vh]">
        <Image
          unoptimized
          src={fc1.cover}
          alt="home background"
          height={600}
          width={1920}
          placeholder="blur"
          blurDataURL={assets.blur_img}
          className="h-full object-cover brightness-50 w-full blur-[2px] "
        />
        <div className="bg-gradient-to-b from-transparent to-theme-bg absolute inset-0 h-[72vh] w-full" />
      </div>
      <div className="z-10 flex md:flex-row flex-col md:gap- gap-6 w-full md:justify-between">
        <div className="flex flex-col md:w-[65%] gap-4">
          <div className="flex items-center gap-4">
            <div>
              <Image
                unoptimized
                src="/assets/logo.png"
                height={42}
                width={42}
                alt="Cursed diary logo"
              />
            </div>
            <div>
              {" "}
              <h3 className="md:text-4xl text-2xl">Cursed Diary Selects</h3>
              <span className="opacity-70">Selected content just for you</span>
            </div>
          </div>
          <Image
            unoptimized
            unselectable="on"
            src={fc1.cover ?? assets.blur_img}
            alt={fc1.title}
            height={400}
            width={900}
            blurDataURL={assets.blur_img}
            placeholder="blur"
            className="w-full h-[40vh] rounded-md border border-white border-opacity-20 object-cover"
          />
          {moment(fc1.created_time).format("D MMM,YYYY")}
          <h2 className="text-5xl">{fc1.title}</h2>
          <span className="opacity-70">{fc1.desc}</span>
          <Link
            href={"/stories/" + encodeURI(story_id)}
            className="border-b flex gap-4 items-center border-white border-opacity-40 pb-2 text-lg "
          >
            Read Now <ArrowUpRight />
          </Link>
        </div>
        <div className="md:w-[30%] md:flex hidden flex-col gap-4">
          <span className="text-lg">More selected stories</span>

          {featuredPosts.posts.slice(1, 5).map((ele, idx) => {
            return (
              <Link
                href={
                  "/stories/" +
                  encodeURI(
                    ele.title?.split(" ").join("-").toLowerCase() +
                      "__" +
                      ele.id
                  )
                }
                className="relative   text-white flex  flex-col justify-end  w-full overflow-hidden"
              >
                <Image
                  src={ele.cover ?? assets.blur_img}
                  alt={ele.title}
                  height={200}
                  width={600}
                  blurDataURL={assets.blur_img}
                  placeholder="blur"
                  className="w-full inset-0 object-center h-[15vh] object-cover border border-white border-opacity-40 "
                />

                <div className="z-10">
                  {" "}
                  <h3 className="text-white text-lg line-clamp-1 ">
                    {ele.title}
                  </h3>
                  <span className="line-clamp-2 text-sm opacity-50">
                    {ele.desc}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
