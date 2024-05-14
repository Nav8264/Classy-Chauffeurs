import React, { useEffect, useState } from "react";
import AusImg1 from "../../images/AUCKLAND.png";
import AusImg2 from "../../images/Untitled-1.png";
import AusImg3 from "../../images/christchurch.png";
import AusImg4 from "../../images/Hamilton.png";
import AusImg5 from "../../images/napier.png";
import AusImg6 from "../../images/new-plymouth.png";
import AusImg7 from "../../images/nELSON.png";
import AusImg8 from "../../images/CANTERBURY.png";

import NewZeaLandTab from "./component";
import Loader from "../../component/Loader";

const NewZeaLand = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  const Data = {
    AusData: [
      {
        head: "AUCKLAND",
        para: ` At the best price, we offer you luxurious limousines for your
       hassle-free commutation in Auckland and its suburbs. We have
       the experienced, licensed, insured, and professional
       chauffeurs offering you customised transfers and travel
        packages meeting all your requirements`,
        para2: `Divide your stress with us! Ensure a hassle-free ride with
       your family or even when you are travelling alone. We would
       provide you just with the right mode to travel to and from
       Auckland airport. Riding with us will ensure --`,
        para3: `A relaxed, hassle-free journey`,
        para4: `Knowledgeable, experienced, chauffeurs guiding your way
        from Airport to the hotel and vice-versa`,
        img: AusImg1,
        para5: `Unparalleled door-to-door service`,
        para6: `Unparalleled door-to-door service`,
        para7: `Unparalleled door-to-door service`,
        para8: `Our Door-to-Door Transfer Ensures a Complete Peace of Mind`,
        para9: `We keep in mind the convenience and comfort of the client our
         utmost priority. Book luxurious limousines for door -to-door
         transfers from Auckland airport to your destination.`,
        para10: `Climb aboard and let the professional, friendly chauffeurs to
        drop you to your location. We request you to provide us with
        the required information in order to maintain a better
        service. We will pick you up from your place with no delay and
        get you to the airport just at the right time.`,
      },

      // IMPORTANT=====================================================================================
      //       // ON CLIENT DEMAND DATA IS HIDDEN PLS DONT REMOVE IT AS HE SAYS IN FUTURE WE CAN ADD THESE DATA//
      // ===============================================================================================================
      // {
      //   head: "WELLINGTON",
      //   para: ` At the best price, we offer you luxurious limousines for your
      //  hassle-free commutation in Wellington and its suburbs. We have
      //  the experienced, licensed, insured, and professional
      //  chauffeurs offering you customised transfers and travel
      //   packages meeting all your requirements`,
      //   para2: `Divide your stress with us! Ensure a hassle-free ride with
      //  your family or even when you are travelling alone. We would
      //  provide you just with the right mode to travel to and from
      //  Wellington airport. Riding with us will ensure --`,
      //   para3: `A relaxed, hassle-free journey`,
      //   para4: `Knowledgeable, experienced, chauffeurs guiding your way
      //   from Airport to the hotel and vice-versa`,
      //   img: AusImg2,
      //   para5: `Unparalleled door-to-door service`,
      //   para6: `Unparalleled door-to-door service`,
      //   para7: `Unparalleled door-to-door service`,
      //   para8: `Our Door-to-Door Transfer Ensures a Complete Peace of Mind`,
      //   para9: `We keep in mind the convenience and comfort of the client our
      //    utmost priority. Book luxurious limousines for door -to-door
      //    transfers from Wellington airport to your destination.`,
      //   para10: `Climb aboard and let the professional, friendly chauffeurs to
      //   drop you to your location. We request you to provide us with
      //   the required information in order to maintain a better
      //   service. We will pick you up from your place with no delay and
      //   get you to the airport just at the right time.`,
      // },
      // {
      //   head: "CHRISTCHURCH",
      //   para: ` At the best price, we offer you luxurious limousines for your
      //  hassle-free commutation in ChristChurch and its suburbs. We have
      //  the experienced, licensed, insured, and professional
      //  chauffeurs offering you customised transfers and travel
      //   packages meeting all your requirements`,
      //   para2: `Divide your stress with us! Ensure a hassle-free ride with
      //  your family or even when you are travelling alone. We would
      //  provide you just with the right mode to travel to and from
      //  ChristChurch airport. Riding with us will ensure --`,
      //   para3: `A relaxed, hassle-free journey`,
      //   para4: `Knowledgeable, experienced, chauffeurs guiding your way
      //   from Airport to the hotel and vice-versa`,
      //   img: AusImg3,
      //   para5: `Unparalleled door-to-door service`,
      //   para6: `Unparalleled door-to-door service`,
      //   para7: `Unparalleled door-to-door service`,
      //   para8: `Our Door-to-Door Transfer Ensures a Complete Peace of Mind`,
      //   para9: `We keep in mind the convenience and comfort of the client our
      //    utmost priority. Book luxurious limousines for door -to-door
      //    transfers from ChristChurch airport to your destination.`,
      //   para10: `Climb aboard and let the professional, friendly chauffeurs to
      //   drop you to your location. We request you to provide us with
      //   the required information in order to maintain a better
      //   service. We will pick you up from your place with no delay and
      //   get you to the airport just at the right time.`,
      // },
      // {
      //   head: "HAMILTON",
      //   para: ` At the best price, we offer you luxurious limousines for your
      //  hassle-free commutation in Hamilton and its suburbs. We have
      //  the experienced, licensed, insured, and professional
      //  chauffeurs offering you customised transfers and travel
      //   packages meeting all your requirements`,
      //   para2: `Divide your stress with us! Ensure a hassle-free ride with
      //  your family or even when you are travelling alone. We would
      //  provide you just with the right mode to travel to and from
      //  Hamilton airport. Riding with us will ensure --`,
      //   para3: `A relaxed, hassle-free journey`,
      //   para4: `Knowledgeable, experienced, chauffeurs guiding your way
      //   from Airport to the hotel and vice-versa`,
      //   img: AusImg4,
      //   para5: `Unparalleled door-to-door service`,
      //   para6: `Unparalleled door-to-door service`,
      //   para7: `Unparalleled door-to-door service`,
      //   para8: `Our Door-to-Door Transfer Ensures a Complete Peace of Mind`,
      //   para9: `We keep in mind the convenience and comfort of the client our
      //    utmost priority. Book luxurious limousines for door -to-door
      //    transfers from Hamilton airport to your destination.`,
      //   para10: `Climb aboard and let the professional, friendly chauffeurs to
      //   drop you to your location. We request you to provide us with
      //   the required information in order to maintain a better
      //   service. We will pick you up from your place with no delay and
      //   get you to the airport just at the right time.`,
      // },
      // {
      //   head: "NAPIER-HASTINGS",
      //   para: ` At the best price, we offer you luxurious limousines for your
      //  hassle-free commutation in Napier-Hastings and its suburbs. We have
      //  the experienced, licensed, insured, and professional
      //  chauffeurs offering you customised transfers and travel
      //   packages meeting all your requirements`,
      //   para2: `Divide your stress with us! Ensure a hassle-free ride with
      //  your family or even when you are travelling alone. We would
      //  provide you just with the right mode to travel to and from
      //  Napier-Hastings airport. Riding with us will ensure --`,
      //   para3: `A relaxed, hassle-free journey`,
      //   para4: `Knowledgeable, experienced, chauffeurs guiding your way
      //   from Airport to the hotel and vice-versa`,
      //   img: AusImg5,
      //   para5: `Unparalleled door-to-door service`,
      //   para6: `Unparalleled door-to-door service`,
      //   para7: `Unparalleled door-to-door service`,
      //   para8: `Our Door-to-Door Transfer Ensures a Complete Peace of Mind`,
      //   para9: `We keep in mind the convenience and comfort of the client our
      //    utmost priority. Book luxurious limousines for door -to-door
      //    transfers from Napier-Hastings airport to your destination.`,
      //   para10: `Climb aboard and let the professional, friendly chauffeurs to
      //   drop you to your location. We request you to provide us with
      //   the required information in order to maintain a better
      //   service. We will pick you up from your place with no delay and
      //   get you to the airport just at the right time.`,
      // },
      // {
      //   head: "NEW PLYMOUTH",
      //   para: ` At the best price, we offer you luxurious limousines for your
      //  hassle-free commutation in New Plymouth and its suburbs. We have
      //  the experienced, licensed, insured, and professional
      //  chauffeurs offering you customised transfers and travel
      //   packages meeting all your requirements`,
      //   para2: `Divide your stress with us! Ensure a hassle-free ride with
      //  your family or even when you are travelling alone. We would
      //  provide you just with the right mode to travel to and from
      //  New Plymouth airport. Riding with us will ensure --`,
      //   para3: `A relaxed, hassle-free journey`,
      //   para4: `Knowledgeable, experienced, chauffeurs guiding your way
      //   from Airport to the hotel and vice-versa`,
      //   img: AusImg6,
      //   para5: `Unparalleled door-to-door service`,
      //   para6: `Unparalleled door-to-door service`,
      //   para7: `Unparalleled door-to-door service`,
      //   para8: `Our Door-to-Door Transfer Ensures a Complete Peace of Mind`,
      //   para9: `We keep in mind the convenience and comfort of the client our
      //    utmost priority. Book luxurious limousines for door -to-door
      //    transfers from New Plymouth airport to your destination.`,
      //   para10: `Climb aboard and let the professional, friendly chauffeurs to
      //   drop you to your location. We request you to provide us with
      //   the required information in order to maintain a better
      //   service. We will pick you up from your place with no delay and
      //   get you to the airport just at the right time.`,
      // },
      // {
      //   head: "NELSON",
      //   para: ` At the best price, we offer you luxurious limousines for your
      //  hassle-free commutation in Nelson and its suburbs. We have
      //  the experienced, licensed, insured, and professional
      //  chauffeurs offering you customised transfers and travel
      //   packages meeting all your requirements`,
      //   para2: `Divide your stress with us! Ensure a hassle-free ride with
      //  your family or even when you are travelling alone. We would
      //  provide you just with the right mode to travel to and from
      //  Nelson airport. Riding with us will ensure --`,
      //   para3: `A relaxed, hassle-free journey`,
      //   para4: `Knowledgeable, experienced, chauffeurs guiding your way
      //   from Airport to the hotel and vice-versa`,
      //   img: AusImg7,
      //   para5: `Unparalleled door-to-door service`,
      //   para6: `Unparalleled door-to-door service`,
      //   para7: `Unparalleled door-to-door service`,
      //   para8: `Our Door-to-Door Transfer Ensures a Complete Peace of Mind`,
      //   para9: `We keep in mind the convenience and comfort of the client our
      //    utmost priority. Book luxurious limousines for door -to-door
      //    transfers from Nelson airport to your destination.`,
      //   para10: `Climb aboard and let the professional, friendly chauffeurs to
      //   drop you to your location. We request you to provide us with
      //   the required information in order to maintain a better
      //   service. We will pick you up from your place with no delay and
      //   get you to the airport just at the right time.`,
      // },
      // {
      //   head: "CANTERBURY",
      //   para: ` At the best price, we offer you luxurious limousines for your
      //  hassle-free commutation in Canterbury and its suburbs. We have
      //  the experienced, licensed, insured, and professional
      //  chauffeurs offering you customised transfers and travel
      //   packages meeting all your requirements`,
      //   para2: `Divide your stress with us! Ensure a hassle-free ride with
      //  your family or even when you are travelling alone. We would
      //  provide you just with the right mode to travel to and from
      //  Canterbury airport. Riding with us will ensure --`,
      //   para3: `A relaxed, hassle-free journey`,
      //   para4: `Knowledgeable, experienced, chauffeurs guiding your way
      //   from Airport to the hotel and vice-versa`,
      //   img: AusImg8,
      //   para5: `Unparalleled door-to-door service`,
      //   para6: `Unparalleled door-to-door service`,
      //   para7: `Unparalleled door-to-door service`,
      //   para8: `Our Door-to-Door Transfer Ensures a Complete Peace of Mind`,
      //   para9: `We keep in mind the convenience and comfort of the client our
      //    utmost priority. Book luxurious limousines for door -to-door
      //    transfers from Canterbury airport to your destination.`,
      //   para10: `Climb aboard and let the professional, friendly chauffeurs to
      //   drop you to your location. We request you to provide us with
      //   the required information in order to maintain a better
      //   service. We will pick you up from your place with no delay and
      //   get you to the airport just at the right time.`,
      // },
    ],
  };
  const [tabs, setTabs] = useState("AUCKLAND");
  const handleChange = (e) => {
    setTabs(e);
  };

  return (
    <div>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <div className="bredcrumbs-div wf-section"></div>
          <div className="breadcrumb black wf-section">
            <h1 className="heading-7225">
              <strong className="bold-text-252"> New ZeaLand</strong>
            </h1>
          </div>
          <div
            className="tabs-section-01 wf-section  lg:px-16 xl:px-56"
            // style={{ display: "flex", flexDirection: "row" }}
          >
            {/* 

 // IMPORTANT=====================================================================================
//       // ON CLIENT DEMAND DATA IS HIDDEN PLS DONT REMOVE IT AS HE SAYS IN FUTURE WE CAN ADD THESE DATA//
// ===============================================================================================================
*/}

            {/* <div className="  panelSide  ">
          {Data?.AusData?.map((item) => (
            <>
              <div
                data-w-tab="Tab 2"
                className="tab-link-01 w-inline-block w-tab-link w--current flex "
                style={{borderColor: tabs === item?.head ? "#bd9300" : "white" }}
                onClick={() => handleChange(item?.head)}
              >
                <div
                  className="text-block-91"
                  style={{ color: tabs === item?.head ? "#bd9300" : "white"}}
                >
                  <strong className="bold-text-323 xxs:text-2xl xs:text-3xl">{item?.head}</strong>
                </div>
              </div>
            </>
          ))}
         
        </div> */}
            <div>
              {Data?.AusData?.map((item) => (
                <>
                  {tabs === item?.head && (
                    <div className="">
                      <NewZeaLandTab items={item} />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewZeaLand;
