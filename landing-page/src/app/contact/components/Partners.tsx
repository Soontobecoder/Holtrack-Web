import { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Partners: React.FC<Props> = ({ className, style }) => {
  return (
    <div className="bg-gray-600 p-12">
      <p className="text-center text-4xl mb-8">Our Partner</p>
      <div className="justify-center gap-6 items-center flex-col flex md:flex-row">
        <img
          src={"https://tecdn.b-cdn.net/img/new/standard/city/041.jpg"}
          className="w-[200px] rounded bg-white dark:border-neutral-700 dark:bg-neutral-800"
          alt="..."
        />
        <img
          src={"https://tecdn.b-cdn.net/img/new/standard/city/041.jpg"}
          className="w-[200px] rounded  bg-white dark:border-neutral-700 dark:bg-neutral-800"
          alt="..."
        />
        <img
          src={"https://tecdn.b-cdn.net/img/new/standard/city/041.jpg"}
          className="w-[200px] rounded  bg-white dark:border-neutral-700 dark:bg-neutral-800"
          alt="..."
        />
        <img
          src={"https://tecdn.b-cdn.net/img/new/standard/city/041.jpg"}
          className="w-[200px] rounded  bg-white dark:border-neutral-700 dark:bg-neutral-800"
          alt="..."
        />
      </div>
    </div>
  );
};
