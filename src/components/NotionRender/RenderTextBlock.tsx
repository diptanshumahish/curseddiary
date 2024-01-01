import {
  CodeBlockObjectResponse,
  ParagraphBlockObjectResponse,
  QuoteBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { styling } from "./styling";
import { Quote } from "lucide-react";

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
        <blockquote className="bg-[#ffffff0f] border-l-4 border-white w-full p-4 flex gap-2 items-star rounded-sm">
          <Quote fill="white" />
          {block.quote.rich_text.map((i) => (
            <span
              key={i.plain_text}
              style={styling(i.annotations)}
              className="text-white "
            >
              {i.plain_text}
            </span>
          ))}
        </blockquote>
      );

    case "code":
      return (
        <code>
          {block.code.rich_text.map((i) => (
            <span
              key={i.plain_text}
              className="bg-gray-200 ml-2 px-2 rounded-sm py-[1px] border flex items-center text-md justify-center w-fit "
              style={styling(i.annotations)}
            >
              {i.plain_text}
            </span>
          ))}
        </code>
      );
  }
}
