import Link from "next/link";

interface Props {
  image: string;
  body: string;
  title: string;
  link: string;
}

export const CardImages: React.FC<Props> = ({ image, body, title, link }) => {
  return (
    <Link href={link}>
      <div className="flex bg-primary-900 flex-row block h-full w-full transition-all duration-300 hover:shadow-5-strong rounded-xl text-white shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <img
          className="w-full mt-6 ml-6 rounded-xl h-32 w-48 "
          src={image}
          alt=""
        />
        <div>
          <div className="p-6 pb-3 font-semibold text-xl">{title}</div>
          <div className="p-6 pt-0">
            <p style={{ fontSize: "13px" }}>{body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
