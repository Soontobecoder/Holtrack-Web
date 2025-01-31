"use client";
import Datas from "../../shared/services.json";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Tabs } from "../../about/components/Tabs";
import { TestimonialCarousel } from "../../components/TestimonialCarousel";
import { Form } from "../../components/Form";

interface Data {
  name: string;
  title: string;
  description: string;
  description_Head: string;
  description_Body: string;
  Head_title: string;
  Head_body: string;
  Head_footer?: string;
  description_footer?: string;
  image_1: string;
  image_2: string;
}

export default function ServiceDetails({
  params,
}: {
  params: { servicesName: string };
}) {
  const router = useRouter();

  const data: Data | undefined = Datas.find(
    (el) => el.name === params.servicesName
  );

  useEffect(() => {
    if (!data) {
      // Redirect to the custom 404 page
      router.replace("/404");
    }
  }, [data, router]);

  if (!data) {
    return null; // Or you could show a loading spinner until the redirect happens
  }

  return (
    <div
      className="text-black"
      style={{
        paddingTop: "80px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header */}
      <div className="pt-[100px] h-[400px] xl:h-[350px] bg-[url(https://www.cmc.ca/wp-content/uploads/2019/07/cad-header-background-2.jpg)]">
        <div className="mx-10 xl:mx-0 xl:grid xl:grid-cols-8 gap-6">
          <div className="col-start-2 col-span-3 ">
            <h2 className="text-white text-4xl font-semibold">{data.title}</h2>
          </div>
          <div className="mt-5 xl:mt-0 row-start-2 col-start-2 xl:col-start-2 col-span-6 xl:col-span-3">
            <h4 className="text-white text-lg font-semibold">
              {data.description}
            </h4>
          </div>
        </div>
      </div>

      {/* <!-- breadcrumb --> */}
      <nav className="w-full bg-neutral-300 p-5" style={{ paddingLeft: "15%" }}>
        <ol className="list-reset text-lg flex">
          <li>
            <a
              href="/services"
              className="text-warning transition duration-150 ease-in-out hover:text-warning-accent-300 focus:text-warning-accent-300 active:text-warning-accent-300 motion-reduce:transition-none dark:text-warning-400"
            >
              Services
            </a>
          </li>
          <li>
            <span className="mx-2 text-white">/</span>
          </li>
          <li className="text-white">{data.title}</li>
        </ol>
      </nav>

      {/* Body */}
      <div className="mt-10 mx-10 xl:mx-0 xl:grid xl:grid-cols-8 gap-6">
        <div className="col-start-2 col-span-3 ">
          <h2 className="text-black text-4xl font-semibold">
            {data.Head_title}
          </h2>
        </div>
        <div className="mt-5 xl:mt-0 row-start-2 col-start-2 col-span-3">
          <h4 className="text-black text-lg font-semibold">
            {data.description_Head}
          </h4>
        </div>
        <div className="xl:mt-2 mt-4 row-start-3 col-start-2 col-span-3">
          {" "}
          <button
            type="button"
            className="inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Contact our customer support team now!
          </button>
        </div>
      </div>

      {/* Lower body */}
      {data.Head_body && data.description_Body ? (
        <div className="bg-primary-900 mt-10 py-10 xl:mx-0 xl:grid xl:grid-cols-8 gap-6">
          <div className="col-start-4 col-span-3 ">
            <h2 className="text-white text-4xl font-semibold">
              {data.Head_body}
            </h2>
          </div>
          <div className="mt-5 xl:mt-0 row-start-2 col-start-4 col-span-4">
            <h4 className="text-white text-lg font-semibold">
              {data.description_Body}
            </h4>
          </div>
          <div className="row-start-1 row-span-2 col-start-2 col-span-2">
            <img
              src={data.image_1}
              className="w-full rounded-lg bg-white "
              alt="..."
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/* Footer body */}
      {data.Head_footer && data.description_footer ? (
        <div className="mt-10 py-10 xl:mx-0 xl:grid xl:grid-cols-8 gap-6">
          <div className="col-start-2 col-span-3 ">
            <h2 className="text-black text-4xl font-semibold">
              {data.Head_footer}
            </h2>
          </div>
          <div className="mt-5 xl:mt-0 row-start-2 col-start-2 col-span-3">
            <h4 className="text-black text-lg font-semibold">
              {data.description_footer}
            </h4>
          </div>
          <div className="row-start-1 row-span-2 col-start-6 col-span-2">
            <img
              src={data.image_1}
              className="w-full rounded-lg bg-white "
              alt="..."
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/* Tabs */}
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

      {/* Testimonials */}
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
      <div className="pt-[100px] pb-[100px] xl:pt-[150px] xl:pb-[150px] grid grid-cols-8 gap-10">
        <div className="col-start-2 col-span-6">
          <TestimonialCarousel />
        </div>
      </div>

      {/* Forms */}
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
