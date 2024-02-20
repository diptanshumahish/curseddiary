import SubmitNotion from "@/components/submit/SubmitNotion";
import SubmitThanks from "@/components/submit/SubmitThanks";
import SubmitTop from "@/components/submit/SubmitTop";
import React from "react";

export default function page() {
  return (
    <div className="px-[5%] lg:py-[5%] py-[20%] text-white flex flex-col gap-4">
      <SubmitTop />
      <SubmitNotion />
      <SubmitThanks />
    </div>
  );
}
