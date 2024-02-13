import React from "react";

import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import assets from "@/components/services/assets";
import { Post } from "@/components/services/post";

export default function Featured({ post }: { post: Post }) {
  const blog_id =
    post.title?.split(" ").join("-").toLowerCase() + "__" + post.id;
  return (
    <div className="  w-full h-[30%] flex flex-col gap-4   ">
      <div className="flex flex-col">
        <span className="text-2xl text-blue-200">Featured writeup ✒️</span>
        <span className="text-xs opacity-70 text-white">
          (Updates frequently, so keep an eye over here)
        </span>
      </div>
      <Link
        href={"/stories/" + encodeURIComponent(blog_id)}
        className=" text-white border  hover:bg-[#ebc99a10] transition-colors border-opacity-40 rounded-sm  pl-4 border-white flex flex-col gap-2"
      >
        <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-4 justify-between items-center">
          <div className="flex flex-col gap-4 lg:max-w-[60%]">
            <h1 className="lg:text-3xl md:text-2xl text-xl">{post.title}</h1>

            <hr />
            <div className="flex flex-col gap-1">
              <span className="text-xs opacity-30">About the story</span>
              <p className="opacity-50">{post.desc}</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs opacity-30">
                When was this story written?
              </span>
              {moment(post.created_time).format("D MMMM YYYY")}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs opacity-30">
                Tags realted to the story
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((ele, idx) => {
                  return (
                    <span
                      className="bg-[#61616131] text-sm rounded-sm border border-white border-opacity-20 px-2 py-[2px]"
                      key={idx}
                    >
                      #{ele.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <Image
            src={post.cover ?? assets.blur_img}
            alt={post.title ?? "Image"}
            height={300}
            width={200}
            className="lg:w-[30%] w-full h-auto aspect-[4/3] object-cover border-l border-white border-opacity-40 rounded-sm"
          />
        </div>
      </Link>
    </div>
  );
}
