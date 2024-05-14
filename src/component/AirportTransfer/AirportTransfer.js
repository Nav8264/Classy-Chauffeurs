import React from "react";
import { Link } from "react-router-dom";
// import { locationDataArray } from "./locationDataArray";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { airportTransferDataArray } from "./airportTranferDataArray ";

export function AirportTransfer({ highlights, currentAirport }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };
  // const currentAirportTransferDataArray = locationDataArray?.find(
  //   (item) => item?.id === currentLocation
  // );
  const currentAirportTransferDataArray = airportTransferDataArray?.find(
    (item) => item?.id === currentAirport
  );
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${currentAirportTransferDataArray?.data?.banner})`,
        }}
        className={`wf-section newBreadcrumb `}
      ></div>
      <div className="flex justify-center">
        <div className="absolute top-40 px-3 rounded" style={{backgroundColor:"rgba(0, 0, 0, 0.75)"}}>
          <h1 className="heading-7225" >
            <strong className="bold-text-252">
              {currentAirportTransferDataArray?.data?.title}
            </strong>
          </h1>
        </div>
      </div>
      <div className="tabs-section-01 wf-section  px-[5rem] xxs:px-[2rem]">
        <div>
          <h1 className="text-[white] text-[55px] mb-[2rem]" style={{lineHeight:"1.1"}}>
            {currentAirportTransferDataArray?.data?.title1}
          </h1>
          <div className="  sm:w-[30rem] lg:w-[45rem]  xs:w-[20rem] leading-6">
            <p className="text-[white] mb-[1rem]  text-[17px] font-medium">
              {currentAirportTransferDataArray?.data?.description}
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
          <div className=" w-[auto] px-[3rem]  xxs:px-[2rem]">
            <p className="text-[35px] mb-[2rem] font-bold leading-[60px] mt-[4rem] flex-row  justify-start text-start ">
              {currentAirportTransferDataArray?.data?.title2}
            </p>
            <p className=" leading-8 font-thin flex-row  justify-start text-start text-[20px]">
              {currentAirportTransferDataArray?.data?.body}
              <p className="py-[1rem] border-b-2 border-[#bd9300]">
                {currentAirportTransferDataArray?.data?.sub_body}
              </p>
            </p>
          </div>
          <div className="mt-[1rem] px-8 flex justify-center">
    <img
        src={currentAirportTransferDataArray?.data?.img}
        alt=""
        className="sm:h-[350px] sm:w-[860px]"
    />
</div>

        </div>
      </div>
    </div>
  );
}
