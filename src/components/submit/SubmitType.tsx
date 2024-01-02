import React from "react";

interface Props {
  type: string;
}
export default function SubmitType({ type }: Props) {
  return (
    <div className="bg-[#f0f0f013] border border-white border-opacity-15 px-4 py-2 rounded-sm">
      {type}
    </div>
  );
}
