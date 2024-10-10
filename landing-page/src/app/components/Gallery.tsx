"use client";
import { useEffect } from "react";
import { CSSProperties } from "react";

interface GalleryProps {
  style?: CSSProperties;
  className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ className, style }) => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      {/* <!--Carousel items--> */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* <!--First item--> */}
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          data-twe-carousel-active
        >
          <div className="grid grid-cols-4 gap-10">
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        {/* <!--Second item--> */}
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
        >
          <div className="grid grid-cols-4 gap-10">
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        {/* <!--Third item--> */}
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
        >
          <div className="grid grid-cols-4 gap-10">
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
            <div>
              <figure className="mb-4 inline-block max-w-sm">
                <img
                  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                  className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
                  alt="Taking up Water with a Spoon"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  A caption for the above image.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Carousel controls - prev item--> */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleControls"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      {/* <!--Carousel controls - next item--> */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleControls"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};
