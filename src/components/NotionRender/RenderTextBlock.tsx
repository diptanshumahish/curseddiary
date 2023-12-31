import {
  CodeBlockObjectResponse,
  ParagraphBlockObjectResponse,
  QuoteBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { styling } from "./styling";

interface Props {
  block:
    | ParagraphBlockObjectResponse
    | CodeBlockObjectResponse
    | QuoteBlockObjectResponse;
}
export default async function RenderTextBlock({ block }: Props) {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          {block.paragraph.rich_text.map((i) => (
            <span key={i.plain_text} style={styling(i.annotations)}>
              {i.plain_text}
            </span>
          ))}
        </p>
      );
    case "quote":
      return (
        <blockquote>
          {block.quote.rich_text.map((i) => (
            <span key={i.plain_text}  style={styling(i.annotations)}>
              {i.plain_text}
            </span>
          ))}
        </blockquote>
      );

    case "code":
      return (
        <code>
          {block.code.rich_text.map((i) => (
            <span key={i.plain_text} className="bg-gray-200 ml-2 px-2 rounded-sm py-[1px] border flex items-center text-md justify-center w-fit " style={styling(i.annotations)}>
              {i.plain_text}
            </span>
          ))}
        </code>
      );
  }
}
