import { CSSProperties } from "react";

interface CardProps {
  style?: CSSProperties;
  className?: string;
}

export const CardBody: React.FC<CardProps> = ({ style, className }) => {
  return (
    <div
      className={className + " grid xl:grid-cols-8 gap-10"}
      style={{
        ...style,
        backgroundColor: "#EEEEEF",
        paddingTop: "150px",
        paddingBottom: "50px",
        clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="self-center mx-12 xl:mx-auto xl:row-start-1 xl:col-start-5 xl:col-span-3">
        {" "}
        <img
          src="https://plus.unsplash.com/premium_photo-1661764559869-f6052a14b4c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-lg"
          alt="..."
          style={{ width: "600px" }}
        />
      </div>
      <div className="text-black flex flex-col mx-12 xl:mx-0 xl:col-start-2 xl:col-span-3">
        <h2 className="text-4xl font-semibold mb-6">
          Dedicated <span className="text-warning"> Customer Support </span>
        </h2>
        <h4 className="my-auto text-xl font-light leading-relaxed">
          Our Dedicated Customer Support ensures that you’re never alone in
          managing your technology. We provide personalized assistance tailored
          to your unique needs, offering expert guidance from the initial setup
          to ongoing maintenance. Whether you need troubleshooting help,
          technical advice, or hands-on support, our knowledgeable team is
          available to ensure your operations run smoothly and efficiently.
          We&apos;re committed to delivering timely solutions that keep your
          business moving forward, minimizing downtime and maximizing
          productivity. Your success is our priority, and we&apos;re here to
          back you every step of the way.
        </h4>
      </div>
    </div>
  );
};
