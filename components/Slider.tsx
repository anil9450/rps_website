"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/slider/image1.jpg",
  "/slider/image2.jpg",
  "/slider/image3.jpg",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-9xl mx-auto overflow-hidden rounded-lg">
      {/* Slider Images */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="min-w-full h-64 sm:h-96 relative" key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
