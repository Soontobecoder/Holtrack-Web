import { Header } from "../components/Header";
import { CardHorizontal } from "../components/CardHorizontal";
import { CardBody } from "./components/CardBody";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { Tabs } from "./components/Tabs";
import { Form } from "../components/Form";

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
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-warning-100 hover:shadow-primary-2 focus:bg-warning-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            <a href="/contact">Place a solution request</a>
          </button>
        </div>
      </div>
      <div>
        <CardBody />
      </div>

      <h2 className="pt-[100px] xl:pt-[150px] text-4xl text-black text-center mb-12 font-semibold">
        Our <span className="text-warning"> Milestones </span>
      </h2>
      <footer className="block px-[50px] md:px-[500px] text-center text-xl mb-8 text-neutral-600">
        Discover the diverse and impactful collaborations we’ve forged across
        industries. At Holtech, we take pride in supporting and nurturing
        relationships with a wide range of partners. Each partnership is
        uniquely tailored to deliver exceptional value, fostering innovation and
        growth for all stakeholders.
      </footer>
      <div className="pb-[100px] xl:pb-[150px] grid grid-cols-8 gap-10">
        <div className="col-start-2 col-span-6">
          <TestimonialCarousel />
        </div>
      </div>

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
            Our top priority is Full Client Satisfaction. We are committed to
            delivering exceptional service, ensuring that every solution we
            provide meets your unique needs. From project inception to ongoing
            support, we work closely with you to guarantee a seamless
            experience, addressing any concerns promptly and effectively. Your
            success is our success, and we go the extra mile to ensure complete
            satisfaction with every interaction.
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
        <h2 className="mt-12 text-4xl xl:text-6xl text-black text-center mb-4 font-semibold">
          Have a <span className="text-warning">Question?</span>
        </h2>
        <footer className="block text-center font-semibold mb-8 text-neutral-600 dark:text-neutral-400">
          Feel free to ask us anything. We are glad to be of service!
        </footer>
        <div
          style={{ paddingBottom: "50px" }}
          className="mx-10 xl:mx-0 xl:grid xl:grid-cols-8 gap-10"
        >
          <div className="col-start-2 col-span-3 self-center text-center">
            <img
              src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
              style={{ width: "435px", height: "130px" }}
              alt="..."
              className="mx-auto rounded-lg"
            />
            <div>
              <h2 className="mt-5 text-2xl text-black mb-4 font-semibold">
                Get Started Today
              </h2>
              <p className="text-black text-start">
                Ready to transform your operations with RFID technology? Contact
                us to learn how Holtrack can deliver the solutions you need to
                succeed.
              </p>
              <p className="text-black text-start mt-4">
                Simply call +62 (822)-5888-8701, email{" "}
                <span style={{ textDecoration: "underline", color: "#E4A11B" }}>
                  {" "}
                  sales@holtrack.com
                </span>
                , or fill out our form! We’re here to help.
              </p>
            </div>
          </div>
          <div className="mt-6 xl:mt-0 col-start-5 col-span-3">
            <h2 className="mt-5 text-2xl text-center mb-10 text-black mb-4 font-semibold">
              Or send us your question and we will get back to you!
            </h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
