import Recommended from "@/components/common/Recommended";
import { Frown } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Page not found",
};
export default function NotFound() {
  return (
    <div className="min-h-screen w-screen flex items-center lg:p-0 p-[5%]  justify-center text-white">
      <div className="flex lg:w-[60%] w-full flex-col gap-2">
        <Frown />
        <span className="text-3xl">Page Not found</span>
        <span>Meanwhile you can checkout the recommended posts</span>
        <Recommended />
      </div>
    </div>
  );
}
