import React, { useEffect, useState } from "react";

import Loader from "../../component/Loader/index.jsx";
import { useLocation, useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Mercedes1 from "../../images/benzEclass.jpg";
import Mercedes2 from "../../images/Mercedes-S-Class_1.png";
import MercedesEclass from "../../images/Mercedes-E-Class_1.png";

import AudiQ7 from "../../images/Audi-Q7_2.png";
import LexusES from "../../images/Lexus-ES.png";
import BMW5 from "../../images/bmwS.jpg";
import BMW7 from "../../images/BMW-7-Series_2.png";
import peopleMover from "../../images/peopleMove.jpeg";
import Trailer from "../../images/trailer2.jpg";
import spinter from "../../images/sprinter2.jpg";
// import Chrysler from "../../images/Chrysler_1.png";
import Chrysler from "../../images/lexus.jpg";
import Limousine from "../../images/Stretch-Limousine-Ford-F250-Raptor.png";
import Driver1 from "../../images/i.webp";
import Driver2 from "../../images/Chauffeur-Vs.-Driver-2.jpg";
import Driver3 from "../../images/360_F_131650397_0rci3oAadfCCD6QHeMYFUnkiVWRxTx4K.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import Tab from "../../component/CustomTab/Tab.js";
import TabsPanel from "../../component/CustomTab/TabPannel.js";
import { Autoplay, Pagination, Navigation } from "swiper";
// import { OurLocationsComp } from "../../component/OurLocationsComp/OurLocationsComp.jsx";
import { OurLocationsComp0 } from "../../component/OurLocationsComp/OurLocationsComp0.jsx";
import service1 from "../../images/earthImage2jpg.jpg";
import trophy from "../../images/18399.jpg";
import mobile from "../../images/gpsnav.png";
import calender from "../../images/experinece.png";
import headPhones from "../../images/help.png";
import userP from "../../images/driver.jpg";
import MersedesCclass from "../../images/MercedesSclass.jpeg";
import bus from "../../images/bus1.jpeg";
import bus2 from "../../images/bus2.jpeg";
import Mercedesv from "../../images/MercedsVcopy.jpg";
import MercedesvTrailer from "../../images/trailer2.jpg";
import MobileAdUi from "../../component/MobileAd/index.jsx";
const OurLocations = () => {
  const [loading, setLoading] = useState(false);
  const { place } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  const Sedans = {
    fleet: [
      {
        img: MercedesEclass,
        heading: "Mercedes E Class",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 3,
        Luggage: 4,
      },
    ],
  };
  const Luxrious = {
    fleet: [
      {
        img: BMW7,
        heading: "BMW 7 Series",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 3,
        Luggage: 3,
      },
      {
        img: MersedesCclass,
        heading: "Mercedes S class",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 3,
        Luggage: 3,
      },
    ],
  };
  const peopleMovers = {
    fleet: [
      {
        img: Mercedesv,
        heading: "Mercedes V Class",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 7,
        Luggage: 8,
      },
      {
        img: MercedesvTrailer,
        heading: "Mercedes V Class with trailer",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 7,
        Luggage: 15,
      },
      {
        img: peopleMover,
        heading: "Sprinter",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 11,
        Luggage: 12,
      },
      // {
      //   img: peopleMover,
      //   heading: "People Mover",
      //   para1: "Passenger Capacity",
      //   para2: "Luggage  Capacity",
      //   Passenger: 11,
      //   Luggage: 12,
      // },
    ],
  };
  const miniBus = {
    fleet: [
      {
        img: spinter,
        heading: "Sprinter",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Luggage: 14,

        Passenger: 14,
      },
      {
        img: bus,
        heading: "Bus",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        // Luggage: 25,

        Passenger: 25,
      },
      {
        img: bus2,
        heading: "Bus",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        // Luggage: 34,

        Passenger: 34,
      },
    ],
  };
  const highlights = [
    {
      title: "Australia’s Largest Chauffeur Service",
      icon: service1,
    },
    {
      title: "Full GPS Tracking On Vehicles",
      icon: mobile,
    },
    {
      title: "Here To Help 24 Hours A Day",
      icon: headPhones,
    },
    {
      title: "10 Years Experience",
      icon: calender,
    },
    {
      title: "Large Events & Conferences Experts",
      icon: trophy,
    },
    {
      title: "Courteous & Reliable Chauffeurs",
      icon: userP,
    },
  ];

  return (
    <>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <OurLocationsComp0 highlights={highlights} currentLocation={place} />

          {/* static below */}

          <div className="h-full  w-full pl-0 mt-[1rem]">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                426: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 10,
                },
                736: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 10,
                },

                1129: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20,
                },
                1248: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 10,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper cursor-pointer "
            >
              <div className="w-slider-mask    ">
                <div className="w-slide  ">
                  <div className="div-block-312580    ">
                    <SwiperSlide>
                      <div className="div-block-312581 ">
                        <img
                          src={Driver1}
                          loading="lazy"
                          alt=""
                          width={300}
                          className="image-32599 "
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="div-block-312581">
                        <img
                          src={Driver2}
                          loading="lazy"
                          alt=""
                          className="image-32599  "
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="div-block-312581">
                        <img
                          src={Driver3}
                          loading="lazy"
                          alt=""
                          className="image-32599"
                        />
                      </div>
                    </SwiperSlide>

                    <div className="w-slide">
                      <div className="div-block-312580">
                        <SwiperSlide>
                          <div className="div-block-312581">
                            <img
                              src={Driver1}
                              loading="lazy"
                              alt=""
                              className="image-32599"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="div-block-312581">
                            <img
                              src={Driver2}
                              loading="lazy"
                              alt=""
                              className="image-32599"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="div-block-312581">
                            <img
                              src={Driver3}
                              loading="lazy"
                              alt=""
                              className="image-32599"
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-arrow-7 w-slider-arrow-left ">
                  <div className="w-icon-slider-left"></div>
                </div>
                <div className="right-arrow-7 w-slider-arrow-right">
                  <div className="w-icon-slider-right"></div>
                </div>
                <div className="slide-nav-7 w-slider-nav w-slider-nav-invert w-round "></div>
              </div>
            </Swiper>
          </div>

          {/* <div className="flex-col justify-center items-center p-[5rem] xxs:p-[2rem] text-center leading-[50px]">
            <p className="text-[50px] mb-[2rem] font-bold">
              A Vehicle To Suit Every Traveller
            </p>
            <p className="px-[auto] leading-6 font-thin  text-[20px]">
              Whether you are looking for a luxury limousine or premium sedan
              experience or want to move a large group easily and in comfort,
              Blackgrandeurchauffeur can help. We have vehicle options for 1 –
              61 passengers and an extensive fleet to accommodate all your
              transport needs.
            </p>
            <div className="px-[auto]  font-thin mt-[1rem] text-[20px]">
              Not sure what vehicle’s suit your needs? Contact our friendly team
              on
              <div className="mt-[1rem] text-[20px] hover:text-[#bd9300]">
                <a href="tel:+911300339525">+91 1300 339 525</a>
              </div>
              or
              <div className=" text-[20px] px-auto hover:text-[#bd9300]">
                <a
                  href="mailto:support@blackgrandeurchauffeur.com"
                  className="break-all"
                >
                  support@blackgrandeurchauffeur.com
                </a>
              </div>
              to discuss your requirements.
            </div>
          </div> */}

          <div className="mt-20">
            <TabsPanel>
              <Tab title="Sedans" icon="far fa-address-card">
                {Sedans.fleet.map((items) => (
                  <div className="fleetdiv p-[2rem] rounded-[10px] mb-[2rem] shadow-2xl border-[1.5px] hover:border-[#bd9300] transition duration-300 ease-in-out">
                    <div className="">
                      <AnimatePresence exitBeforeEnter>
                        <motion.div
                          initial={{ opacity: 0, translateY: +70 }}
                          whileInView={{ opacity: 1, translateY: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
                          className="heading-7222"
                        >
                          <strong className="bold-text-310">
                            {items?.heading}
                          </strong>
                        </motion.div>
                      </AnimatePresence>
                      <div
                        data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a64"
                        className="div-block-312453"
                      >
                        <div className="div-block-312452"></div>

                        <AnimatePresence exitBeforeEnter>
                          <motion.div
                            initial={{ opacity: 0, translateY: +70 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a68"
                            className="div-block-312454"
                          >
                            <div className="div-block-312455">
                              <div className="text-block-15454">
                                {items?.Passenger}
                              </div>
                            </div>
                            <div className="div-block-312456">
                              <h1 className="heading-7223">{items?.para1}</h1>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                        <div>
                          <AnimatePresence exitBeforeEnter>
                            {items?.Luggage && (
                              <motion.div
                                initial={{ opacity: 0, translateY: +70 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a6f"
                                className="div-block-312454"
                              >
                                <div className="div-block-312455  ">
                                  <div className="text-block-15454">
                                    {items?.Luggage}
                                  </div>
                                </div>
                                <div className="div-block-312456 ">
                                  <h1 className="heading-7223">
                                    {items?.para2}
                                  </h1>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                    <AnimatePresence exitBeforeEnter>
                      <motion.div
                        className="div-block-312457 "
                        initial={{ opacity: 0, translateY: +70 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <img
                          src={items?.img}
                          loading="lazy"
                          width="636"
                          data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a77"
                          alt=""
                          className="image-32443"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </Tab>
              <Tab title="First-class" icon="fas fa-hourglass-start">
                {Luxrious.fleet.map((items) => (
                  <div className="fleetdiv p-[2rem] rounded-[10px] mb-[2rem] shadow-2xl border-[1.5px] hover:border-[#bd9300] transition duration-300 ease-in-out">
                    <div className="">
                      <AnimatePresence exitBeforeEnter>
                        <motion.div
                          initial={{ opacity: 0, translateY: +70 }}
                          whileInView={{ opacity: 1, translateY: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
                          className="heading-7222"
                        >
                          <strong className="bold-text-310">
                            {items?.heading}
                          </strong>
                        </motion.div>
                      </AnimatePresence>
                      <div
                        data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a64"
                        className="div-block-312453"
                      >
                        <div className="div-block-312452"></div>

                        <AnimatePresence exitBeforeEnter>
                          <motion.div
                            initial={{ opacity: 0, translateY: +70 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a68"
                            className="div-block-312454"
                          >
                            <div className="div-block-312455">
                              <div className="text-block-15454">
                                {items?.Passenger}
                              </div>
                            </div>
                            <div className="div-block-312456">
                              <h1 className="heading-7223">{items?.para1}</h1>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                        <div>
                          <AnimatePresence exitBeforeEnter>
                            {items?.Luggage && (
                              <motion.div
                                initial={{ opacity: 0, translateY: +70 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a6f"
                                className="div-block-312454"
                              >
                                <div className="div-block-312455  ">
                                  <div className="text-block-15454">
                                    {items?.Luggage}
                                  </div>
                                </div>
                                <div className="div-block-312456 ">
                                  <h1 className="heading-7223">
                                    {items?.para2}
                                  </h1>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                    <AnimatePresence exitBeforeEnter>
                      <motion.div
                        className="div-block-312457 "
                        initial={{ opacity: 0, translateY: +70 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <img
                          src={items?.img}
                          loading="lazy"
                          width="636"
                          data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a77"
                          alt=""
                          className="image-32443"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </Tab>
              <Tab title="People Movers">
                {peopleMovers.fleet.map((items) => (
                  <div className="fleetdiv p-[2rem] rounded-[10px] mb-[2rem] shadow-2xl border-[1.5px] hover:border-[#bd9300] transition duration-300 ease-in-out">
                    <div className="">
                      <AnimatePresence exitBeforeEnter>
                        <motion.div
                          initial={{ opacity: 0, translateY: +70 }}
                          whileInView={{ opacity: 1, translateY: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
                          className="heading-7222"
                        >
                          <strong className="bold-text-310">
                            {items?.heading}
                          </strong>
                        </motion.div>
                      </AnimatePresence>
                      <div
                        data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a64"
                        className="div-block-312453"
                      >
                        <div className="div-block-312452"></div>

                        <AnimatePresence exitBeforeEnter>
                          <motion.div
                            initial={{ opacity: 0, translateY: +70 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a68"
                            className="div-block-312454"
                          >
                            <div className="div-block-312455">
                              <div className="text-block-15454">
                                {items?.Passenger}
                              </div>
                            </div>
                            <div className="div-block-312456">
                              <h1 className="heading-7223">{items?.para1}</h1>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                        <div>
                          <AnimatePresence exitBeforeEnter>
                            {items?.Luggage && (
                              <motion.div
                                initial={{ opacity: 0, translateY: +70 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a6f"
                                className="div-block-312454"
                              >
                                <div className="div-block-312455  ">
                                  <div className="text-block-15454">
                                    {items?.Luggage}
                                  </div>
                                </div>
                                <div className="div-block-312456 ">
                                  <h1 className="heading-7223">
                                    {items?.para2}
                                  </h1>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                    <AnimatePresence exitBeforeEnter>
                      <motion.div
                        className="div-block-312457 "
                        initial={{ opacity: 0, translateY: +70 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <img
                          src={items?.img}
                          loading="lazy"
                          width="636"
                          data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a77"
                          alt=""
                          className="image-32443"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </Tab>
              <Tab title="Buses & Coach" icon="fas fa-hourglass-start">
                {miniBus.fleet.map((items) => (
                  <div className="fleetdiv p-[2rem] rounded-[10px] mb-[2rem] shadow-2xl border-[1.5px] hover:border-[#bd9300] transition duration-300 ease-in-out">
                    <div className="">
                      <AnimatePresence exitBeforeEnter>
                        <motion.div
                          initial={{ opacity: 0, translateY: +70 }}
                          whileInView={{ opacity: 1, translateY: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
                          className="heading-7222"
                        >
                          <strong className="bold-text-310">
                            {items?.heading}
                          </strong>
                        </motion.div>
                      </AnimatePresence>
                      <div
                        data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a64"
                        className="div-block-312453"
                      >
                        <div className="div-block-312452"></div>

                        <AnimatePresence exitBeforeEnter>
                          <motion.div
                            initial={{ opacity: 0, translateY: +70 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a68"
                            className="div-block-312454"
                          >
                            <div className="div-block-312455">
                              <div className="text-block-15454">
                                {items?.Passenger}
                              </div>
                            </div>
                            <div className="div-block-312456">
                              <h1 className="heading-7223">{items?.para1}</h1>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                        <div>
                          <AnimatePresence exitBeforeEnter>
                            {items?.Luggage && (
                              <motion.div
                                initial={{ opacity: 0, translateY: +70 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a6f"
                                className="div-block-312454"
                              >
                                <div className="div-block-312455  ">
                                  <div className="text-block-15454">
                                    {items?.Luggage}
                                  </div>
                                </div>
                                <div className="div-block-312456 ">
                                  <h1 className="heading-7223">
                                    {items?.para2}
                                  </h1>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                    <AnimatePresence exitBeforeEnter>
                      <motion.div
                        className="div-block-312457 "
                        initial={{ opacity: 0, translateY: +70 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <img
                          src={items?.img}
                          loading="lazy"
                          width="636"
                          data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a77"
                          alt=""
                          className="image-32443"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </Tab>
            </TabsPanel>
          </div>
          <MobileAdUi />
        </div>
      )}
    </>
  );
};

export default OurLocations;
