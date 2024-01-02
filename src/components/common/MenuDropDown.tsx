import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
interface Props {
  height: string;
  onC: () => void;
}
export default function MenuDropDown({ height, onC }: Props) {
  return (
    <div
      style={{ zIndex: height === "0vh" ? -1 : 50 }}
      className="fixed px-[5%] pt-[5%]  flex  justify-center inset-0 bg-[#11111159] backdrop-blur-sm "
      onClick={onC}
    >
      <div
        style={{
          height: height,
          opacity: height === "0vh" ? 0 : 1,
        }}
        className="w-full transition-all lg:duration-700 duration-300 flex items-center lg:flex-row flex-col-reverse lg:justify-between justify-center lg:gap-0 gap-6 text-white lg:p-[2%] p-[5%] bg-theme-bg border border-white border-opacity-30 rounded-sm"
      >
        <div className="lg:flex hidden flex-col lg:w-[30%] justify-between h-full">
          <div className="flex  items-center   gap-4">
            <Image
              src="/assets/logo.png"
              height={95}
              width={95}
              alt="Cursed diary logo"
            />
            <div className="">
              <h2 className="lg:text-3xl md:text-2xl text-lg">Cursed Diary.</h2>
              <span className="opacity-40">Chills in every emotion.</span>
            </div>
          </div>
          <hr className="opacity-25" />
          <div className="flex flex-col gap-2 w-full">
            <h3> &copy; Diptanshu Mahish 2024</h3>
            <span className="opacity-40 lg:text-md text-sm">
              This page is maintained by Diptanshu Mahish, and this is all for
              fun purpose, I do not promote any of these stuff, so take the fun
              as fun. Thanks.
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="opacity-40 text-sm">NAVIGATION</h2>
            <Link className="active:underline hover:underline" href="/stories">
              Stories
            </Link>
            <Link
              className="active:underline hover:underline"
              href="/stories?tag=featured#stories"
            >
              Featured
            </Link>
            <Link
              className="active:underline hover:underline"
              href="/real-stories"
            >
              Real Life
            </Link>
            <Link
              className="active:underline hover:underline"
              href="/real-stories"
            >
              Folklores
            </Link>
            <Link className="active:underline hover:underline" href="/">
              Home
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="opacity-40 text-sm">SOCIALS</h2>
            <Link href="/stories">Instagram</Link>
            <Link href="/stories">Github</Link>
            <Link href="/stories">Mail</Link>
            <Link href="/stories">Facebook</Link>
            <Link href="/stories">Submit </Link>
          </div>
        </div>
        <div className="flex flex-col text-xl items-end cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
          <ArrowUpRight />
          CLOSE
        </div>
      </div>
    </div>
  );
}
