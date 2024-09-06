import { CSSProperties } from "react";

interface CardProps {
  style?: CSSProperties;
  className?: string;
}

export const CardBody: React.FC<CardProps> = ({ style, className }) => {
  return (
    <div
      style={{
        ...style,
        paddingTop: "100px",
        paddingBottom: "100px",
        backgroundColor: "#E7E7E8",
        clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
      }}
      className={className + " grid xl:grid-cols-8 gap-10"}
    >
      <div className="self-center mx-12 xl:mx-0 xl:col-start-2 xl:col-span-3">
        {" "}
        <img
          src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
          className="rounded-lg h-auto max-w-full"
          alt="..."
        />
      </div>
      <div className="text-black mx-12 xl:mx-0 xl:col-start-5 xl:col-span-3">
        <h2 className="text-4xl font-semibold mb-6">
          Dedicated Customer support
        </h2>
        <h4 className="text-base font-light leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h4>
      </div>
    </div>
  );
};
