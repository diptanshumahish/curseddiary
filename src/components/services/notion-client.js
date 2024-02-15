import { Client, isFullPage, isNotionClientError, } from "@notionhq/client";

export default class NotionClient {
  #secret = process.env.NOTION_DATABASE_SECRET;
  #dbId = process.env.NOTION_DATABASE_ID;
  #rId = process.env.NOTION_REALLIFE_ID;

  constructor() {
    this.client = new Client({
      auth: this.#secret,
    });
  }

  async getDatabase() {
    try {
      if (!this.#dbId) return;
      const response = await this.client.databases.query({
        database_id: this.#dbId,
      });

      return response.results;
    } catch (error) {
      console.error(error);
      if (isNotionClientError(error)) {
        
      }
    }
  }
  //for real life events
  async getRealLifeDatabase() {
    try {
      if (!this.#rId) return;
      const response = await this.client.databases.query({
        database_id: this.#rId
      });

      return response.results;
    } catch (error) {
      console.error(error);
      if (isNotionClientError(error)) {
        
      }
    }
  }

  async getTags(reallife) {
    const postData = await this.getPosts(reallife);
    const posts = postData.posts;
    if (!posts) return [];

    let tags = [];
    for (let i = 0; i < posts.length; i++) {
      const element = posts[i];
      if (!element?.tags) continue;
      for (let j = 0; j < element.tags.length; j++) {
        const tag = element.tags[j];
        if (!tag) continue;
        if (tags.map((x) => x.id).includes(tag.id)) continue;
        tags = [...tags, tag];
      }
    }

    return Array.from(tags.values());
  }

  static getColumns(post) {
    const title =
      post.properties["Name"]?.type === "title" &&
      post.properties["Name"]?.["title"]?.[0]?.type === "text"
        ? post.properties["Name"]["title"][0].plain_text
        : null;
    const status =
      (post.properties["Status"]?.type === "status" &&
        post.properties.Status.status?.name) ||
      null;
    const tags =
      (post.properties["Tags"]?.type == "multi_select" &&
        post.properties.Tags?.multi_select) ||
      null;
    const desc =
      post.properties["Description"]?.type == "rich_text" &&
      post.properties.Description?.rich_text[0]?.type == "text"
        ? post.properties.Description?.rich_text[0]?.plain_text
        : null;
    const cover =
      post.cover?.type === "external"
        ? post.cover.external.url
        : post.cover?.file.url || null;

    const person = post.properties["Person"];
    

    return { title, status, tags, cover, person, desc };
  }
  async getPosts(reallife, page = 0, ...tag) {
    try {
      if (!this.#dbId) return;
      const response = await this.client.databases.query({
        database_id: reallife === false ? this.#dbId : this.#rId,
        page_size: page,
        filter: {
          and: [
            ...tag.map((item) => ({
              property: "Tags",
              multi_select: {
                contains: item ?? "",
              },
            })),
            {
              property: "Status",
              status: {
                equals: "Done",
              },
            },
          ],
        },
      });
      const database = response.results;
          let posts = [];
    
          for (let index = 0; index < database.length; index++) {
            const element = database[index];
            if (!isFullPage(element)) continue;
            const column = NotionClient.getColumns(element);
            const post = {
              id: element.id,
              url: element.url,
              created_time: element.created_time,
              last_edited_time: element.last_edited_time,
    
              ...column,
            };
    
            posts = [...posts, post];
          }
      const hasMore = response.has_more; 
      const nextCursor = response.next_cursor; 
  
      return { posts, hasMore, nextCursor }; 
    } catch (error) {
      console.error(error);
      if (isNotionClientError(error)) {
        // Handle Notion-specific errors
      }
    }
  }
  

  async getPage(page_id) {
    try {
      return await this.client.pages.retrieve({
        page_id,
      });
    } catch (error) {
      console.error(error);
      if (isNotionClientError(error)) {
      }
    }
  }

  async getBlocks(block_id, page_size = 90) {
    try {
      return await this.client.blocks.children.list({
        block_id,
        page_size,
      });
    } catch (error) {
      console.error(error);
      if (isNotionClientError(error)) {
      }
    }
  }
}

