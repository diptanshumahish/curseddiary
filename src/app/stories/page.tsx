import PostComponent from "@/components/Post/PostComponent";
import { ServerProps } from "../../contracts/ServerComponents";
import NotionClient from "@/components/services/notion-client";
import { capitaliseFirst } from "@/components/services/strings";
import Featured from "./(featured)";
import StoryTop from "@/components/stories/StoryTop";
import { randomInteger } from "@/components/services/random";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const nc = new NotionClient();
const TAGS = {
  default:
    "text-md border border-white border-opacity-10 px-2 py-1 hover:opacity-80 active:bg-opacity-20 rounded-sm  ",
  active: "bg-white text-black hover:bg-opacity-80  active:bg-opacity-20  ",
  inactive: "text-white",
};
export default async function Blogs(props: ServerProps<"", { tag?: string }>) {
  const [tags, featured] = await Promise.all([
    nc.getTags(false),
    nc.getPosts(false, 0, "featured"),
  ]);

  const activeTag =
    typeof props.searchParams.tag === "undefined"
      ? 0
      : tags.map((x) => x.name).indexOf(props.searchParams.tag) + 1;

  const postData = await nc.getPosts(
    false,
    0,
    activeTag === 0 ? "" : tags[activeTag - 1].name
  );
  const posts = postData.posts ?? [];

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
        <div className="py-2 text-white text-md">
          Displaying {posts?.length} result(s)
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6 justify-evenly ">
          {posts &&
            posts.map((x) => (
              <PostComponent postType="story" post={x} key={x.id} />
            ))}
        </div>
      </Suspense>
    </div>
  );
}
