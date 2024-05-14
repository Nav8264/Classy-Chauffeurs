import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import service1 from "../../images/corporateCarN.jpeg";
import service2 from "../../images/hotel-transfer-p-800.jpeg";
import service3 from "../../images/schoolFormal.jpg";
import service4 from "../../images/dayTour.jpg";
import service5 from "../../images/meetnGreet.jpg";
import service6 from "../../images/specialEvent.png";
import service7 from "../../images/weddingCars.jpg";
import service8 from "../../images/night-club-image.jpg";
import service9 from "../../images/hotel-transfer-p-800.jpeg";
import service10 from "../../images/63a57dc4ea7e9c95704428b0_Coorporate-images-p-800.jpg";
import service11 from "../../images/icons8-gardener-64_1icons8-gardener-64.png";
import service12 from "../../images/icons8-no-hidden-fee-british-pound-50_1icons8-no-hidden-fee-british-pound-50.png";
import service13 from "../../images/abb.png";
import { Link } from "react-router-dom";
import Loader from "../../component/Loader";

const Services = () => {
  const Service = [
    {
      id: 1,
      image: service1,

      para1: "CORPORATE TRANSFER SERVICE",
      para2:
        "Our professional transfer solutions provide smooth transportation options to meet our client's demands",
    },

    {
      id: 2,
      image: service2,

      para1: "AIRPORT TRANSFER SERVICE",
      para2:
        "We offer prompt, convenient transportation to and from the airport. In addition to helping you with your luggage, our drivers will greet you at the airport.",
    },

    {
      id: 3,
      image: service3,

      para1: "SCHOOL SWITCHING SERVICE",
      para2:
        "We offer students dependable, secure transportation. Our chauffeurs are trained to ensure that students get to school or college on time and safely.",
    },

    {
      id: 4,
      image: service4,

      para1: "DAY TOURS AND TRIPS SERVICE",
      para2:
        "Our day outings and tours are ideal for sightseeing or discovering new locales. We can transport you to all the area's top sights and make sure you have a nice experience.",
    },

    {
      id: 5,
      image: service5,

      para1: "MEET AND GREET",
      para2:
        "You can contact us at any time to request our meet and greet service to help with domestic and international flight arrivals and departures. For domestic flights, chauffeurs will be waiting for passengers in the baggage claim area.",
    },

    {
      id: 6,
      image: service6,

      para1: "SPECIAL EVENTS SERVICE",
      para2:
        "Proms, graduations, birthdays, weddings, and other special occasions are ideal occasions for our special events service. Any size group can use our transportation services. We can arrange for the bride, groom, and wedding party's transportation. For individuals who wish to enjoy a night out , our nightclub or DJ party transfer service is ideal.",
    },
    {
      id: 7,
      image: service7,

      para1: "BIRTHDAY PARTY TRANSFER",
      para2:
        "Proms, graduations, birthdays, weddings, and other special occasions are ideal occasions for our special events service. Any size group can use our transportation services. We can arrange for the bride, groom, and wedding party's transportation. For individuals who wish to enjoy a night out , our nightclub or DJ party transfer service is ideal.",
    },

    // {
    //   id: 8,
    //   image: service8,

    //   para1: "Night Club or DJ Parties Transfer  ",
    //   para2:
    //     "Enjoy the vibrancy of Brisbane nightlife. Hop in and Hop off the grand black Lexus limousine during one of your DJ party nights. Visit the various lounges and discotheques in grand fashion.",
    // },

    {
      id: 9,
      image: service9,

      para1: "Airport & Hotel Transfer  ",
      para2:
        "ClassyChauffeurs caters to customised service to you in case you need to visit one of the hospitals for treatment. We cater to budgeted transfers to almost all hospitals. Book now for a confirmed booking.",
    },

    {
      id: 10,
      image: service10,

      para1: "Hospital Services  ",
      para2:
        "Well, irrespective of whether you are coming in or leaving, we take care of all your requirements. Therefore, our professional chauffeurs are always there to assist you in picking you from the airport and transfer you to your booked hotel and vice versa conveniently and smoothly. If you are looking for a smooth and hassle-free ride, contact ClassyChauffeurs. We are always there to help you out.",
    },
  ];

  const helpsection = [
    {
      id: 11,
      image: service11,
      head: "Professional Chauffeurs",
      head2:
        "Have peace of mind knowing that all chauffeurs are licensed, insured and regulated.",
    },
    {
      id: 12,
      image: service12,
      head: "No Hidden Cost",
      head2:
        "All inclusive rates. There are no hidden surprises with. Include all taxes, tolls, fees and gratuities",
    },
    {
      id: 13,
      image: service13,
      head: "Affordable rides",
      head2: "Need confirmation before booking.",
    },
  ];

  const [mousein, setMousein] = useState(false);
  const [mouseinn, setMouseinn] = useState(false);
  const [helpidd, setHelpidd] = useState("");
  const [helpid, setHelpid] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

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
          <div className="">
            <div>
              <div className="bredcrumbs-div "></div>

              <div className="breadcrumb black ">
                <h1
                  data-w-id="1b23df6a-e44d-a5b5-7bd3-b0f7d3e1d223"
                  className="heading-7225"
                >
                  <motion.div
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    initial={{
                      opacity: 0,
                      y: 100,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.6,
                    }}
                  >
                    <div className="bold-text-252">SERVICES</div>
                  </motion.div>
                </h1>
              </div>
              <div className="extra-section black  "></div>
              <div className="parent bg-[#212121]  flex flex-col ">
                <motion.div className=" child1 px-5 grid grid-rows-3 gap-1 items-center place-content-center borde-[px] border-gree-500">
                  <div
                    data-w-id="8ce00809-74f9-409e-7964-ca6bb4e4f208"
                    className="flex items-center justify-center  "
                  >
                    <div></div>
                    <div className="div-block-31817 "></div>
                    <motion.div
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
                        duration: 0.8,
                      }}
                      className=""
                    >
                      <h1 className="heading-7218">
                        <div className="bold-text-282   text-center">
                          OUR SERVICES
                        </div>
                      </h1>
                    </motion.div>
                    <div className="div-block-31817"></div>
                  </div>
                  <h1
                    data-w-id="8ce00809-74f9-409e-7964-ca6bb4e4f20f"
                    className="heading-7217 text-center "
                  >
                    <motion.div
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
                        duration: 1,
                      }}
                    >
                      <div className="bold-text-27 text-center px-5 ` ">
                        Grandeur Services
                      </div>
                    </motion.div>
                  </h1>
                  <motion.div
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

                      duration: 1.2,
                    }}
                    data-w-id="8ce00809-74f9-409e-7964-ca6bb4e4f212"
                    className="text-block-15467 text-center px-5"
                  >
                    We cater to the following different types of services
                    <br />
                  </motion.div>
                </motion.div>
                <div className=" child2 px-[50px] py-[50px]  xxs:py-[1rem] xxs:px-[1rem] md:p-[3rem] lg:py-[25px] xl:px-[10px] xl:py-[50px] 2xl:px-[10px] 2xl:py-[10px] lg:mx-[0rem] xl:mx-[5rem]">
                  <div className="  xxs:px-2  md:grid md:grid-cols-1 lg:grid-cols-2 xl:gap-[5rem]  md:gap-[3rem] place-content-center md:px-[25px] md:py-[50px] xxs:p-0 xxs:grid xxs:grid-cols-1 xxs:gap-[3rem]">
                    {Service.map((val) => (
                      <motion.div
                        viewport={{ once: true }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        initial={{
                          opacity: 0,
                          x: -200,
                        }}
                        transition={{
                          type: "tween",

                          duration: 0.6,
                        }}
                        className="relative  overflow-hidden xxs:object-center xxs:h-[600px] xs:h-[450px]  xxs:rounded-[0px] md:rounded-sm md:h-[450px] lg:h-[450px] lg:rounded-lg"
                        onMouseEnter={() => {
                          setHelpid(val.id);

                          setMousein(!mousein);
                        }}
                        onMouseLeave={() => {
                          setMousein(false);
                        }}
                        style={{
                          background: `url(${val?.image})`,

                          backgroundPosition: "center",
                          backgroundSize: "cover",

                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="bg-black/20 absolute top-0 w-full h-full"></div>
                        <div className="bold-text-28  "> </div>

                        <div
                          className="bold-text-28  font-[Cinzel]  md:ml-[60.5px] top-10 left-[25px] right-5 "
                          style={{ position: "absolute", zIndex: "1000" }}
                        >
                          {val.para1}
                        </div>

                        {mousein && helpid === val.id && (
                          <motion.div
                            viewport={{ once: true }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            initial={{
                              opacity: 0,
                              x: -680,
                            }}
                            transition={{
                              duration: 0.6,
                            }}
                            className=" absolute xxs:top-[0px]  md:py-[150px] md:px-[50px] lg:py-[120px]  xxs:pt-[175px] bg-black/60 h-full w-full "
                          >
                            <motion.p
                              whileInView={{
                                opacity: 1,
                              }}
                              initial={{
                                opacity: 0,
                              }}
                              transition={{
                                duration: 1.2,
                              }}
                              className="paragraph-2209 xxs:mt-0   xxxs:mb-20 xxs:p-5"
                            >
                              {val.para2}
                            </motion.p>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="helpsection-2 _258 wf-section">
                  <div className=" ">
                    <motion.div
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
                        duration: 1.2,
                      }}
                      data-w-id="28c6676f-fdb4-06e6-8137-116f59f69145"
                      className="header-box center"
                    >
                      <div className="div-block-302"></div>
                      <div className="header-wrap">
                        <h4 className="h-3 white">WHY CHOOSE US</h4>
                      </div>
                      <div className="div-block-302"></div>
                    </motion.div>
                    <div className="divhelp"></div>
                    <motion.div
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
                        duration: 1.2,
                      }}
                      className="xxs:flex xxs:flex-col xxs:justify-center xxs:mt-8 xxs:items-center md:flex-row  xxs:gap-[3rem] xl:mx-[5rem]  md:h-[300px] md:mt-8 lg:h-[300px]"
                    >
                      {" "}
                      {helpsection.map((item) => (
                        <div
                          data-w-id="5f1bfaea-1c0e-9690-90ca-ed5c1730958d"
                          className="div-block-312527 xxs:h-[100%] "
                          onMouseEnter={() => {
                            setMouseinn(!mouseinn);
                            setHelpidd(item.id);
                          }}
                          onMouseLeave={() => {
                            setMouseinn(false);
                          }}
                        >
                          <div
                            data-w-id="5f1bfaea-1c0e-9690-90ca-ed5c1730958e"
                            className="div-block-312529"
                          >
                            <div
                              className={`${
                                helpidd === item.id && mouseinn
                                  ? "div-block-312528-hover "
                                  : "div-block-312528 "
                              }`}
                            >
                              <motion.img
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
                                  duration: 0.8,
                                }}
                                src={item.image}
                                loading="lazy"
                                width="56"
                                data-w-id="5f1bfaea-1c0e-9690-90ca-ed5c17309590"
                                alt=""
                                className="image"
                              />
                            </div>
                          </div>
                          <motion.div
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
                              duration: 1,
                            }}
                            data-w-id="5f1bfaea-1c0e-9690-90ca-ed5c17309591"
                            className="div-block-312529"
                          >
                            <h1 className="heading-7233">
                              <div className="bold-text-29">{item.head}</div>
                            </h1>
                          </motion.div>
                          <div
                            data-w-id="5f1bfaea-1c0e-9690-90ca-ed5c17309595"
                            className="div-block-312529 _11"
                          >
                            <motion.p
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
                                duration: 1.1,
                              }}
                              className="paragraph-2211"
                            >
                              {item.head2}
                            </motion.p>
                          </div>
                          <div className="div-block-312451">
                            <div
                              className={`${
                                helpidd === item.id && mouseinn
                                  ? "div-block-312530-hover"
                                  : "div-block-312530"
                              }`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                    <div className="newdiv">
                      <div
                        data-w-id="71190cb0-7a0a-ede8-0ea8-579c56127635"
                        className="div-block-31823"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/61e53f9d35daed7ea87c678a/63a3fba4ed595516f90a00f6_icons8-play-48.png"
                          loading="lazy"
                          width="27"
                          alt=""
                          className="image-32550"
                        />
                      </div>
                      <motion.h1
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
                          duration: 0.8,
                        }}
                        data-w-id="71190cb0-7a0a-ede8-0ea8-579c56127637"
                        className="heading-7220"
                      >
                        GET THE BEST COLOR FOR YOUR VEHICLE
                        <br />
                        <motion.span
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
                            duration: 0.8,
                          }}
                          className="text-span-96"
                        >
                          WITH PAINT MY RIDE
                        </motion.span>
                        <br />
                      </motion.h1>
                      <motion.div
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
                          duration: 0.8,
                        }}
                        className="div-block-31822"
                      ></motion.div>
                      <motion.div
                        viewport={{ once: true }}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                        }}
                        initial={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 1,
                        }}
                      >
                        <Link
                          to={"/contact"}
                          data-w-id="71190cb0-7a0a-ede8-0ea8-579c56127642"
                          className="button-211173 w-button"
                        >
                          CONTACT US
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
