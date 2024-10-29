"use client";
import { useState, useEffect } from "react";
import { RoICalculator } from "./components/RoICalculator";
import { CardHorizontal } from "../components/CardHorizontal";
import { Header } from "../components/Header";
import { PricingCard } from "./components/PricingCard";
import { Tabs } from "../about/components/Tabs";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { CardBody } from "./components/CardBody";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelect = (title: string) => {
    setSelectedPlan(title);
  };

  useEffect(() => {
    if (selectedPlan) {
      console.log(selectedPlan, " , you selected this");
    }
  }, [selectedPlan]); // This will log the updated state when `selectedPlan` changes

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Header
        Title={
          <>
            Our <span className="text-warning">Prices</span>
          </>
        }
        Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <CardHorizontal
        cardTitle="Need help?"
        className="drop-shadow-xl"
        style={{ marginTop: "-100px" }}
      />

      {/* Pricing Card */}
      <div className="text-center mb-4 pt-12">
        <h2 className="text-4xl text-black font-semibold">
          Our <span className="text-warning">Plans</span>
        </h2>
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extralight text-black">
          Discover our great plans and find what&apos;s best for your company
        </h2>
      </div>
      <div className="flex flex-col items-center xl:items-start xl:flex-row justify-center gap-6 pb-12">
        <div>
          <PricingCard
            title="Hardware Only"
            features={["Access to hardware catalog", "Feature explanation"]}
            nonFeatures={["Integration help", "Software integration"]}
            onTitleClick={handleSelect}
          />
        </div>
        <div>
          <PricingCard
            title="Basic Plan"
            features={[
              "RFID Tags",
              "Handheld Scanner",
              "Software + Integration help",
              "Antennas + Reader (customizable)",
            ]}
            nonFeatures={[
              "API Access",
              "Complete documentation",
              "24×7 phone & email support",
            ]}
            onTitleClick={handleSelect}
          />
        </div>
        <div>
          <PricingCard
            title="Personalized Plan"
            features={[
              "Contact us to know more about your personalized business needs regarding inventory management",
            ]}
            nonFeatures={[]}
            onTitleClick={handleSelect}
          />
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="text-center mb-3 pt-12">
        <h2 className="text-4xl text-black font-semibold">
          Our <span className="text-warning">RFID</span> Calculator
        </h2>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-extralight text-black">
          See how much you can save by implementing our solution
        </h2>
      </div>
      <RoICalculator />

      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "#EEEEEF",
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
        }}
      >
        <h2 className="mt-12 text-4xl text-black text-center mb-4 font-semibold">
          Our services
        </h2>
        <footer className="block text-center mb-8 text-neutral-600 dark:text-neutral-400">
          Our in-house professional services group is here to support you every
          step of the way. From project design, implementation, deployment, and
          training to depot repair, help desk, and on-site services.
        </footer>
        <div className="pt-12 pb-12 grid grid-cols-8 gap-10">
          <div className="col-start-2 col-span-6">
            <Tabs />
          </div>
        </div>
      </div>

      <h2 className="mt-12 text-4xl text-black text-center mb-12 font-semibold">
        Hear what our customers have to say!
      </h2>
      <div className="pt-[150px] pb-[150px] grid grid-cols-8 gap-10">
        <div className="col-start-2 col-span-6">
          <TestimonialCarousel />
        </div>
      </div>

      {/* Card Body */}
      <CardBody />
    </div>
  );
}
