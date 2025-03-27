import { CSSProperties } from "react";
import Image from "next/image";
interface Props {
  className?: string;
  style?: CSSProperties;
  item: any;
}

export const ProductCard: React.FC<Props> = ({ className, style, item }) => {
  return (
    <div style={style} className={className + ""}>
      <Image
        src={item.device[0].image}
        width={300}
        height={300}
        className="h-auto xl:max-w-xs rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
        alt=""
      />
      <div className="flex justify-between">
        <p className="font-bold">{item.device[0].name}</p>
      </div>
      <p>{item.device[0].type}</p>
      <button
        type="button"
        className="inline-block w-full mx-auto rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none"
      >
        See more
      </button>
    </div>
  );
};
