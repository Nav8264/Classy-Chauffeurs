import React, { useState } from "react";
import { motion } from "framer-motion";

import ImageOne from "../../images/i.webp";
import mercedes from "../../images/image-56.png";
import mercedess from "../../images/image-57.png";
import bgchauffeur from "../../images/Chauffeur-Vs.-Driver-2.jpg";
import chaufferdriver from "../../images/Chauffeur-Vs.-Driver-2.jpg";
import images7 from "../../images/i.webp";
import bmwseries from "../../images/BMW-7-Series_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { aboutdata } from "./about";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../../component/Loader";

const About = () => {
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
          <div>
            <div className="bredcrumbs-div wf-section"></div>
            <div className="breadcrumb wf-section">
              <motion.h1
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                initial={{
                  opacity: 0,
                  y: 150,
                }}
                transition={{
                  type: "tween",
                  duration: 0.6,
                }}
                data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09afc"
                className="heading-7226"
              >
                <strong className="bold-text-279">About Us</strong>
              </motion.h1>
            </div>
            <div className="extra-section wf-section"></div>
            <div className="about-us-section about wf-section">
              <div className="about-div">
                <div
                  data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b02"
                  className="about-content about-main"
                >
                  <div className="div-block-312515">
                    <div className="div-block-312511">
                      <motion.div
                        viewport={{ once: true }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        initial={{
                          opacity: 0,
                        }}
                        transition={{
                          type: "tween",
                          duration: 1,
                        }}
                        data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b09"
                        className="div-block-312517"
                      >
                        <img
                          src={mercedes}
                          loading="lazy"
                          sizes="(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 46vw, (max-width: 1439px) 47vw, 624px"
                          alt=""
                          className="image-32443"
                        />
                        <div className="link-block-61 w-inline-block">
                          <div className="ytdiv-block-312518"></div>
                        </div>
                        <motion.div
                          viewport={{ once: true }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          initial={{
                            opacity: 0,
                          }}
                          transition={{
                            type: "tween",
                            duration: 1.1,
                          }}
                          className="div-block-312519"
                        >
                          <div className="div-block-312520">
                            <div
                              data-w-id="4f127cc1-0a6d-c343-4764-807d714ad2f9"
                              className="div-block-312521"
                            >
                              <div className="text-block-15419">
                                <strong className="bold-text-278">10+</strong>
                              </div>
                              <div className="text-block-15420">
                                YEARS EXPERIENCE
                              </div>
                            </div>
                            <div
                              data-w-id="4f127cc1-0a6d-c343-4764-807d714ad301"
                              className="div-block-312522"
                            ></div>
                          </div>
                        </motion.div>
                      </motion.div>
                      {aboutdata.about.map((items) => (
                        <motion.div
                          viewport={{ once: true }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          initial={{
                            opacity: 0,
                          }}
                          transition={{
                            type: "tween",
                            duration: 1,
                          }}
                          className="div-block-312516"
                        >
                          <div
                            data-w-id="5466b451-b893-046b-801b-3eaff5230397"
                            className="header-box"
                          >
                            <div className="div-block-302"></div>
                            <div className="header-wrap">
                              <h4 className="h-3 ">{items.heading}</h4>
                            </div>
                            <div className="div-block-302"></div>
                          </div>
                          <motion.h1
                            viewport={{ once: true }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            initial={{
                              opacity: 0,
                            }}
                            transition={{
                              type: "tween",
                              duration: 1,
                            }}
                            data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b0f"
                            className="heading-7227"
                          >
                            {items.title}
                          </motion.h1>
                          <motion.p
                            viewport={{ once: true }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            initial={{
                              opacity: 0,
                            }}
                            transition={{
                              type: "tween",
                              duration: 1.2,
                            }}
                            data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b11"
                            className="paragraph-2 "
                          >
                            {items.description}
                          </motion.p>
                          <motion.p
                            viewport={{ once: true }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            initial={{
                              opacity: 0,
                            }}
                            transition={{
                              type: "tween",
                              duration: 1.25,
                            }}
                            data-w-id="6796f09a-a7bb-3b8b-bc18-b304d097b601"
                            className="paragraph-2"
                          >
                            {items.description2}
                          </motion.p>
                          <motion.div
                            viewport={{ once: true }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            initial={{
                              opacity: 0,
                            }}
                            transition={{
                              type: "tween",
                              duration: 1,
                            }}
                            className="div-block-312523"
                          >
                            {aboutdata.helpDesk.map((items) => (
                              <div
                                data-w-id="9b8ea218-4110-8bfe-59d1-54d0c1def51c"
                                className="div-block-31775 top"
                              >
                                <motion.div
                                  viewport={{ once: true }}
                                  whileInView={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  initial={{
                                    opacity: 0,
                                  }}
                                  transition={{
                                    type: "tween",
                                    duration: 1,
                                    delay: 0.2,
                                  }}
                                  className="div-block-31776"
                                >
                                  <div className="text-block-15478">
                                    {items.icon}
                                  </div>
                                </motion.div>
                                <motion.div
                                  viewport={{ once: true }}
                                  whileInView={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  initial={{
                                    opacity: 0,
                                  }}
                                  transition={{
                                    type: "tween",
                                    duration: 1,
                                    delay: 0.2,
                                  }}
                                  className="div-block-31777"
                                >
                                  <div className="text-block-15472">
                                    {items.title}
                                  </div>
                                </motion.div>
                              </div>
                            ))}
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="everything-need-section xxxs:p-4 lg:p-[6rem] xl:p-[10rem] wf-section">
              <div className="agent-container w-container">
                <div
                  data-w-id="0fcfd10f-cbc1-d644-7366-096637ad0ff2"
                  className="header-box center xxs:mb-[2rem] xs:mb-[1rem] sm:mb-4 mt-10 justify-between"
                >
                  <motion.div
                    className="div-block-302"
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: 1,
                      delay: 0.2,
                    }}
                  ></motion.div>
                  <div className="header-wrap">
                    <motion.h4
                      className="h-3 c1 "
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      initial={{
                        opacity: 0,
                      }}
                      transition={{
                        type: "tween",
                        duration: 1,
                        delay: 0.2,
                      }}
                    >
                      {aboutdata.services.heading}
                    </motion.h4>
                  </div>
                  <motion.div
                    className="div-block-302"
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: 1,
                      delay: 0.2,
                    }}
                  ></motion.div>
                </div>
                <motion.h1
                  data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b3d"
                  className="heading-7228      "
                  viewport={{ once: true }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    type: "tween",
                    duration: 1,
                    delay: 0.4,
                  }}
                >
                  {aboutdata.services.title}
                </motion.h1>
                <motion.div
                  data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b3f"
                  className="text-block-15476"
                  viewport={{ once: true }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    type: "tween",
                    duration: 1,
                    delay: 0.5,
                  }}
                >
                  {aboutdata.services.title2}
                </motion.div>
                <div className="eveerything-place  ">
                  {aboutdata?.customerServices?.map((items) => (
                    <Link
                      href="#"
                      id="w-node-_77691b61-b15a-958b-3f99-1bf4c2e09b42-b2bce4d4"
                      className="home-loan-div  black w-inline-block   "
                    >
                      <div className="div-block-51  text-justify">
                        <div className="div-block-312424 ">
                          <div className="div-block-22 hide ">
                            <div className="sub-header-2 _2-tyoe white">
                              Ingredient
                            </div>
                          </div>
                          <div className="div-block">
                            <img
                              src={items.img}
                              loading="lazy"
                              alt=""
                              className="image-143"
                            />
                            <div className="div-block-30134 ">
                              <div className="text-block-15464">
                                <strong className="bold-text-322">
                                  {items.service}
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="div-block-312422 ">
                          <div className="div-block-312423 hiding-circle"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-block-15477   sm:mt-10 ">
                          {items.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="section-3 wf-section ">
              <div className="container-157 w-container">
                <div className="div-block-210 ">
                  <div className="div-block-312366 ">
                    <div className="div-block-11 ">
                      <div
                        data-w-id="7ebdc572-095b-871d-b822-8c4139ba44c5"
                        className="header-box "
                      >
                        <motion.div
                          className="div-block-302 "
                          viewport={{ once: true }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          initial={{
                            opacity: 0,
                          }}
                          transition={{
                            type: "tween",
                            duration: 1,
                            delay: 0.2,
                          }}
                        ></motion.div>
                        <motion.div
                          className="header-wrap my-4 xs:my-0 "
                          viewport={{ once: true }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          initial={{
                            opacity: 0,
                          }}
                          transition={{
                            type: "tween",
                            duration: 1,
                            delay: 0.2,
                          }}
                        >
                          <h4 className="h-3">JUST NUMBERS,BUT SO MUCH </h4>
                        </motion.div>
                        <motion.div
                          className="div-block-302"
                          viewport={{ once: true }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          initial={{
                            opacity: 0,
                          }}
                          transition={{
                            type: "tween",
                            duration: 1,
                            delay: 0.2,
                          }}
                        ></motion.div>
                      </div>
                      <motion.div
                        data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b84"
                        className="text-block-15408"
                        viewport={{ once: true }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        initial={{
                          opacity: 0,
                        }}
                        transition={{
                          type: "tween",
                          duration: 1,
                          delay: 0.4,
                        }}
                      >
                        <strong className="bold-text-277">
                          Our Luxury Limo Hire Service
                        </strong>
                      </motion.div>
                    </div>
                    <motion.div
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      initial={{
                        opacity: 0,
                      }}
                      transition={{
                        type: "tween",
                        duration: 1,
                        delay: 0.6,
                      }}
                    >
                      <p
                        data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b88"
                        className="real-paragraph-18 _2"
                      >
                        Brisbane being one of the busiest, happening cities of
                        Australia; has been the hub for tourism, nightlife and
                        full-on entertainment.{" "}
                        <Link
                          href="http://www.blackgrandeurchauffeur.com.au/"
                          target="_blank"
                          className="link-134"
                        >
                          <span className="text-span-99">ClassyChauffeurs</span>
                        </Link>{" "}
                        has been the trusted name when it comes to offering
                        value-added services. When it comes to affordability,
                        comfort, convenience, and hassle-free commutation in
                        Brisbane, we offer you the fantastic services that you
                        have never thought of.At ClassyChauffeurs, you would get
                        the maximum value for the time when you are visiting
                        different places in Brisbane. Irrespective of the
                        purpose, business or entertainment, for which you are
                        visiting the place, we take care of all your needs and
                        requirements. With a team of professional and
                        experienced chauffeurs driving the beautiful black Lexus
                        limos, we ensure on-time pickup from the pick-up
                        location. We cater to almost all the areas of Brisbane
                        and its suburbs.
                      </p>
                    </motion.div>
                  </div>
                  <div className="div-block-211">
                    <motion.img
                      className="image-76"
                      src={mercedess}
                      width="506"
                      alt="secure and reliable"
                      data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b8f"
                      loading="lazy"
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      initial={{
                        opacity: 0,
                      }}
                      transition={{
                        type: "tween",
                        duration: 1,
                        delay: 0.2,
                      }}
                    />
                    <div>
                      <div className="div-block-312525">
                        <div className="slide-nav-4 w-slider-nav w-slider-nav-invert w-round"></div>
                        <Swiper
                          slidesPerView={2}
                          spaceBetween={30}
                          pagination={{
                            clickable: true,
                          }}
                          breakpoints={{
                            320: {
                              slidesPerView: 1,
                              slidesPerGroup: 1,
                              spaceBetween: 10,
                            },
                            426: {
                              slidesPerView: 1,
                              slidesPerGroup: 1,
                              spaceBetween: 10,
                            },
                            612: {
                              slidesPerView: 2,
                              slidesPerGroup: 2,
                              spaceBetween: 10,
                            },

                            1129: {
                              slidesPerView: 2,
                              slidesPerGroup: 2,
                              spaceBetween: 20,
                            },
                            1248: {
                              slidesPerView: 2,
                              slidesPerGroup: 2,
                              spaceBetween: 10,
                            },
                          }}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="div-block-312581 width ">
                              <img
                                src={ImageOne}
                                loading="lazy"
                                alt=""
                                className="image-32599"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="div-block-312581 width">
                              <img
                                src={bgchauffeur}
                                loading="lazy"
                                sizes="(max-width: 991px) 100vw, (max-width: 1279px) 23vw, (max-width: 1919px) 275px, 300px"
                                alt=""
                                className="image-32599"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="div-block-312581 width">
                              <img
                                src={images7}
                                loading="lazy"
                                alt=""
                                className="image-32599"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="div-block-312581 width">
                              <img
                                src={chaufferdriver}
                                loading="lazy"
                                sizes="(max-width: 991px) 100vw, (max-width: 1279px) 23vw, (max-width: 1919px) 275px, 300px"
                                alt=""
                                className="image-32599"
                              />
                            </div>
                          </SwiperSlide>
                        </Swiper>
                        <div className="left-arrow-7 w-slider-arrow-left">
                          <div className="w-icon-slider-left"></div>
                        </div>
                        <div className="right-arrow-7 w-slider-arrow-right">
                          <div className="w-icon-slider-right"></div>
                        </div>
                        <div className="slide-nav-7 w-slider-nav w-slider-nav-invert w-round"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-2 wf-section">
              <div className="div-block-312512">
                <div className="div-block-312513 lg:mb-[10rem]">
                  <motion.img
                    src={bmwseries}
                    loading="lazy"
                    data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b78"
                    alt=""
                    className="image-32587"
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: 1,
                      delay: 0.2,
                    }}
                  />
                </div>
                <div className="div-block-312514">
                  <div
                    data-w-id="e92747f2-0871-c18d-e9f4-a8a599e034b4"
                    className="header-box center"
                  >
                    <motion.div
                      className="div-block-302"
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      initial={{
                        opacity: 0,
                      }}
                      transition={{
                        type: "tween",
                        duration: 1,
                        delay: 0.2,
                      }}
                    ></motion.div>
                    <div className="header-wrap">
                      <motion.h4
                        className="h-3 c1"
                        viewport={{ once: true }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        initial={{
                          opacity: 0,
                        }}
                        transition={{
                          type: "tween",
                          duration: 1,
                          delay: 0.2,
                        }}
                      >
                        JUST NUMBERS, BUT SO MUCH MORE.
                      </motion.h4>
                    </div>
                    <motion.div
                      className="div-block-302"
                      viewport={{ once: true }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      initial={{
                        opacity: 0,
                      }}
                      transition={{
                        type: "tween",
                        duration: 1,
                        delay: 0.2,
                      }}
                    ></motion.div>
                  </div>
                  <motion.h1
                    data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b7a"
                    className="heading-7230"
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: 1,
                      delay: 0.4,
                    }}
                  >
                    <strong className="bold-text-280">
                      About ClassyChauffeurs
                    </strong>
                  </motion.h1>
                  <motion.p
                    data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09b7d"
                    className="paragraph-2208"
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: 1,
                      delay: 0.6,
                    }}
                  >
                    ClassyChauffeurs is the trusted name when it comes to
                    catering luxurious limousine hire in Brisbane. Being in the
                    business for years, we have ensured to put in all comfort
                    and luxuries to our clients. We serve all your purpose in
                    Brisbane. With round the clock professional service, we make
                    sure you travel within the city remains hassle-free.
                    Therefore, we maintain a fleet of comfortable and clean
                    limousines driven by highly professional, well-trained
                    chauffeurs ascertaining you recline back comfortably and
                    reach your destination without any worries. Hire us for any
                    occasion or event. We are happy to serve you more than your
                    expectation.
                  </motion.p>
                </div>
              </div>
            </div>

            <div className="testimonials-2 wf-section">
              <div className="slider_wrapper">
                <div
                  data-w-id="77691b61-b15a-958b-3f99-1bf4c2e09ba1"
                  className="header-box center"
                >
                  <div className="header-wrap">
                    <h1 className="h-1-2">Testimonials</h1>
                  </div>
                </div>
                <div
                  data-delay="4000"
                  data-animation="cross"
                  className="slider w-slider"
                  data-autoplay="true"
                  data-easing="ease"
                  data-hide-arrows="false"
                  data-disable-swipe="false"
                  data-autoplay-limit="0"
                  data-nav-spacing="3"
                  data-duration="500"
                  data-infinite="true"
                >
                  <div className=" border-white grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6">
                    <div className="text-white    p-4 h-[14rem] text-justify ">
                      <p className="font-semibold">
                        It was Saturday night and i searched Limo In Brisbane
                        and i found this website. I called the business and told
                        them where i stand. This chauffeur came on time…
                      </p>
                      <h3 className=" text-[#bd9300]">– Willium Brown</h3>
                    </div>
                    <div className="text-white  border-green-60 p-6 h-[14rem]  text-justify">
                      <p className=" font-semibold">
                        Limo was on time and i reached to my destination safely.
                        Will call you guys again. Thank you.
                      </p>
                      <h3 className="text-[#bd9300]">– Steven</h3>
                    </div>
                    <div className="text-white   border-green-600  p-4 h-[14rem] text-justify ">
                      <p className=" font-semibold">
                        Hey guys this is Noah and I live in Gold Coast area. I
                        want to give a quick review for this limo business. The
                        car was nice, clean and Comfortable.
                      </p>
                      <h3 className="text-[#bd9300]">– Noah</h3>
                    </div>
                  </div>
                  <div className="slide-nav-2 w-slider-nav w-round"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
