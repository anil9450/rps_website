// components/Marquee.jsx
"use client";
import React from "react";

export default function Marquee({
  text = "Your scrolling text goes here",
  duration = 10,
}) {
  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full bg-gray-100">
      <div
        className="inline-block"
        style={{
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {text}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
