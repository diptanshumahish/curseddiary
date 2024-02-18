import React from "react";

export default function SubmitThanks() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="lg:text-6xl text-xl">Thanks for being here ^^</h2>
      <span className="text-slate-300">
        It would be really great of you, if you submit us some incidents. We
        would love to hear from you. In case you have any questions about
        submisisons then feel free to mail us at{" "}
        <a
          href="mailto:submissionsforcurseddiary@gmail.com"
          className="underline text-white"
        >
          submissionsforcurseddiary@gmail.com ✨
        </a>
      </span>
    </div>
  );
}
