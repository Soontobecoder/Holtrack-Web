interface Props {
  title: string;
  body: string;
  id: number;
}

const Card: React.FC<Props> = ({ id, title, body }) => {
  return (
    <div className="flex gap-8 items-center xl:w-max rounded-xl bg-white p-6 text-surface shadow-xl shadow-xl/30">
      <div className="relative flex items-center justify-center font-bold text-white text-lg">
        {/* Outer circle */}
        <div className="absolute w-12 h-12 bg-warning-300 rounded-full animate-strobe z-0"></div>
        {/* Inner circle */}
        <div className="absolute w-8 h-8 bg-warning-500 rounded-full animate-strobe-delay z-10"></div>
        {/* ID number on top */}
        <div className="relative z-20">{id}</div>
      </div>
      <div>
        <h5 className="mb-2 text-warning text-xl font-medium leading-tight">
          {title}
        </h5>
        <p className="mb-4 text-base">{body}</p>
      </div>
    </div>
  );
};

export default Card;
