"use client";
import { useEffect } from "react";

export const Tabs = () => {
  useEffect(() => {
    const init = async () => {
      const { Tab, initTWE } = await import("tw-elements");
      initTWE({ Tab });
    };
    init();
  }, []);
  return (
    <div className="xl:flex">
      <ul
        className="flex me-4 list-none flex-col flex-wrap ps-0 xl:w-1/3"
        role="tablist"
        data-twe-nav-ref
      >
        <li role="presentation" className="flex-grow">
          <a
            href="#tabs-home03"
            className="flex justify-center xl:justify-end my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:text-warning data-[twe-nav-active]:bg-white data-[twe-nav-active]:rounded-lg dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-home03"
            data-twe-nav-active
            role="tab"
            aria-controls="tabs-home03"
            aria-selected="true"
          >
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h4l3 8 4-16 3 8h4"
              />
            </svg>
            Discovery & design
          </a>
        </li>
        <li role="presentation" className="flex-grow">
          <a
            href="#tabs-profile03"
            className="my-2 block border-x-0 flex justify-center xl:justify-end border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:text-warning data-[twe-nav-active]:bg-white data-[twe-nav-active]:rounded-lg dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-profile03"
            role="tab"
            aria-controls="tabs-profile03"
            aria-selected="false"
          >
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h4l3 8 4-16 3 8h4"
              />
            </svg>
            Profile
          </a>
        </li>
        <li role="presentation" className="flex-grow">
          <a
            href="#tabs-messages03"
            className="my-2 block border-x-0 flex justify-center xl:justify-end border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:text-warning data-[twe-nav-active]:bg-white data-[twe-nav-active]:rounded-lg dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-messages03"
            role="tab"
            aria-controls="tabs-messages03"
            aria-selected="false"
          >
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h4l3 8 4-16 3 8h4"
              />
            </svg>
            Messages
          </a>
        </li>
        <li role="presentation" className="flex-grow">
          <a
            href="#tabs-contact03"
            className="disabled pointer-events-none flex justify-center xl:justify-end my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
            data-twe-toggle="pill"
            data-twe-target="#tabs-contact03"
            role="tab"
            aria-controls="tabs-contact03"
            aria-selected="false"
          >
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h4l3 8 4-16 3 8h4"
              />
            </svg>
            Contact
          </a>
        </li>
      </ul>

      {/* <!--Tabs content--> */}
      <div className="my-2 text-black bg-white p-12 rounded-lg grow xl:w-2/3">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-home03"
          role="tabpanel"
          aria-labelledby="tabs-home-tab03"
          data-twe-tab-active
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-profile03"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab03"
        >
          Tab 2 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-messages03"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab03"
        >
          Tab 3 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-contact03"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab03"
        >
          Tab 4 content
        </div>
      </div>
    </div>
  );
};
