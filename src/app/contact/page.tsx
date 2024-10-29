"use client";
import { useEffect, useState } from "react";
// import { Partners } from "./components/Partners";

export default function Contact() {
  useEffect(() => {
    const init = async () => {
      try {
        const { Input, Ripple, initTWE } = await import("tw-elements");
        initTWE({ Input, Ripple });
        const elements = document.querySelectorAll(
          "[data-twe-input-wrapper-init]"
        );
        console.log("Elements to initialize:", elements);
      } catch (error) {
        console.error("TWE initialization failed", error);
      }
    };
    init();
  }, []);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phoneNumber: "",
    industry: "",
    email: "",
    city: "",
    region: "",
    postalCode: "",
    address: "",
    subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setData((oldState) => ({
      ...oldState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", data);
    // You can send formData to an API or handle it as needed
  };
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div className="relative top-20 h-[300px] overflow-hidden rounded-lg bg-[url('https://lucknowrecreation.com/wp-content/uploads/2018/04/Monthly-Website-Header-background-e1522931579825.jpg')] bg-cover bg-no-repeat text-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-black/60 bg-fixed">
          <div
            style={{ marginTop: "150px" }}
            className="text-white grid grid-cols-8 gap-4"
          >
            <div className="col-start-2 col-span-6 xl:col-start-2 xl:col-span-3">
              <h2 className="text-4xl font-semibold">
                <span className="text-warning">Contact</span> Us
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[120px] pb-[120px]">
        <div className="xl:grid xl:grid-cols-8 xl:p-0 p-12 gap-10">
          <div className="col-start-2 col-span-3">
            <h2 className="text-3xl text-black text-justify font-semibold">
              Want to discover more how to make us right for you? Contact us, We
              are happy to assist you as your business partner
            </h2>
            <p className="text-base pt-[40px] text-justify text-black ">
              Please fill out the form below, call or email us and one of our
              colleagues will be in touch to get you the information you’re
              looking for. To request support, please fill out our support
              request form or call the number below
            </p>
            <p className="xl:text-lg pt-[40px] text-black ">
              <span className="font-bold">+62 (877)-7674-9115 </span> |
              <a
                href="mailto: holtech1064@gmail.com"
                className="font-semibold text-warning"
              >
                {" "}
                sales@holtrack.com
              </a>
            </p>
          </div>

          {/* Form */}
          <div className="pt-10 xl:pt-0 col-start-2 col-span-4 row-start-2">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {/* <!--First name input--> */}
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    name="firstName"
                    className="peer text-black block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput123"
                    required
                    aria-describedby="emailHelp123"
                    value={data.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                    First name
                  </label>
                </div>

                {/* <!--Last name input--> */}
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    value={data.lastName}
                    onChange={handleChange}
                    name="lastName"
                    required
                    className="peer text-black block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder="Last name"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                    Last name
                  </label>
                </div>
              </div>

              {/* <!--Email input--> */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    name="email"
                    required
                    className="peer block text-black min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput125"
                    placeholder="Email address"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="tel"
                    value={data.phoneNumber}
                    onChange={handleChange}
                    required
                    name="phoneNumber"
                    className="peer block text-black min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput124"
                    aria-describedby="phoneNumberHelp1234"
                    placeholder="Last name"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                    Phone Number
                  </label>
                </div>
              </div>

              {/* <!--Business Name input--> */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  value={data.businessName}
                  onChange={handleChange}
                  name="businessName"
                  className="peer block text-black min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput126"
                  placeholder="Password"
                />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                  Business Name
                </label>
              </div>

              {/* Industry Input */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  value={data.industry}
                  onChange={handleChange}
                  name="industry"
                  className="peer block text-black min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput126"
                  placeholder="Password"
                />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                  Industry
                </label>
              </div>

              {/* Address Input */}
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <input
                  type="text"
                  value={data.address}
                  onChange={handleChange}
                  name="address"
                  className="peer block text-black min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput126"
                  placeholder="Password"
                />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                  Address
                </label>
              </div>

              {/* Street, city, and Postal Code */}
              <div className="grid grid-cols-3 gap-4">
                {/* <!--City input--> */}
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    name="city"
                    className="peer text-black block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput123"
                    required
                    aria-describedby="emailHelp123"
                    value={data.city}
                    onChange={handleChange}
                    placeholder="First name"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                    City
                  </label>
                </div>

                {/* <!--State/Region input--> */}
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    value={data.region}
                    onChange={handleChange}
                    name="region"
                    required
                    className="peer text-black block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder="Last name"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                    Region
                  </label>
                </div>

                {/* <!--Postal Code input--> */}
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    value={data.postalCode}
                    onChange={handleChange}
                    name="postalCode"
                    required
                    className="peer text-black block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder="Last name"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary">
                    Postal Code
                  </label>
                </div>
              </div>

              <div className="relative mb-6" data-twe-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea13"
                  rows={3}
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="exampleFormControlTextarea13"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
                >
                  Your Message
                </label>
              </div>
              {/* <!--Subscribe newsletter checkbox--> - IN DEVELOPMENT*/}
              {/* <div className="mb-6 flex">
                <input
                  className="relative float-left me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                  type="checkbox"
                  value=""
                  id="newsLetterCheck"
                />
                <label
                  className="inline-block font-extralight text-black hover:cursor-pointer"
                  htmlFor="newsLetterCheck"
                >
                  Subscribe to our newsletter
                </label>
              </div> */}

              {/* <!--Submit button--> */}
              <button
                type="submit"
                className="inline-block w-full rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Submit
              </button>
            </form>
          </div>

          {/* side bar */}
          <div className="col-start-6 col-span-2 row-span-2 xl:pt-0 pt-10">
            <div className="relative w-full h-96">
              {/* To get the src, just go to google maps, type in the address, click share, and select the embed a map tab option, then copy the html code (but just use the src link) */}
              <iframe
                className="absolute top-0 left-0 rounded-xl w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9879806740005!2d106.70296117576353!3d-6.132316560125041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02a387cda21f%3A0x39707ea39295245d!2sApartemen%20Palm%20Mansion!5e0!3m2!1sid!2sca!4v1729405368474!5m2!1sid!2sca"
                style={{ border: "0" }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="pt-[40px] text-black text-2xl font-semibold">
              Main Office
            </div>
            <div className="pt-[30px] text-black text-base text-justify ">
              Jl. Taman Surya 5 Raya, Apartemen Palm Mansion Tower M. 15AB,
              Pegadungan Kalideres, RT.2/RW.3, Pegadungan, Kec. Kalideres, Kota
              Jakarta Barat, Daerah Khusus Ibukota Jakarta 11830
            </div>
            <div className="pt-[30px] text-black text-base ">
              <span className="font-semibold">Phone</span> (778)-997-9115
            </div>
            <div className="text-black text-base ">
              <span className="font-semibold">Email</span> sales@holtrack.com
            </div>
          </div>
        </div>
      </div>
      {/* Partners bar - IN DEVELOPMENT */}
      {/* <Partners /> */}
    </div>
  );
}
