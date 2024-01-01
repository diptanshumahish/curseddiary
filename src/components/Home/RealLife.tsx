import Image from "next/image";
import React from "react";
import NotionClient from "../services/notion-client";
import PostComponent from "../Post/PostComponent";

export default async function RealLife() {
  const nc = new NotionClient();
  const rPosts = await nc.getPosts(true, 0, "");
  return (
    <div
      id="reallife"
      className="w-full px-[5%] py-[5%] text-white flex-col flex gap-4"
    >
      <h2 className="text-3xl">Real Life events/ Folklores</h2>
      <span>
        get to know about the popular known stories that have been around the
        people. Stories, rather real life incidents, chill enough to bring in
        the scare of a lifetime. The events are filtered on the basis of
        countries. you can search on the basis of countries to get your data
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
      <span>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 gap-2 lg:py-[2%]">
          {rPosts &&
            rPosts.map((ele, idx) => {
              return <PostComponent post={ele} key={idx} />;
            })}
          {rPosts?.length === 0 && <div>Loading</div>}
        </div>
      </span>
    </div>
  );
}
