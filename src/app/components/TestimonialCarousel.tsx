"use client";
import { useEffect } from "react";
import { CSSProperties } from "react";
import Akebono from "../assets/Akebono.png";
import Image from "next/image";

export const TestimonialCarousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <>
      <h2 className="pt-[100px] xl:pt-[150px] text-4xl text-black text-center mb-5 font-semibold">
        Our <span className="text-warning"> Partners </span>
      </h2>
      <footer className="block px-[50px] xl:px-[600px] text-center text-xl mb-10 text-neutral-600">
        We take pride in our collaborations across industries, helping partners
        achieve success through tailored solutions. At Holtrack, every
        partnership is built on innovation, delivering exceptional value and
        growth for all stakeholders.
      </footer>
      <div className="pb-[100px] xl:pb-[150px] grid grid-cols-8 gap-10">
        <div className="col-start-2 col-span-6">
          <div
            id="carouselExampleCaptions"
            className="relative"
            data-twe-carousel-init
            data-twe-carousel-slide
          >
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {/* <!--First Testimonial / Carousel item--> */}
              <div
                className="relative float-left hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-active
                data-twe-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                {/* <p className="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
            &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fugit, error amet numquam iure provident voluptate esse quasi,
            voluptas nostrum quisquam!&quot;
          </p>

          <p className="text-neutral-500 mt-4 dark:text-neutral-300">
            - Anna Morian
          </p> */}
                <div className="mx-12 flex flex-wrap items-center justify-center gap-12">
                  <Image
                    style={{ width: "300px", height: "120px" }}
                    alt="akebono member of astra"
                    src={Akebono}
                  />
                </div>
              </div>

              {/* <!--Second Testimonial / Carousel item--> */}
              <div
                className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="mx-12 flex flex-wrap items-center justify-center gap-12">
                  <Image
                    style={{ width: "300px", height: "120px" }}
                    alt="akebono member of astra"
                    src={Akebono}
                  />
                </div>
              </div>

              {/* <!--Third Testimonial / Carousel item--> */}
              <div
                className="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="mx-12 flex flex-wrap items-center justify-center gap-12">
                  <Image
                    style={{ width: "300px", height: "120px" }}
                    alt="akebono member of astra"
                    src={Akebono}
                  />
                </div>
              </div>
            </div>
            {/* <!--Carousel Controls - prev item--> */}
            <button
              className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
              type="button"
              data-twe-target="#carouselExampleCaptions"
              data-twe-slide="prev"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            {/* <!--Carousel Controls - next item--> */}
            <button
              className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
              type="button"
              data-twe-target="#carouselExampleCaptions"
              data-twe-slide="next"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
