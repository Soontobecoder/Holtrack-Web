"use client";
import { CSSProperties } from "react";
import { useState } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const RoICalculator: React.FC<Props> = ({ className, style }) => {
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    businessName: "",
    phoneNumber: "",
  });

  const [roiData, setRoiData] = useState({
    inventoryTurns: 1,
    itemsInStock: 1000,
    AvgValue: 850000,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", userData);
    // You can send formData to an API or handle it as needed
  };

  const [RFIDCost, setRFIDCost] = useState(0);
  const [lossRed, setLossRed] = useState(
    Math.round(
      roiData.AvgValue *
        roiData.inventoryTurns *
        roiData.itemsInStock *
        0.01 *
        0.95
    )
  );

  const [revIncrease, setRevIncrease] = useState(
    Math.round(
      roiData.AvgValue * roiData.inventoryTurns * roiData.itemsInStock * 0.02
    )
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newRoiData = {
      ...roiData,
      [name]: value,
    };

    // Update state for roiData
    setRoiData(newRoiData);

    // Use the new state for calculations
    setRevIncrease(
      Math.round(
        newRoiData.AvgValue *
          newRoiData.inventoryTurns *
          newRoiData.itemsInStock *
          0.02
      )
    );
    setLossRed(
      Math.round(
        newRoiData.AvgValue *
          newRoiData.inventoryTurns *
          newRoiData.itemsInStock *
          0.01 *
          0.95
      )
    );
  };

  const handleCalculation = () => {
    const netGain = Math.round(revIncrease + lossRed + 10478.86 - 15135.51);
    return netGain;
  };

  return (
    <div className="flex flex-col xl:flex-row justify-center">
      <div className="mx-5 xl:p-[50px] xl:m-[50px] xl:border-r-4 order-2 xl:order-1 xl:w-1/3 text-black h-full">
        {/* Inventory turns */}
        <div>
          <div className="flex justify-between mb-2">
            <div className="w-2/3">
              <label className="inline-block text-neutral-700 text-lg">
                Inventory turns per year
              </label>
              <footer className="block text-neutral-600 text-xs">
                How many inventory turns happen in a span of{" "}
                <cite>one year</cite>
              </footer>
            </div>
            <div className="w-1/3 self-center">
              {" "}
              <div className="relative" data-twe-input-wrapper-init>
                <input
                  type="number"
                  min="1"
                  name="inventoryTurns"
                  className="peer text-end block min-h-[auto] w-full rounded border-0 bg-transparent py-[0rem] text-xl leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="inventoryTurns number"
                  max="6"
                  value={roiData.inventoryTurns}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <input
            type="range"
            className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
            min="1"
            name="inventoryTurns"
            value={roiData.inventoryTurns}
            onChange={handleChange}
            max="6"
            id="customRange2"
          />
        </div>

        {/* Items in stock */}
        <div>
          <div className="mt-4 flex justify-between mb-2">
            <div className="w-2/3">
              <label className="inline-block text-neutral-700 text-lg">
                Items in Stock
              </label>
              <footer className="block text-neutral-600 text-xs">
                How many Assets or inventory you would like to <cite>tag</cite>
              </footer>
            </div>
            <div className="w-1/3 self-center">
              {" "}
              <div className="relative" data-twe-input-wrapper-init>
                <input
                  type="number"
                  name="itemsInStock"
                  min="100"
                  className="peer block text-end min-h-[auto] w-full rounded border-0 bg-transparent py-[0rem] text-xl leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="inventoryTurns number"
                  step={100}
                  max="10000"
                  value={roiData.itemsInStock}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <input
            type="range"
            className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
            min="100"
            name="itemsInStock"
            value={roiData.itemsInStock}
            onChange={handleChange}
            max="10000"
            id="customRange2"
          />
        </div>

        {/* Average value */}
        <div>
          <div className="mt-4 flex justify-between mb-2">
            <div className="w-2/3">
              <label className="inline-block text-neutral-700 text-lg">
                Average Value of Items
              </label>
              <footer className="block text-neutral-600 text-xs">
                Average price of your <cite>assets</cite>
              </footer>
            </div>
            <div className="w-1/3 self-center">
              {" "}
              <div className="relative" data-twe-input-wrapper-init>
                <input
                  type="number"
                  name="AvgValue"
                  className="peer text-end block min-h-[auto] w-full rounded border-0 bg-transparent py-[0rem] text-xl leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="AvgValue number"
                  step={1000}
                  min="850000"
                  max="2000000"
                  value={roiData.AvgValue}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <input
            type="range"
            className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
            name="AvgValue"
            value={roiData.AvgValue}
            onChange={handleChange}
            min="850000"
            max="2000000"
            id="customRange2"
          />
        </div>

        {/* Average RFID cost */}
        <div className="mt-6 flex justify-between mb-2">
          <div className="w-2/3">
            <label className="inline-block text-neutral-700 text-lg">
              RFID Cost
            </label>
            <footer className="block text-neutral-600 text-xs">
              Average costs for all the RFID equipment <cite>needed</cite>
            </footer>
          </div>
          <div className="w-1/3 self-center text-end">
            {" "}
            <div className="relative" data-twe-input-wrapper-init>
              <p className="text-lg">Rp 233,990,500</p>
            </div>
          </div>
        </div>

        {/* Average RFID revenue increase */}
        <div className="mt-6 flex justify-between mb-2">
          <div className="w-2/3">
            <label className="inline-block text-neutral-700 text-lg">
              RFID Revenue Increase
            </label>
            <footer className="block text-neutral-600 text-xs">
              Average of 2% increase in revenue by placing accurate and updated{" "}
              <cite>inventory</cite>
            </footer>
          </div>
          <div className="w-1/3 self-center text-end">
            {" "}
            <div className="relative" data-twe-input-wrapper-init>
              <p className="text-lg">Rp {revIncrease.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Average RFID revenue loss */}
        <div className="mt-6 flex justify-between mb-2">
          <div className="w-2/3">
            <label className="inline-block text-neutral-700 text-lg">
              RFID Loss Reduce
            </label>
            <footer className="block text-neutral-600 text-xs">
              How many reduce in loss incurred by implementing our RFID{" "}
              <cite>system</cite>
            </footer>
          </div>
          <div className="w-1/3 self-center text-end">
            {" "}
            <div className="relative" data-twe-input-wrapper-init>
              <p className="text-lg">Rp {lossRed.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block rounded-lg bg-white mb-12 text-surface shadow-secondary-1 mt-5 mx-5 xl:m-[100px] xl:ml-[0px] order-1 xl:order-1 xl:pl-[0px] xl:w-1/3 text-black h-full">
        <div className="p-6">
          <div className="text-warning text-4xl text-center font-semibold">
            Rp {handleCalculation().toLocaleString()}.00
          </div>
          <div className="text-center font-semibold text-xl mt-1">
            Net gain adding RFID inventory
          </div>
          <div className="text-center mt-3">
            <p className="leading-3">Estimated revenue: </p>
            <p>Percent increase in revenue: </p>
          </div>

          {/* Form */}
          <div className="justify-center grow mt-5">
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="relative mb-3">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    required
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="grid grid-cols-2 gap-10 mb-3">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>

                  <input
                    type="text"
                    id="website-admin"
                    placeholder="Budi"
                    className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="website-admin"
                    placeholder="Setiawan"
                    className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Your business */}
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Business Name (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M16 7V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H11.2C10.0799 3 9.51984 3 9.09202 3.21799C8.71569 3.40973 8.40973 3.71569 8.21799 4.09202C8 4.51984 8 5.0799 8 6.2V7M9 15V12M15 15V12M3.02721 10.0263C3.38776 10.3719 7.28572 14 12 14C16.7143 14 20.6122 10.3719 20.9728 10.0263M3.02721 10.0263C3 10.493 3 11.0665 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 11.0665 21 10.493 20.9728 10.0263M3.02721 10.0263C3.06233 9.4241 3.14276 8.99959 3.32698 8.63803C3.6146 8.07354 4.07354 7.6146 4.63803 7.32698C5.27976 7 6.11984 7 7.8 7H16.2C17.8802 7 18.7202 7 19.362 7.32698C19.9265 7.6146 20.3854 8.07354 20.673 8.63803C20.8572 8.99959 20.9377 9.4241 20.9728 10.0263"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    placeholder="Holtrack"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-45-678"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-block w-full rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Send Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
