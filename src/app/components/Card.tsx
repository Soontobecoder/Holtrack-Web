import Link from "next/link";
import { ReactNode } from "react";
interface CardProps {
  cardTitle: string;
  cardBody: string;
  link: string;
  svg?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  cardTitle,
  cardBody,
  link,
  svg,
}) => {
  return (
    <div className="pop-in pb-12 relative group md:h-full block mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
      <div className="flex items-center space-x-3 group-hover:text-white text-black">
        {svg ? (
          svg
        ) : (
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        )}
        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
          {cardTitle}
        </h3>
      </div>
      <p className="text-slate-500 group-hover:text-white text-xs md:text-sm">
        {cardBody}
      </p>
      <Link href={link}>
        <button className="absolute bottom-1 group-hover:text-white text-black right-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center">
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};
