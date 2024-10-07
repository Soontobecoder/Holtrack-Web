"use client";
import { useRouter } from "next/navigation";
import Datas from "../shared/products.json";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { BreadCrumb } from "./components/BreadCrumb";
import { ProductCard } from "./components/ProductCard";

interface Data {
  id: number;
  assetType:
    | "RFIDTag"
    | "Antenna"
    | "FixedReader"
    | "GateWay"
    | "HandheldReader"
    | "Printer";
  device: Array<RFIDTag | Antenna | FixedReader | GateWay | Handheld | Printer>;
}

interface RFIDTag {
  orderQuantity: string;
  features: Array<string>;
  tagType: string;
  name: string;
  dimension: string;
  application: Array<string>;
}

interface Antenna {
  dimension: string;
  weight: number;
  chord: string;
  temperature: string;
  color: string;
  name: string;
  material: string;
}

interface FixedReader {
  orderQuantity: string;
  features: Array<string>;
  weight: number;
  range: string;
  speed: string;
  RFPower: string;
  RFInterface: string;
  communicationPort: string;
  powerConsumption: string;
  voltage: string;
  material: string;
  name: string;
  dimension: string;
  application: Array<string>;
}

interface GateWay {
  dimension: string;
  weight: number;
  name: string;
  antenna: string;
  frequency: string;
  RFPower: string;
  speed: string;
  trigger: string;
  notification: string;
  range: string;
  communicationPort: string;
  powerConsumption: string;
  voltage: string;
  material: string;
  temperature: string;
  humidity: string;
}

interface Handheld {
  dimension: string;
  weight: number;
  range: string;
  display: string;
  OS: string;
  CPU: string;
  storage: string;
  dataCommunication: {
    WWAN: string;
    WLAN: string;
    WPAN: string;
    GPS: string;
  };
}

interface Printer {
  printMode: string;
  dimension: string;
  weight: number;
  speed: string;
  interface: string;
  maximumPrintWidth: string;
  RFID: Array<{
    spec: string;
  }>;
}

export default function ProductDetails({
  params,
}: {
  params: { productName: string };
}) {
  const router = useRouter();

  const data: Data | undefined = Datas.find(
    (el) => el.assetType == params.productName
  );

  useEffect(() => {
    if (!data) {
      router.replace("/404");
    }
  }, [data, router]);

  if (!data) {
    return null; // Or you could show a loading spinner until the redirect happens
  }

  const renderDetails = () => {
    switch (data.assetType) {
      case "RFIDTag":
        const rfidTag = data as RFIDTag;
        return (
          <div>
            <h1>{rfidTag.name}</h1>
            <p>{rfidTag.dimension}</p>
            {/* render other properties specific to RFIDTag */}
          </div>
        );
      case "Antenna":
        const antenna = data as Antenna;
        return (
          <div>
            <h1>{antenna.name}</h1>
            <p>{antenna.dimension}</p>
            {/* render other properties specific to Antenna */}
          </div>
        );
      case "FixedReader":
        const fixedReader = data as FixedReader;
        return (
          <div>
            <h1>{fixedReader.name}</h1>
            <p>{fixedReader.dimension}</p>
            {/* render other properties specific to fixedReader */}
          </div>
        );
      case "GateWay":
        const gateWay = data as GateWay;
        return (
          <div>
            <h1>{gateWay.name}</h1>
            <p>{gateWay.dimension}</p>
            {/* render other properties specific to gateWay */}
          </div>
        );
      // You can add more cases for FixedReader, GateWay, etc.
      default:
        return <p>Unknown asset type</p>;
    }
  };

  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <Header Title="Products" />
      <BreadCrumb url={data.assetType} />
      <div className="xl:grid px-[5%] pt-12 grid-cols-8 gap-4">
        <div className="col-span-2 flex flex-col items-center xl:border-r-4">
          <h1 className="text-center text-xl"> Explore our Other Products</h1>
          <div className="xl:block flex gap-10 w-full xl:w-max overflow-x-scroll xl:overflow-hidden pt-5 py-4">
            {Datas.map(
              (item, index) =>
                item.assetType !== params.productName && (
                  <ProductCard
                    key={item.id}
                    className={`shrink-0 w-64 xl:w-full ${
                      index === Datas.length - 1 ? "" : "xl:border-b-2"
                    }`}
                  />
                )
            )}
          </div>
        </div>
        <div>{renderDetails()}</div>
      </div>
    </div>
  );
}
