import React, { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import paypal from "../../../images/Paypal22.png";
import stripe from "../../../images/Stripeimg.png";
import stripelogo from "../../../images/stripelogo.png";
import axios from "axios";

import { useNavigate } from "react-router";
import { useAtom } from "jotai";

import {
  Distance,
  rideId,
  meUser,
  status,
  statusEnd,
  rideBooking,
} from "../../../store";
import { liveurl } from "../../../hostUrl";
import { Link } from "react-router-dom";
import Paypal from "../../../component/Paypal";
import Loader from "../../../component/Loader";
import Popupconfirm from "../../../component/PopupConfirm";
import Header from "../../../Header";
import Footer from "../../../Footer";
const CarsCard = () => {
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [userRideId] = useAtom(rideId);
  const [isChecked, setIsChecked] = useState({});
  // const [isGuest, setIsGuest] = useState(false);
  const [user] = useAtom(meUser);
  const [popup, setPopup] = useState(false);
  const [usePaypal, setUsePaypal] = useState({ visible: false, id: "" });
  const [price, setPrice] = useState({ id: "", value: 0 });
  console.log("price", price);
  const [paymentMethodModal, setPaymentMethodModal] = useState({
    visible: false,
    id: "",
  });
  // const [radio, setRadio] = useState(1);
  // const user = localStorage.getItem("accessToken");
  let logedEmail = sessionStorage.getItem("userRideId");
  const returnPlaceId = JSON.parse(
    window.localStorage.getItem("Ride_data")
  )?.returnPickupPlaceId;
  console.log("returnPlaceId", returnPlaceId);
  const url = `${liveurl}/api/passenger/getAllVehicles?rideId=${
    userRideId || logedEmail
  }&returnRidePlaceId=${returnPlaceId}`;

  console.log("paymentMethodModal?.id", paymentMethodModal?.id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        // const bgcVehicles = res?.data?.data.filter(
        //   (item) => item?.vehicleOwner === "BGC"
        // );
        // const chauffeurVehicles = res?.data?.data.filter(
        //   (item) => item?.vehicleOwner === "Chauffeur"
        // );

        // const allVehicles = bgcVehicles?.concat(chauffeurVehicles);

        // setVehicle(allVehicles);

        setVehicle(res.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  }, []);
  console.log(" Vehicles", vehicle);

  let guest = JSON.parse(sessionStorage.getItem("guestData"));
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (paymentMethodModal.visible) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // }, [paymentMethodModal.visible]);
  useEffect(() => {
    window.localStorage.removeItem("TrailerAdded");
    if (popup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [popup]);

  console.log(guest);

  // const handleCancel = () => {
  //   setPaymentMethodModal({
  //     visible: !paymentMethodModal.visible,
  //     id: "",
  //   });
  // };

  // const handleStripe = (booking) => {
  //   console.log("booking", booking);
  //   setSubmitLoading(true);
  //   if (user || guest) {
  //     axios
  //       .post(
  //         `${liveurl}/api/adminPanel/stripeCheckout/create-checkout-session`,

  //         { booking }
  //       )
  //       .then((res) => {
  //         if (res.data?.url === `${liveurl}/booking/myrides`) {
  //         }

  //         localStorage.setItem("payment", JSON.stringify(res));
  //         localStorage.setItem(
  //           "payment_status",
  //           JSON.stringify(res.data.payment_status)
  //         );

  //         localStorage.setItem("status", JSON.stringify(res.data.status));

  //         console.log("res", res);

  //         if (res?.data?.url) {
  //           window.location.href = res.data?.url;
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("errorzz", error);
  //       });
  //   } else {
  //     navigate("/signup");
  //   }
  // };

  console.log(popup);

  // const handleprice = () => {
  //   const value = 0;
  //   if (isChecked === true) {
  //     const val = value + 50;
  //     setPrice(val);
  //   }
  //   // console.log(val, "price");

  // };
  // if (isChecked === true) {
  //   setPrice(price + 50);
  // } else {price
  //   setPrice(price);
  // }
  // console.log(price, "price");
  console.log("vehicle", vehicle);
  const calculatedPrice = (item) => {
    if (item?._id === price?.id) {
      if (price?.value === 0) {
        return (
          Number(item?.price?.toFixed(2)) +
          Number(item?.returnPrice?.toFixed(2) || 0)
        );
      } else {
        return (
          Number(price?.value?.toFixed(2)) +
          Number(item?.returnPrice?.toFixed(2) || 0)
        );
      }
    } else {
      return (
        Number(item?.price?.toFixed(2)) +
        Number(item?.returnPrice?.toFixed(2) || 0)
      );
    }
  };
  return (
    <div
      onClick={() => {
        if (!user?.data?.email && !guest?.email && popup === true) {
          setPopup(false);
        }
      }}
    >
      {loading ? (
        <div className="bg-transparent  absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="">
          <div className="">
            <Header />
          </div>
          <div className="">
            <div>
              {popup && (
                <div
                  className=" flex justify-center  h-screen w-full fixed  rounded-lg bg  "
                  style={{
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <div className=" top-[23%] relative z-[1000]">
                    <Popupconfirm />
                  </div>
                </div>
              )}
            </div>

            <div
              // onClick={(e) => {
              //   user?.data?.email || guest
              //     ? setIsGuest(false)
              //     : setIsGuest(true);
              //   e.stopPropagation();
              // }}
              className=""
            >
              <div></div>
              <div className=" z-[10000]  ">
                {/* {paymentMethodModal.visible && (
                  <div
                    className=" flex justify-center  h-full w-full fixed left-[0%] top-1  rounded-lg bg  "
                    style={{
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    {console.log("paymentMethodModal", paymentMethodModal)}
                    <div className=" bg-white fixed    flex-col justify-cente   top-24 rounded shadow-2xl border  p-4 ">
                      <div
                        className="flex justify-end text-[25px] relative -top-2 -right-2"
                        onClick={handleCancel}
                      >
                        {" "}
                        <MdCancel />
                      </div>
                      <div className=" font-semibold xxxs:text-xl sm:text-2xl text-[#a38b33]   p-2  ">
                        Select Payment Method
                      </div>
                      <div className="border border-[#E4DAB7]  shadow-md"></div>
                      <div className=" mt-6">
                        <div
                          className="border w-[100%]  px-10 shadow-md rounded-md "
                          onClick={() => {
                            setUsePaypal({
                              visible: !usePaypal.visible,
                              id: paymentMethodModal.id,
                            });
                          }}
                        >
                          <img
                            src={paypal}
                            alt="PaypalLogo"
                            height="200px"
                            width="200px"
                            loading="lazy"
                          />
                        </div>
                        {usePaypal.visible && (
                          <Paypal
                            price={
                              // price?.value || paymentMethodModal?.id?.price
                              paymentMethodModal?.id?._id === price?.id
                                ? price?.value
                                : paymentMethodModal?.id?.price
                            }
                            // price={price?.value}
                            vehicleId={paymentMethodModal?.id?._id}
                            rideId={userRideId}
                          />
                        )}
                        {submitLoading ? (
                          <div className="mt-2 flex justify-center">
                            <Loader />
                          </div>
                        ) : (
                          <div
                            className="border shadow-md mt-3  flex gap-3 py-4 rounded-md  w-[100%]  px-14 "
                            onClick={async () => {
                              const rideIdd = await window.localStorage.getItem(
                                "userRideId"
                              );

                              console.log(
                                "userRideId",
                                user?.data?.name,
                                user?.data?.email,
                                user?.data?.phone,
                                user?.data?.countryCode,
                                user?.data?.lastName,
                                price
                              );

                              handleStripe({
                                ...paymentMethodModal?.id,
                                rideId: userRideId ?? rideIdd,
                                firstName: user?.data?.name || guest?.name,
                                email: user?.data?.email || guest?.email,
                                phoneNo: user?.data?.phone || guest?.phone,
                                countryCode: user?.data?.countryCode || "",
                                lastName: user?.data?.lastName || "",
                                customerId: user?.data?._id,
                                price:
                                  paymentMethodModal?.id?._id === price?.id
                                    ? price?.value
                                    : paymentMethodModal?.id?.price,
                              });
                            }}
                          >
                            <img
                              src={stripelogo}
                              alt=""
                              height="100px"
                              width="50px"
                              className=" rounded-full"
                              loading="lazy"
                            />
                            <img
                              src={stripe}
                              alt="stripeLogo"
                              height="100px"
                              width="100px"
                              className=""
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )} */}
                {vehicle?.length === 0 && (
                  <div className="flex flex-col justify-center items-center mt-[30%] my-12 ">
                    <div className="text-4xl text-gray-400">
                      {" "}
                      No Vehicles yet
                    </div>{" "}
                    <div className="  mt-2 hover:text-white">
                      <Link
                        to={"/booking"}
                        data-w-id="59022d57-fe81-c57e-9c20-af575f9567d8"
                        className="button-211174 w-button"
                      >
                        Book Now!
                      </Link>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-1 sm:grid-cols-2 z-[-1000]  mt-10">
                  {vehicle?.map((item, idx) => (
                    <div className="flex justify-center ">
                      <div
                        className={`${
                          item?.trailerOption === true
                            ? "border border-black bg-gray-100 shadow-xl xxs:h-[380px] md:h-[330px] md:w-[850px] xxs:w-[300px] grid md:grid-cols-2 xxs:grid-cols-1  my-10 rounded-xl"
                            : "border border-black bg-gray-100 shadow-xl xxs:h-[300px] md:h-[280px] md:w-[850px] xxs:w-[300px] grid md:grid-cols-2 xxs:grid-cols-1  my-10 rounded-xl"
                        }`}
                      >
                        <div className="border ml-5 md:h-[230px] md:w-[350px]  xxs:w-[250px] xxs:h-[170px] xxs:mt-2 rounded-xl overflow-hidden xxs:my-0  md:my-5">
                          <img
                            alt="car"
                            loading="lazy"
                            src={item?.vehicleImage?.url}
                            height="100%"
                            width="100%"
                            className=" md:h-[230px] md:w-[350px]   xxs:w-[250px] xxs:h-[170px]  shadow-lg shadow-gray-400 "
                          />
                        </div>
                        <div className=" h-52 md:w-[400px] xxs:w-[300px] xxs:my-0 xxs:mt-2  md:my-5 ">
                          <div className="md:text-3xl xxs:text-xl font-bold text-center md:mt-2 xxs:mt-0   text-[#222]">
                            {item?.category}
                          </div>
                          <div className="grid xxs:grid-cols-1 md:grid-cols-2">
                            <div className="  md:flex-col md:my-5  xxs:my-1 xxs:flex justify-center xxs:gap-6 md:gap-2 ">
                              <div className="flex md:mx-auto">
                                <div>
                                  <HiUserGroup className="h-6 w-6" />
                                </div>
                                <div className="ml-2 font-light text-[#555] text-lg">
                                  max. {item?.capacity}
                                </div>
                              </div>
                              <div className="flex md:mx-auto ">
                                <div>
                                  <FaShoppingBag className="h-6 w-6" />
                                </div>
                                <div className="ml-2 font-light text-[#555] text-lg">
                                  max. {item?.luggageQuantity}
                                </div>
                              </div>
                            </div>

                            <div className=" xxs:grid-cols-2 md:grid-cols-1 grid justify-center md:mt-5 xxs:mx-10">
                              <div className="md:text-2xl text-center xxs:text-xl  font-[500] md:mt-4   ">
                                $ {calculatedPrice(item)?.toFixed(2)}
                              </div>
                              <div className="xxs:block md:hidden">
                                <div className="flex justify-center  p-1">
                                  <div
                                    onClick={() => {
                                      setPopup(!popup);
                                      window.localStorage.setItem(
                                        "SelectedVehicleId",
                                        JSON.stringify(item)
                                      );
                                      if (user?.data?.email || guest?.email) {
                                        navigate("/checkout");
                                      }
                                    }}
                                    className=" cursor-pointer text-center  md:text-2xl xxs:text-[15px]  text-black md:w-[150px]  xxs:w-[80%] xxs:py-2  rounded-md bg-gradient-to-r from-yellow-500 via-yellow-100 to-yellow-500"
                                  >
                                    Select
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="xxs:hidden md:block">
                            <div className="flex justify-center   w-full p-1">
                              <div
                                onClick={() => {
                                  setPopup(!popup);
                                  window.localStorage.setItem(
                                    "SelectedVehicleId",
                                    JSON.stringify(item)
                                  );
                                  if (user?.data?.email || guest?.email) {
                                    navigate("/checkout");
                                  }
                                }}
                                className=" cursor-pointer text-center  md:text-2xl xxs:text-[15px]  text-black md:w-[150px]  xxs:w-[80%] xxs:py-2  rounded-md bg-gradient-to-r from-yellow-500 via-yellow-100 to-yellow-500"
                              >
                                Select
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div>
                              {item?.trailerOption === true && (
                                <div className="">
                                  <p className="text-red-500 font-normal text-[18px] xxs:text-[15px] xxs:mx-10 mt-5">
                                    Note: Extra 50$ for Trailer{" "}
                                  </p>
                                  <div className="flex my-3 gap-2 xxs:mx-10">
                                    <input
                                      type="checkbox"
                                      name="addTrailer"
                                      className="accent-amber-500 text-black"
                                      checked={isChecked?.id === item._id}
                                      onChange={(e) => {
                                        if (isChecked?.id !== item._id) {
                                          setIsChecked({
                                            checked: e.target.checked,
                                            id: item?._id,
                                          });
                                          let value = item?.price;
                                          setPrice({
                                            id: item?._id,
                                            value: value + 50,
                                          });
                                        } else {
                                          setIsChecked({});
                                          let value = item?.price;
                                          setPrice({
                                            id: item?._id,
                                            value: value,
                                          });
                                        }
                                      }}
                                      onClick={() => {
                                        if (isChecked.checked === true) {
                                          window.localStorage.setItem(
                                            "TrailerAdded",
                                            JSON.stringify(false)
                                          );
                                        } else {
                                          window.localStorage.setItem(
                                            "TrailerAdded",
                                            JSON.stringify(true)
                                          );
                                        }
                                      }}
                                    />
                                    {console.log("isChecked", isChecked)}

                                    <label htmlFor="addTrailer">
                                      Add Trailer
                                    </label>
                                  </div>

                                  <div>
                                    <div></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="-z-[10000]">{/* <Footer /> */}</div>
        </div>
      )}
    </div>
  );
};
export default CarsCard;
