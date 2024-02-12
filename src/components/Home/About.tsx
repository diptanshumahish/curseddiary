import { staticText } from "@/constant/staticText";
import React from "react";

export default function About() {
  return (
    <div className="px-[5%] text-white flex flex-col gap-4 ">
      <div className="w-full lg:py-4 lg:pb-6 py-8 flex items-center justify-center">
        <img
          className="lg:w-[30%] md:w-[50%] w-full h-auto invert opacity-50"
          src="/assets/patterns/pat1.svg"
          alt=""
        />
      </div>
      <h2 className="lg:text-4xl md:text-2xl text-xl" style={{}}>
        About Cursed Diary
      </h2>
      <div
        className="pb-4"
        dangerouslySetInnerHTML={{ __html: staticText.aboutus }}
      ></div>
    </div>
  );
}
