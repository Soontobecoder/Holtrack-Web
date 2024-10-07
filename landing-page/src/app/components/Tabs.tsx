"use client";
import { useEffect } from "react";
import { CSSProperties } from "react";

interface TabProps {
  style?: CSSProperties;
  className?: string;
}

export const Tabs: React.FC<TabProps> = ({ style, className }) => {
  useEffect(() => {
    const init = async () => {
      const { Tab, initTWE } = await import("tw-elements");
      initTWE({ Tab });
    };
    init();
  }, []);
  return (
    <div className={className + ""} style={style}>
      {/* nav header */}
      <ul
        className="flex list-none flex-row flex-wrap border-b-0 ps-0"
        role="tablist"
        data-twe-nav-ref
      >
        <li role="presentation" className="flex-grow basis-0 text-center">
          <a
            href="#tabs-home02"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:bg-white data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-home02"
            data-twe-nav-active
            role="tab"
            aria-controls="tabs-home02"
            aria-selected="true"
          >
            About Us
          </a>
        </li>
        <li role="presentation" className="flex-grow basis-0 text-center">
          <a
            href="#tabs-profile02"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:bg-white data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-profile02"
            role="tab"
            aria-controls="tabs-profile02"
            aria-selected="false"
          >
            Our Mission
          </a>
        </li>
        <li role="presentation" className="flex-grow basis-0 text-center">
          <a
            href="#tabs-messages02"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:bg-white data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-messages02"
            role="tab"
            aria-controls="tabs-messages02"
            aria-selected="false"
          >
            Our Vision
          </a>
        </li>
      </ul>

      {/* content */}
      <div
        className="bg-white rounded-lg text-black "
        style={{ marginTop: "-8px" }}
      >
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-home02"
          role="tabpanel"
          aria-labelledby="tabs-home-tab02"
          data-twe-tab-active
        >
          <div className="grid xl:grid-cols-6 p-12 gap-10">
            <div className="xl:col-start-1 xl:col-span-2 self-center">
              <img
                src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
                className="h-auto max-w-full rounded-lg"
                alt="..."
              />
            </div>
            <div className="xl:col-span-4">
              {" "}
              <div className="mb-4">
                <h1 className=" text-5xl font-medium leading-tight text-primary">
                  What is Lorem Ipsum?
                </h1>
                <footer className="block text-neutral-600 dark:text-neutral-400">
                  - Someone famous in <cite>Source Title</cite>
                </footer>
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-profile02"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab02"
        >
          <div className="grid xl:grid-cols-6 p-12 gap-10">
            <div className="xl:col-start-1 xl:col-span-2 self-center">
              <img
                src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
                className="h-auto max-w-full rounded-lg"
                alt="..."
              />
            </div>
            <div className="xl:col-span-4">
              {" "}
              <div className="mb-4">
                <h1 className=" text-5xl font-medium leading-tight text-primary">
                  What is Lorem Ipsum?
                </h1>
                <footer className="block text-neutral-600 dark:text-neutral-400">
                  - Someone famous in <cite>Source Title</cite>
                </footer>
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-messages02"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab02"
        >
          <div className="grid xl:grid-cols-6 p-12 gap-10">
            <div className="xl:col-start-1 xl:col-span-2 self-center">
              <img
                src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
                className="h-auto max-w-full rounded-lg"
                alt="..."
              />
            </div>
            <div className="xl:col-span-4">
              {" "}
              <div className="mb-4">
                <h1 className=" text-5xl font-medium leading-tight text-primary">
                  What is Lorem Ipsum?
                </h1>
                <footer className="block text-neutral-600 dark:text-neutral-400">
                  - Someone famous in <cite>Source Title</cite>
                </footer>
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-contact02"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab02"
        >
          Tab 4 content
        </div>
      </div>
    </div>
  );
};
