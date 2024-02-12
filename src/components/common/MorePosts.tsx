import React from "react";
import NotionClient from "../services/notion-client";
import PostComponent from "../Post/PostComponent";

interface Props {
  tag: string[];
  type: string;
}
export default async function MorePosts({ tag, type }: Props) {
  const nc = new NotionClient();
  const posts =
    (await nc.getPosts(type === "real" ? true : false, 0, tag[0])) ?? [];
  return (
    <div className="text-white px-[5%] py-[3%] flex flex-col gap-4 ">
      <h3 className="text-lg text-yellow-400">Recommended for you</h3>
      <span className="opacity-55">
        Here are some posts that you might like, make sure to visit these posts{" "}
      </span>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 gap-2 lg:py-[2%] ">
        {posts.slice(0, 4).map((ele, idx) => (
          <PostComponent post={ele} postType="real" key={idx} />
        ))}
      </div>
    </div>
  );
}