import Link from "next/link";
import React from "react";

import moment from "moment";
import Image from "next/image";
import assets from "../services/assets";
import { Post } from "../services/post";
import { ArrowRightCircle } from "lucide-react";

interface Props {
  post: Post;
  postType: string;
}

export default async function PostComponent({ post, postType }: Props) {
  const story_id =
    post.title?.split(" ").join("-").toLowerCase() + "__" + post.id;
  const genres = post.tags.map((ele) => ele.name);
  return (
    <Link
      href={"/stories/" + encodeURIComponent(story_id)}
      data-type="post"
      data-genre={genres}
      data-catagory={postType}
    >
      <div className="border overflow-hidden flex flex-col  hover:bg-[#ebc99a10] text-white  transition-colors justify-between border-white border-opacity-20 rounded-sm">
        <div className="flex justify-between items-center px-4 py-2 border-b border-white border-opacity-40 py-">
          <span>{moment(post.created_time).format("D MMM,YYYY")}</span>
          <span className="flex items-center gap-2">
            Read <ArrowRightCircle size={16} />
          </span>
        </div>
        <h3 className="text-lg line-clamp-2 px-4 py-2 ">{post.title}</h3>
        <Image
          unoptimized
          src={post.cover ?? assets.blur_img}
          alt={post.title ?? "Image"}
          height={300}
          blurDataURL={assets.blur_img}
          placeholder="blur"
          width={200}
          className="w-full h-auto aspect-[16/9] bg-theme-bg object-cover border-y border-white border-opacity-40 rounded-sm"
        />
        <div className=" h-full flex flex-col gap-2 px-4 py-2">
          <span className="h-[45%] opacity-50 text-sm w-full text-ellipsis overflow-hidden line-clamp-4">
            {post.desc}
          </span>

          <span className="flex flex-wrap gap-1 text-sm">
            {post.tags!.slice(0, 2).map((post, idx) => {
              return (
                <span
                  key={idx}
                  className="flex items-center gap-1 pr-2  text-yellow-100 "
                >
                  {post.name}
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}
