import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-[5%] text-white py-[2%] border-t border-white flex lg:flex-row flex-col justify-between lg:items-center border-opacity-10 lg:gap-0 gap-6">
      <div className="flex items-center lg:py-2 py-4  gap-4">
        <Image
          unoptimized
          src="/assets/logo.png"
          height={95}
          width={95}
          alt="Cursed diary logo"
        />
        <div className="w-[40%]">
          <h2 className="lg:text-3xl md:text-2xl text-lg">Cursed Diary.</h2>
          <span className="opacity-40">Chills in every emotion.</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:w-[30%]">
        <h3> &copy; Diptanshu Mahish 2024</h3>
        <span className="opacity-40 lg:text-md text-sm">
          This page is maintained by Diptanshu Mahish, and this is all for fun
          purpose, I do not promote any of these stuff, so take the fun as fun.
          Thanks.
        </span>
        <Link href="/submit" className="underline">
          Want to submit content?
        </Link>
      </div>
    </div>
  );
}
