import PostComponent from "@/components/Post/PostComponent";
import { ServerProps } from "../../contracts/ServerComponents";
import NotionClient from "@/components/services/notion-client";
import { capitaliseFirst } from "@/components/services/strings";
import RealTop from "@/components/real/RealTop";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const nc = new NotionClient();
const TAGS = {
  active: "bg-white text-black hover:bg-opacity-80  active:bg-opacity-20  ",
  inactive: "text-white",
};

export default async function Blogs(
  props: ServerProps<"", { tag?: string; pageno?: string; strt?: string }>
) {
  const tags = await nc.getTags(true);
  const activeTag =
    typeof props.searchParams.tag === "undefined"
      ? 0
      : tags.map((x) => x.name).indexOf(props.searchParams.tag) + 1;

  const selectedTag =
    typeof props.searchParams.tag === "undefined"
      ? null
      : props.searchParams.tag;

  const page =
    typeof props.searchParams.pageno === "undefined"
      ? 1
      : props.searchParams.pageno;
  const strt_crsr =
    typeof props.searchParams.strt === "undefined"
      ? null
      : props.searchParams.strt;
  console.log("cursor in page" + strt_crsr);
  console.log("page number in page " + page);
  const postsData = await nc.getPosts(
    true,
    24,
    strt_crsr,
    activeTag === 0 ? "" : tags[activeTag - 1].name
  );
  const posts = postsData.posts ?? [];

  return (
    <div className="px-[5%] flex flex-col gap-4 pb-[3%] w-full">
      <RealTop />
      <div className="flex flex-col">
        <span className="text-yellow-100">Country wise organized content </span>
        <span className="text-xs text-white opacity-50">
          (scroll to see more tags if they are clipping)
        </span>
      </div>
      <div
        className="flex gap-4  py-2 text-white overflow-x-scroll no-scrollbar"
        id="stories"
      >
        <a href="/real-stories#stories">
          <span
            className={
              "text-md border flex items-center  border-white border-opacity-10 px-2 py-1 hover:opacity-80 active:bg-opacity-20 rounded-sm  " +
              (activeTag === 0 ? TAGS.active : TAGS.inactive)
            }
          >
            All
          </span>
        </a>
        <Suspense fallback={<Loader2 />}>
          {tags.map((tag, index) => {
            if (activeTag === index + 1) {
              return (
                <a
                  href={"/real-stories?tag=" + tag.name + "#stories"}
                  key={tag.id}
                >
                  <span
                    className={
                      "text-md border flex items-center w-max border-white border-opacity-10 px-2 py-1 hover:opacity-80 active:bg-opacity-20 rounded-sm  " +
                      TAGS.active
                    }
                  >
                    {capitaliseFirst(tag.name)}
                  </span>
                </a>
              );
            }
          })}
        </Suspense>
        <Suspense fallback={<Loader2 />}>
          {tags.map((tag, index) => {
            if (activeTag !== index + 1) {
              return (
                <a
                  href={"/real-stories?tag=" + tag.name + "#stories"}
                  key={tag.id}
                >
                  <span
                    className={
                      "text-md border flex items-center w-max border-white border-opacity-10 px-2 py-1 hover:opacity-80 active:bg-opacity-20 rounded-sm  "
                    }
                  >
                    {capitaliseFirst(tag.name)}
                  </span>
                </a>
              );
            }
          })}
        </Suspense>
      </div>

      <Suspense fallback={<Loader2 color="white" className="anim" />}>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6 justify-evenly ">
          {posts &&
            posts.map((x) => (
              <PostComponent post={x} key={x.id} postType="real" />
            ))}
        </div>
        <div className="p-2 border text-white border-white border-opacity-10 mt-6 rounded-md flex items-center justify-center gap-2">
          {postsData.hasMore && (
            <div>
              <a
                href={
                  selectedTag === null
                    ? "/real-stories" + `?strt=${postsData.nextCursor}`
                    : "/real-stories" +
                      `?strt=${postsData.nextCursor}&` +
                      `tag=${selectedTag}`
                }
              >
                Next
              </a>
            </div>
          )}
          {strt_crsr !== null && (
            <div>
              {" "}
              <a
                href={
                  selectedTag === null
                    ? "/real-stories"
                    : "/real-stories" + `?tag=${selectedTag}`
                }
              >
                Home
              </a>{" "}
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
}
