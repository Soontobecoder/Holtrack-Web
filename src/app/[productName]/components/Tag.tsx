"use client";
import { ImageSlider } from "./ImageSlider";
import { useState, useEffect, useRef } from "react";
import { Data } from "../lib/types";
import Tabs from "./Tabs";
import Card from "./Card";

interface Props {
  rfidTag: Data;
  setRightParent: (data: number) => void;
}

const Tag: React.FC<Props> = ({ rfidTag, setRightParent }) => {
  const [tagIndex, setTag] = useState(0); // to set which tag to display

  // to get the height of the right side element and capture the element
  const height = useRef<HTMLDivElement>(null);

  // to set the height of the right side element
  useEffect(() => {
    const handleResize = () => {
      // Adjust the breakpoint according to your needs
      const width = window.innerWidth;
      // If the width is smaller than 1024px, setRightParent to 0
      if (width < 1280) {
        setRightParent(0);
      } else {
        setRightParent(height.current?.clientHeight || 0);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setRightParent]);

  const handleTagChange = (index: number) => {
    setTag(index - 1);
  };

  return (
    <div
      // to get the height of the right side element and assign the whole div to the ref
      ref={height}
      className="lg:grid grid-cols-8 xl:p-0 p-10 transition ease-in-out duration-150 transition-opacity"
    >
      <div className="col-span-3 flex justify-center">
        <ImageSlider onSlideChange={handleTagChange} datas={rfidTag.device} />
      </div>
      <div className="ml-5 mt-4 xl:mt-0 col-span-4">
        {"name" in rfidTag.device[tagIndex] && (
          <h1 className="text-2xl font-bold">
            {rfidTag.device[tagIndex].name}
          </h1>
        )}
        {"dimension" in rfidTag.device[tagIndex] && (
          <p>{rfidTag.device[tagIndex].dimension}</p>
        )}

        <div className="flex mt-10">
          <p className="p-4 shadow-lg text-white font-bold bg-warning">
            PRODUCT DETAILS
          </p>
        </div>

        <Tabs tagIndex={tagIndex} data={rfidTag.device} />

        <a href={"/contact"}>
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="inline-block mt-8 rounded-xl bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-warning-100 hover:shadow-primary-2 focus:bg-warning-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-primary-2 motion-reduce:transition-none"
          >
            Contact us to find out more
          </button>
        </a>
      </div>
      <div className="col-span-8 row-start-2 mt-8">
        <div className="relative min-h-[600px] md:min-h-[400px] mr-2 rounded-lg bg-[url('https://lucknowrecreation.com/wp-content/uploads/2018/04/Monthly-Website-Header-background-e1522931579825.jpg')] bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative p-5 xl:p-20 flex flex-col justify-end text-white ">
            <h1 className="text-4xl font-bold">
              <span className="text-warning">RFID</span> Tag
            </h1>
            <p className="text-white text-xl mt-4">
              Radio-Frequency Identification (RFID) tags are small electronic
              devices used to track and identify objects, animals, or people by
              using electromagnetic fields. An RFID tag typically consists of an
              integrated circuit (chip) that stores data and an antenna that
              transmits and receives signals to and from an RFID reader. When an
              RFID tag enters the reader’s electromagnetic field, it transmits
              the stored information (such as an ID number) back to the reader,
              enabling automated identification and data collection.
            </p>
            <p className="text-white text-xl mt-4">
              Tags are placed on the inventory/asset and they can hold more data
              than barcodes. These data are read by RFID readers and antennas
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-8 p-5 xl:p-20 pt-10 xl:pt-4 row-start-3 xl:mt-8">
        <h1 className="text-4xl text-center font-bold">
          How <span className="text-warning">RFID</span> Works
        </h1>
        <div className="flex-col flex md:flex-row justify-center gap-4 mt-4 mx-auto">
          <Card
            id={1}
            title="Interrogator"
            body="Reader/Interrogator The RFID reader (also known as an
              interrogator) emits radio waves through its antenna, creating an
              electromagnetic field around it."
          />
          <Card
            id={2}
            title="Tag Activation"
            body="When an RFID tag passes within range of this field,
              the tag’s antenna picks up the signal. The tag
              uses the energy from the reader’s signal to power its internal
              chip."
          />
          <Card
            id={3}
            title="Data Exchange"
            body="Once powered, the RFID chip modulates the radio
              waves and sends its stored data (e.g., a unique identifier) back
              to the reader."
          />
        </div>
      </div>
    </div>
  );
};

export default Tag;
