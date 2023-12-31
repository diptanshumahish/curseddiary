"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";

export default function ReadTimeClient() {
  const [readingTime, setReadingTime] = useState<number | null>(null);

  useLayoutEffect(() => {
    const calculateReadingTime = () => {
      const textElement = document.getElementById("main_blog");
      const text = textElement?.innerText ?? "";
      const wpm = 183;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      setReadingTime(time);
    };

    calculateReadingTime();
  }, []);

  return (
    <div>
      {readingTime !== null ? (
        `${readingTime} mins`
      ) : (
        <div
          className={`inline-block animate-spin rounded-full border-t-4 border-white  border-opacity-25 h-8 w-8`}
        ></div>
      )}
    </div>
  );
}
