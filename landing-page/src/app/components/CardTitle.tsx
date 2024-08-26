"use client";
import { useEffect } from "react";
import { CSSProperties } from "react";

interface CardTitle {
  style?: CSSProperties;
  className?: string;
  cardTitle: string;
  cardBody: string;
  image: string;
}

export const CardTitle: React.FC<CardTitle> = ({
  className,
  style,
  cardTitle,
  cardBody,
  image,
}) => {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTWE } = await import("tw-elements");
      initTWE({ Ripple });
    };
    init();
  }, []);

  return (
    <div
      style={{ ...style }}
      className="hover:animate-pulse block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark"
    >
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img className="rounded-t-lg" src={image} alt="" />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6 text-surface dark:text-white">
        <h5 className="mb-2 text-xl font-medium leading-tight">{cardTitle}</h5>
        <p className="mb-4 text-base">{cardBody}</p>
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          Button
        </button>
      </div>
    </div>
  );
};
