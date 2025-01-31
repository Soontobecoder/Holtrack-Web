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
    <figure style={{ ...style }} className={"mb-4 inline-block" + className}>
      <div className="w-128 h-64 overflow-hidden rounded-lg">
        <img
          src={image}
          className="w-full h-full object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          alt=""
        />
      </div>
      <figcaption className="text-sm text-neutral-300 dark:text-neutral-400">
        {caption}
      </figcaption>
    </figure>
  );
};
