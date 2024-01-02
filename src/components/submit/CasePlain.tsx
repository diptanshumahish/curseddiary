import { Mail } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function CasePlain() {
  return (
    <div className="flex flex-col gap-2 py-4  border border-white border-opacity-40 p-4 rounded-md">
      <span className="text-2xl">📄 PLAIN CONTENT SUBMISSIONS</span>
      <h3>
        If you just want to submit or share an experience and get it written by
        us then follow these guidelines.
      </h3>
      <hr />
      <span>Your email must have the following info</span>
      <div className="flex flex-col gap-1 opacity-70">
        <span>
          1. A link to a cover image , if not available then no issues
        </span>
        <span>
          2. A heading for the document(must)
          <span className="bg-slate-700 font-mono px-1 text-white">h1</span>
          must be there
        </span>
        <span>3. A mini description, if possible</span>
        <span>
          4. Any images for the same, if available then good, but provide
          context and captions
        </span>

        <span>
          5. Add your author name, it will be public, if you want to publish
          anonymously then skip the next steps, and mention that you want to
          post anonymously.
        </span>
        <span>
          6. In some words describe a bit about yourself, it would be public as
          well
        </span>
        <span>7. Add your email</span>
        <span>
          8. If you are writing some urban legends, then mention the country{" "}
        </span>
      </div>
      <span className="opacity-45">If you are ready then submit it here</span>
      <Link
        href="mailto:submissionsforcurseddiary@gmail.com?cc=diptanshumahish2016@gmail.com&subject=Submission%20for%20content%20via%20plain%20details"
        className="bg-white  px-4 py-2 justify-between flex items-center gap-4 rounded-md lg:w-fit text-black "
      >
        <Mail size={20} /> Submit it here
      </Link>
    </div>
  );
}
