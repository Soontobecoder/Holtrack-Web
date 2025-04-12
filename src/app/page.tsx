"use client";
import { useEffect, useState } from "react";
import "./home.css";
import { HomeHeader } from "./components/HomeHeader";
import { HomeBody } from "./components/HomeBody";
import { Gallery } from "./components/Gallery";
import { CardTitle } from "./components/CardTitle";
import { Tabs } from "./components/Tabs";
import { ScrollerList } from "./components/ScrollerList";

const Home: React.FC = () => {
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

  useEffect(() => {
    const scroller = document.querySelector(".scroller__inner") as HTMLElement;

    if (scroller) {
      let isPaused = false;

      const toggleAnimation = () => {
        if (isPaused) {
          scroller.style.animationPlayState = "running";
        } else {
          scroller.style.animationPlayState = "paused";
        }
        isPaused = !isPaused;
      };

      scroller.addEventListener("click", toggleAnimation);

      // Cleanup event listener on component unmount
      return () => {
        scroller.removeEventListener("click", toggleAnimation);
      };
    }
  }, []);
  return (
    <div className="flex flex-col" style={{ backgroundColor: "white" }}>
      {/* <div className="scroll-watcher"></div> */}

      <HomeHeader />

      {/* Centered cards */}
      <div className="grid grid-cols-6 gap-2 md:gap-5 px-4 xl:px-0 xl:gap-10 mb-12">
        <div className="col-start-1 col-span-3 xl:col-start-2 xl:col-span-1 z-10">
          <CardTitle
            image="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVkZ2V0JTIwZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D"
            cardBody="Plans designed to meet your personalized business needs while offering cost-effective solutions."
            cardTitle={
              <>
                Budget{" "}
                <span className="text-warning group-hover:text-white">
                  Friendly
                </span>
              </>
            }
          />
        </div>
        <div className="col-start-4 col-span-3 xl:col-start-3 xl:col-span-1 z-10">
          <CardTitle
            image="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VjdXJpdHklMjB1aXxlbnwwfHwwfHx8MA%3D%3D"
            cardBody="We provide tamper-proof solutions ensuring inventory management happens as efficient and secured as possible"
            cardTitle={
              <>
                Maximum{" "}
                <span className="text-warning group-hover:text-white">
                  Security
                </span>
              </>
            }
          />
        </div>
        <div className="col-start-1 col-span-3 xl:col-start-4 xl:col-span-1 z-10">
          <CardTitle
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            cardBody="Our plans integrate easily and effectively to your existing solution making migration easy"
            cardTitle={
              <>
                Easy{" "}
                <span className="text-warning group-hover:text-white">
                  Integration
                </span>
              </>
            }
          />
        </div>
        <div className="col-start-4 col-span-3 xl:col-start-5 xl:col-span-1 z-10">
          <CardTitle
            image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHdvJTIwcGVyc29uJTIwdGFsa2luZyUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww"
            cardBody="We tailor our solutions to fit your unique business needs, ensuring seamless integration and maximum efficiency."
            cardTitle={
              <>
                Very{" "}
                <span className="text-warning group-hover:text-white">
                  Personalized
                </span>
              </>
            }
          />
        </div>
      </div>

      {/* Banners */}
      <div className="grid grid-cols-6 mt-12 gap-4 xl:gap-10">
        {/* Banner 1 */}
        <div className="slideInLeft ml-5 mr-5 xl:ml-0 xl:mr-0 col-start-1 self-center col-span-6 xl:col-span-2 xl:col-start-2">
          <h1 className="text-2xl md:text-4xl xl:text-6xl mb-4 text-black">
            Flexible <span className="text-warning"> Solutions</span>
          </h1>
          <p className="md:text-xl xl:text-[24px] mb-4 text-black text-base font-light leading-relaxed">
            Our RFID systems are designed to adapt to your business needs,
            whether you’re a small operation or a large enterprise.
          </p>
        </div>
        <div className="slideInRight ml-5 mr-5 xl:ml-0 xl:mr-0 justify-self-end col-start-1 col-span-6 xl:mt-0 xl:col-start-4 xl:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="banner h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
          />
        </div>

        {/* Banner 2 */}
        <div className="slideInLeft ml-5 mr-5 xl:ml-0 xl:mr-0 col-start-1 self-center col-span-6 xl:col-span-2 xl:col-start-4">
          <h1 className="text-2xl md:text-4xl xl:text-6xl text-black mb-4 text-warning">
            Scalability
          </h1>
          <p className="md:text-xl xl:text-[24px] mb-4 text-black text-base font-light leading-relaxed">
            Holtrack’s solutions grow with your business, ensuring that your
            investment continues to deliver value as you expand.
          </p>
        </div>
        <div className="slideInRight ml-5 mr-5 xl:ml-0 xl:mr-0 col-start-1 col-span-6 xl:col-start-2 xl:row-start-2 xl:col-span-2">
          <img
            src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="banner h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
          />
        </div>

        {/* Banner 3 */}
        <div className="slideInLeft ml-5 mr-5 xl:ml-0 xl:mr-0 col-start-1 self-center mt-12 mb-12 col-span-6 xl:col-span-2 xl:col-start-2">
          <h1 className="text-2xl md:text-4xl xl:text-6xl text-black mb-4">
            Seamless <span className="text-warning"> Integration </span>
          </h1>
          <p className="md:text-xl xl:text-[24px] mb-4 text-black text-base font-light leading-relaxed">
            Our solutions integrate smoothly with your existing systems,
            minimizing disruption and maximizing efficiency.
          </p>
        </div>
        <div className="slideInRight ml-5 mr-5 xl:ml-0 xl:mr-0 justify-self-end col-start-1 mb-12 col-span-6 mt-12 xl:col-start-4 xl:col-span-2">
          <img
            src="https://images.pexels.com/photos/5257457/pexels-photo-5257457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="banner h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
          />
        </div>
      </div>

      <HomeBody />

      {/* Scroller lists */}
      <div>
        <h2 className="text-center text-black  text-2xl md:text-4xl xl:text-6xl font-semibold xl:mt-12">
          Our <span className="text-warning">Technologies</span>
        </h2>
        <footer className="block text-center px-[5%] xl:px-[30%] mt-4 text-neutral-600 text-xs md:text-lg xl:text-xl">
          With our technologies, you can transform your warehouse into a
          high-performing hub, ready to meet the dynamic demands of today’s
          marketplace.
        </footer>

        <div className="grid grid-cols-6 p-4 xl:pt-6 xl:p-12">
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

      {/* Why Us? */}
      <div
        id="why"
        style={{
          // clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 100%)",
          backgroundColor: "#D2D8DC",
          paddingBottom: "150px",
          paddingTop: "100px",
        }}
        className="md:px-12"
      >
        <h2 className="text-center bg text-neutral-600 text-2xl md:text-4xl xl:text-6xl font-semibold mt-12">
          {" "}
          Why <span className="text-warning">Holtrack</span> ?
        </h2>
        <footer className="block px-[10%] text-center mt-1 text-xs md:text-lg xl:text-xl text-neutral-600 font-bold">
          Contact us to know more of our strengths and why this is right for you
        </footer>
        <Tabs className="p-4 md:p-12 md:pt-4 md:ml-12 md:mr-12" />
      </div>

      {/* meet the team - IN DEVELOPMENT */}
      {/* <div>
        <div className="mb-12">
          <h2 className="text-center text-black text-6xl font-semibold mt-12">
            Meet the <span className="text-warning">Team</span>{" "}
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
                Delvin Sutiono
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
              <figcaption className="text-xl text-center text-neutral-600 dark:text-neutral-400">
                Raynard Hadiyanto
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
              <figcaption className="text-xl text-center text-neutral-600 dark:text-neutral-400">
                Charissa Utasa
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
              <figcaption className="text-xl text-center text-neutral-600 dark:text-neutral-400">
                Erick Gunawan
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
              <figcaption className="text-xl text-center text-neutral-600 dark:text-neutral-400">
                Brantley Nigel
              </figcaption>
            </figure>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
