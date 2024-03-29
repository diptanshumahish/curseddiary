import React, { Suspense } from "react";
import NotionClient from "../services/notion-client";
import PostComponent from "../Post/PostComponent";
import Link from "next/link";
import { staticText } from "@/constant/staticText";
import { Loader2 } from "lucide-react";

export default async function TrendingSection() {
  const nc = new NotionClient();
  const posts = await nc.getPosts(false, 4, null, "featured");
  const trending = posts.posts ?? [];
  return (
    <div className=" lg:px-[10%] px-[5%] pb-[3%] flex flex-col gap-2 text-white  ">
      <div className="w-full lg:py-4 lg:pb-6 py-8 justify-center flex items-center flex-col gap-4 ">
        <div className="w-[30px] h-[2px] bg-white bg-opacity-25 rounded-md" />
        <img
          className="lg:w-[30%] md:w-[50%] w-full h-auto invert opacity-50 justify-center "
          src="/assets/patterns/pat4.svg"
          alt=""
        />
        <div className="w-[30px] h-[2px] bg-white bg-opacity-25 rounded-md" />
      </div>
      <h2 className="text-3xl">Trending Stories</h2>
      <span className="text-gray-400 md:py-0 py-4">
        {staticText.homeTrending}
      </span>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-6 gap-8 lg:py-[2%]">
        <Suspense
          key={1212}
          fallback={
            <>
              <Loader2 />
            </>
          }
        >
          {trending &&
            trending.slice(0, 4).map((ele, idx) => {
              return <PostComponent post={ele} key={idx} postType="story" />;
            })}
        </Suspense>
      </div>
      <Suspense
        key={989}
        fallback={
          <Link
            className="p-2 disabled:opacity-20 disabled:pointer-events-none md:w-fit w-full border hover:bg-white hover:text-theme-bg transition-colors border-white rounded-md px-6 border-opacity-15"
            href="/stories"
          >
            See More
          </Link>
        }
      >
        <div className="flex items-center justify-center w-full py-4">
          {" "}
          {trending.length > 0 && (
            <Link
              className="p-2 md:w-fit w-full border hover:bg-white hover:text-theme-bg transition-colors border-white rounded-md px-6 border-opacity-15"
              href="/stories"
            >
              See More
            </Link>
          )}
        </div>
      </Suspense>
    </div>
  );
}
