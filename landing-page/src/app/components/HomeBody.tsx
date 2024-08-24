import { CSSProperties } from "react";
import { Card } from "../components/Card";

interface HeaderProps {
  style?: CSSProperties;
  className?: string;
}

export const HomeBody: React.FC<HeaderProps> = ({ className, style }) => {
  return (
    <div
      style={{
        clipPath: "polygon(100% 0, 100% 86%, 0 100%, 0 14%)",
        backgroundColor: "#00263A",
        paddingBottom: "150px",
        paddingTop: "150px",
      }}
    >
      <h1 className="text-6xl text-center text-white">
        Securing and automating warehouse management
      </h1>
      <footer className="block pb-10 text-center font-light leading-relaxed mt-1 text-white text-xl">
        Someone famous in <cite>Source Title</cite>
      </footer>
      <div className="mt-10 grid grid-cols-5 gap-4">
        <div className="col-start-2 md:col-start-2 col-span-3 md:col-span-1">
          <Card
            cardTitle="Location Tracking & Visibility"
            cardBody="The location of your most important assets and inventory is critical information. A technological tracking solution provides you with the most accurate location information on all items that are tagged and scanned."
            link="google.com"
          />
        </div>
        <div className="col-start-2 md:col-start-3 col-span-3 md:col-span-1">
          <Card
            cardTitle="Inventory Management"
            cardBody="Make asset and inventory management easier with tailored data collection solutions that improve visibility and data accuracy."
            link="google.com"
          />
        </div>
        <div className="col-start-2 col-span-3 md:col-span-1">
          <Card
            cardTitle="testing"
            cardBody="lorem ipsum bang"
            link="google.com"
          />
        </div>
        <div className="col-start-2 col-span-3 md:col-span-1 md:col-start-2">
          <Card
            cardTitle="testing"
            cardBody="lorem ipsum bang"
            link="google.com"
          />
        </div>
        <div className="col-start-2 col-span-3 md:col-span-1 md:col-start-3">
          <Card
            cardTitle="testing"
            cardBody="lorem ipsum bang"
            link="google.com"
          />
        </div>
        <div className="col-start-2 col-span-3 md:col-span-1 md:col-start-4">
          <Card
            cardTitle="testing"
            cardBody="lorem ipsum bang"
            link="google.com"
          />
        </div>
      </div>
    </div>
  );
};
