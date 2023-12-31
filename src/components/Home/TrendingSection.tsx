import React from "react";
import NotionClient from "../services/notion-client";
import PostComponent from "../Post/PostComponent";

export default async function TrendingSection() {
  const nc = new NotionClient();
  const trending = await nc.getPosts(0, "featured");
  return (
    <div className="px-[5%] pb-[3%] flex flex-col gap-2 text-white ">
      <h2 className="text-3xl">Trending Stories</h2>
      <span className="text-gray-400">
        Here is a small set of stories that I think are safe for the normal
        audience to read. Feel free to explore more, maybe you can get soemthing
        you definitely "didnot want". I guess you would love these stories as
        new comers, This trending stories&apos; list keeps updating every few
        days, so stay vigil haha
      </span>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 gap-2 lg:py-[2%]">
        {trending &&
          trending.map((ele, idx) => {
            return <PostComponent post={ele} key={idx} />;
          })}
        {trending?.length === 0 && <div>Loading</div>}
      </div>
    </div>
  );
}
