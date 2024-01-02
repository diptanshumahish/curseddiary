import { SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type SelectPropertyResponse = NonNullable<
  SelectPropertyItemObjectResponse["select"]
>;
export interface Post {
  id: string | null;
  url: string | null;
  created_time: string | null;
  last_edited_time: string | null;
  title: string | null;
  desc: string | null;
  status: string | null;
  tags: SelectPropertyResponse[] | null;
  cover: string | null;
}
