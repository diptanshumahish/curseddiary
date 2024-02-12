import { isFullPage } from "@notionhq/client";
import NotionClient from "@/components/services/notion-client";

const nc = new NotionClient();
export async function getBlog(id) {
  return await nc.getBlocks(id);
}

export async function getBlogData(id) {
  const data = {
    title: "",
    email: "",
    tags: [""],
    user: {
      name: "",
      email: "",
    },
    desc: "",
    date: "",
    aboutAuthor:"",
    type:""
  };
  const post = await nc.getPage(id);

  if (!post) return data;
  if (!isFullPage(post)) return data;

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
  const tagArray = tags.map((tag) => tag.name);
  data.tags = tagArray;


  //description
  if (post.properties["Description"] !== undefined) {
    data.desc = post.properties["Description"].rich_text[0].plain_text;
  }
  //date
  data.date = post.created_time;

  //user
  data.user.name= post.properties.By.rich_text[0].plain_text;
  data.user.email= post.properties.Email.rich_text[0].plain_text;
  data.aboutAuthor= post.properties.about.rich_text[0].plain_text;


  //type
  data.type = post.properties.type.rich_text[0].plain_text??"real";


  return data;
}
