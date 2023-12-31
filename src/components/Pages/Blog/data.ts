import { isFullPage } from "@notionhq/client";
import NotionClient from "@/components/services/notion-client";

const nc = new NotionClient();
export async function getBlog(id: string) {
  return await nc.getBlocks(id);
}

export async function getBlogData(id: string) {
  const data = {
    title: "",
    url: "",
    tags: [""],
    user: {
      name: "",
      image: "",
    },
    desc: "",
    date: "",
  };
  const post = await nc.getPage(id);

  if (!post) return data;
  if (!isFullPage(post)) return data;
  console.log(post);
  // title
  const name = post.properties["Name"];
  if (name.type !== "title") data.title = "";
  else if (name.title.length === 0) data.title = "";
  else data.title = name.title[0].plain_text;

  // cover
  if (!post.cover) data.url = "";
  else if (post.cover.type === "file") data.url = post.cover.file.url;
  else data.url = post.cover.external.url;
  //tags
  const tags = post.properties["Tags"].multi_select;
  const tagArray: string[] = tags.map((tag) => tag.name);
  data.tags = tagArray;

  //avatar and image
  // if (post.properties["Person"] !== undefined) {
  //   data.user.name = post.properties["Person"].created_by.name;
  //   data.user.image = post.properties["Person"].created_by.avatar_url;
  // }
  if (post.properties["Description"] !== undefined) {
    data.desc = post.properties["Description"].rich_text[0].plain_text;
  }
  data.date = post.last_edited_time;

  return data;
}
