import { Tab, initTWE } from "tw-elements";
import { useEffect } from "react";
import {
  RFIDTag,
  Antenna,
  FixedReader,
  GateWay,
  Printer,
  Handheld,
} from "../lib/types";

interface Props {
  data: (RFIDTag | Antenna | FixedReader | GateWay | Handheld | Printer)[];
  tagIndex: number;
}

const Tabs: React.FC<Props> = ({ data, tagIndex }) => {
  useEffect(() => {
    const init = async () => {
      const { Tab, initTWE } = await import("tw-elements");
      initTWE({ Tab });
    };
    init();
  }, []);

  return (
    <>
      <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
        role="tablist"
        data-twe-nav-ref
      >
        <li role="presentation">
          <a
            href="#tabs-feature"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning"
            data-twe-toggle="pill"
            data-twe-target="#tabs-feature"
            data-twe-nav-active
            role="tab"
            aria-controls="tabs-feature"
            aria-selected="true"
          >
            Feature
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-specification"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning "
            data-twe-toggle="pill"
            data-twe-target="#tabs-specification"
            role="tab"
            aria-controls="tabs-specification"
            aria-selected="false"
          >
            Specification
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-application"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning"
            data-twe-toggle="pill"
            data-twe-target="#tabs-application"
            role="tab"
            aria-controls="tabs-application"
            aria-selected="false"
          >
            Application / Use Case
          </a>
        </li>
      </ul>

      <div className="mb-6 text-xl">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-feature"
          role="tabpanel"
          data-twe-tab-active
        >
          {data[tagIndex].features ? (
            data[tagIndex].features.map((feature: string, i: number) => (
              <p key={i}>{feature}</p>
            ))
          ) : (
            <p>No features available</p> // Fallback message in case of empty or undefined features array
          )}
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-specification"
          role="tabpanel"
        >
          {"orderQuantity" in data[tagIndex] && (
            <p>
              <span className="font-bold">Order quantity:</span>{" "}
              {data[tagIndex].orderQuantity}
            </p>
          )}

          {"dimension" in data[tagIndex] && (
            <p>
              <span className="font-bold">Dimension: </span>
              {data[tagIndex].dimension}
            </p>
          )}

          {"description" in data[tagIndex] && (
            <p className="mt-4">{data[tagIndex].description}</p>
          )}
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-application"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          {"application" in data[tagIndex] ? (
            data[tagIndex].application.map((app: string, i: number) => (
              <p key={i}>{app}</p>
            ))
          ) : (
            <p>No application available</p> // Fallback message in case of empty or undefined features array
          )}
        </div>
      </div>
    </>
  );
};

export default Tabs;
