import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Australia from "../../images/australia.png";
import NewZealand from "../../images/new-zealand-3.png";
import { destinationAUS } from "./destination";
import { destinationNZD } from "./destination";
import { motion } from "framer-motion";

const Destination = () => {
  const [tab, setTabs] = useState("ASU");
  const changeHandle = (e) => {
    setTabs(e);
  };
  useEffect(() => {}, [tab]);
  setTimeout(() => {
    setTabs(tab === "ASU" ? "NZD" : "ASU");
  }, 6000);
  return (
    <div>
      <div className="interciy-routes wf-section">
        <div className="container-1 w-container">
          <motion.div
            data-w-id="fd0b6f8f-963c-184a-67fd-f1ce700c4d23"
            className="header-box center"
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: 200,
            }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <div className="div-block-302  "></div>
            <div className="header-wrap">
              <h4 className="h-3">CHOOSE YOUR DESTINATION</h4>
              <h1 className="h-1">Intercity Routes</h1>
            </div>
            <div className="div-block-302"></div>
          </motion.div>
          <div className="container-503">
            <div
              data-duration-in="300"
              data-duration-out="600"
              data-current="Tab 1"
              data-easing="ease"
              className="w-tabs"
            >
              <div className="tabs-menu w-tab-menu ">
                <div
                  onClick={() => changeHandle("ASU")}
                  data-w-id="95e98995-4be2-fc35-471c-4f0d9b82ae90"
                  className="tab w-inline-block w-tab-link w--current "
                >
                  <motion.div
                    className={`text-block-15485 cursor-pointer`}
                    onClick={() => changeHandle("ASU")}
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      // scale:2
                    }}
                    initial={{
                      opacity: 0,
                      y: 200,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                    }}
                  >
                    Australia Wide
                  </motion.div>
                  <div
                    className={`load-bar-base ${
                      tab === "ASU" ? "block" : "hidden"
                    }`}
                  >
                    <div className="load-bar-3 "></div>
                  </div>
                  <motion.div
                    className="tab-links lg:mt-8 xxs:mt-24 "
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      // scale:2
                    }}
                    initial={{
                      opacity: 0,
                      y: 200,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                    }}
                  >
                    <img
                      loading="lazy"
                      src={Australia}
                      alt=""
                      className="flag-image-2 "
                    />
                  </motion.div>
                </div>
                <div
                  onClick={() => changeHandle("NZD")}
                  data-w-id="95e98995-4be2-fc35-471c-4f0d9b82ae97"
                  className="tab w-inline-block w-tab-link w--current"
                >
                  <motion.div
                    className={`text-block-15484 cursor-pointer`}
                    onClick={() => changeHandle("NZD")}
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    initial={{
                      opacity: 0,
                      y: 200,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                  >
                    NEW ZEALAND WIDE
                  </motion.div>
                  <div>
                    <div
                      className={`load-bar-base ${
                        tab === "NZD" ? "block" : "hidden"
                      }`}
                    >
                      <div className="load-bar-3"></div>
                    </div>
                  </div>
                  <motion.div
                    className="tab-links lg:mt-8 xxs:mt-24"
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    initial={{
                      opacity: 0,
                      y: 200,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      delay: 0.1,
                    }}
                  >
                    <img
                      loading="lazy"
                      src={NewZealand}
                      alt=""
                      className="flag-image-2"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="tabs-content w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                  {tab === "ASU" && (
                    <motion.div
                      className="cities"
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      transition={{
                        type: "tween",
                        duration: 1,
                      }}
                    >
                      {destinationAUS?.city?.map((items) => (
                        <Link
                          to={"/"}
                          id="w-node-_95e98995-4be2-fc35-471c-4f0d9b82aea2-6dbce4cf"
                          data-w-id="95e98995-4be2-fc35-471c-4f0d9b82aea2"
                          className="link-block-3 w-inline-block"
                        >
                          <div className="card-box  ">
                            <img
                              width="310"
                              src={items.img}
                              loading="lazy"
                              alt=""
                              className="image-margin hover:scale-110 duration-100"
                            />
                            <div className="property-content">
                              <h5 className="heading-15">
                                {items.cityname}
                                <br />
                              </h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {tab === "NZD" && (
                    <motion.div
                      className="cities"
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      transition={{
                        type: "tween",
                        duration: 1,
                      }}
                    >
                      {destinationNZD?.city?.map((items) => (
                        <Link
                          to={"/"}
                          id="w-node-_95e98995-4be2-fc35-471c-4f0d9b82aea2-6dbce4cf"
                          data-w-id="95e98995-4be2-fc35-471c-4f0d9b82aea2"
                          className="link-block-3 w-inline-block"
                        >
                          <div className="card-box">
                            <img
                              width="310"
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 25vw, (max-width: 1439px) 22vw, 311.59375px"
                              src={items.img}
                              loading="lazy"
                              alt=""
                              className="image-margin hover:scale-110 duration-100"
                            />
                            <div className="property-content">
                              <h5 className="heading-15">
                                {items.cityname}
                                <br />
                              </h5>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
