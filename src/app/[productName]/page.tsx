"use client";
import { useRouter } from "next/navigation";
import Datas from "../shared/products.json";
import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { BreadCrumb } from "./components/BreadCrumb";
import { ProductCard } from "./components/ProductCard";
import Tag from "./components/Tag";
import {
  Data,
  RFIDTag,
  Antenna,
  FixedReader,
  GateWay,
  Handheld,
  Printer,
} from "./lib/types";
import "./style.css";
import PageFooter from "../components/PageFooter";

export default function ProductDetails({
  params,
}: {
  params: { productName: string };
}) {
  const router = useRouter();
  const [rightHeight, setRightHeight] = useState(0);

  // data types is not ready
  // const data: Array<Data> | undefined = Datas.find(
  //   (el): el is Data => el.assetType == params.productName
  // );

  const data: any | undefined = Datas.find(
    (el: any) => el.assetType == params.productName
  );

  useEffect(() => {
    if (!data) {
      router.replace("/404");
    }
  }, [data, router]);

  if (!data) {
    return null; // Or you could show a loading spinner until the redirect happens
  }

  const handleHeight = (data: number) => {
    setRightHeight(data);
    // console.log(data, "ini tinggi right element");
  };

  const renderDetails = () => {
    switch (data.assetType) {
      case "RFIDTag":
        const rfidTag = data;
        // setRightParent is using useRef to capture the element of the right side so that the left side element can be assigned a height based on the element on the right side
        return <Tag setRightParent={handleHeight} rfidTag={rfidTag} />;
      case "Antenna":
        const antenna = data as unknown as Antenna;
        return (
          <div>
            <h1>{antenna.name}</h1>
            <p>{antenna.dimension}</p>
            {/* render other properties specific to Antenna */}
          </div>
        );
      case "FixedReader":
        const fixedReader = data as unknown as FixedReader;
        return (
          <div>
            <h1>{fixedReader.name}</h1>
            <p>{fixedReader.dimension}</p>
            {/* render other properties specific to fixedReader */}
          </div>
        );
      case "GateWay":
        const gateWay = data as unknown as GateWay;
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
      <div className="flex flex-col-reverse xl:block xl:grid pt-12 grid-cols-8 gap-4">
        {/* Left side */}
        <div
          className="col-span-2 flex flex-col items-center xl:border-r-4 mb-10"
          style={rightHeight > 0 ? { height: `${rightHeight}px` } : {}}
        >
          <h1 className="text-center font-bold text-2xl">
            {" "}
            Explore our Other Products
          </h1>
          <div
            style={{ direction: "rtl" }}
            className="container items-end xl:block px-2 flex my-4 xl:w-max xl:pl-12 xl:overflow-y-scroll overflow-x-scroll xl:overflow-x-hidden mt-4"
          >
            {Datas.map(
              (item, index) =>
                item.assetType !== params.productName && (
                  <ProductCard
                    style={{ direction: "ltr" }}
                    item={item}
                    key={item.id}
                    className={`shrink-0 xl:mb-0 mb-8 xl:ml-0 ml-8 xl:mr-0 mr-8 xl:w-full ${
                      index === Datas.length - 1 ? "" : "xl:mt-8 xl:border-b-2"
                    }`}
                  />
                )
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-6">{renderDetails()}</div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#EEEEEF",
          paddingTop: "50px",
          paddingBottom: "50px",
          clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <PageFooter />
      </div>
    </div>
  );
}
