import React from "react";
import { Post } from "@/components/services/notion-client";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import assets from "@/components/services/assets";

export default function Featured({ post }: { post: Post }) {
  const blog_id =
    post.title?.split(" ").join("-").toLowerCase() + "__" + post.id;
  return (
    <div className="p-4  w-full h-[40%] border border-white hover:bg-[#ebc99a10] transition-colors border-opacity-40 rounded-sm  ">
      <Link
        href={"/stories/" + encodeURIComponent(blog_id)}
        className=" text-white flex flex-col gap-2"
      >
        <h2 className="text-2xl font-bold bg-white text-black p-2 py-1 text-center rounded-sm">
          Featured writeup
        </h2>
        <hr className="opacity-40" />
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
          <div className="flex flex-col gap-4 lg:max-w-[60%]">
            <h1 className="text-3xl">{post.title}</h1>
            <hr />
            <div className="flex flex-col gap-1">
              <span className="text-xs opacity-30">About the story</span>
              <p className="opacity-50">{post.desc}</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs opacity-30">
                When was this story written?
              </span>
              {moment(post.last_edited_time).format("D MMMM YYYY")}
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
            className="w-[30%] h-auto aspect-[4/3] object-cover border border-white border-opacity-40 rounded-sm"
          />
        </div>
      </Link>
    </div>
  );
}
