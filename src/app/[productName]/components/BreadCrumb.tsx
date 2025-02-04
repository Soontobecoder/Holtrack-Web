interface Props {
  url: string;
}

export const BreadCrumb: React.FC<Props> = ({ url }) => {
  return (
    <nav className="w-full bg-neutral-300 p-5" style={{ paddingLeft: "15%" }}>
      <ol className="list-reset text-lg flex">
        <li>
          <a
            href="/services"
            className="text-warning transition duration-150 ease-in-out hover:text-warning-accent-300 focus:text-warning-accent-300 active:text-warning-accent-300 motion-reduce:transition-none"
          >
            Products
          </a>
        </li>
        <li>
          <span className="mx-2 text-white">/</span>
        </li>
        <li className="text-white">{url}</li>
      </ol>
    </nav>
  );
};
