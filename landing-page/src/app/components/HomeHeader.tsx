"use client";
import { useState, useEffect } from "react";
import { CSSProperties } from "react";
interface HeaderProps {
  style?: CSSProperties;
  className?: string;
}

export const HomeHeader: React.FC<HeaderProps> = ({ className, style }) => {
  const [padding, setPadding] = useState("200px");
  const [paddingBottom, setPaddingBottom] = useState("0px");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        // 1280px is the default `xl` breakpoint in Tailwind CSS
        setPadding("80px");
        setPaddingBottom("130px");
      } else {
        setPadding("200px");
        setPaddingBottom("200px");
      }
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-cover bg-no-repeat bg-[url('https://cdnblog.picsart.com/2022/02/devs.jpg')] top-20 relative w-full border rounded-lg shadow ">
      <div
        style={{
          padding,
          paddingBottom,
        }}
        className="bg-black/60 xl:grid grid-cols-6 gap-5"
      >
        <div className="col-span-6 xl:col-span-3">
          <h1 className="text-5xl font-medium leading-tight">
            All in <span className="text-warning">One</span> Solutions for Easy
            Warehousing
          </h1>
        </div>
        <div className="row-start-2 col-span-6 xl:mt-0 mt-4 xl:col-span-3">
          <p style={{ fontSize: "20px" }} className=" text-justify">
            We specialize in integrating RFID technology into warehouse
            management systems and beyond. Designed to be flexible, scalable,
            and tailored to meet the unique needs of your business.
          </p>
        </div>
      </div>
    </div>
  );
};
