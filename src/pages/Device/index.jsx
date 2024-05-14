import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Device = () => {
  async function openIOSApp() {
    const deepLink = "com.bg.chauffeurs://UserScreens/MyRides";

    const appStoreLink =
      "https://apps.apple.com/us/app/b-g-chauffeurs-passenger/id6448744144";

    // Attempt to open the deep link
    window.location = deepLink;

    setTimeout(() => {
      console.log("App did not pen. Handling failure...");
      window.location = appStoreLink;
    }, 3000);
  }
  async function openAndroidApp() {
    const deepLink = "com.bg.chauffeurs://UserScreens/MyRides";

    const playStoreLink =
      "https://play.google.com/store/apps/details?id=com.bgchauffeurs";

    // Attempt to open the deep link
    window.location = deepLink;

    setTimeout(() => {
      console.log("App did not pen. Handling failure...");
      window.location = playStoreLink;
    }, 3000);
  }

  useEffect(() => {
    const isiPhone = /iPhone/i.test(navigator.userAgent);
    if (isiPhone) {
      console.log("This website is being accessed from an iPhone.");
      openIOSApp();
    } else {
      openAndroidApp();
      // if (isMobile) {
      //   console.log("This website is being accessed from a mobile device.");
      // } else {
      //   console.log("This website is being accessed from a desktop device.");

      //   const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      //   if (isMac) {
      //     console.log("This website is being accessed from a Mac.");
      //   }
      // }
    }
  }, []);
  return (
    <div>
      <div>
        <div>
          <div className="">{/* <Header /> */}</div>
          <div className="bg-white w-screen h-[70px] absolute top-0"></div>
          <div className="mainbod z-10">
            <div className="loadingloader">
              <span className="xxs:text-[15px] xxs:text-center md:block hidden xs:text-3xl">
                Opening Mobile App
              </span>
              <span className="xxs:text-[15px] xxs:text-center md:hidden block  xs:text-3xl">
                Opening App
              </span>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Device;
