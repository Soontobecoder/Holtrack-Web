"use client";
import { useState } from "react";

const images = [
  {
    src: "https://via.placeholder.com/1200x400?text=Nature+Wide",
    alt: "Nature Wide",
  },
  {
    src: "https://via.placeholder.com/1200x400?text=Snow+Wide",
    alt: "Snow Wide",
  },
  {
    src: "https://via.placeholder.com/1200x400?text=Mountains+Wide",
    alt: "Mountains Wide",
  },
];

export const ImageSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const currentDiv = (n: number) => {
    setSlideIndex(n);
  };

  return (
    <div className="container">
      <div className="w-full ">
        {/* Slideshow Images */}
        <div className="relative">
          {images.map((image, index) => (
            <img
              key={index}
              className={`w-full ${slideIndex === index + 1 ? "" : "hidden"}`}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>

        {/* Image Indicators */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {images.map((image, index) => (
            <img
              key={index}
              className={`demo ${
                slideIndex === index + 1 ? "opacity-100" : "opacity-50"
              } cursor-pointer hover:opacity-100 transition`}
              src={image.src}
              alt={image.alt}
              onClick={() => currentDiv(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
