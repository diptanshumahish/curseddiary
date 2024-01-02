import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

export default function CaseMarkDown() {
  return (
    <div className="flex flex-col gap-2 py-4  border border-white border-opacity-40 p-4 rounded-md">
      <span className="text-2xl">📄 MARKDOWN SUBMISSIONS</span>
      <h3>If you are using Markdown format then follow these guidelines</h3>
      <hr />
      <span>Your Markdown file must have the following sections</span>
      <div className="flex flex-col gap-1 opacity-70">
        <span>
          1. A link to the cover image must be available in your .md document
        </span>
        <span>
          2. A heading for the document in{" "}
          <span className="bg-slate-700 font-mono px-1 text-white">h1</span>{" "}
          must be there
        </span>
        <span>3. A mini description about the content in some 30 words</span>
        <span>
          4. Any Image with link that you use in your file must have captions
        </span>
        <span>
          5. Try not to write the entire thing in a single para, divide
          everything into headings and small paras
        </span>
        <span>6. Add your author name, it will be public</span>
        <span>
          7. In some words describe a bit about yourself, it would be public as
          well
        </span>
        <span>8. Add your email</span>
        <span>
          9. If you are writing some urban legends, then mention the country{" "}
        </span>
        <span>10. Check out this markdown design</span>
      </div>
      <Link
        href="/md/testfile.md"
        className="bg-[#ffffff0d]  border border-white border-opacity-20 px-4 py-2 w-fit rounded-md text-white "
      >
        ✅ Here is a Markdown file of how your files should be organised{" "}
        <span className="underline">click here</span>
      </Link>
      <span className="opacity-45">If you are ready then submit it here</span>
      <Link
        href="mailto:submissionsforcurseddiary@gmail.com?cc=diptanshumahish2016@gmail.com&subject=Submission%20for%20content%20via%20markdown"
        className="bg-white  px-4 py-2 justify-between flex items-center gap-4 rounded-md lg:w-fit text-black "
      >
        <Mail size={20} /> Submit it here
      </Link>
    </div>
  );
}
