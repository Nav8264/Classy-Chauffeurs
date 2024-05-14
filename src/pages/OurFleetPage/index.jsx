import React, { useEffect, useState } from "react";
import Mercedes1 from "../../images/benzEclass.jpg";
import Mercedes2 from "../../images/Mercedes-S-Class_1.png";
import Mercedes3 from "../../images/Mercedes-V-Class_1.png";
// import AudiQ7 from "../../images/Audi-Q7_2.png";
import LexusES from "../../images/Lexus-ES.png";
import BMW5 from "../../images/BmwSeries5.png";
// import BMW7 from "../../images/BMW-7-Series_2.png";
import MercedesEclass from "../../images/Mercedes-E-Class_1.png";
import AudiQ7 from "../../images/MercEClass.png";
import Lexuses from "../../images/lexuses.png";
import Bmw5Series from "../../images/BmwSeries5.png";
import Audia6 from "../../images/audia6.png";
import bmwx5 from "../../images/BmwX5.png";
import audia8 from "../../images/audia8.png";
import Mercgle from "../../images/MercGle.png";
import BMW7 from "../../images/BMW7Series.png";
// import peopleMover from "../../images/peopleMove.jpeg";
import spinter from "../../images/sprinter2.jpg";
import peopleMover from "../../images/peopleMove.jpeg";
import MersedesCclass from "../../images/MercedesSclass.jpeg";
import Trailer from "../../images/trailer2.jpg";
import bus from "../../images/bus1.jpeg";
import bus2 from "../../images/bus2.jpeg";
import Mercedesv from "../../images/MercedsVcopy.jpg";
import MercedesvTrailer from "../../images/trailer2.jpg";
import Sprinter from "../../images/sprinter2.jpg";
import Chrysler from "../../images/Chrysler_1.png";
import Limousine from "../../images/Stretch-Limousine-Ford-F250-Raptor.png";
import Driver1 from "../../images/i.webp";
import Driver2 from "../../images/Chauffeur-Vs.-Driver-2.jpg";
import Driver3 from "../../images/360_F_131650397_0rci3oAadfCCD6QHeMYFUnkiVWRxTx4K.jpg";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import Loader from "../../component/Loader";
import TabsPanel from "../../component/CustomTab/TabPannel";
import Tab from "../../component/CustomTab/Tab";

const OurFleetPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // const FleetData = {
  //   fleet: [
  //     {
  //       img: Mercedes1,
  //       heading: "Mercedes E Class",
  //       para1: "Passenger Capacity",
  //       para2: " Luggage  Capacity",
  //       Passenger: 3,
  //       Luggage: 3,
  //     },
  //     {
  //       img: Mercedes2,
  //       heading: "Mercedes S Class",
  //       Passenger: 3,
  //       Luggage: 3,
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //     },
  //     {
  //       img: AudiQ7,
  //       heading: "Audi Q7",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //       Passenger: 4,
  //       Luggage: 6,
  //     },
  //     {
  //       img: LexusES,
  //       heading: "Lexus ES",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage Capacity",
  //       Passenger: 3,
  //       Luggage: 3,
  //     },
  //     {
  //       img: BMW5,
  //       heading: "BMW 5 Series",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //       Passenger: 3,
  //       Luggage: 3,
  //     },
  //     {
  //       img: BMW7,
  //       heading: "BMW 7 Series",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //       Passenger: 3,
  //       Luggage: 3,
  //     },
  //     {
  //       img: Chrysler,
  //       heading: "Chrysler",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //       Passenger: 3,
  //       Luggage: 3,
  //     },
  //     {
  //       img: Mercedes3,
  //       heading: "Mercedes V Class",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //       Passenger: 7,
  //       Luggage: 8,
  //     },
  //     {
  //       img: Sprinter,
  //       heading: "Sprinter bus",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //       Passenger: 13,
  //       Luggage: 14,
  //     },
  //     {
  //       img: peopleMover,
  //       heading: "People Mover",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //       Passenger: 11,
  //       Luggage: 12,
  //     },
  //     {
  //       img: Limousine,
  //       heading: "Stretch Limousine Ford F250 Raptor",
  //       para1: "Passenger Capacity",
  //       para2: "Luggage  Capacity",
  //       Passenger: 14,
  //     },
  //     {
  //       img: Trailer,
  //       heading: "Van With Trailer",
  //       para1: "50$ Extra ",
  //       para2: "Luggage  Capacity",
  //       Passenger: 1,
  //     },
  //   ],
  // };
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
      {
        img: Bmw5Series,
        heading: "BMW 5 Series",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 3,
        Luggage: 4,
      },
      {
        img: Audia6,
        heading: "Audi A6",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 3,
        Luggage: 4,
      },
      {
        img: Lexuses,
        heading: "Lexus ES",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 3,
        Luggage: 4,
      },
    ],
  };

  const Suv = {
    fleet: [
      {
        img: AudiQ7,
        heading: "Audi Q7",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 4,
        Luggage: 6,
      },
      {
        img: bmwx5,
        heading: "BMW X5",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 4,
        Luggage: 6,
      },
      {
        img: Mercgle,
        heading: "Mercedes GLE",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 4,
        Luggage: 6,
      },
    ],
  };
  const Luxrious = {
    fleet: [
      {
        img: MersedesCclass,
        heading: "Mercedes S class",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 3,
        Luggage: 3,
      },
      {
        img: audia8,
        heading: "Audi A8",
        para1: "Passenger Capacity",
        para2: "Luggage  Capacity",
        Passenger: 3,
        Luggage: 3,
      },
      {
        img: BMW7,
        heading: "BMW 7 Series",
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

  return (
    <div>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] ">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="bredcrumbs-div wf-section   "></div>
            <div className="breadcrumb wf-section ">
              <AnimatePresence>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  data-w-id="efb0e96c-b216-34b0-7fb9-1b8a6bf75e69"
                  className="heading-7225"
                >
                  <strong className="bold-text-252 ">OUR FLEET</strong>
                </motion.div>
              </AnimatePresence>
            </div>
            <div>
              <TabsPanel>
                <Tab title="Executive Sedans" icon="far fa-address-card">
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
                <Tab title="SUV" icon="far fa-address-card">
                  {Suv.fleet.map((items) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default OurFleetPage;
// {FleetData.fleet.map((items, i) => (
//   <div
//     className={`${
//       !(i % 2) ? `bg-white` : `bg-slate-100`
//     } fleetsection wf-section `}
//     key={i}
//   >
//     <div className="fleetcontainer w-container  mx-auto  ">
//       <div className="fleetmain1 p-4">
//         <div className="fleetdiv">
//           <div>
//             <AnimatePresence exitBeforeEnter>
//               <motion.div
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a65"
//                 className="heading-7222"
//               >
//                 <strong className="bold-text-310">
//                   {items?.heading}
//                 </strong>
//               </motion.div>
//             </AnimatePresence>
//             <div
//               data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a64"
//               className="div-block-312453"
//             >
//               <div className="div-block-312452"></div>

//               <AnimatePresence exitBeforeEnter>
//                 <motion.div
//                   initial={{ x: -100, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.6 }}
//                   data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a68"
//                   className="div-block-312454"
//                 >
//                   <div className="div-block-312455">
//                     <div className="text-block-15454">
//                       {items?.Passenger}
//                     </div>
//                   </div>
//                   <div className="div-block-312456">
//                     <h1 className="heading-7223">{items?.para1}</h1>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//               <div>
//                 <AnimatePresence exitBeforeEnter>
//                   {items?.Luggage && (
//                     <motion.div
//                       initial={{ x: -100, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ duration: 0.8 }}
//                       data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a6f"
//                       className="div-block-312454"
//                     >
//                       <div className="div-block-312455  ">
//                         <div className="text-block-15454">
//                           {items?.Luggage}
//                         </div>
//                       </div>
//                       <div className="div-block-312456 ">
//                         <h1 className="heading-7223">
//                           {items?.para2}
//                         </h1>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//           <AnimatePresence exitBeforeEnter>
//             <motion.div
//               className="div-block-312457 "
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <img
//                 src={items?.img}
//                 loading="lazy"
//                 width="636"
//                 data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a77"
//                 alt=""
//                 className="image-32443"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//         <div className="div-block-312458">
//           <div className="div-block-312460   ">
//             <div className="div-block-312461">
//               <div
//                 data-delay="2000"
//                 data-animation="slide"
//                 className="slider-3 w-slider"
//                 data-autoplay="true"
//                 data-easing="ease"
//                 data-hide-arrows="false"
//                 data-disable-swipe="false"
//                 data-autoplay-limit="0"
//                 data-nav-spacing="3"
//                 data-duration="500"
//                 data-infinite="true"
//               >
//                 <div className="mask-2  ">
//                   <div className="slide-8 w-slide"></div>
//                   <div className="w-slide"></div>
//                   <div className="w-slide"></div>
//                   <div className="slide-8 w-slide"></div>
//                   <div className="w-slide"></div>
//                 </div>

//                 <div className="slide-nav-4 w-slider-nav w-slider-nav-invert w-round"></div>
//               </div>
//               <div className="h-full  w-full     pl-0   ">
//                 <Swiper
//                   spaceBetween={10}
//                   slidesPerView={1}
//                   pagination={{
//                     clickable: true,
//                   }}
//                   breakpoints={{
//                     426: {
//                       slidesPerView: 2,
//                       slidesPerGroup: 2,
//                       spaceBetween: 10,
//                     },
//                     736: {
//                       slidesPerView: 3,
//                       slidesPerGroup: 3,
//                       spaceBetween: 10,
//                     },

//                     1129: {
//                       slidesPerView: 3,
//                       slidesPerGroup: 3,
//                       spaceBetween: 20,
//                     },
//                     1248: {
//                       slidesPerView: 3,
//                       slidesPerGroup: 3,
//                       spaceBetween: 10,
//                     },
//                   }}
//                   modules={[Autoplay, Pagination, Navigation]}
//                   className="mySwiper  "
//                 >
//                   <div className="w-slider-mask    ">
//                     <div className="w-slide  ">
//                       <div className="div-block-312580    ">
//                         <SwiperSlide>
//                           <div className="div-block-312581 ">
//                             <img
//                               src={Driver1}
//                               loading="lazy"
//                               alt=""
//                               width={300}
//                               className="image-32599 "
//                             />
//                           </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                           <div className="div-block-312581">
//                             <img
//                               src={Driver2}
//                               loading="lazy"
//                               alt=""
//                               className="image-32599  "
//                             />
//                           </div>
//                         </SwiperSlide>
//                         <SwiperSlide>
//                           <div className="div-block-312581">
//                             <img
//                               src={Driver3}
//                               loading="lazy"
//                               alt=""
//                               className="image-32599"
//                             />
//                           </div>
//                         </SwiperSlide>

//                         <div className="w-slide">
//                           <div className="div-block-312580">
//                             <SwiperSlide>
//                               <div className="div-block-312581">
//                                 <img
//                                   src={Driver1}
//                                   loading="lazy"
//                                   alt=""
//                                   className="image-32599"
//                                 />
//                               </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                               <div className="div-block-312581">
//                                 <img
//                                   src={Driver2}
//                                   loading="lazy"
//                                   alt=""
//                                   className="image-32599"
//                                 />
//                               </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                               <div className="div-block-312581">
//                                 <img
//                                   src={Driver3}
//                                   loading="lazy"
//                                   alt=""
//                                   className="image-32599"
//                                 />
//                               </div>
//                             </SwiperSlide>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="left-arrow-7 w-slider-arrow-left ">
//                       <div className="w-icon-slider-left"></div>
//                     </div>
//                     <div className="right-arrow-7 w-slider-arrow-right">
//                       <div className="w-icon-slider-right"></div>
//                     </div>
//                     <div className="slide-nav-7 w-slider-nav w-slider-nav-invert w-round "></div>
//                   </div>
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="div-block-312459 ">
//           <p
//             data-w-id="49150cdd-6e9a-dc4e-3bb4-cec2dac49a7a"
//             className="paragraph-2181"
//           >
//             {items?.para3}{" "}
//           </p>
//           <Link
//             to={"/booking"}
//             data-w-id="59022d57-fe81-c57e-9c20-af575f9567d8"
//             className="button-211174 w-button hover:text-white"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
