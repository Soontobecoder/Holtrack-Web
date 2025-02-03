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
      <div className="self-center mx-12 xl:mx-auto xl:col-start-2 xl:col-span-3">
        {" "}
        <img
          src="https://plus.unsplash.com/premium_photo-1661764559869-f6052a14b4c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-lg"
          alt="..."
          style={{ width: "600px" }}
        />
      </div>
      <div className="text-black flex flex-col mx-12 xl:mx-0 xl:col-start-5 xl:col-span-3">
        <h2 className="text-4xl font-semibold mb-6">
          Dedicated <span className="text-warning"> Support </span>
        </h2>
        <h4 className="my-auto text-xl font-light leading-relaxed">
          Holtrack specializes in implementing and integrating Radio Frequency
          Identification (RFID) technology and tailored solutions to meet the
          unique needs of every client. Our company takes on the current
          challenges faced by warehouses and retail industries and provides them
          with a unique automated system to streamline operations, improve
          inventory accuracy, and increase overall efficiency. By leveraging
          cutting-edge RFID technology, we deliver scalable solutions that offer
          real-time visibility into assets, inventory, and supply chain
          processes.
        </h4>
      </div>
    </div>
  );
};
