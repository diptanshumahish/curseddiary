import React from "react";
import NotionClient from "../services/notion-client";
import PostComponent from "../Post/PostComponent";

export default async function Recommended() {
  const nc = new NotionClient();
  const posts = await nc.getPosts(false, 0, "");
  posts.sort(() => Math.random() - 0.5);
  return (
    <div className="text-white">
      <div className="grid lg:grid-cols-3 md:grid-cols-2  lg:gap-4 gap-2 lg:py-[2%]">
        {posts &&
          posts.slice(0, 3).map((ele, idx) => {
            return <PostComponent post={ele} key={idx} />;
          })}
        {posts?.length === 0 && <div>Loading</div>}
      </div>
    </div>
  );
}
