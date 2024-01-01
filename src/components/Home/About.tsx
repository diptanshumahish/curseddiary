import React from "react";

export default function About() {
  return (
    <div className="px-[5%] text-white flex flex-col gap-4 ">
      <h2 className="lg:text-4xl md:text-2xl text-xl" style={{}}>
        About Cursed Diary
      </h2>
      <div className="pb-4">
        Made this website out of sheer fun. I really love reading and writing
        about random horror/ creepy stuff. Hence why not make out a cool website
        out of it. This website mainly has two sections as of now, the stories
        and the real life events. The stories are divided into various tags such
        as horror, true life, real events. The <b>folklores</b> and the real
        life events are divided into countries. You can submit your stories if
        you want to by mailing me the stories{" "}
        <a href="mailto:diptanshumahish2016@gmail.com?subject=For%20Cursed%20Diary%20:%20Story%20Submission">
          Submit here
        </a>
      </div>
    </div>
  );
}
