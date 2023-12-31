import { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Fragment } from "react";
import { styling } from "./styling";
import Image from "next/image";
import assets from "../services/assets";

interface Props {
  block: CalloutBlockObjectResponse;
}
export default async function RenderCallout({ block }: Props) {
  const callout = block.callout;
  return (
    <section>
      {callout.icon && (
        <Fragment>
          {callout.icon.type === "emoji" ? (
            callout.icon.emoji
          ) : (
            <Image
              blurDataURL={assets.blur_img}
              placeholder="blur"
              src={callout.icon.type === "file" ? callout.icon.file.url : callout.icon.external.url}
              width={650}
              height={400}
              alt="Shapt image"
            />
          )}
        </Fragment>
      )}
      <div>
        {callout.rich_text.map((i) => (
          <span key={i.plain_text} style={styling(i.annotations)}>
            {i.plain_text}
          </span>
        ))}
      </div>
    </section>
  );
}
