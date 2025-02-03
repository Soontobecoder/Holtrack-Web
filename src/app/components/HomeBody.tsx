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
        clipPath: "polygon(100% 0, 100% 90%, 0 100%, 0 10%)",
        backgroundColor: "#00263A",
      }}
      className="pt-[220px] pb-[220px] xl:pb-[150px] xl:pt-[150px]"
    >
      <h1 className="text-2xl md:text-4xl xl:text-6xl text-center text-white">
        Securing and Automating <span className="text-warning">Warehouse </span>
        Management
      </h1>
      <footer className="block pb-2 pt-2 px-[5%] text-xs md:text-base xl:px-[30%] text-center font-light leading-relaxed mt-1 text-white text-base">
        With unique tags on each item, businesses can quickly scan and monitor
        stock levels, reducing manual errors and minimizing the risk of loss or
        theft. This streamlined approach not only boosts operational efficiency
        but also ensures greater accuracy in order fulfillment, allowing
        companies to respond swiftly to market demands.
      </footer>
      <div className="mt-10 grid grid-cols-8 gap-4">
        <div className="col-start-2 md:col-start-2 col-span-6 md:col-span-2">
          <Card
            cardTitle="Asset Tracking & Visibility"
            cardBody="Keep track of your valuable assets with our RFID-based asset tracking solutions. From tools and equipment to vehicles and containers, our system ensures that you know the location, status, and usage history of your assets at all times."
            link="/services/location_tracking"
            svg={
              <svg
                className="rtl:rotate-180 w-6 h-6 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.9604 11.4802C19.9604 13.8094 19.0227 15.9176 17.5019 17.4512C16.9332 18.0247 16.2834 18.5173 15.5716 18.9102C14.3594 19.5793 12.9658 19.9604 11.4802 19.9604C6.79672 19.9604 3 16.1637 3 11.4802C3 6.79672 6.79672 3 11.4802 3C16.1637 3 19.9604 6.79672 19.9604 11.4802Z"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M18.1553 18.1553L21.8871 21.8871"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </div>
        <div className="col-start-2 md:col-start-4 col-span-6 md:col-span-2">
          <Card
            cardTitle="Warehouse System Integration"
            cardBody="Holtrack specializes in providing RFID system integration and tailored solutions for different industries’ operations. Our team works closely with clients to understand their pain points before incorporating RFID technology into their operations."
            link="/services/warehouse_integration"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="currentColor"
                className="w-6 h-6"
                version="1.2"
                baseProfile="tiny"
                id="inventory"
                viewBox="0 0 256 230"
                xmlSpace="preserve"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M61.2,106h37.4v31.2H61.2V106z M61.2,178.7h37.4v-31.2H61.2V178.7z M61.2,220.1h37.4v-31.2H61.2V220.1z M109.7,178.7H147  v-31.2h-37.4V178.7z M109.7,220.1H147v-31.2h-37.4V220.1z M158.2,188.9v31.2h37.4v-31.2H158.2z M255,67.2L128.3,7.6L1.7,67.4  l7.9,16.5l16.1-7.7v144h18.2V75.6h169v144.8h18.2v-144l16.1,7.5L255,67.2z"
                />
              </svg>
            }
          />
        </div>
        <div className="col-start-2 col-span-6 md:col-span-2">
          <Card
            cardTitle="Inventory Management Optimization"
            cardBody="Provides a robust inventory management solution that leverages RFID for accurate, real-time tracking of stock levels. Monitor inventory in multiple locations, track items from receipt to dispatch, and ensure optimal stock levels to meet demand"
            link="service/inventory_management"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
              >
                <g
                  xmlns="http://www.w3.org/2000/svg"
                  clipPath="url(#clip0_525_147)"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V23C0 23.5523 0.447715 24 1 24C1.55228 24 2 23.5523 2 23V22H22V23C22 23.5523 22.4477 24 23 24C23.5523 24 24 23.5523 24 23V1C24 0.447715 23.5523 0 23 0C22.4477 0 22 0.447715 22 1V8H20V3C20 2.44772 19.5523 2 19 2H11C10.4477 2 10 2.44772 10 3V4H5C4.44772 4 4 4.44772 4 5V8H2V1ZM10 6H6V8H10V6ZM2 10V20H4V13C4 12.4477 4.44772 12 5 12H13C13.5523 12 14 12.4477 14 13V14H19C19.5523 14 20 14.4477 20 15V20H22V10H2ZM18 8V4H12V8H18ZM12 20H6V14H12V20ZM14 20V16H18V20H14Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            }
          />
        </div>
        <div className="col-start-2 col-span-6 md:col-span-2 md:col-start-2">
          <Card
            cardTitle="RFID Hardwares"
            cardBody="Holtrack provides a variety of high-quality and up-to-date RFID hardware to support clients. Our hardware offerings include a wide range of unique RFID tags, fixed RFID readers, RFID handheld readers, RFID printers, and RFID antennas."
            link="/service/custom_solutions"
            svg={
              <svg
                className="rtl:rotate-180 w-6 h-6 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 52 52"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M49.4,12.2c-0.2-0.6-0.9-0.7-1.4-0.3L39.9,20c-0.6,0.6-1.6,0.6-2.2,0L32,14.3c-0.6-0.6-0.6-1.6,0-2.2L40.2,4  c0.4-0.4,0.2-1.1-0.3-1.4C38.5,2.2,37,2,35.6,2c-8.5,0-15.3,7.3-14.3,16c0.2,1.4,0.5,2.6,1,3.8L3.6,40.4c-2.2,2.2-2.2,5.8,0,7.9  c1.1,1.1,2.6,1.7,4,1.7s2.9-0.6,4-1.7l18.6-18.6c1.2,0.5,2.5,0.8,3.8,1c8.7,1,16-5.8,16-14.3C50,14.9,49.8,13.5,49.4,12.2z"
                />
              </svg>
            }
          />
        </div>
        <div className="col-start-2 col-span-6 md:col-span-2 md:col-start-4">
          <Card
            cardTitle="Supply Chain and Automation"
            cardBody="Enhance your supply chain with our RFID solutions, providing end-to-end visibility and automation. From manufacturing to distribution, Holtrack enables seamless tracking of goods, reducing delays, and improving coordination across your supply chain."
            link="/service/supply_chain"
            svg={
              <svg
                className="rtl:rotate-180 w-6 h-6 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 240 200"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M2.415,34.671l19.668-19.981h-0.102V2.203h118.01v12.488h0.103l19.668,19.981H2.415z M144.362,91.165h20.434v85.409h-13.831  h-2.145c-0.62,0-1.128-0.395-1.241-1.015c-1.692-9.704-10.155-17.094-20.366-17.094s-18.674,7.39-20.367,17.094  c-0.113,0.564-0.62,1.015-1.241,1.015H82.271c-3.008,0-5.446-2.438-5.446-5.446v-13.451H2v-9.99h14.985v-84.96  C8.377,60.535,2,52.958,2,43.815v-4.773h157.347v4.71c0,9.143-6.53,16.783-14.985,18.974V91.165z M76.825,147.687V91.165h57.547  V62.574c-8.473-2.196-14.75-9.787-14.75-18.945c0,6.524-6.013,19.635-19.583,19.635c-15.019,0-19.646-12.735-19.646-19.635  c0,7.402-5.94,19.649-19.482,19.649c-15.592,0-19.81-15.605-19.81-19.649c0,9.159-6.276,16.75-14.75,18.945v85.113H76.825z   M142.727,179.282c0,8.575-6.939,15.515-15.515,15.515c-8.575,0-15.515-6.939-15.515-15.515s6.939-15.515,15.515-15.515  C135.788,163.768,142.727,170.707,142.727,179.282z M133.155,179.282c0-3.257-2.685-5.943-5.943-5.943  c-3.257,0-5.943,2.685-5.943,5.943s2.685,5.943,5.943,5.943C130.47,185.225,133.155,182.54,133.155,179.282z M254,166.645v4.175  c0,3.159-2.539,5.755-5.755,5.755h-2.144c-0.621,0-1.128-0.395-1.241-1.015c-1.693-9.704-10.155-17.094-20.366-17.094  s-18.674,7.39-20.366,17.094c-0.113,0.564-0.621,1.015-1.241,1.015h-33.242V111.3h23.474c1.636,0.056,3.216,0.733,4.344,1.862  l20.092,27.08c0.226,0.226,0.564,0.395,0.903,0.395h22.003c5.021,0,9.027,4.006,9.027,8.97v15.853h3.272  C253.436,165.46,254,166.024,254,166.645z M206.441,138.493l-13.153-20.028c-0.282-0.226-0.621-0.395-0.959-0.395h-14.485  c-0.677,0-1.241,0.564-1.241,1.241v20.084c0,0.677,0.564,1.241,1.241,1.241h27.638C206.553,140.637,207.118,139.339,206.441,138.493  z M240.009,179.282c0,8.575-6.939,15.515-15.515,15.515s-15.515-6.939-15.515-15.515s6.939-15.515,15.515-15.515  S240.009,170.707,240.009,179.282z M230.437,179.282c0-3.257-2.685-5.943-5.943-5.943s-5.943,2.685-5.943,5.943  s2.685,5.943,5.943,5.943S230.437,182.54,230.437,179.282z"
                />
              </svg>
            }
          />
        </div>
        <div className="col-start-2 col-span-6 md:col-span-2 md:col-start-6">
          <Card
            cardTitle="Data Analytics and Reporting"
            cardBody="Transform data into actionable insights with our advanced analytics and reporting tools. Holtrack’s RFID solutions collect and analyze data in real-time, providing you with valuable insights to make informed decisions and optimize your operations."
            link="/service/data_analytics"
            svg={
              <svg
                className="rtl:rotate-180 w-6 h-6 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M3 3V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M21 21H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M7 16L12.25 10.75L15.75 14.25L21 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};
