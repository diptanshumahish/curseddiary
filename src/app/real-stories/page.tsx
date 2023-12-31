import PostComponent from "@/components/Post/PostComponent";
import { ServerProps } from "../../contracts/ServerComponents";
import NotionClient from "@/components/services/notion-client";
import { capitaliseFirst } from "@/components/services/strings";
import RealTop from "@/components/real/RealTop";

const nc = new NotionClient();
const TAGS = {
  default:
    "text-md border border-white border-opacity-10 px-2 py-1 hover:opacity-80 active:bg-opacity-20 rounded-sm  ",
  active: "bg-white text-black hover:bg-opacity-80  active:bg-opacity-20  ",
  inactive: "text-white",
};
export default async function Blogs(props: ServerProps<"", { tag?: string }>) {
  const tags = await nc.getTags(true);

  const activeTag =
    typeof props.searchParams.tag === "undefined"
      ? 0
      : tags.map((x) => x.name).indexOf(props.searchParams.tag) + 1;

  const posts = await nc.getPosts(
    true,
    0,
    activeTag === 0 ? "" : tags[activeTag - 1].name
  );

  return (
    <div className="px-[5%] flex flex-col gap-4 py-[3%] w-full">
      <RealTop />

      <div
        className="flex gap-4 flex-wrap py-2 text-white overflow-x-scroll"
        id="stories"
      >
        <a href="/real-stories#stories">
          <span
            className={
              TAGS.default + (activeTag === 0 ? TAGS.active : TAGS.inactive)
            }
          >
            All
          </span>
        </a>
        {tags.map((tag, index) => {
          if (tag.name !== "featured") {
            return (
              <a
                href={"/real-stories?tag=" + tag.name + "#stories"}
                key={tag.id}
              >
                <span
                  className={
                    TAGS.default +
                    (activeTag === index + 1 ? TAGS.active : TAGS.inactive)
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
        {posts && posts.map((x) => <PostComponent post={x} key={x.id} />)}
      </div>
    </div>
  );
}
