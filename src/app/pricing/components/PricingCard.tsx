import { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
  title: string;
  features: string[];
  nonFeatures: string[];
  onTitleClick: (title: string) => void;
}

export const PricingCard: React.FC<Props> = ({
  className,
  style,
  features,
  nonFeatures,
  onTitleClick,
  title,
}) => {
  return (
    <div
      className={`w-full group max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${className}`}
      style={{ ...style, width: "800px" }}
    >
      <h5 className=" text-xl font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        {/* <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span> */}
      </div>
      <ul role="list" className="space-y-5 my-7">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              {feature}
            </span>
          </li>
        ))}
        {nonFeatures.map((nonFeature, index) => (
          <li key={index} className="flex line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              {nonFeature}
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        value={title}
        onClick={() => onTitleClick(title)}
        className="text-white bg-warning hover:bg-warning-800 focus:ring-4 focus:outline-none focus:ring-warning-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Contact Us Now!
      </button>
    </div>
  );
};
