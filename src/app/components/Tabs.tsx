"use client";
import { useEffect } from "react";
import { CSSProperties } from "react";
import Logo from "../assets/LOGO.jpg";
import Image from "next/image";

interface TabProps {
  style?: CSSProperties;
  className?: string;
}

export const Tabs: React.FC<TabProps> = ({ style, className }) => {
  useEffect(() => {
    const init = async () => {
      const { Tab, initTWE } = await import("tw-elements");
      initTWE({ Tab });
    };
    init();
  }, []);
  return (
    <div className={className + ""} style={style}>
      {/* nav header */}
      <ul
        className="flex justify-center list-none flex-row flex-wrap border-b-0 ps-0"
        role="tablist"
        data-twe-nav-ref
      >
        <li role="presentation" className="text-center">
          <a
            href="#tabs-home02"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-12 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:bg-white data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-home02"
            data-twe-nav-active
            role="tab"
            aria-controls="tabs-home02"
            aria-selected="true"
          >
            About Us
          </a>
        </li>
        <li role="presentation" className="text-center">
          <a
            href="#tabs-profile02"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-12 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:bg-white data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-profile02"
            role="tab"
            aria-controls="tabs-profile02"
            aria-selected="false"
          >
            Our Mission
          </a>
        </li>
        <li role="presentation" className="text-center">
          <a
            href="#tabs-messages02"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-12 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:bg-white data-[twe-nav-active]:border-warning data-[twe-nav-active]:text-warning dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
            data-twe-toggle="pill"
            data-twe-target="#tabs-messages02"
            role="tab"
            aria-controls="tabs-messages02"
            aria-selected="false"
          >
            Our Vision
          </a>
        </li>
      </ul>

      {/* content */}
      <div
        className="bg-white rounded-lg text-black "
        style={{ marginTop: "-8px" }}
      >
        {/* About Us */}
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-home02"
          role="tabpanel"
          aria-labelledby="tabs-home-tab02"
          data-twe-tab-active
        >
          <div className="grid xl:grid-cols-6 flex items-center p-12 gap-10">
            <div className="xl:col-start-1 xl:col-span-2 self-center">
              <Image
                src={Logo}
                className="h-auto max-w-full rounded-lg"
                alt="..."
              />
            </div>
            <div className="xl:col-span-4">
              {" "}
              <div className="mb-4">
                <h1 className=" text-5xl font-medium leading-tight text-warning">
                  Holtrack Solution Integrator
                </h1>
                <footer className="block text-neutral-600 dark:text-neutral-400">
                  Track Smarter, Manage Faster, Bringing RFID technologies at
                  your doorstep
                </footer>
              </div>
              <div style={{ fontSize: "18px" }}>
                A technology company specializing in the development and
                delivery of cutting-edge RFID (Radio Frequency Identification)
                solutions tailored for diverse industries, including retail and
                warehousing, under our flagship brand, Holtrack. Our core
                products encompass RFID tags, RFID readers, and fully integrated
                management software. By enhancing automation in inventory and
                stock management processes, our solutions significantly reduce
                the time and labor required. Additionally, our RFID systems
                minimize scanning errors, particularly when handling high
                volumes of goods, thereby lowering the risk of mistakes that are
                common with barcode systems.
              </div>
            </div>
          </div>
        </div>
        {/* Our Mission */}
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-profile02"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab02"
        >
          <div className="flex flex-col justify-center p-12 text-center">
            {" "}
            <div className="mb-4">
              <h1 className=" text-5xl font-medium leading-tight text-warning">
                Our Commitment
              </h1>
            </div>
            <div
              className="xl:px-[250px] text-justify"
              style={{ fontSize: "22px" }}
            >
              To become the market leader in RFID solutions in Indonesia, driven
              by our commitment to innovation, quality, and customer
              satisfaction. We&apos;re on a mission to set the standard, exceed
              expectations, and lead the way with unmatched excellence.
            </div>
            <div className="pt-6">
              <button
                type="button"
                className="inline-block rounded-full bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none"
              >
                <a href="/contact">Contact Us Now</a>
              </button>
            </div>
          </div>
        </div>
        {/* Our Vision */}
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[twe-tab-active]:block"
          id="tabs-messages02"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab02"
        >
          <div className="flex flex-col justify-center p-12 text-center">
            <div className="xl:col-span-4">
              {" "}
              <div className="mb-4">
                <h1 className=" text-5xl font-medium leading-tight text-warning">
                  Our Promise
                </h1>
              </div>
              <div
                className="xl:px-[250px] text-justify"
                style={{ fontSize: "22px" }}
              >
                To deliver innovative RFID solutions that boost operational
                efficiency and productivity for businesses across Indonesia,
                powered by reliable technology and exceptional customer service.
                We&apos;re here to make your operations smoother, faster, and
                smarter, with a touch of excellence in every interaction.
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  className="inline-block rounded-full bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none"
                >
                  <a href="/contact">Contact Us Now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
