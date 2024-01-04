import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React, { Fragment, useMemo } from "react";

interface Props {
  block:
    | Heading1BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading3BlockObjectResponse;
}

export default async function RenderHeadingBlock({ block }: Props) {
  const comp = useMemo(() => {
    switch (block.type) {
      case "heading_1":
        return block.heading_1.rich_text.map((h1) => (
          <h1 key={h1.plain_text}>{h1.plain_text}</h1>
        ));
      case "heading_2":
        return block.heading_2.rich_text.map((h1) => (
          <h2 key={h1.plain_text} className="font-normal">
            {h1.plain_text}
          </h2>
        ));
      case "heading_3":
        return block.heading_3.rich_text.map((h1) => (
          <h3 className="font-normal" key={h1.plain_text}>
            {h1.plain_text}
          </h3>
        ));
    }
  }, [block]);

  return <Fragment>{comp}</Fragment>;
}
