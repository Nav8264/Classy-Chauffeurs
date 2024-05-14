import React, { useState } from "react";
import Coorporate from "../../images/corporateCarN.jpeg";
import MercedesV from "../../images/mercedes-v-class.png";
import StudentTrnsfer from "../../images/schoolFormal.jpg";
import ImageOne from "../../images/dayTour.jpg";
import ImageThree from "../../images/newWedding.jpeg";
import DayTrip from "../../images/meetnGreet.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = {
  ourservices: [
    {
      title: "CORPORATE TRANSFER SERVICE",
      paragraph: `Our professional transfer solutions provide smooth transportation options to meet our client's demands`,
      img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/service-bg1-c3d5e9fe-c491-4d99-80a4-be93bf89f9a6.jpg',
    },
    {
      title: "AIRPORT TRANSFER SERVICE",
      paragraph: `We offer prompt, convenient transportation to and from the airport. In addition to helping you with your luggage, our drivers will greet you at the airport.`,
      img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/service-bg2-74d3f462-5bce-412b-af64-49b5e33565c1.jpg',
    },
    {
      title: "SCHOOL SWITCHING SERVICE",
      paragraph: `We offer students dependable, secure transportation. Our chauffeurs are trained to ensure that students get to school or college on time and safely.`,
      img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/service-bg3-bca22721-7bc3-429b-9479-2c0eb8571a29.jpg',
    },
    {
      title: "DAY TOURS AND TRIPS SERVICE",
      paragraph: `Our day outings and tours are ideal for sightseeing or discovering new locales. We can transport you to all the area's top sights and make sure you have a nice experience.`,
      img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/service-bg4-2ff15606-206d-4b76-9581-39967de9d4cc.jpg',
    },
    {
      title: "MEET AND GREET",
      paragraph: `You can contact us at any time to request our meet and greet service to help with domestic and international flight arrivals and departures. For domestic flights, chauffeurs will be waiting for passengers in the baggage claim area.`,
      img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/service-bg5-dac3ecff-981d-4d7a-9360-72e65436f108.jpg',
    },
    {
      title: "SPECIAL EVENTS SERVICE",
      paragraph: `Proms, graduations, birthdays, weddings, and other special occasions are ideal occasions for our special events service. Any size group can use our transportation services. We can arrange for the bride, groom, and wedding party's transportation. For individuals who wish to enjoy a night out , our nightclub or DJ party transfer service is ideal.`,
      img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/service-bg6-9efae5c7-a396-45c7-8471-941858758b5d.jpg',
    },
  ],
};

const ServiceSection = () => {
  return (
    <div>
      <div className="service-section wf-section ">
        <div
          data-w-id="922ffbea-8312-2c07-a983-65cb60c798ac"
          className="header-box center"
        >
          <motion.div
            className="div-block-302"
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
          ></motion.div>
          <motion.div
            className="header-wrap mb-20"
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
            <h4 className="h-3">JUST NUMBERS, BUT SO MUCH MORE.</h4>
            <h1 className="h-1">Our services</h1>
          </motion.div>
          <motion.div
            className="div-block-302"
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
          ></motion.div>
        </div>
        <div className="content-wrap-service _1 top px-2">
          {services.ourservices.map((items) => (
            <div className="div-block-312421 group">
              <img
                src={items.img}
                loading="lazy"
                alt=""
                className=" relative group-hover:scale-110 duration-700 object-cover w-full h-full"
              />

              <div className="">
                <div className="">
                  <strong className=" font-[Cinzel] font-semibold  absolute top-7 left-3 z-50 text-white">
                    {items.title}
                  </strong>
                </div>
                <div className="absolute top-0  left-0 bg-black/60 h-full opacity-0 group-hover:opacity-100    ">
                  <p className="   text-white/80 xxxs:mt-8 md:mt-28 text-lg p-4 font-[3px]  ">
                    {items.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="div-block-312565">
        <Link
          to={"/services"}
          data-w-id="d4e41edc-7e37-9669-a667-f83ae4b85434"
          className="book-btn  w-[150px] hover:bg-gray-300"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default ServiceSection;
