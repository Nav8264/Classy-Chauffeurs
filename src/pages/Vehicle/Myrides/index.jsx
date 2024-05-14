import React, { useEffect, useState } from "react";

import { FaShoppingBag } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneStar } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import notLoggedin from "../../../images/Asset 2.png";
import appStore from "../../../images/appStore.png";

import { meUser } from "../../../store";
import googlePlay from "../../../images/googlePlay2.jpg";
import Myride from "../../../images/Myride.png";
import { useAtom } from "jotai";
import axios from "axios";
import { liveurl } from "../../../hostUrl";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../../component/Loader";
import Header from "../../../Header";
import Footer from "../../../Footer";
import RibbonFlag from "../../../component/icon";

const MyRides = () => {
  const [div, setDiv] = useState(false);
  const [rideId, setRideId] = useState("");
  const [user] = useAtom(meUser);
  const [myRides, setMyRides] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { email } = useParams();
  let guest = sessionStorage.getItem("guestData");
  const emailz = user?.data?.email;
  console.log("ride", emailz);
  let guestParse = JSON.parse(guest);
  const url = `${liveurl}/api/passenger/getAllBookedRides?status=Upcoming&email=${emailz}`;
  useEffect(() => {
    if (div) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [div]);

  useEffect(() => {
    setLoading(true);
    if (emailz) {
      axios

        .get(
          url,

          {
            headers: { Authorization: localStorage.getItem("accessToken") },
          }
        )
        .then((res) => {
          setMyRides(res?.data?.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error, "errors");
          setLoading(false);
        });
    }
    window.sessionStorage.removeItem("userRideId");
    window.sessionStorage.removeItem("Ride_data");

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [emailz]);

  const fetchData = () => {
    setLoading(true);
    setDiv(false);
    axios
      .get(url, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      })
      .then((res) => {
        setMyRides(res?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "errors");
        setLoading(false);
      });
  };

  const Handlediv = (id) => {
    setDiv(!div);
  };
  const HandleThanks = () => {
    setDiv(!div);
    setRideId("");
  };
  const handleCancelRide = () => {
    const body = { rideID: rideId };
    axios
      .put(`${liveurl}/api/adminPanel/rides/updateRide?status=cancel`, body)
      .then((res) => {
        if (res?.data?.message === "Ride updated successfully.") {
          fetchData();
          // window.location.reload();
        }
      })
      .catch((error) => {});
  };

  const Array = [
    {
      para: "If booking is cancelled before 24 hours of service, 100% refund will be applied.",
    },
    {
      para: "If booking is cancelled within 24 hours of service, 50% refund will be applied.",
    },
  ];

  return (
    <div>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div className=" ">
          <div className="">
            <Header />
          </div>
          <div>
            {user?.data?.email && (
              <div>
                <div className="bredcrumbs-div wf-section"></div>
                <div className="breadcrumb wf-section ">
                  <h1 className="heading-7225">
                    <strong className="bold-text-252">Your Bookings</strong>
                  </h1>
                </div>
              </div>
            )}
          </div>

          <div className="">
            {user?.data?.email && myRides?.length === 0 && (
              <div className="flex flex-col justify-center items-center my-12">
                <div className="text-4xl text-gray-400">No Bookings Yet</div>{" "}
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
            {!user?.data?.email && (
              <div className="flex   justify-center mt-[100px] items-center ">
                <div className="flex flex-col border border-black rounded-md bg-gray-100     px-5 py-5 justify-center items-center">
                  <div className="md:text-xl gap-1 items-center justify-center text-gray-600 flex flex-col">
                    <span className="text-center">
                      Thank you for choosing ClassyChauffeurs!
                    </span>
                    <span className="text-md mb-2">
                      Your ride is in approval.
                    </span>
                    <span className="text-xs items-center flex flex-col justify-center">
                      <span>Kindly check your email for details</span>
                      <span>or</span>
                      <span>you can download our app to track your rides</span>
                      <div class="grid  xxxs:grid-cols-1 sm:grid-cols-2 xxxs:gap-8 place-content-center sm:gap-2 mt-5 sm:ml-0 ">
                        <div className="text-center  flex justify-center ">
                          <div className="text-center div-block-312583 cursor-pointer">
                            {/* <a href="https://apps.apple.com/us/app/b-g-chauffeurs-passenger/id6448744144"> */}
                            <Link to={"/device"}>
                              <img
                                src={appStore}
                                alt=""
                                className="h-[40px] w-[110px] sm:relative sm:bottom-[2px]"
                              />
                            </Link>
                            {/* </a> */}
                          </div>
                        </div>

                        {/* <a
                          href="https://play.google.com/store/apps/details?id=com.bgchauffeurs&hl=en-IN"
                          target="_blank"
                          className="cursor-pointer"
                        > */}
                        <Link to={"/device"}>
                          <div class=" flex justify-center">
                            <img
                              src={googlePlay}
                              alt=""
                              className="h-[35px] w-[100px] rounded-lg"
                            />
                          </div>
                        </Link>
                        {/* </a> */}
                      </div>
                    </span>
                  </div>{" "}
                  <div className=" xxs:mt-4  md:mt-4 hover:text-white">
                    <Link
                      to={"/login"}
                      className="text-xl xxs:text-lg  bg-[#bd9300] text-bold px-4 py-2 rounded-md"
                    >
                      Click to Login
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            )}
            <div>
              {myRides?.map((val) => (
                <div className=" ">
                  <div className="flex flex-col mt-10 shadow-lg h-[100%] items-center bg-white border border-gray-200 rounded-lg md:flex-row hover:bg-gray-100  max-w-[900px] mx-auto relative">
                    <div
                      className={`absolute  font-[400] top-0 right-0 px-2 text-center m-1 py-1 rounded-bl-md flag-bg ${
                        val?.onlineRideStatus == "Accepted"
                          ? "text-green-600"
                          : val?.onlineRideStatus == "Rejected"
                          ? "text-red-500"
                          : "text-gray-600"
                      }`}
                    >
                      {val?.onlineRideStatus == "Accepted"
                        ? "Booked"
                        : val?.onlineRideStatus}
                    </div>
                    <div className=" p-2 m-2 ">
                      <img
                        alt="car"
                        loading="lazy"
                        src={val?.vehicleDetails?.vehicleImage?.url}
                        height="350px"
                        width="700px"
                        className="w-[400px] h-[250px] object-scale-down"
                      />
                    </div>
                    <div className="flex flex-col xxs:w-full md:w-[500px] p-4 leading-normal  rounded   m-4 h-full ">
                      <div>
                        <div className="text-xl p-3 justify-center text-center   ">
                          <span className=" text-3xl text-black">
                            {val?.vehicleDetails?.category}
                          </span>
                        </div>

                        <div className="text-md p-3 pb-0 justify-evenly text-center   flex flex-row gap-20">
                          <div className=" p-1 flex flex-row w-1/2  text-start ">
                            <ImLocation2 className="text-black h-6 w-6  font-thin   " />{" "}
                            Pickup
                          </div>
                          <div className=" p-1   flex flex-row w-1/2 text-start">
                            {val?.totalRideDistance === 0 ? (
                              <div className="text-xl text-center font-[500]  p-2 mr-12      "></div>
                            ) : (
                              <div className=" text-center    p- mr-12   truncate  flex ">
                                <ImLocation2 className="text-black h-6 w-6  font-thin" />{" "}
                                DropOff
                              </div>
                            )}{" "}
                          </div>
                        </div>
                        <div className="text-md p-3 pt-0 justify-evenly text-center text-[#979595] flex flex-row gap-20 xxs:gap-10 ">
                          <div className=" p-1 mr-5 text-start w-1/2  truncate ">
                            {val?.pickupLocation?.name}
                          </div>

                          <div className="  p-1  flex flex-col w-1/2 text-start text-[#979595]">
                            {val?.totalRideDistance === 0 ? (
                              <div className="text-xl text-center font-[500] p-2 mr-12 "></div>
                            ) : (
                              <div className="p-1 ml-2 text-start w-1/2  truncate   ">
                                {val?.dropLocation?.name}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-md p-3 justify-evenly text-center  flex flex-row gap-20">
                          <div className=" p-1 flex flex-row gap-2 w-1/2 text-start text-[#555]">
                            <div>
                              <HiUserGroup className="h-6 w-6  " />
                            </div>
                            max {val?.passengers}
                          </div>
                          <div className="  p-1  flex flex-row gap-2 w-1/2 text-start text-[#555]">
                            <div>
                              <FaShoppingBag className="h-6 w-6" />
                            </div>
                            max {val?.luggage}
                          </div>
                        </div>
                        <div>
                          <div className="mt-5  "></div>
                          <div className=" flex justify-around  gap-2 relative right-[12%] ">
                            {val?.totalRideDistance === 0 ? (
                              <div className="text-xl text-center font-[500]    p-2 ml-5      ">
                                {val?.numberOfHours} Hours
                              </div>
                            ) : (
                              <div className="text-xl text-center font-[500]  xxs:ml-10   p-2 mr-12      ">
                                {val?.totalRideDistance} km
                              </div>
                            )}
                            <div
                              onClick={() => {
                                Handlediv();
                                setRideId(val?._id);
                              }}
                              className="bg-yellow-600 cursor-pointer font-[500] text-center text-xl text-white p-2 px-5 rounded-md border hover:bg-yellow-700 border-yellow-600 hover:border-yellow-900"
                            >
                              Cancel
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {div && (
            <div
              className="h-full z-[500000000] w-full fixed left-[0%] top-1  rounded-lg flex justify-center"
              style={{
                backdropFilter: "blur(5px)",
              }}
            >
              <div
                className="  pb-10 relative  xxxs:mx-2  border w-fit h-fit sm:mx-[4rem]  lg:mx-[16rem] xl:mx-[2rem] top-1  rounded-lg bg-white  "
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                }}
              >
                <div className="text-center text-[25px] mt-5 pt-5 mb-10">
                  Our Policy
                </div>
                <div>
                  {Array.map((item) => (
                    <div className="mt-5    md:px-6">
                      <div className="flex gap-2  px-10 py-5 ">
                        <div>
                          <AiTwotoneStar className="text-[25px] text-yellow-600" />
                        </div>
                        <div className="font-normal">{item.para}</div>
                      </div>
                    </div>
                  ))}

                  <div className=" flex  md:gap-10 xxs:flex-wrap xxs:justify-center md:justify-between md:mx-[2rem]  p-5  relative   top-5 ">
                    <div
                      className="border border-red-600 w-fit  p-2 rounded-md cursor-pointer bg-red-500 text-white mb-5"
                      onClick={() => {
                        handleCancelRide();
                      }}
                    >
                      Yes, I want to Cancel
                    </div>
                    <div
                      onClick={HandleThanks}
                      className="border w-fit border-blue-600 p-2 rounded-md cursor-pointer bg-blue-600 text-white mb-5 ml-5"
                    >
                      No Thanks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="mt-[250px] ">
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRides;
