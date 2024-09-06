"use client";

import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { CardHorizontal } from "../components/CardHorizontal";
import { Card } from "../components/Card";
import { CardImages } from "./components/CardImages";
import { ScrollerList } from "../components/ScrollerList";
import { Gallery } from "../components/Gallery";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { Form } from "../components/Form";

export default function Services() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    // Optionally, add an event listener to handle changes to the media query
    const handleChange = (e: MediaQueryListEvent) =>
      setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Header
        Title="Our Services"
        Body="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
      />

      <CardHorizontal
        cardTitle="Need help?"
        className="drop-shadow-xl"
        style={{ marginTop: "-100px" }}
      />

      <div
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
        className="xl:grid xl:grid-cols-8 xl:mx-0 mx-5 gap-10 justify-items-center"
      >
        <div className="col-start-3 col-span-4">
          <h2 className="text-4xl text-center text-black font-semibold">
            Our service and solution offers
          </h2>
        </div>
        <div className="row-start-2 col-start-3 col-span-4 xl:mt-0 mt-5">
          <h2 className="text-xl text-black lead text-center">
            At RMS Omega, we provide all the pieces to the puzzle when it comes
            to data collection technology. Our experienced account managers will
            work with you directly so you won’t have to go through multiple
            vendors for different technologies. The RMS Omega solutions team
            will get you up and running with the right mobile devices, readers,
            scanners, labels, tags & supplies, software integration, and secure
            wireless systems.
          </h2>
        </div>
        <div className="row-start-3 col-start-3 xl:mt-0 mt-5 col-span-4">
          <h2 className="text-xl text-black lead text-center">
            When it comes to finding the perfect solution, no two projects are
            the same. RMS Omega will work with you to find the best, customized
            solution to best fit your business needs. Our solutions architects
            will listen to your current challenges, look at your existing
            system, and give you custom recommendations.
          </h2>
        </div>
      </div>

      <div
        className="flex flex-col"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          opacity: "0.8",
          backgroundColor: "#a2a2a2",
          backgroundImage:
            "repeating-radial-gradient( circle at 0 0, transparent 0, #a2a2a2 100px ), repeating-linear-gradient( #162E3C55, #162E3C )",
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
        }}
      >
        <div>
          <h1 className="text-6xl text-center text-white">
            Securing and automating warehouse management
          </h1>
          <footer className="block pb-10 text-center font-light leading-relaxed mt-1 text-white text-xl">
            Someone famous in <cite>Source Title</cite>
          </footer>
          <div className="mt-10 grid grid-cols-5 gap-4">
            <div className="col-start-2 md:col-start-2 col-span-3 md:col-span-1">
              <Card
                cardTitle="Location Tracking & Visibility"
                cardBody="The location of your most important assets and inventory is critical information. A technological tracking solution provides you with the most accurate location information on all items that are tagged and scanned."
                link="/services/location_tracking"
              />
            </div>
            <div className="col-start-2 md:col-start-3 col-span-3 md:col-span-1">
              <Card
                cardTitle="Inventory Management"
                cardBody="Make asset and inventory management easier with tailored data collection solutions that improve visibility and data accuracy."
                link="google.com"
              />
            </div>
            <div className="col-start-2 col-span-3 md:col-span-1">
              <Card
                cardTitle="testing"
                cardBody="lorem ipsum bang"
                link="google.com"
              />
            </div>
            <div className="col-start-2 col-span-3 md:col-span-1 md:col-start-2">
              <Card
                cardTitle="testing"
                cardBody="lorem ipsum bang"
                link="google.com"
              />
            </div>
            <div className="col-start-2 col-span-3 md:col-span-1 md:col-start-3">
              <Card
                cardTitle="testing"
                cardBody="lorem ipsum bang"
                link="google.com"
              />
            </div>
            <div className="col-start-2 col-span-3 md:col-span-1 md:col-start-4">
              <Card
                cardTitle="testing"
                cardBody="lorem ipsum bang"
                link="google.com"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col text-black"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div>
          <h1 className="text-6xl text-center">
            Learn more of our technologies
          </h1>
          <footer className="block pb-10 text-center font-light leading-relaxed mt-1 text-xl">
            Someone famous in <cite>Source Title</cite>
          </footer>
          <div className="mx-5 xl:mx-0 xl:grid xl:grid-cols-8 gap-4">
            <div className="col-start-2 col-span-2">
              <CardImages
                title="RFID Scanner"
                body="RFID technology helps companies improve productivity, increase visibility, and reduce operating costs."
                image="https://images.pexels.com/photos/12935075/pexels-photo-12935075.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
            <div className="mt-5 xl:mt-0 col-start-4 col-span-2">
              <CardImages
                title="Gateway"
                body="RFID technology helps companies improve productivity, increase visibility, and reduce operating costs."
                image="https://images.pexels.com/photos/12935075/pexels-photo-12935075.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
            <div className="mt-5 xl:mt-0 col-start-6 col-span-2">
              <CardImages
                title="Gateway"
                body="RFID technology helps companies improve productivity, increase visibility, and reduce operating costs."
                image="https://images.pexels.com/photos/12935075/pexels-photo-12935075.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
            <div className="mt-5 xl:mt-0 row-start-2 col-start-2 col-span-2">
              <CardImages
                title="Gateway"
                body="RFID technology helps companies improve productivity, increase visibility, and reduce operating costs."
                image="https://images.pexels.com/photos/12935075/pexels-photo-12935075.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
            <div className="mt-5 xl:mt-0 row-start-2 col-start-4 col-span-2">
              <CardImages
                title="Gateway"
                body="RFID technology helps companies improve productivity, increase visibility, and reduce operating costs."
                image="https://images.pexels.com/photos/12935075/pexels-photo-12935075.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
            <div className="mt-5 xl:mt-0 row-start-2 col-start-6 col-span-2">
              <CardImages
                title="Gateway"
                body="RFID technology helps companies improve productivity, increase visibility, and reduce operating costs."
                image="https://images.pexels.com/photos/12935075/pexels-photo-12935075.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroller lists */}
      <div
        style={{
          paddingTop: "100px",
          clipPath: "polygon(100% 0, 100% 90%, 0 100%, 0 10%)",
        }}
        className="bg-warning-500"
      >
        <h2 className="text-center text-white text-6xl font-semibold">
          Our technologies
        </h2>
        <footer className="block text-center mt-1 text-neutral-200 dark:text-neutral-400">
          - Someone famous in <cite>Source Title</cite>
        </footer>

        <div className="grid grid-cols-6 mt-12 p-4 xl:p-12">
          <div className="xl:col-start-2 col-span-6 xl:col-span-4">
            {!isReducedMotion ? (
              <ScrollerList dataAnimated="true" />
            ) : (
              <Gallery />
            )}
            {/*
          or you can do this instead
          
          {!isReducedMotion ? (
            <ScrollerList dataAnimated="true" />
          ) : (
            <ScrollerList dataAnimated="false" />
          )}
          */}
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div style={{ paddingTop: "50px" }}>
        <h2 className="mt-12 text-4xl text-black text-center mb-12 font-semibold">
          Hear what our customers have to say!
        </h2>
        <div className="pt-12 pb-12 grid grid-cols-8 gap-10">
          <div className="col-start-2 col-span-6">
            <TestimonialCarousel />
          </div>
        </div>
      </div>

      {/* Form */}
      <div
        style={{
          backgroundColor: "#EEEEEF",
          paddingTop: "50px",
          paddingBottom: "50px",
          clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <h2 className="mt-12 text-4xl xl:text-6xl text-black text-center mb-4 font-semibold">
          Have a question?
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
                Give us a call for a free consultation!
              </h2>
              <p className="text-black text-justify">
                Request more information about a particular technology, inquire
                about general pricing or demo equipment, or schedule a no-cost
                consultation to discuss your business challenges.
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
