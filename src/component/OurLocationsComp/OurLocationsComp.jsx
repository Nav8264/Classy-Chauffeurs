import React from "react";
import { Link } from "react-router-dom";
import { locationDataArray } from "./locationDataArray";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function OurLocationsComp({ highlights, currentLocation }) {
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
      <div className="tabs-section-01 wf-section  px-[5rem] xxs:px-[2rem] flex">
        <div>
          <h1 className="text-[white] text-[50px] mb-[2rem]">
            {currentLocationData?.data?.title1}
          </h1>
          <div className="sm:w-[30rem] lg:w-[45rem]  xs:w-[20rem]  leading-6">
            <p className="text-[white] mb-[1rem]  text-[17px] font-medium">
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
                // className="heading-7222"
              >
                <Link to="/booking">
                  <button className="bg-[#bd9300] mr-[1rem] cursor-pointer   p-[1rem] rounded-[5px] wavy">
                    {/* <strong className="bold-text-310"> */}
                    BOOK NOW
                    {/* </strong> */}
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
                // className="heading-7222"
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

      <div className="flex xxs:flex-col md:flex-row justify-center  items-center  text-center   ">
        <div style={{ flex: 2 }}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ opacity: 0, translateY: +70 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
              // className="heading-7222"
            >
              <div className="grid grid-cols-2 xxs:mt-7 items-center text-center justify-center xxs:flex-col sm:flex-row gap-6  ">
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

        <div className="flex-col" style={{ flex: 2 }}>
          <div className=" w-[auto] px-[3rem]  ">
            <p className="text-[35px] mb-[2rem] font-bold leading-[60px] mt-[4rem] flex-row  justify-start text-start ">
              {currentLocationData?.data?.title2}
            </p>
            <p className=" leading-8 font-thin flex-row  justify-start text-start text-[20px]">
              {currentLocationData?.data?.body}
              <p className="py-[1rem] border-b-2 border-[#bd9300]">
                {currentLocationData?.data?.sub_body}
              </p>
            </p>
          </div>
          <div className="mt-[1rem] px-8 flex justify-center">
            <img
              src={currentLocationData?.data?.img}
              alt=""
              className="sm:h-[350px] sm:w-[860px]"
            />
          </div>
        </div>
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
      </div>
    </div>
  );
}
