"use client";
import { Loader } from "lucide-react";
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
        <Loader className="animate-spin" />
      )}
    </div>
  );
}
