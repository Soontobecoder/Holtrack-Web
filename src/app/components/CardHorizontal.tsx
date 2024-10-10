"use client";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";

interface CardHorizontal {
  style?: CSSProperties;
  className?: string;
  cardTitle: string;
}

export const CardHorizontal: React.FC<CardHorizontal> = ({
  className,
  style,
  cardTitle,
}) => {
  useEffect(() => {
    const init = async () => {
      const { Dropdown, Ripple, initTWE } = await import("tw-elements");
      initTWE({ Dropdown, Ripple });
    };
    init();
  }, []);
  const [selected, setSelected] = useState("Please select your option...");

  function onClick(selectedOption: string) {
    setSelected(selectedOption);
  }

  return (
    <div className="grid grid-cols-8 gap-4">
      <div
        style={{ zIndex: "10" }}
        className="col-start-2 col-span-6 xl:col-start-3 xl:col-span-4"
      >
        <div
          style={{ ...style }}
          className={
            className +
            " block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark"
          }
        >
          <div className="xl:flex justify-evenly items-center p-6 text-surface dark:text-white">
            <div className="flex xl:mr-10 mb-4 xl:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <h5 className="text-xl font-medium leading-tight">{cardTitle}</h5>
            </div>
            <div
              className="mb-4 xl:mb-0 grow justify-center relative"
              data-twe-dropdown-position="dropend"
            >
              <button
                className="flex block w-full justify-between items-center rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black hover:text-white shadow-4-strong transition duration-150 ease-in-out hover:bg-warning hover:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
                id="dropdownMenuButton1e"
                data-twe-dropdown-toggle-ref
                aria-expanded="false"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                {selected}
                <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <ul
                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                aria-labelledby="dropdownMenuButton1e"
                data-twe-dropdown-menu-ref
              >
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    data-twe-dropdown-item-ref
                    onClick={() => onClick("contact")}
                  >
                    I&apos;m interested in RFID Technologies
                  </a>
                </li>
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    data-twe-dropdown-item-ref
                    onClick={() => onClick("pricing")}
                  >
                    I need prices
                  </a>
                </li>
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    data-twe-dropdown-item-ref
                    onClick={() => onClick("contact")}
                  >
                    I need technical support
                  </a>
                </li>
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    data-twe-dropdown-item-ref
                    onClick={() => onClick("Something else here")}
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="justify-center">
              <button
                type="button"
                className="xl:ml-10 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-warning-3 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-warning-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
