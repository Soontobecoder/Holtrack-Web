"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "./home.css";
import { HomeHeader } from "./components/HomeHeader";
import { HomeBody } from "./components/HomeBody";
import { Carousel } from "./components/Carousel";
import { Gallery } from "./components/Gallery";
import { CardTitle } from "./components/CardTitle";
import { Tabs } from "./components/Tabs";
import { ScrollerList } from "./components/ScrollerList";

// const Gallery = dynamic(() => import("./components/Gallery"), {
//   ssr: false,
// });

const Home = () => {
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
    <div className="flex flex-col" style={{ backgroundColor: "white" }}>
      {/* <div className="scroll-watcher"></div> */}

      <HomeHeader />

      {/* Centered cards */}
      <div className="grid grid-cols-6 gap-10 mb-12">
        <div className="col-start-1 col-span-3 xl:col-start-2 xl:col-span-1">
          <CardTitle
            image="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
            cardBody="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardTitle="Card title"
          />
        </div>
        <div className="col-start-4 col-span-3 xl:col-start-3 xl:col-span-1">
          <CardTitle
            image="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
            cardBody="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardTitle="Card title"
          />
        </div>
        <div className="col-start-1 col-span-3 xl:col-start-4 xl:col-span-1">
          <CardTitle
            image="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
            cardBody="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardTitle="Card title"
          />
        </div>
        <div className="col-start-4 col-span-3 xl:col-start-5 xl:col-span-1">
          <CardTitle
            image="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
            cardBody="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardTitle="Card title"
          />
        </div>
      </div>

      {/* <h2 className="text-center text-black text-6xl font-semibold mt-12">
        {" "}
        What we offer{" "}
      </h2>
      <footer className="block text-center mt-1 text-neutral-600 dark:text-neutral-400">
        Someone famous in <cite>Source Title</cite>
      </footer>
      <div className="grid grid-cols-6 mt-12">
        <div className="md:col-start-2 col-span-6 md:col-span-4">
          <Carousel style={{ backgroundColor: "white" }} />
        </div>
      </div> */}

      {/* Banners */}
      <div className="grid grid-cols-6 mt-12 gap-10">
        {/* Banner 1 */}
        <div className="slideInLeft ml-5 mr-5 xl:ml-0 xl:mr-0 col-start-1 self-center col-span-6 xl:col-span-2 xl:col-start-2">
          <h1 className="text-6xl text-black">HOLTRACK FOR THE WIN</h1>
          <p
            style={{ fontSize: "24px" }}
            className="mb-4 text-black text-base font-light leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            libero iste quod quibusdam maxime recusandae odit eveniet,
            aspernatur culpa provident error molestiae vitae corporis in vero
            est! Beatae, ipsum voluptatibus.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Button
          </button>
        </div>
        <div className="slideInRight ml-5 mr-5 xl:ml-0 xl:mr-0 justify-self-end col-start-1 col-span-6 mt-12 xl:mt-0 xl:col-start-4 xl:col-span-2">
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            className="banner h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
          />
        </div>

        {/* Banner 2 */}
        <div className="slideInLeft ml-5 mr-5 xl:ml-0 xl:mr-0 mt-12 col-start-1 self-center col-span-6 xl:col-span-2 xl:col-start-4">
          <h1 className="text-6xl text-black">HOLTRACK FOR THE WIN</h1>
          <p
            style={{ fontSize: "24px" }}
            className="mb-4 text-black text-base font-light leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            libero iste quod quibusdam maxime recusandae odit eveniet,
            aspernatur culpa provident error molestiae vitae corporis in vero
            est! Beatae, ipsum voluptatibus.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Button
          </button>
        </div>
        <div className="slideInRight ml-5 mr-5 xl:ml-0 xl:mr-0 col-start-1 col-span-6 mt-12 xl:col-start-2 xl:row-start-2 xl:col-span-2">
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            className="banner h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
          />
        </div>

        {/* Banner 3 */}
        <div className="slideInLeft ml-5 mr-5 xl:ml-0 xl:mr-0 col-start-1 self-center mt-12 mb-12 col-span-6 xl:col-span-2 xl:col-start-2">
          <h1 className="text-6xl text-black">HOLTRACK FOR THE WIN</h1>
          <p
            style={{ fontSize: "24px" }}
            className="mb-4 text-black text-base font-light leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            libero iste quod quibusdam maxime recusandae odit eveniet,
            aspernatur culpa provident error molestiae vitae corporis in vero
            est! Beatae, ipsum voluptatibus.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Button
          </button>
        </div>
        <div className="slideInRight ml-5 mr-5 xl:ml-0 xl:mr-0 justify-self-end col-start-1 mb-12 col-span-6 mt-12 xl:col-start-4 xl:col-span-2">
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            className="banner h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
          />
        </div>
      </div>

      <HomeBody />

      {/* Scroller lists */}
      <h2 className="text-center text-black text-6xl font-semibold mt-12">
        Our technologies
      </h2>
      <footer className="block text-center mt-1 text-neutral-600 dark:text-neutral-400">
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

      {/* specializations */}
      <div
        style={{
          width: "100%",
          height: "auto",
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
          backgroundColor: "#D2D8DC",
          paddingBottom: "150px",
          paddingTop: "150px",
        }}
      >
        <h2 className="text-center bg text-black text-6xl font-semibold mt-12">
          {" "}
          Our specializations{" "}
        </h2>
        <footer className="block text-center mt-1 text-neutral-600 dark:text-neutral-400">
          Someone famous in <cite>Source Title</cite>
        </footer>
        <Tabs className="p-4 md:p-12 md:ml-12 md:mr-12" />
      </div>

      {/* meet the team */}
      <div className="mb-12">
        <h2 className="text-center text-black text-6xl font-semibold mt-12">
          {" "}
          Meet the team{" "}
        </h2>
        <footer className="block text-center mt-1 text-neutral-600 dark:text-neutral-400">
          The team who made holtrack <cite>Possible</cite>
        </footer>
      </div>
      <div className="p-12 grid grid-cols-2 md:grid-cols-3 justify-center xl:grid-cols-7 gap-10 mx-10">
        <div className="xl:col-start-2">
          <figure className="mb-4">
            <img
              src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
              className="h-auto max-w-full rounded-full"
              alt=""
            />
            <figcaption className="text-xl text-center text-neutral-600 dark:text-neutral-400">
              Delvin SUTIGONAL
            </figcaption>
          </figure>
        </div>
        <div className="">
          <figure className="mb-4">
            <img
              src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
              className="h-auto max-w-full rounded-full"
              alt=""
            />
            <figcaption className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              Arifin HADIYANTOL
            </figcaption>
          </figure>
        </div>
        <div className="">
          <figure className="mb-4">
            <img
              src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
              className="h-auto max-w-full rounded-full"
              alt=""
            />
            <figcaption className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              ChariMEK utasa
            </figcaption>
          </figure>
        </div>
        <div className="">
          <figure className="mb-4">
            <img
              src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
              className="h-auto max-w-full rounded-full"
              alt=""
            />
            <figcaption className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              ERICK GANTENG
            </figcaption>
          </figure>
        </div>
        <div className="">
          <figure className="mb-4">
            <img
              src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
              className="h-auto max-w-full rounded-full"
              alt=""
            />
            <figcaption className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              MAMAT SUGIYONO
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;

// export default function Home() {
//   return (
//     <Layout>
//       <Interface />
//     </Layout>
//   );
// }
