import { Header } from "../components/Header";
import { CardHorizontal } from "../components/CardHorizontal";
import { CardBody } from "./components/CardBody";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { Tabs } from "./components/Tabs";
import { Form } from "../components/Form";
import PageFooter from "@/app/components/PageFooter";

export default function About() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Header
        Title={
          <>
            <span className="text-warning">About</span> Us
          </>
        }
        Body="We're a technology company specializing in RFID solutions, serving industries like retail and warehousing. Our key products include RFID tags, readers, and integrated management software that streamline inventory automation, reducing time, labor, and scanning errors, especially with high-volume goods."
      />

      {/* center card */}
      <CardHorizontal
        cardTitle="Need help?"
        className="drop-shadow-xl"
        style={{ marginTop: "-100px" }}
      />

      {/* content */}
      <div
        className="grid grid-cols-8 text-black"
        style={{ paddingTop: "50px" }}
      >
        <div className="col-start-2 col-span-4 mb-4">
          <h2 className="text-4xl font-semibold">
            <span className="text-warning">Holtrack </span>Solution Integrator
          </h2>
        </div>
        <div className="row-start-2 col-start-2 xl:col-start-2 col-span-6 xl:col-span-4 mb-6">
          <h2 className="text-2xl font-semibold">
            To assist your <span className="text-warning"> business </span>in
            achieving greater productivity, efficiency, and accuracy, you need a
            <span className="text-warning"> true partner </span> – not just a
            supplier.
          </h2>
        </div>
        <div className="row-start-3 col-start-2 xl:col-start-2 col-span-6 xl:col-span-3">
          <h4 className="text-base font-light leading-relaxed">
            Through our strong partnerships with manufacturers and our dedicated
            in-house technical team, we offer clients expert, personalized
            support for any project. From on-site discovery and design to device
            support and repair, we’re here to ensure your technology investments
            are fully supported.
          </h4>
        </div>
        <div
          style={{ paddingTop: "30px" }}
          className="row-start-4 col-span-6 col-start-2"
        >
          <a href={"/contact"}>
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-warning-100 hover:shadow-primary-2 focus:bg-warning-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-primary-2 motion-reduce:transition-none"
            >
              Place a solution request
            </button>
          </a>
        </div>
      </div>
      <div>
        <CardBody />
      </div>

      <TestimonialCarousel />

      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "#EEEEEF",
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
        }}
      >
        <h2 className="mt-12 text-4xl text-black text-center mb-4 font-semibold">
          Our <span className="text-warning"> Services </span>
        </h2>
        <footer className="xl:px-[450px] block text-center mb-8 text-neutral-600 dark:text-neutral-400">
          Our in-house professional services group is here to support you every
          step of the way. From project design, implementation, deployment, and
          training to depot repair, help desk, and on-site services.
        </footer>
        <div className="pb-12 grid grid-cols-8 gap-10">
          <div className="col-start-2 col-span-6">
            <Tabs />
          </div>
        </div>
      </div>

      {/* Second body */}
      <div
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
        className="grid xl:grid-cols-8 gap-10"
      >
        <div className="text-black flex flex-col justify-evenly mx-12 xl:mx-0 xl:col-start-2 xl:col-span-3">
          {" "}
          <h2 className="text-4xl font-semibold mb-6">
            Full Client <span className="text-warning"> Satisfaction</span>
          </h2>
          <h4 className="text-xl font-light leading-relaxed">
            At Holtrack, we understand that every business is different. That’s
            why we focus on creating flexible and personalized solutions that
            seamlessly integrate with existing infrastructure while addressing
            key pain points such as inventory mismanagement, operational delays,
            and theft prevention. We plan to build long-lasting relationships
            with our clients by offering exceptional support and constant
            innovation. Our aim is to build trust and become a valued partner in
            their journey towards excellence. Whether you’re a small business or
            a large enterprise, Holtrack is your trusted partner for
            transforming operations and unlocking new possibilities with RFID
            technology.
          </h4>
        </div>
        <div className="mx-12 self-center xl:mx-0 xl:col-start-5 xl:col-span-3">
          <img
            src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-lg mx-auto"
            alt="..."
            style={{ width: "600px" }}
          />
        </div>
      </div>

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
