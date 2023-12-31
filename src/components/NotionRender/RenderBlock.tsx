import { isFullBlock } from "@notionhq/client";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import RenderHeadingBlock from "./RenderHeadingBlock";
import RenderImage from "./RenderImage";
import RenderBulletListItem from "./RenderBulletListItem";
import RenderTextBlock from "./RenderTextBlock";
import RenderCallout from "./RenderCallout";
import RenderTable from "./RenderTable";

interface Props {
  blockMap: (BlockObjectResponse | PartialBlockObjectResponse)[];
}
export default async function RenderBlock({ blockMap }: Props) {
  let map: React.ReactElement[] = [];
  let list: React.ReactElement[] = [];
  for (let index = 0; index < blockMap.length; index++) {
    const block = blockMap[index];
    const after = blockMap.at(index + 1);
    if (isFullBlock(block)) {
      switch (block.type) {
        case "heading_1":
        case "heading_2":
        case "heading_3":
          map = [...map, <RenderHeadingBlock block={block} key={block.id} />];

          break;

        case "image":
          map = [...map, <RenderImage block={block} key={block.id} />];
          break;

        case "bulleted_list_item":
          list = [
            ...list,
            <RenderBulletListItem block={block} key={block.id} />,
          ];
          if (
            !after ||
            (isFullBlock(after) && after.type !== "bulleted_list_item")
          ) {
            map = [...map, <ul key="ul">{list}</ul>];
            list = [];
          }
          break;
        case "numbered_list_item":
          // For an unordered list
          list = [
            ...list,
            <RenderBulletListItem block={block} key={block.id} />,
          ];
          if (
            !after ||
            (isFullBlock(after) && after.type !== "numbered_list_item")
          ) {
            map = [...map, <ol key="ol">{list}</ol>];
            list = [];
          }

          break;
        case "paragraph":
        case "code":
        case "quote":
          // For a paragraph

          map = [...map, <RenderTextBlock block={block} key={block.id} />];
          break;

        case "callout":

          map = [...map, <RenderCallout block={block} key={block.id} />];
          break;

        case "table":
          map = [
            ...map,

            <RenderTable block={block} key={block.id} />,
          ];
          break;
        default:

          break;
      }
    }
  }

  return <>{map}</>;
}
