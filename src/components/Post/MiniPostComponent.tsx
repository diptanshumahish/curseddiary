import { isFullUser } from "@notionhq/client";
import Link from "next/link";
import React, { Fragment } from "react";
import { Post } from "../services/notion-client";
import { tw } from "../services/tailwind";
import moment from "moment";

interface Props {
  ref?: React.RefObject<HTMLAnchorElement>;
  post: Post;
}
export default async function MiniPostComponent({ post, ref }: Props) {
  const blog_id =
    post.title?.split(" ").join("-").toLowerCase() + "__" + post.id;
  return (
    <Link
      href={"/blogs/" + encodeURIComponent(blog_id)}
      className=" border p-2 rounded-lg border-black  offsetstyle transition-shadow"
      ref={ref}
      data-type="post"
    >
      <Fragment>
        <div
          className={tw([
            "relative",
            "aspect-[2/1]",
            "w-full"
          ])}
        >
          {post.cover && (
            <img 
              placeholder="blur"
              src={post.cover || ""}
              alt={post.title ?? ""}
              className={tw(["w-full", "h-full", "object-cover","border","rounded-lg","border-black"])}
            />
          )}
          <div className="absolute inset-0 z-10 flex flex-col rounded-lg bg-gradient-to-b from-transparent to-black">
            <p className="text-sm font-bold text-white absolute bottom-3 left-3">
              {post.title}
            </p>
          </div>
        </div>
        <span className="mt-1 text-sm font-bold flex flex-col">
        <span>
        {moment(post.created_time).format("Do MMMM, YYYY")}
        </span>
        <span>
        {post.user![0].name??"Fyipen User"}
        </span>
        </span>
      </Fragment>
    </Link>
  );
}
