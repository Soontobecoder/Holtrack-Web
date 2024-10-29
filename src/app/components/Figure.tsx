import { CSSProperties } from "react";

interface FigureProps {
  image: string;
  caption: string;
  className?: string;
  style?: CSSProperties;
}

export const Figure: React.FC<FigureProps> = ({
  image,
  caption,
  className,
  style,
}) => {
  return (
    <figure
      style={{ ...style }}
      className={"mb-4 inline-block max-w-sm " + className}
    >
      <img
        src={image}
        className="h-auto max-w-xs md:max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
        alt=""
      />
      <figcaption className="text-sm text-neutral-300 dark:text-neutral-400">
        {caption}
      </figcaption>
    </figure>
  );
};
