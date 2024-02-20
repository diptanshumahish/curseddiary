import PostComponent from "@/components/Post/PostComponent";
import { ServerProps } from "../../contracts/ServerComponents";
import NotionClient from "@/components/services/notion-client";
import { capitaliseFirst } from "@/components/services/strings";
import Featured from "./(featured)";
import StoryTop from "@/components/stories/StoryTop";
import { randomInteger } from "@/components/services/random";
import { Suspense } from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

const nc = new NotionClient();
const TAGS = {
  default:
    "text-md border border-white border-opacity-10 px-2 py-1 hover:opacity-80 active:bg-opacity-20 rounded-sm  ",
  active: "bg-white text-black hover:bg-opacity-80  active:bg-opacity-20  ",
  inactive: "text-white",
};
export default async function Blogs(
  props: ServerProps<
    "",
    { tag?: string; pageno?: string; strt?: string; prev?: string }
  >
) {
  const [tags, featured] = await Promise.all([
    nc.getTags(false),
    nc.getPosts(false, 0, "featured"),
  ]);

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
      : parseInt(props.searchParams.pageno);
  const strt_crsr =
    typeof props.searchParams.strt === "undefined"
      ? null
      : props.searchParams.strt;

  const prevous_cursor =
    typeof props.searchParams.prev === "undefined"
      ? null
      : props.searchParams.prev;

  const postData = await nc.getPosts(
    false,
    24,
    strt_crsr,
    activeTag === 0 ? "" : tags[activeTag - 1].name
  );

  const posts = postData.posts ?? [];

  //pagination related stuff
  const pages = await nc.getMetadata();
  const maxPages = Array.from({ length: pages.storypages }, (_, i) => i + 1);

  return (
    <div className="px-[5%] flex flex-col gap-4 pb-[3%] w-full">
      <StoryTop />
      <Suspense fallback={<Loader2 />}>
        {featured?.[0] && (
          <div className="py-6">
            <Featured post={featured?.[randomInteger(featured.length)]} />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-yellow-100">Content type based tags</span>
          <span className="text-xs text-white opacity-50">
            (scroll to see more tags if they are clipping)
          </span>
        </div>
        <div
          className="flex gap-4 py-2 text-white overflow-x-scroll no-scrollbar"
          id="stories"
        >
          <a href="/stories#stories">
            <span
              className={
                "text-md border flex items-center w-max border-white border-opacity-10 px-2 py-1 hover:opacity-80 active:bg-opacity-20 rounded-sm  " +
                (activeTag === 0 ? TAGS.active : TAGS.inactive)
              }
            >
              All
            </span>
          </a>
          {tags.map((tag, index) => {
            if (tag.name !== "featured" && activeTag === index + 1) {
              return (
                <a href={"/stories?tag=" + tag.name + "#stories"} key={tag.id}>
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
          {tags.map((tag, index) => {
            if (tag.name !== "featured" && activeTag !== index + 1) {
              return (
                <a href={"/stories?tag=" + tag.name + "#stories"} key={tag.id}>
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
        </div>
        <div className="py-2 text-white text-md"></div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  lg:gap-6 gap-8 justify-evenly ">
          {posts &&
            posts.map((x) => (
              <PostComponent postType="story" post={x} key={x.id} />
            ))}
        </div>
        <div className="  text-white mt-6 flex items-center justify-center gap-2 flex-col">
          <span className="text-xs opacity-30">NAVIGATION</span>
          <div className="flex flex-wrap text-sm gap-2 items-center">
            <a
              className={twMerge(
                page === 1
                  ? "cursor-not-allowed pointer-events-none opacity-40"
                  : "",
                "bg-white bg-opacity-20 px-2 py-1 hover:bg-opacity-40 transition-opacity  text-white rounded-sm flex items-center gap-2"
              )}
              href={
                "/stories?" +
                (postData.hasMore ? `strt=${postData.nextCursor}` : "") +
                (selectedTag === null ? "" : `&tag=${selectedTag}`) +
                (strt_crsr === null && page === 2 ? "" : `&prev=${strt_crsr}`)
              }
            >
              <ArrowLeft size={16} />
              Back
            </a>
            {maxPages.map((ele, idx) => (
              <span
                className={twMerge(
                  page === idx + 1 ? "bg-white bg-opacity-10" : "",
                  "border border-white border-opacity-30 px-2 py-1 text-white rounded-sm"
                )}
                key={idx}
              >
                {ele}
              </span>
            ))}
            <a
              className={twMerge(
                postData.hasMore === false
                  ? "cursor-not-allowed pointer-events-none opacity-40"
                  : "",
                "bg-white bg-opacity-20 px-2 py-1 hover:bg-opacity-40 transition-opacity  text-white rounded-sm flex items-center gap-2"
              )}
              href={
                "/stories?" +
                `strt=${postData.nextCursor}` +
                (selectedTag === null ? `` : `&tag=${selectedTag}`) +
                (strt_crsr === null || page === 2 ? "" : `&prev=${strt_crsr}`) +
                (page === null ? "&pageno=2" : `&pageno=${page + 1}`)
              }
            >
              Next
              <ArrowRight size={16} />
            </a>
          </div>
          <span className="text-xs text-yellow-300">
            (clicking on numbers doesnot work as of now 🙂 )
          </span>
        </div>
      </Suspense>
    </div>
  );
}
