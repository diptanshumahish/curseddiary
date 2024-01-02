import React from "react";
import CaseNotion from "./CaseNotion";

import CasePlain from "./CasePlain";
import CaseMarkDown from "./CaseMarkDown";

export default function SubmitNotion() {
  return (
    <div className="py-[5%] flex flex-col gap-2 ">
      <h2 className="lg:text-6xl text-xl">How to submit to us?</h2>
      <span className="opacity-50">
        STEP 2: Check out how to submit and about Notion
      </span>
      <div className="lg:w-[50%]  border border-white border-opacity-20 rounded-md p-2">
        We primarily take submissions via Notion, also you can send us a mail if
        you do not want to use notion, but if you want to keep your writings
        intact and same styling then we reccomend using notion
      </div>
      <div className="grid  gap-3 lg:grid-cols-3 md:grid-cols-2 justify-between">
        <CaseNotion />
        <CaseMarkDown />
        <CasePlain />
      </div>
    </div>
  );
}
