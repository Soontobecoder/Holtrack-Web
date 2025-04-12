interface Props {
  data: {
    author: string;
    description: string;
  };
}

export const Avatar: React.FC<Props> = ({ data }) => {
  return (
    <div className="text-center flex">
      <img
        src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
        className="mx-auto mb-4 w-32 rounded-lg"
        alt="Avatar"
      />
      <div className="flex flex-col items-start p-2">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          {data.author}
        </h5>
        <p className="text-neutral-500 text-start dark:text-neutral-400">
          {data.description}
        </p>
      </div>
    </div>
  );
};
