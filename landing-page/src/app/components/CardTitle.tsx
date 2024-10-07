"use client";
import { useEffect, CSSProperties, ReactNode } from "react";

interface CardTitle {
  style?: CSSProperties;
  className?: string;
  cardTitle: ReactNode;
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
      className="hover:bg-warning h-full group block rounded-lg bg-white shadow-secondary-1"
    >
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img
          style={{
            clipPath: "circle(38%)",
          }}
          className="rounded-t-lg h-48 mt-5 mb-5"
          src={image}
          alt=""
        />
        <div
          style={{
            clipPath: "circle(40%)",
          }}
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
        ></div>
      </div>
      <div className="p-6 group-hover:text-white text-surface">
        <h5 className="mb-2 text-xl font-medium leading-tight">{cardTitle}</h5>
        <p className="mb-4 text-base">{cardBody}</p>
      </div>
    </div>
  );
};
