import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="px-[5%] text-white bg-theme-bg py-2 flex justify-between items-center sticky top-0 border-b border-white border-opacity-30 z-20">
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
        <Link className="hover:underline" href="/stories">
          stories.
        </Link>
        {/* <Link className="hover:underline" href="/catagories">
          catagories.
        </Link>
        <Link className="hover:underline" href="/write">
          write.
        </Link> */}
      </div>
    </nav>
  );
}
