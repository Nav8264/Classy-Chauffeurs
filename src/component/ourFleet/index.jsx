import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Mercedes from "../../images/mercedes-s-class.png";
import Audi from "../../images/04.jpg";
import Lexus from "../../images/05.jpg";
import MercedesV from "../../images/mercedes-v-class.png";
import MercedesEClass from "../../images/01.jpg";
import BMW5 from "../../images/03.jpg";
import BMW7 from "../../images/BMW-7-series.png";
import RangeRover from "../../images/02.jpg";
import Chrysler from "../../images/chrysler.png";
import MercedesSprinter from "../../images/mercedes-sprinter-van.png";
import fordF250Stretch from "../../images/ford-f250-stretch-limo.jpg";
import hummerStretchLimo from "../../images/hummer-stretch-limo.jpg";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, A11y]);
const Ourfleet = () => {
  const ourfleetData = {
    cards: [
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet1-06332b4f-70d7-4468-b059-bd6d9f4431d2.jpg',
        heading: "Mercedes S Class",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet2-ed268138-9cfc-4345-bada-b4672018d483.jpg',
        heading: "Audi Q7",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet3-38fba5b9-f2a2-4442-84ce-e46f4c76b43c.jpg',
        heading: "Lexus ES",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet4-45792297-58d2-49e6-b4be-5db57675a748.jpg',
        heading: "Mercedes",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet5-ac734ed4-ae92-4061-83bd-75f54e6871d1.jpg',
        heading: "Mercedes E Class",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet6-d78196b3-2843-4b81-9fcc-6bca5225c6a9.jpg',
        heading: "AUDI A8",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/bmw7-193c105e-a3e3-4b29-9a97-5e1fbab599b3.jpg',
        heading: "BMW 7 Series",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/ranger-over-ca88b1f2-10c3-44b1-b316-43715d9a17b8.jpg',
        heading: "Range Rover",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/chrysler-0608a68d-d283-490d-a885-5ff62a6ff600.jpg',
        heading: "Chrysler",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet7-5bbc77a9-d2f7-4c7e-bb2c-436934e04684.jpg',
        heading: "Mercedes Sprinter Van",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet8-706ea4c5-8b46-48c9-917b-c0970da8440d.jpg',
        heading: "Stretch Limousine Ford F250 Raptor",
      },
      {
        img: 'https://bgchauffers.s3.ap-southeast-2.amazonaws.com/B-G-C/our-fleet9-93ad6798-60c6-4a76-934b-00c7940251cc.jpg',
        heading: "Hummer Stretch Limo",
      },
    ],
  };
  return (
    <div>
      <div className="section-4 wf-section mx-4">
        <div
          data-w-id="1cb31163-1d75-3234-d595-6d1005d5cf55"
          className="sticky_top"
        >
          <h2 className="sticky_title">
            OUR Fleet<span className="blue_span"></span>
          </h2>
          <div
            data-w-id="1cb31163-1d75-3234-d595-6d1005d5cf5a"
            className="border border-[#bd9300] w-full animation  "
          ></div>
        </div>

        <div className=" w-slider-mask">
          <div className="slide-15 w-slide relative">
            <div className="div-block-312586">
              <Swiper
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: ".swiper-navigation-next",
                  prevEl: ".swiper-navigation-prev",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                  },
                  768: {
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
                classNameName="mySwiper"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {ourfleetData.cards.map((items) => (
                  <SwiperSlide>
                    <div className="horizontal-item">
                      <Link to={""} className="card w-inline-block">
                        <div className="card_blue"></div>
                        <img
                          src={items.img}
                          loading="lazy"
                          alt=""
                          className="card_back-img"
                        />
                      </Link>
                      <div className="card_top">
                        <h3 className="heading-16">
                          <strong className="bold-text-302">
                            {items.heading}
                          </strong>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute bottom-[400px] w-full flex justify-between  z-[15000]">
              <div className="swiper-navigation-prev bg-gray-100 p-1 absolute -left-3  items-center justify-center rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </div>
              <div className="swiper-navigation-next absolute -right-1 bg-gray-100 p-1 items-center justify-center rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourfleet;
