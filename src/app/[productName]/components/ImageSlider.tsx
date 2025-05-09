"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  datas: any;
  onSlideChange?: (index: number) => void;
}

export const ImageSlider: React.FC<Props> = ({ datas, onSlideChange }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const currentDiv = (n: number) => {
    setSlideIndex(n);
    onSlideChange && onSlideChange(n);
  };

  return (
    <div className="container">
      {/* Slideshow Images */}
      <div className="relative justify-center flex h-96 ">
        {datas.map((data: any, index: number) => (
          <Image
            key={index}
            width={600}
            height={400}
            className={`shadow-lg rounded-lg ${
              slideIndex === index + 1 ? "" : "hidden"
            }`}
            src={data.image}
            alt={data.name}
          />
        ))}
      </div>

      {/* Image Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {datas.map((data: any, index: number) => (
          <div className="relative" key={index}>
            {slideIndex === index + 1 && (
              <div className="absolute inset-0 bg-black opacity-15 rounded-lg"></div>
            )}
            <Image
              width={100}
              height={100}
              className={`demo w-full h-full ${
                slideIndex === index + 1
                  ? "opacity-100 shadow-xl"
                  : "opacity-70 shadow-md"
              } cursor-pointer hover:opacity-100 rounded-lg border-2 transition`}
              src={data.image}
              alt={data.name}
              onClick={() => currentDiv(index + 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
