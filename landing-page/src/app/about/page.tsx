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
        Body="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
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
            Holtrack Solution Integrator
          </h2>
        </div>
        <div className="row-start-2 col-start-2 xl:col-start-2 col-span-6 xl:col-span-4 mb-6">
          <h2 className="text-2xl font-semibold">
            To assist your organization in reaching new levels of productivity,
            efficiency, and accuracy, you need a true partner – not just a
            vendor.
          </h2>
        </div>
        <div className="row-start-3 col-start-2 xl:col-start-2 col-span-6 xl:col-span-3">
          <h4 className="text-base font-light leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
            Place a solution request
          </button>
        </div>
      </div>
      <div>
        <CardBody />
      </div>

      <h2 className="mt-12 text-4xl text-black text-center mb-12 font-semibold">
        Hear what our customers have to say!
      </h2>
      <div className="pt-12 pb-12 grid grid-cols-8 gap-10">
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
          Our services
        </h2>
        <footer className="block text-center mb-8 text-neutral-600 dark:text-neutral-400">
          Our in-house professional services group is here to support you every
          step of the way. From project design, implementation, deployment, and
          training to depot repair, help desk, and on-site services.
        </footer>
        <div className="pt-12 pb-12 grid grid-cols-8 gap-10">
          <div className="col-start-2 col-span-6">
            <Tabs />
          </div>
        </div>
      </div>

      <div
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
        className="grid xl:grid-cols-8 gap-10"
      >
        <div className="text-black mx-12 xl:mx-0 xl:col-start-2 xl:col-span-3">
          {" "}
          <h2 className="text-4xl font-semibold mb-6">
            Dedicated Customer support
          </h2>
          <h4 className="text-base font-light leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h4>
        </div>
        <div className="mx-12 self-center xl:mx-0 xl:col-start-5 xl:col-span-3">
          <img
            src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
            className="rounded-lg h-auto max-w-full"
            alt="..."
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
        <footer className="block text-center mb-8 text-neutral-600 dark:text-neutral-400">
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
              <p className="text-black text-justify">
                Ready to transform your operations with RFID technology? Contact
                us to learn how Holtrack can deliver the solutions you need to
                succeed.
              </p>
              <p className="text-black text-justify mt-4">
                Simply call +62 (822)-5888-8701, email{" "}
                <span style={{ textDecoration: "underline", color: "#E4A11B" }}>
                  {" "}
                  holtech1064@gmail.com
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
