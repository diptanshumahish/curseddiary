"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuSquare, XIcon } from "lucide-react";
import MenuDropDown from "./MenuDropDown";
export default function Navbar() {
  const [size, setSize] = useState("0vh");
  return (
    <>
      <nav className="px-[5%] text-white bg-theme-bg py-2 flex justify-between items-center sticky top-0 border-b border-white border-opacity-10 z-20">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            height={35}
            width={35}
            alt="Cursed diary logo"
          />
          <h2 className="text-lg">Cursed Diary.</h2>
        </Link>
        <div className="flex gap-4">
          {size === "0vh" ? (
            <button
              onClick={() => {
                setSize("40vh");
              }}
            >
              <MenuSquare size={25} />
            </button>
          ) : (
            <button
              onClick={() => {
                setSize("0vh");
              }}
            >
              <XIcon />
            </button>
          )}
        </div>
      </nav>
      <MenuDropDown
        onC={() => {
          setSize("0vh");
        }}
        height={size}
      />
    </>
  );
}
