import React from "react";
import appStore from "../../images/appStore.png";
import googlePlay from "../../images/googlePlay2.jpg";
import mobilescreen from "../../images/mobilescreen.jpg";
import mockuppng from "../../images/mockup.png";
const MobileAdUi = () => {
  return (
    <div>
      <div class="bg-white pb-[90px] sm:pb-[100px] sm:pt-[200px] md:pt-[140px] lg:pt-[90px] pl-4   lg:pl-[130px] pt-[70px]  ">
        <div class="w-container">
          <div class="px-4    grid xxs:grid-cols-1 sm:grid-cols-2 ">
            <div class="content-box-app  md:mt-[1rem] lg:mt-[2rem]">
              <div class="header-box xxs:mt-2 sm:mt-0 ">
                <div class="header-wrap side ">
                  <h1 class="h-1 ">Download the app</h1>
                </div>
              </div>
              <div class="paragraph-wrap">
                <p class="p-desc xxs:mt-20 text-center">
                  Easily book, change, or cancel rides on the go. Think of it as
                  peace of mind in the palm of your hand.
                </p>
              </div>
              <div class="grid  xxxs:grid-cols-1 sm:grid-cols-2 xxxs:gap-6 place-content-center sm:gap-2 mt-10 sm:ml-0 ">
                <div className="text-center  flex justify-center ">
                  <div className="text-center div-block-312583 cursor-pointer">
                    <a
                      href="https://apps.apple.com/us/app/b-g-chauffeurs-passenger/id6448744144"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={appStore}
                        alt=""
                        className="h-[57px] w-[145px] sm:relative sm:bottom-[4px]"
                      />
                    </a>
                  </div>
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.bgchauffeurs&hl=en-IN"
                  rel="noreferrer"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div class=" flex justify-center">
                    <img
                      src={googlePlay}
                      alt=""
                      className="h-[50px] w-[140px] rounded-lg"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div class="   xxxs:mt-8 sm:mt-0 sm:ml-20      ">
              <div className=" ">
                <div className="absolute  md:ml-2  z-10  ">
                  <div
                    data-poster-url="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-poster-00001.jpg"
                    data-video-urls="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.mp4,https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.webm"
                    data-autoplay="true"
                    data-loop="true"
                    data-wf-ignore="true"
                    class="  w-background-video-atom"
                  >
                    <video
                      className="    xxxs:w-[47%] xxs:w-[58%] xxxs:ml-[29px]  xs:w-[63%] xs:ml-[46px]  xxxs:mt-[15px] sm:ml-[60px] xl:ml-[66px]   sm:w-[47%]  lg:w-[53%] md:w-[48%] xl:w-[47%]     2xl:w-[63%] 2xl:ml-[88px] md:ml-[54px] rounded-[25px]"
                      src="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.mp4"
                      loop
                      autoPlay
                      muted
                    ></video>
                  </div>
                </div>
              </div>
              <img
                src={mockuppng}
                alt=""
                width="80%"
                loading="lazy"
                className="relative   xxs:w-[100%] xs:w-[84%]   sm:w-[100%]        sm:ml-[30px]     lg:w-[94%] md:w-[92%] xl:w-[67%]  2xl:w-[74%]  rounded-[25px] "
              />
            </div>

            {/* <div class="">
              <div class="   xxxs:mt-8 sm:mt-0 sm:ml-20      ">
                <div className=" ">
                  <div className="absolute  md:ml-2  z-10  ">
                    <div
                      data-poster-url="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-poster-00001.jpg"
                      data-video-urls="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.mp4,https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.webm"
                      data-autoplay="true"
                      data-loop="true"
                      data-wf-ignore="true"
                      class="  w-background-video-atom"
                    >
                      <video
                        className="    xxxs:w-[47%] xxs:w-[58%] xxxs:ml-[29px]  xs:w-[63%] xs:ml-[46px]  xxxs:mt-[15px] sm:ml-[60px] xl:ml-[62px]   sm:w-[47%]  lg:w-[53%] md:w-[48%] xl:w-[44%]     2xl:w-[63%] 2xl:ml-[88px] md:ml-[54px] rounded-[25px]"
                        src="https://uploads-ssl.webflow.com/63999bb23306e54c213f1b3b/63ad6bddda54a2573d10c21c_page-1-car-rental-google-chrome-2022-12-29-10-48-04_XXjOMni5 (1)-transcode.mp4"
                        loop
                        autoPlay
                        muted
                      ></video>
                    </div>
                  </div>
                </div>
                <img
                  src={mockuppng}
                  alt=""
                  width="80%"
                  loading="lazy"
                  className="relative   xxs:w-[100%] xs:w-[84%]   sm:w-[100%]        sm:ml-[30px]     lg:w-[94%] md:w-[92%] xl:w-[67%]  2xl:w-[74%]  rounded-[25px] "
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAdUi;
