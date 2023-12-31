import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 text-white items-center justify-center">
      <Image
        src="/assets/logo.png"
        height={90}
        width={90}
        alt="Cursed diary logo "
      />
      <p className="text-4xl font-bold animate-pulse">Loading</p>
      <span className="opacity-40">Beep beep boop boop</span>
      <span className="opacity-40">Getting your content</span>
    </div>
  );
}
