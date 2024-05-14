import React, { useEffect, useState } from "react";

import googlelogo from "../../images/icons8-google-play.svg";
import applelogo from "../../images/icons8-apple-logo-250.png";
import mockuppng from "../../images/mockup.png";
import Destination from "../../component/destination/index";
import ServiceSection from "../../component/service-section";
import Ourfleet from "../../component/ourFleet";
import { motion } from "framer-motion";
import airportimg from "../../images/bgcMain.jpg";
import { Link, useNavigate } from "react-router-dom";
import appStore from "../../images/appStore.png";
import MyBackgroundImage from "../../images/newHome.jpg";
import googlePlay from "../../images/googlePlay2.jpg";
import BookingFormHome from "../../component/HomeBookingForm/Parent/Parentstep";
import Loader from "../../component/Loader";
// const LazyImage = lazy(() => import('./Image'));

const ourExpertise = [
  {
    number: "Luxury",
    year: " airport",
    experince: "  transfer",
  },
  {
    number: "Chauffeur",
    year: "  Service",
  },
  {
    number: "Limousine",
    year: "Service",
  },
  {
    number: "Wedding",
    year: "  transfer",
  },
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = window.localStorage.getItem("loggedIn");
    // to avoid redirection to login page
    console.log("loggedIn", loggedIn);
    if (loggedIn === true) {
      console.log("loggedIn", loggedIn);
      navigate("/");
    }
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <div className=" block xs:hidden">
            <div
              className="h-[25vh]"
              style={{
                backgroundImage: `url(https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/home-hero-section-b6805f35-42ac-4b3d-b9e5-7e859fa0c0d8.jpg)`,
                backgroundPosition: "50%",
                backgroundSize: "cover",
              }}
            />
            <motion.div
              className=""
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 0.8,
              }}
            >
              <div
                className=""
                style={{
                  background: "linear-gradient(180deg, #6B6B6B, #6B6B6B)",
                }}
              >
                <BookingFormHome className="" />
              </div>
            </motion.div>
          </div>

          <div
            className=" hidden xs:block  borer border-yellow-400"
            style={{
              backgroundImage: `url(https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/home-hero-section-b6805f35-42ac-4b3d-b9e5-7e859fa0c0d8.jpg)`,

              backgroundPosition: "50%",
              backgroundSize: "cover",
            }}
          >
            <motion.div
              className={` `}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                type: "tween",
                duration: 1,
                delay: 0.8,
              }}
            >
              <div className=" pt-10">
                <BookingFormHome className="" />
              </div>
            </motion.div>
          </div>
          <div class="app-section wf-section  pb-[80px] sm:pb-[100px] sm:pt-[200px] md:pt-[140px] lg:pt-[100px] pl-4   lg:pl-[200px] pt-[70px]  ">
            <div class="w-container">
              <div class="px-4    grid xxs:grid-cols-1 sm:grid-cols-2 ">
                <div class="content-box-app  md:mt-[1rem] lg:mt-[2rem]">
                  <div class="header-box xxs:mt-2 sm:mt-0 ">
                    <div class="header-wrap side ">
                      <h1 class="h-1 ">Download the app</h1>
                    </div>
                  </div>
                  <div class="paragraph-wrap">
                    <p class="p-desc xxs:mt-20 text-center">
                      Easily book, change, or cancel rides on the go. Think of
                      it as peace of mind in the palm of your hand.
                    </p>
                  </div>
                  <div class="grid  xxxs:grid-cols-1 sm:grid-cols-2 xxxs:gap-6 place-content-center sm:gap-2 mt-10 sm:ml-0 ">
                    <div className="text-center  flex justify-center ">
                      <div className="text-center div-block-312583 cursor-pointer">
                        <a
                          href="https://apps.apple.com/us/app/b-g-chauffeurs-passenger/id6448744144"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={appStore}
                            alt=""
                            className="h-[57px] w-[145px] sm:relative sm:bottom-[4px]"
                          />
                        </a>
                      </div>
                    </div>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.bgchauffeurs&hl=en-IN"
                      rel="noreferrer"
                      target="_blank"
                      className="cursor-pointer"
                    >
                      <div class=" flex justify-center">
                        <img
                          src={googlePlay}
                          alt=""
                          className="h-[50px] w-[140px] rounded-lg"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-center p-10">
                    <Link
                      to={"/contact"}
                      data-w-id="d4e41edc-7e37-9669-a667-f83ae4b85434"
                      className="book-btn  w-[150px] hover:bg-gray-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div class="">
                  <div class="   xxxs:mt-8 sm:mt-0 sm:ml-20      ">
                    <div className=" ">
                      <div className="absolute  md:ml-2  z-10  ">
                        <div
                          data-poster-url="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-poster-00001.jpg"
                          data-video-urls="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.mp4,https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.webm"
                          data-autoplay="true"
                          data-loop="true"
                          data-wf-ignore="true"
                          class="  w-background-video-atom"
                        >
                          <video
                            className="    xxxs:w-[47%] xxs:w-[58%] xxxs:ml-[29px]  xs:w-[63%] xs:ml-[46px]  xxxs:mt-[15px] sm:ml-[60px] xl:ml-[62px]   sm:w-[47%]  lg:w-[53%] md:w-[48%] xl:w-[44%]     2xl:w-[63%] 2xl:ml-[88px] md:ml-[54px] rounded-[25px]"
                            src="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.mp4"
                            loop
                            autoPlay
                            muted
                          ></video>
                        </div>
                      </div>
                    </div>
                    <img
                      src={mockuppng}
                      alt=""
                      width="80%"
                      loading="lazy"
                      className="relative   xxs:w-[100%] xs:w-[84%]   sm:w-[100%]        sm:ml-[30px]     lg:w-[94%] md:w-[92%] xl:w-[67%]  2xl:w-[74%]  rounded-[25px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" sm:-mt-20 sm:h-20 w-full bg-black"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 23%, rgba(0,0,0,0.7819502801120448) 80%)",
            }}
          />
          <div className="our-expertise wf-section">
            <div
              className="h-20 w-full -mt-[61px] "
              style={{
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0) 23%, rgba(0,0,0,0.7819502801120448) 80%)",
              }}
            />

            <div className="container-1 h-full w-container -mt-24 xs:mt-[100px]">
              <div className="header-box">
                <div className="div-block-302 golden"></div>
                <div className="header-wrap">
                  <h4 className="h-3 golden">
                    JUST NUMBERS, BUT SO MUCH MORE.
                  </h4>
                  <h1 className="h-1 pt-4 xs:pt-0 golden">Our Expertise</h1>
                </div>
                <div className="div-block-302 golden "></div>
              </div>
              <div className="expertise-content-wrap lg:grid-cols-4 mt-[950px] z-[-5000]">
                {ourExpertise.map((items) => (
                  <div className="circle-wrap">
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                      }}
                      className="circle"
                    ></motion.div>
                    <div className="circle-content">
                      <div className="circle-content-box">
                        <div className="clip">
                          <h1 className="heading-12">{items.number}</h1>
                        </div>
                        <div className="clip">
                          <h3 className="number-title ">
                            {items.year}
                            <br />
                            {items.experince}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="aircraft-lands wf-section  ">
            <div className="container-1 w-container   ">
              <div></div>
              <h3
                data-w-id="1028136c-9f48-5a1a-cb70-d855c418c93e"
                className="heading-14     text-center xxxs:px-6 lg:px-44"
              >
                OUR CHAUFFEUR SERVICES IN AUSTRALIA AND NEW ZEALAND
              </h3>
              <div className=" flex xxxs:flex-col 2xl:flex-row  lg:mx-[2rem] gap-4 lg:px-[2rem] py-[3rem]">
                <div>
                  <p className="paragraph-9 px-4 xl:px-[4rem]  xxs:px-8   text-justify ">
                    Your premier destination for luxurious chauffeur cars widely
                    available across Australia and New Zealand. With a rich
                    legacy in the industry spanning several years,{" "}
                    <span className="font-[cinzel] font-semibold ">
                      ClassyChauffeurs
                    </span>{" "}
                    is committed to delivering an experience defined by
                    tranquility and extravagance. Our unwavering dedication to
                    excellence has been our hallmark, making us the trusted
                    choice for discerning clients seeking the epitome of
                    chauffeur service. <br />
                    <span className="font-[cinzel] font-semibold">
                      ClassyChauffeurs
                    </span>{" "}
                    is categorized by its attention to detail and high level of
                    customer service, this is what sets it apart from another
                    chauffeur company service. It is vital for our company to
                    nurture and develop our client relationships to ensure
                    repeat business and a sustained growth in profits. In order
                    to improve our customer experience and build on
                    relationships that encourages repeat business and customer
                    loyalty, it is essential for us to log and act on customer
                    preferences and feedback. This allows us to tailor the
                    service to individual customer needs, so they live up to
                    their expectations every time they get into our vehicles.{" "}
                  </p>

                  {showFullText && (
                    <p className="paragraph-9 px-4 xl:px-[4rem]  xxs:px-8   text-justify ">
                      <br /> In many cases the most important connection for a
                      corporate account will be the booker, as they will often
                      be the decision maker of ground transportation supplier.
                      The booker often being a busy secretary or PA, we can make
                      their job easier by offering a straightforward and
                      efficient booking service that will help them stick with
                      us. The booker will be forever grateful that we can make
                      them look good in front of their colleagues which is
                      cleverly sourced for them the best of corporate ground
                      transportation. <br /> Here in{" "}
                      <span className="font-[cinzel] font-semibold ">
                        ClassyChauffeurs
                      </span>
                      , we provide a client/passengers app, this is very
                      successful and significantly improves the efficiency of
                      corporate booking systems, while increasing profits and
                      minimizing efforts. This helps us spend more time focusing
                      on more profitable areas such as driving or keeping in
                      contact with customers. Another benefit of the
                      client/passengers app is that the booker can follow the
                      progress of the hires through a live updating system, this
                      ensures the booker is always aware of the passenger
                      whereabouts. <br /> Our company exclusively operates a
                      system of prearranged hires and customer service 24/7.
                    </p>
                  )}

                  <div className="flex justify-center">
                    {/* <button className="px-5 py-2 bg-black text-white" onClick={toggleShowFullText}>Read More</button> */}
                    <button
                      className="px-5 py-2 bg-[#131313] hover:scale-110 transition-transform hover:bg-[black] hover:shadow-lg text-white"
                      onClick={toggleShowFullText}
                    >
                      {showFullText ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>

                <img
                  src={
                    "https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-chauffeur-services-a59b9ee0-521a-4c1b-9c8e-c14cb751fbfe.jpg"
                  }
                  alt=""
                  loading="lazy"
                  className=" lg:w-[800px] xl:w-[800px] 2xl:w-[800px] px-[1rem] xl:px-[1rem] 2xl:px-[3rem] h-fit lg:mt-6"
                />
              </div>
            </div>
          </div>
          <div className=" xs:mt-0">
            <Ourfleet />
          </div>
          <div className="mb-10">
            <ServiceSection />
          </div>
          <div className="">
            <Destination />
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Home;
