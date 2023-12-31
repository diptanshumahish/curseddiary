import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-[5%] text-white py-[2%] border-t border-white flex justify-between items-center border-opacity-10">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/logo.png"
          height={95}
          width={95}
          alt="Cursed diary logo"
        />
        <div className="w-[40%]">
          <h2 className="text-3xl">Cursed Diary.</h2>
          <span className="opacity-40">Chills in every emotion.</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:w-[30%]">
        <h3> &copy; Diptanshu Mahish 2024</h3>
        <span className="opacity-40">
          This page is maintained by Diptanshu Mahish, and this is all for fun
          purpose, I do not promote any of these stuff, so take the fun as fun.
          Thanks.
        </span>
      </div>
    </div>
  );
}
