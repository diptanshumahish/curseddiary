import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";
import React, { useMemo } from "react";
import assets from "../services/assets";
interface Props {
  block: ImageBlockObjectResponse;
}
export default async function RenderImage({ block }: Props) {
  const imageUrl = useMemo(() => {
    const image = block.image;

    switch (image.type) {
      case "file":
        return image.file.url;
      case "external":
        return image.external.url;
    }
  }, [block]);

  return (
    <figure className="pointer-events-none w-full h-auto pb-6 ">
      <Image
        unoptimized
        blurDataURL={assets.blur_img}
        placeholder="blur"
        src={imageUrl}
        width={1920}
        height={1080}
        alt="Cursed Diary Imagez"
        className="rounded border border-white border-opacity-15 lg:h-auto h-[40vh] w-full aspect-auto"
      />
      <figcaption className="caption">
        {block.image.caption[0].plain_text}
      </figcaption>
    </figure>
  );
}
