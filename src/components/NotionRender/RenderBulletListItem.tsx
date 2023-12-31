import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React, { Fragment, useMemo } from "react";
import RenderChildren from "./RenderChildren";
import { styling } from "./styling";

interface Props {
  block:
    | BulletedListItemBlockObjectResponse
    | NumberedListItemBlockObjectResponse;
}
export default async function RenderBulletListItem({ block }: Props) {
  const comp = useMemo(() => {
    switch (block.type) {
      case "numbered_list_item":
        return (
          <li>
            {block.numbered_list_item.rich_text.map((i) => (
              <span style={styling(i.annotations)} key={i.plain_text}>
                {i.plain_text}
              </span>
            ))}
            <RenderChildren block={block} />
          </li>
        );

      case "bulleted_list_item":
        return (
          <li>
            {block.bulleted_list_item.rich_text.map((i) => (
              <span style={styling(i.annotations)} key={i.plain_text}>
                {i.plain_text}
              </span>
            ))}
            <RenderChildren block={block} />
          </li>
        );
    }
  }, [block]);

  return <Fragment>{comp}</Fragment>;
}
