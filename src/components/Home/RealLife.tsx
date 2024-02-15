import Image from "next/image";
import React from "react";
import NotionClient from "../services/notion-client";
import PostComponent from "../Post/PostComponent";
import Link from "next/link";
import { staticText } from "@/constant/staticText";

export default async function RealLife() {
  const nc = new NotionClient();
  const posts = await nc.getPosts(true, 0, "");
  const rPosts = posts.posts;
  return (
    <div
      id="reallife"
      className="w-full px-[5%] py-[5%] text-white flex-col flex gap-4"
    >
      <div className="w-full lg:py-4 lg:pb-6 py-8 flex items-center justify-center">
        <img
          className="lg:w-[30%] md:w-[50%] w-full h-auto invert opacity-50"
          src="/assets/patterns/pat2.svg"
          alt=""
        />
      </div>
      <h2 className="text-3xl">Real Life events/ Folklores</h2>
      <span className="md:py-0 py-4">{staticText.reallifeHome}</span>
      <figure className="pointer-events-none">
        <Image
          src="/back/back2.webp"
          height={1280}
          width={1920}
          alt="cursed diary background image"
          className="w-full h-[40vh] rounded-sm object-cover border border-white border-opacity-20"
        />
        <figcaption className="caption">
          {staticText.realLifeImgHomeCaption}
        </figcaption>
      </figure>
      <span>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 gap-2 lg:py-[2%]">
          {rPosts &&
            rPosts.slice(0, 4).map((ele, idx) => {
              return <PostComponent post={ele} key={idx} postType="real" />;
            })}
          {rPosts?.length === 0 && <div>Loading</div>}
        </div>
        <div className="flex items-center py-4 justify-center w-full">
          {" "}
          {rPosts.length > 0 && (
            <Link
              className="p-2 border hover:bg-white hover:text-theme-bg transition-colors border-white rounded-md px-6 md:w-fit w-full border-opacity-15"
              href="/real-stories"
            >
              See More
            </Link>
          )}
        </div>
      </span>
    </div>
  );
}
