import React from "react";
import NotionClient from "../services/notion-client";
import PostComponent from "../Post/PostComponent";
import Link from "next/link";

interface Props {
  tag: string[];
  type: string;
}
export default async function MorePosts({ tag, type }: Props) {
  const nc = new NotionClient();
  const posts =
    (await nc.getPosts(type === "real" ? true : false, 0, tag[0])) ?? [];
  const more = type === "story" ? "stories" : "real-life";
  return (
    <div className="text-white px-[5%] py-[3%] flex flex-col gap-4  ">
      <div className="flex flex-col gap-1w-full border-t border-white border-opacity-35 pt-4 ">
        <div className="flex lg:justify-between lg:flex-row flex-col lg:items-center py-2 lg:py-0">
          <h3 className="text-3xl text-yellow-400">Recommended for you</h3>
          <Link href={`/${more}?tag=${tag[0]}`}>View More</Link>
        </div>
        <span className="opacity-55">
          You can continue to dig deeper into this world of imagination by
          reading these posts below, till then good luck
        </span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 gap-2 lg:py-[2%] ">
        {posts.slice(0, 4).map((ele, idx) => (
          <PostComponent post={ele} postType="real" key={idx} />
        ))}
      </div>
    </div>
  );
}
