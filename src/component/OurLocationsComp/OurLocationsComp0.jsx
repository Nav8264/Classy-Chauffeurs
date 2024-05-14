import React from "react";
import { Link } from "react-router-dom";
import { locationDataArray } from "./locationDataArray";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import building from "../../images/building.jpg";

import location from "../../images/3d-view-map.jpg";
import brasbine2 from "../../images/brisbaneNight.jpg";

import goldCoast from "../../images/gold.jpg";
import Sprinter from "../../images/sprinter2.jpg";
import BMW7 from "../../images/capacityCar.png";
import chaueffer from "../../images/Chauffeur-Vs.-Driver-2-p-800.jpg";
import lambo from "../../images/limbo.jpeg";
import trip from "../../images/trip.jpeg";
import interior from "../../images/backiee-208717-landscape.jpg";

export function OurLocationsComp0({ highlights, currentLocation }) {
  console.log("currentLocation", currentLocation);
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };
  const currentLocationData = locationDataArray?.find(
    (item) => item?.id === currentLocation
  );

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${currentLocationData?.data?.banner})`,
        }}
        className={`wf-section newBreadcrumb `}
      ></div>
      <div className="flex justify-center text-center item-center">
        <div
          className="absolute top-40 px-3 rounded"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <h1 className="heading-7225">
            <strong className="bold-text-252 ">
              {currentLocationData?.data?.title}
            </strong>
          </h1>
        </div>
      </div>
      <div className="tabs-section-01 wf-section  px-[5rem] xxs:px-[2rem] flex p-0">
        <div>
          <h1
            className="text-[white] text-[50px] mb-[1rem] max-w-[1100px]"
            style={{ lineHeight: "1.1" }}
          >
            {currentLocationData?.data?.title1}
          </h1>
          <div className="sm:w-[30rem] lg:w-[50rem]  xs:w-[20rem]  leading-6">
            <h2 className="text-[white]">
              {currentLocationData?.data?.question}
            </h2>
            <p className="text-[white] text-[17px] font-medium">
              {currentLocationData?.data?.description}
            </p>
          </div>
          <div className="flex mt-[1rem]">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                initial={{ opacity: 0, translateY: +70 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
              >
                <Link to="/booking">
                  <button className="bg-[#bd9300] mr-[1rem] cursor-pointer   p-[1rem] rounded-[5px] wavy">
                    BOOK NOW
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                initial={{ opacity: 0, translateY: +70 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
              >
                <Link to="/booking">
                  <button className="bg-white mr-[1rem] cursor-pointer   p-[1rem] rounded-[5px] wavy">
                    {/* <strong className="bold-text-310"> */}
                    INSTANT QUOTE {/* </strong> */}
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto p-2  ">
        <div className="flex xxxs:flex-col justify-center   lg:flex-row gap-10 my-5 items-center">
          <div className="max-w-[600px]">
            <img src={chaueffer} alt="" />
          </div>

          <div className="max-w-[600px]">
            <h2 className=""> {currentLocationData?.data?.title2}:</h2>
            <p className="font-normal md:pt-0 pt-5 leading-normal">
              {currentLocationData?.data?.body}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex xxs:flex-col md:flex-row justify-center  items-center  text-center relative   ">
        <div className="flex-col  " style={{ flex: 2 }}>
          <div className=" w-[auto] md:px-[10rem]  ">
            <div className=" leading-8 font-thin flex-row  justify-start text-start text-[20px]">
              <div style={{ marginTop: 30 }} className="">
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    initial={{ opacity: 0, translateY: +70 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
                  >
                    <h1 className="text-center py-6 ">
                      Why choose ClassyChauffeurs?
                    </h1>
                    <div className="grid grid-cols-1   lg:grid-cols-3 md:grid-cols-2   items-center text-center justify-center gap-6  ">
                      {highlights?.map((item, index) => (
                        <div
                          key={index}
                          className="flex-row justify-between h-[14rem]  hover:shadow-2xl rounded-[10px] cursor-pointer    p-[1rem]"
                        >
                          <div className=" flex justify-center items-center text-center mx-auto">
                            <img
                              src={item?.icon}
                              alt=""
                              className="object-fit h-[110px] w-[110px] "
                            />
                          </div>
                          <div className=" ">
                            <p className=" mt-[1rem]">{item?.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute   ">
          <div className="">
            <img
              src={lambo}
              alt="Your Image"
              className="opacity-50  "
              height={60}
              width={1000}
            />
          </div>
        </div>
      </div> */}

      {/* <div className="flex xxs:flex-col md:flex-row justify-center items-center text-center ">
        <div className="flex-col" style={{ flex: 2 }}>
          <div className="w-[auto] md:px-[10rem]">
            <div className="leading-8 font-thin flex-row justify-start text-start text-[20px]">
              <div style={{ marginTop: 30 }} className="">
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    initial={{ opacity: 0, translateY: +70 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
                  >
                    <h1 className="text-center py-6">
                      Why choose ClassyChauffeurs?
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center text-center justify-center gap-6">
                      {highlights?.map((item, index) => (
                        <div
                          key={index}
                          className="flex-row justify-between h-[14rem] hover:shadow-2xl rounded-[10px] cursor-pointer p-[1rem]"
                        >
                          <div className="flex justify-center items-center text-center mx-auto">
                            <img
                              src={item?.icon}
                              alt=""
                              className="object-contain h-[110px] w-[110px]"
                            />
                          </div>
                          <div className="">
                            <p className="mt-[1rem]">{item?.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex xxs:flex-col md:flex-row justify-center items-center text-center relative">
        <div className="absolute inset-0 z-0">
          <img
            src={interior}
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="flex-col z-10" style={{ flex: 2 }}>
          <div className="w-[auto] md:px-[5rem] md:py-[1rem]">
            <div className="leading-8 font-thin flex-row justify-start text-start text-[20px] relative">
              <div style={{ marginTop: 30 }} className="relative">
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    initial={{ opacity: 0, translateY: +70 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
                  >
                    <h1 className="text-center py-3">
                      Why choose ClassyChauffeurs?
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center text-center justify-center gap-4">
                      {highlights?.map((item, index) => (
                        <div
                          key={index}
                          className="flex-row justify-between h-[14rem] hover:shadow-2xl rounded-[10px] cursor-pointer p-[1rem]"
                        >
                          <div className="flex justify-center items-center text-center mx-auto">
                            <img
                              src={item?.icon}
                              alt=""
                              className="object-contain h-[80px] w-[80px]"
                            />
                          </div>
                          <div className="">
                            <p className="mt-[1rem] text-[1rem] font-[500]">
                              {item?.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[1rem] border-b-2 border-[#bd9300]">
        <div className="max-w-[1200px] mx-auto px-5  ">
          <div className=" flex xxxs:flex-col justify-center   lg:flex-row gap-10 my-5 items-center">
            <div className="max-w-[600px]">
              <h2 className="">{currentLocationData?.data?.title3}:</h2>
              <p className="font-normal md:pt-0 pt-5 leading-normal">
                {currentLocationData?.data?.title3body}
              </p>
            </div>

            <div className="max-w-[600px]">
              <img
                src={currentLocationData?.data?.title3Image}
                alt=""
                className="h-[400px] w-[900px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto p-5">
        <h2 className="text-4xl text-center mt-[30px]">
          {currentLocationData?.data?.subBodyTitle}
        </h2>

        <div className=" flex xxxs:flex-col justify-center   lg:flex-row gap-10 mt-10 items-center">
          <div className="max-w-[600px]">
            <img src={lambo} className=" h-[300px] w-[600px] object-cover" />
          </div>

          <div className="max-w-[600px]">
            <p className="font-normal md:pt-0 pt-5 leading-normal">
              {currentLocationData?.data?.sub_body1}
            </p>

            <h2 className="mt-8">The Limousine Collection:</h2>
            <p className="font-normal md:pt-0 pt-5 leading-normal">
              Immerse in the zenith of luxury with our limousine ensemble, a
              curated selection of vehicles that epitomize sophistication,
              marrying sleek design with avant-garde technology and sumptuous
              interiors. From the elongated elegance of our stretch limousines
              to the commanding allure of our Hummers, we offer an unmatched
              travel experience.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="max-w-[1200px] mx-auto p-5">
        <h2 className="text-4xl text-center mt-[80px]">Our Illustrious Fleet: A Testament to Luxury</h2>

        <div className="md:flex gap-8 mt-10 items-center">

          <div className="max-w-[600px]">
            <h2>The Limousine Collection:</h2>
            <p className="font-normal md:pt-0 pt-5 ">Immerse in the zenith of luxury with our limousine ensemble, a curated selection of vehicles that epitomize sophistication, marrying sleek design with avant-garde technology and sumptuous interiors. From the elongated elegance of our stretch limousines to the commanding allure of our Hummers, we offer an unmatched travel experience.</p>
          </div>

          <div className="max-w-[600px]">
            <img src="http://localhost:3000/static/media/brisba.2e21e737bfe156b0669f.jpg" alt="" />
          </div>
        </div>

      </div> */}

      <div className="max-w-[1200px] mx-auto p-5">
        <h2 className="text-4xl text-center mt-[40px]">
          Group Travel with Style and Comfort: People Movers for Every Occasion
        </h2>

        <div className="md:flex gap-10 mt-10 items-center">
          <div className="max-w-[600px]">
            <p className="font-normal md:pt-0 pt-5 leading-normal">
              ClassyChauffeurs provides top-quality transportation for groups of
              all sizes. Our 'People Movers' are ideal for events and
              gatherings, accommodating groups as large as 55 people. These
              spacious vehicles ensure everyone can travel together, in comfort
              and style. With luxurious interiors, climate control, and
              entertainment options, we make sure each journey is enjoyable and
              stress-free. Whether you're planning a corporate event, a wedding,
              or a family outing, we offer a superior group travel experience.
            </p>

            <h2 className="mt-8">Bespoke Selection for Every Occasion:</h2>
            <p className="font-normal md:pt-0 pt-5 leading-normal">
              Our fleet is not just a collection of vehicles but a palette for
              crafting your perfect journey. Whether you require the refined
              elegance of a sedan for business engagements, the commodious
              luxury of an SUV for familial airport transfers, or the
              extravagant comfort of a stretch limousine for celebratory
              milestones, our fleet is poised to meet your desires.
            </p>
          </div>

          <div className="max-w-[600px]">
            <img src={trip} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="max-w-[1200px] mx-auto p-5">
        <h2 className="text-4xl text-center mt-[80px]">Unveiling Our Vehicle Capacities and Availability:</h2>

        <div className="md:flex gap-8 mt-10 items-center">

          <div className="max-w-[600px]">
            <h2>Bespoke Selection for Every Occasion:</h2>
            <p className="font-normal md:pt-0 pt-5 ">Our fleet is not just a collection of vehicles but a palette for crafting your perfect journey. Whether you require the refined elegance of a sedan for business engagements, the commodious luxury of an SUV for familial airport transfers, or the extravagant comfort of a stretch limousine for celebratory milestones, our fleet is poised to meet your desires.</p>
          </div>


          <div className="max-w-[600px]">
            <img src="http://localhost:3000/static/media/brisba.2e21e737bfe156b0669f.jpg" alt="" />
          </div>

        </div>

      </div> */}

      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-4xl text-center mt-[50px]">
          Capacity and Availablity
        </h2>

        <div className="md:flex gap-10 mt-4 items-center">
          <div className="max-w-[600px]">
            <img src={BMW7} alt="" />
          </div>
          <div className="max-w-[600px]">
            <h2>Sedans</h2>
            <p className="font-normal md:pt-0 pt-5 leading-normal">
              Ideal for up to 3 passengers, offering an intimate and plush
              travel experience. Available around the clock for city and airport
              transfers.
            </p>

            <h2 className="mt-8">SUVs</h2>
            <p className="font-normal md:pt-0 pt-5 leading-normal">
              Perfect for families or small groups, accommodating up to 6
              passengers with ample space for comfort and luggage. Readily
              available for all types of journeys.
            </p>
          </div>
        </div>

        {/* <div className="md:flex gap-8 mt-10 items-center">

          <div className="max-w-[600px]">
            <h2>SUVs</h2>
            <p className="font-normal md:pt-0 pt-5 ">Perfect for families or small groups, accommodating up to 6 passengers with ample
              space for comfort and luggage. Readily available for all types of journeys.</p>
          </div>

          <div className="max-w-[600px]">
            <img src="http://localhost:3000/static/media/brisba.2e21e737bfe156b0669f.jpg" alt="" />
          </div>

        </div> */}

        <div className="md:flex gap-8 mt-[30px] items-center px-5">
          <div className="max-w-[600px]">
            <h2>Stretch Limousines</h2>
            <p className="font-normal md:pt-0 pt-5 ">
              A symbol of opulence, suitable for up to 10 passengers, ensuring a
              grand entrance for any event. Advance booking recommended.
            </p>
            <h2 className="mt-8">People Movers</h2>
            <p className="font-normal md:pt-0 pt-5 leading-normal">
              Our versatile people movers cater to larger groups, ranging from
              10 to 18 passengers, guaranteeing a luxurious shared travel
              experience. Subject to availability; prior booking advised.
            </p>
          </div>

          <div className="max-w-[600px]">
            <img src={Sprinter} alt="" />
          </div>
        </div>

        {/* <div className="md:flex gap-8 mt-10 items-center">

          <div className="max-w-[600px]">
            <h2>People Movers</h2>
            <p className="font-normal md:pt-0 pt-5 ">Our versatile people movers cater to larger groups, ranging from 10 to 18 passengers, guaranteeing a luxurious shared travel experience. Subject to availability; prior booking advised.</p>
          </div>

          <div className="max-w-[600px]">
            <img src="http://localhost:3000/static/media/brisba.2e21e737bfe156b0669f.jpg" alt="" />
          </div>

        </div> */}
      </div>

      <div className="max-w-[1200px] mx-auto p-5" id="impdata">
        <h2 className="text-4xl mb-5">
          Your Trusted Conduit for Sophisticated Brisbane Transfers
        </h2>

        <h3>Effortless Reservations & Transparent Engagements:</h3>
        <p className="font-normal mb-5 leading-normal">
          Book with ease and clarity. Our immediate quotation and user-friendly
          reservation system streamline your booking experience, ensuring
          transparency and sophistication from the outset.
        </p>

        <h3>Punctuality & Dependability:</h3>
        <p className="font-normal mb-5 leading-normal">
          Our promise is not just to transport but to do so with punctilious
          punctuality and steadfast reliability, be it for our distinguished
          airport services or private charters.
        </p>

        <h3>Safeguarding Your Journey:</h3>
        <p className="font-normal mb-5 leading-normal">
          Travel with serenity, knowing that your safety and discretion are
          paramount, upheld by our cadre of professional chauffeurs dedicated to
          ensuring a secure and private passage.
        </p>

        <h3 className="">Support That Anticipates Your Needs:</h3>
        <p className="font-normal mb-5 leading-normal">
          Our concierge team stands ready, 24/7, to assist with your limousine
          and luxury chauffeur requisites in Brisbane, ensuring your demands are
          not just met but exceeded.
        </p>
      </div>
      {/* <div className="text-2xl font-bold mt-10  text-center">
          Commence Your Journey with ClassyChauffeurs
        </div>
        <a href="/contact" className="flex justify-center">
          {" "}
          <button className="py-2 mt-3 px-4 text-sm bg-[black] text-[white] rounded hover:scale-105 active:scale-95 transition-transform">
            Contact Us
          </button>
        </a>
      </div>

      <div className=" h-[100%] flex justify-between  px-[auto] text-[white] my-[2rem] max-[600px]:flex-col  ">
        <div style={{ flex: 2 }} className=" p-5 ">
          <p className="text-[30px] mb-[2rem] font-bold leading-[40px] xxs:p-[1rem] flex-row justify-center text-start text-[#212121]">
            {currentLocationData?.data?.text}
          </p>
          <div className=" mr-[1rem]  ">
            <img
              src={currentLocationData?.data?.bg}
              alt=""
              className="sm:h-[400px] sm:w-[860px]"
            />
          </div>
        </div>

        <div
          style={{ flex: 2 }}
          className=" leading-[40px] h-[100%]  text-[#212121] p-8   px-[2rem] font-light text-[18px] flex-col"
        >
          <p
            className={`${
              isTruncated ? "max-h-20 overflow-hidden " : "max-h-full"
            }`}
          >
            {currentLocationData?.data?.sub_body1}
          </p>
          <button onClick={toggleTruncate}>
            {isTruncated ? "Show More" : "Show Less"}
          </button>
          <p className="text-[#bd9300] font-semibold mt-[1rem]  text-[20px]">
            We offer premium chauffeur-driven {currentLocationData?.data?.title}{" "}
            transport, including:
          </p>
          <ul className="list-disc px-[1rem] text-[18px] ">
            <li>{currentLocationData?.data?.title} airport transfers</li>
            <li>Corporate transfers</li>
            <li>Private car transfers</li>
            <li>Limousine hire</li>
            <li>Special event transport</li>
            <li>Conference transport</li>
            <li>
              {currentLocationData?.data?.title} Hills Private Luxury Tours
            </li>
          </ul>
          <div className="flex  gap-4">
            <button className="bg-[#bd9300] font-semibold px-4  py-2">
              <Link to="/booking">
                {" "}
                {currentLocationData?.data?.title} Transfer
              </Link>
            </button>
            <button className=" border-[2px] border-[#bd9300]  text-[#bd9300] font-semibold px-4 py-2">
              <Link to="/booking"> BOOK NOW</Link>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
