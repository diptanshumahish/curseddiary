import { isFullBlock } from "@notionhq/client";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import NotionClient from "../services/notion-client";
import RenderBlock from "./RenderBlock";

interface Props {
  block: BlockObjectResponse | PartialBlockObjectResponse;
}
const nc = new NotionClient();
export default async function RenderChildren({ block }: Props) {
  if (!isFullBlock(block)) return null;
  if (!block.has_children) return null;

  const blocks = await nc.getBlocks(block.id);
  if (!blocks) return null;
  if (blocks.results.length === 0) return null;

  return <RenderBlock blockMap={blocks.results} />;
}
