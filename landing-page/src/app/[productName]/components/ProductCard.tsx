interface Props {
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className + " py-4"}>
      <img
        src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
        className="h-auto xl:max-w-xs rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
        alt=""
      />
      <div className="flex justify-between">
        <p className="font-bold">Product.name</p>
        <p>test</p>
      </div>
      <p>Test</p>
      <button
        type="button"
        className="inline-block w-full mx-auto rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      >
        See more
      </button>
    </div>
  );
};
