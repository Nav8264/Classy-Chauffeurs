/* eslint-disable no-unreachable */
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// import headerLogo from "../images/Final.png";
import headerLogo from "../images/Final.png";
// import Ausimg from "../images/icons8-australia-96.png";
// import newzealandimg from "../images/icons8-new-zealand-96.png";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { meUser } from "../store";
import { RiArrowDropDownLine } from "react-icons/ri";

import { AiOutlineMenu } from "react-icons/ai";

import Parentstep from "../component/HomeBookingForm/Parent/Parentstep";
import { liveurl } from "../hostUrl";
import { set } from "react-hook-form";
const Header = ({ nav, setNav }) => {
  const locations = [
    { path: "/ourLocation/adelaide", title: "Adelaide" },
    { path: "/ourLocation/ballina-byron-bay", title: "Ballina (Byron Bay)" },
    { path: "/ourLocation/brisbane", title: "Brisbane" },
    {
      path: "/ourLocation/cairns-port-douglas",
      title: "Cairns & Port Douglas",
    },
    {
      path: "/ourLocation/canberra",
      title: "Canberra",
    },
    {
      path: "/ourLocation/darwin",
      title: "Darwin",
    },
    {
      path: "/ourLocation/gold-coast",
      title: "Gold coast",
    },
    {
      path: "/ourLocation/hobart",
      title: "Horbart",
    },

    {
      path: "/ourLocation/launceston",
      title: "Launceston",
    },
    {
      path: "/ourLocation/melbourne",
      title: "Melbourne",
    },

    {
      path: "/ourLocation/new-castle",
      title: "New Castle",
    },
    {
      path: "/ourLocation/perth",
      title: "Perth",
    },
    {
      path: "/ourLocation/sunshine-coast",
      title: "Sunshine Coast",
    },
    {
      path: "/ourLocation/sydney",
      title: "Sydney",
    },
  ];
  const airports = [
    { path: "/AirportTransfer/adelaide-airport-transfers", title: "Adelaide" },
    {
      path: "/AirportTransfer/ballina-byron-bay",
      title: "Ballina (Byron Bay) Airport Transfer",
    },
    { path: "/AirportTransfer/brisbane", title: "Brisbane Airport Transfer" },
    {
      path: "/AirportTransfer/cairns-port-douglas",
      title: "Cairns & Port Douglas Airport Transfer",
    },
    {
      path: "/AirportTransfer/canberra",
      title: "Canberra Airport Transfer",
    },
    {
      path: "/AirportTransfer/darwin",
      title: "Darwin Airport Transfer",
    },
    {
      path: "/AirportTransfer/gold-coast",
      title: "Gold coast Airport Transfer",
    },
    {
      path: "/AirportTransfer/hobart",
      title: "Horbart Airport Transfer",
    },

    {
      path: "/AirportTransfer/launceston",
      title: "Launceston Airport Transfer",
    },
    {
      path: "/AirportTransfer/melbourne",
      title: "Melbourne Airport Transfer",
    },

    {
      path: "/AirportTransfer/new-castle",
      title: "New Castle Airport Transfer",
    },
    {
      path: "/AirportTransfer/perth",
      title: "Perth Airport Transfer",
    },
    {
      path: "/AirportTransfer/sunshine-coast",
      title: "Sunshine Coast Airport Transfer",
    },
    {
      path: "/AirportTransfer/sydney",
      title: "Sydney Airport Transfer",
    },
  ];
  const location = useLocation();
  let ref = useRef();
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let ref5 = useRef();
  let ref6 = useRef();
  let ref7 = useRef();
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [transfers, setTransfers] = useState(false);
  const [menuopen, setMenuopen] = useState(false);

  const [user, setUser] = useAtom(meUser);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
      if (ref2.current && !ref2.current.contains(event.target)) {
        setOpen1(false);
      }
      // for navbar
      // if (ref1.current && !ref1.current.contains(event.target)) {
      //   setMenuopen(false);
      // }
      if (ref3.current && !ref3.current.contains(event.target)) {
        setDropdown1(false);
      }
      if (ref5.current && !ref5.current.contains(event.target)) {
        setDropdown2(false);
      }
      if (ref6.current && !ref6.current.contains(event.target)) {
        setMobileDropdown(false);
      }
      if (ref7.current && !ref7.current.contains(event.target)) {
        setTransfers(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside, true);
    }
    if (open1) {
      document.addEventListener("click", handleClickOutside, true);
    }
    // if (menuopen) {
    //   document.addEventListener("click", handleClickOutside, true);
    // }
    if (dropdown1) {
      document.addEventListener("click", handleClickOutside, true);
    }
    if (dropdown2) {
      document.addEventListener("click", handleClickOutside, true);
    }
    if (mobileDropdown) {
      document.addEventListener("click", handleClickOutside, true);
    }
    if (setTransfers) {
      document.addEventListener("click", handleClickOutside, true);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [open, open1, menuopen, dropdown1, dropdown2, mobileDropdown]);

  function handleClick() {
    setOpen(!open1);
    setMenuopen(false);
  }
  function handleClick2() {
    setOpen1(!open1);
    setMenuopen(false);
  }

  const navigate = useNavigate();

  function handleLogout() {
    // Remove the access token from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("SignUp");
    sessionStorage.removeItem("userRideId");
    localStorage.clear();
    sessionStorage.clear();

    // Redirect the user to the login page
    window.location.reload();
    navigate("/signup");
  }

  useEffect(() => {
    axios
      .get(`${liveurl}/api/passenger/me`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      })
      .then((res) => setUser(res?.data));

    // getAllResponses();
  }, [user?.data?.email]);

  return (
    <div>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className=" bg-[#100C08] lg:text-white xxs:text-[#100C08] "
      >
        {/* ----Small Screen ---- */}
        <div className="xxs:block lg:hidden border">
          <div className="xxs:block lg:hidden">
            <div className=" bg-[#100C08]  px-2 w-[100%]    ">
              {" "}
              <div className="flex justify-between">
                <Link to={"/"}>
                  <div>
                    <img
                      src={headerLogo}
                      loading="lazy"
                      height="150px"
                      width="170px"
                      alt="aaa"
                    />
                  </div>
                </Link>
                <div className=" flex items-center place-content-center ">
                  {user?.data?.email ? (
                    <div
                      className="relative   cursor-pointer  "
                      onClick={handleClick2}
                      ref={ref2}
                    >
                      <div className="flex">
                        <FaUserCircle className="  mx-2 text-[34px] text-white" />
                      </div>

                      {open1 && (
                        <div className="   bg-[#ebebeb] h-[290px] z-[1000] w-[260px] xs:right-[-67px] xxs:right-[-35px]  mt-2 absolute top-8  rounded ">
                          <div className=" h-[95px] text-center">
                            {/* <div className="h-4 w-4 bg-gray-50 mx-auto rotate-45 -mt-2" /> */}
                            <div className="">
                              <div className="border h-[50px] bg-[#222] text-white w-[50px] rounded-[100%] relative left-[100px] border-[#100C08] text-center  pt-3 text-[40px] mt-2 ">
                                {user?.data?.name[0]}
                              </div>
                              <p className="text-[#100C08] border-[#100C08] p-1 font-normal w-[250px] h-fit break-words   ">
                                {user?.data?.name.toUpperCase()}
                              </p>
                              <p className="text-[#100C08] border-[#100C08] pt-1 font-normal text-sm  w-[250px] h-fit break-words ">
                                {user?.data?.email}
                              </p>
                            </div>
                            <div
                              onClick={() => navigate("/booking/myrides")}
                              className=" mt-4 border rounded mx-auto w-[240px] text-center py-1.5 text-[#100C08] cursor-pointer hover:bg-[#222] hover:text-white"
                            >
                              My Rides
                            </div>
                            <div
                              onClick={() => navigate("/feedback")}
                              className=" mt-4 border rounded mx-auto w-[240px] text-center py-1.5 text-[#100C08] cursor-pointer hover:bg-[#222] hover:text-white"
                            >
                              Feedback
                            </div>
                            <div
                              onClick={() => {
                                handleLogout();
                                location.reload();
                              }}
                              className=" mt-2 border rounded text-center mx-auto w-[240px] py-1.5 text-[#100C08] cursor-pointer hover:bg-[#222] hover:text-white"
                            >
                              Log Out
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={"/signup"}
                      className=" w-nav-link text-white mr-1 "
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {sessionStorage.getItem("guestData") !== null ? (
                        <div> Guest</div>
                      ) : (
                        <div to={"/signup"}>Signup</div>
                      )}
                    </NavLink>
                  )}
                  <div ref={ref1}>
                    <AiOutlineMenu
                      className=" bg-white h-8 w-10 my-2 mr-3 rounded-sm "
                      onClick={() => {
                        setMenuopen(!menuopen);
                        setOpen(false);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {menuopen && (
              <div className="  bg-white h-fit   w-[100%]  absolute  left-[0%] z-[999] xxs:block lg:hidden border ">
                <div className="">
                  <nav className="">
                    <div className="grid grid-rows-1 gap-7 lg:gap-2 xl:gap-10 py-4 px-2">
                      {/* <div onClick={() => setMobileDropdown(!mobileDropdown)}>
                        AIRPORT TRANFERS
                        <Dropdown options={options}   placeholder="AIRPORT TRANSFER " />
                      </div> */}

                      {/* <div onClick={() => setTransfers(!transfers)}>
                        LOCATIONS
                      </div> */}

                      <Link
                        to={"/"}
                        aria-current="page"
                        className=""
                        onClick={() => {
                          setMenuopen(false);
                        }}
                      >
                        HOME
                      </Link>
                      <Link
                        to={"/about"}
                        className=" w-nav-link "
                        onClick={() => {
                          setMenuopen(false);
                        }}
                      >
                        ABOUT
                      </Link>
                      <Link
                        to={"/services"}
                        className=" w-nav-link"
                        onClick={() => {
                          setMenuopen(false);
                        }}
                      >
                        SERVICES
                      </Link>
                      <Link
                        to={"/ourfleet"}
                        className="w-nav-link  "
                        onClick={() => {
                          setMenuopen(false);
                        }}
                      >
                        {" "}
                        <strong className="bold-text-251">OUR FLEET</strong>
                      </Link>
                      <Link
                        to={"/blog"}
                        className=" w-nav-link"
                        onClick={() => {
                          setMenuopen(false);
                        }}
                      >
                        BLOG
                      </Link>
                      {/* <Link
                        to={"/ourLocation/australia"}
                        className=" w-nav-link"
                        onClick={() => {
                          setMenuopen(false);
                        }}
                      >
                        AUSTRALIA WIDE
                      </Link> */}
                      {/* <Link
                        to={"/ourLocation/newzealand"}
                        className=" w-nav-link"
                        onClick={() => {
                          setMenuopen(false);
                        }}
                      >
                        NEW ZEALAND WIDE
                      </Link> */}

                      <NavLink to={"/booking"}>
                        <div
                          className=" w-nav-link relative"
                          onMouseEnter={() => setNav(!nav)}
                          onMouseLeave={() => setNav(!nav)}
                          onClick={() => {
                            setMenuopen(false);
                          }}
                        >
                          BOOKING
                          {nav === true && (
                            <div className=" absolute top-0">
                              <div
                                data-w-id="6be94408-f9eb-5619-851e-837c857e2c34"
                                className={`mt-24`}
                              >
                                <Parentstep />
                              </div>
                            </div>
                          )}
                        </div>
                      </NavLink>
                    </div>
                  </nav>
                  <div className="">
                    <div className="icon-22 w-icon-nav-menu"></div>
                    <img
                      src="images/menu-icon.svg"
                      width="18"
                      alt=""
                      className="image-67"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
            {mobileDropdown && (
              <div
                className="absolute top-10 left-10    bottom-0  w-fit h-fit z-[1000] -mt-2 "
                ref={ref6}
              >
                <nav className="navigation-dropdown-3 w-dropdown-list">
                  <div className="dropdown-pointer-2 group  mt-8 ">
                    <div className="dropdown-wrapper-2 absolute xxs:w-[350px] xs:w-[450px] sm:w-[550px] md:w-[700px]  ">
                      <div className="mt-2 border grid-cols-2 grid ">
                        {airports.map(({ path, title, details }, index) => (
                          <Link
                            to={path}
                            key={index}
                            aria-current="page"
                            className="dropdown-link border w-inline-block w--current"
                            onClick={() => {
                              setMobileDropdown(false);
                              setMenuopen(false);
                            }}
                          >
                            <div className="icon-wrap-2">
                              {/* <img src={imageSource} alt="" className="icon" loading="lazy" /> */}
                            </div>
                            <div className="nav-content-wrap-3">
                              <div className="dropdown-title-2">{title}</div>
                              {details && (
                                <div className="nav-link-details-2">
                                  {details}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            )}
            {transfers && (
              <div
                className="absolute top-10 left-10  bottom-0  w-fit h-fit z-[1000] "
                ref={ref7}
              >
                <nav className="navigation-dropdown-3 w-dropdown-list">
                  <div className="dropdown-pointer-2 group  mt-8 ">
                    <div className="dropdown-wrapper-2 absolute xxs:w-[350px] xs:w-[450px] sm:w-[550px] md:w-[700px]   ">
                      <div className="mt-2 border grid-cols-2 grid ">
                        {locations.map(({ path, title, details }, index) => (
                          <Link
                            to={path}
                            key={index}
                            aria-current="page"
                            className="dropdown-link border w-inline-block w--current"
                            onClick={() => {
                              setTransfers(false);
                              setMenuopen(false);
                            }}
                          >
                            <div className="icon-wrap-2">
                              {/* <img src={imageSource} alt="" className="icon" loading="lazy" /> */}
                            </div>
                            <div className="nav-content-wrap-3">
                              <div className="dropdown-title-2">{title}</div>
                              {details && (
                                <div className="nav-link-details-2">
                                  {details}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                        <div
                          data-w-id="8ec2bdfc-40d6-6e92-69f4-8a08792b18ce"
                          className="dropdown-3"
                        >
                          <div className="dropdown-list-2 hide-optins list1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="pointer-2"></div>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
        {/* ------Large Screen------ */}
        <div className="xxs:hidden lg:block  ">
          <div className="   w-[100%]">
            <div className="  flex  ">
              <Link to={"/"} className="  ">
                <img
                  src={headerLogo}
                  height="100%"
                  width="100%"
                  alt="aaa"
                  className=" ml-2 p-2 md:w-[250px] xl:w-[300px] "
                  loading="lazy"
                />
              </Link>
              <nav className="  flex justify-center w-[100%]">
                <div className="  xl:gap-7 flex  font-[Cinzel,sans-serif] items-center place-content-cente text-[15px] font-bold w-fit">
                  <Link
                    to={"/"}
                    className={`${
                      location.pathname === "/"
                        ? "text-[#bd9300] border-b-[#bd9300] border-b-2"
                        : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
                    }`}
                  >
                    <p className="hover-underline-animation">HOME</p>
                  </Link>
                  <Link
                    to={"/about"}
                    className={`${
                      location.pathname === "/about"
                        ? "text-[#bd9300] border-b-[#bd9300] border-b-2"
                        : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
                    }`}
                  >
                    <p className="hover-underline-animation">ABOUT</p>
                  </Link>
                  <Link
                    to={"/services"}
                    className={`${
                      location.pathname === "/services"
                        ? "text-[#bd9300] border-b-[#bd9300] border-b-2"
                        : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
                    }`}
                  >
                    <p className="hover-underline-animation">SERVICES</p>
                  </Link>
                  <Link
                    to={"/ourfleet"}
                    className={`${
                      location.pathname === "/ourfleet"
                        ? "text-[#bd9300] border-b-[#bd9300] border-b-2"
                        : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
                    }`}
                  >
                    <p className="hover-underline-animation">OUR FLEET</p>
                  </Link>
                  <Link
                    to={"/blog"}
                    className={`${
                      location.pathname === "/blog"
                        ? "text-[#bd9300] border-b-[#bd9300] border-b-2"
                        : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
                    }`}
                  >
                    <p className="hover-underline-animation">BLOG</p>
                  </Link>

                  <div
                    data-hover="true"
                    data-delay="0"
                    className="dropdown-5 w-dropdown"
                  >
                    <div className="dropdown w-dropdown-toggle">
                      <div className="icon-23 w-icon-dropdown-toggle"></div>
                      <div className="text-block-15206"></div>
                    </div>
                  </div>

                  <NavLink to={"/booking"}>
                    <div
                      className={`${
                        location.pathname === "/booking"
                          ? "text-[#bd9300] border-b-[#bd9300] border-b-2"
                          : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
                      }`}
                    >
                      <p className="hover-underline-animation">BOOKING</p>
                    </div>
                  </NavLink>
                  {/* <NavLink
                    to={"/contact"}
                    className={`${
                      location.pathname === "/contact"
                        ? "text-[#bd9300]"
                        : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
                    }`}
                  >
                    CONTACT
                  </NavLink> */}

                  {user?.message === "success" ? (
                    <>
                      <div
                        className="flex relative cursor-pointer"
                        ref={ref}
                        onClick={handleClick}
                      >
                        <div className="flex">
                          <FaUserCircle className="  text-[36px] text-white" />

                          <p className="link-25 relative ml-2 mt-2 text-[22px] ">
                            {user?.data?.name}
                          </p>
                        </div>

                        {open && (
                          <div className=" flex  bg-[#ebebeb]   w-[260px] z-[1000] font-sans font-medium  absolute top-12 right-[-10px] rounded-[5px] ">
                            <div className=" h-fit text-center pb-2">
                              <div className="">
                                <div className="flex justify-center">
                                  <div className="border h-[50px] bg-[#222] text-white w-[50px] rounded-full relative border-[#100C08] text-center  pt-3 text-[37px] mt-2 ">
                                    {user?.data?.name[0]?.toUpperCase()}
                                  </div>
                                </div>
                                <p className="text-[#100C08] border-[#100C08] px-2 py-1  w-[250px] h-fit break-words   ">
                                  {user?.data?.name.toUpperCase()}
                                </p>
                                <p className="text-[#100C08] border-[#100C08] px-3 font-sans font-medium  w-[250px] h-fit break-words ">
                                  {user?.data?.email}
                                </p>
                              </div>
                              <div
                                onClick={() => navigate("/booking/myrides")}
                                className=" mt-2 border rounded mx-auto w-[240px] text-center py-1.5 text-[#100C08] cursor-pointer hover:bg-[#222] hover:text-white"
                              >
                                MY RIDES
                              </div>
                              <div
                                onClick={() => navigate("/feedback")}
                                className=" mt-4 border rounded mx-auto w-[240px] text-center py-1.5 text-[#100C08] cursor-pointer hover:bg-[#222] hover:text-white"
                              >
                                FEEDBACK
                              </div>
                              <div
                                onClick={() => handleLogout()}
                                className=" mt-2 border  rounded text-center mx-auto w-[240px] py-1.5 text-[#100C08] cursor-pointer hover:bg-[#222] hover:text-white"
                              >
                                LOG OUT
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={"/signup"}
                      className={`${
                        location.pathname === "/signup"
                          ? "text-[#bd9300] border-b-[#bd9300] border-b-2"
                          : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
                      }`}
                    >
                      {sessionStorage.getItem("guestData") !== null ? (
                        <div> Guest</div>
                      ) : (
                        <div onClick={() => navigate("/continue-guest")}>
                          <p className="hover-underline-animation">SIGN UP</p>
                        </div>
                      )}
                    </NavLink>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
// at line 558
//  <div
//                     data-hover="true"
//                     data-delay="0"
//                     className="dropdown-5 w-dropdown"
//                   >
//                     {/* <div className="dropdown w-dropdown-toggle">
//                       <div className="icon-23 w-icon-dropdown-toggle"></div>
//                     </div> */}
//                     <div className="group flex ">
//                       <div
//                         ref={ref5}
//                         className={`${
//                           location.pathname === "/AirportTransfer/"
//                             ? "text-[#bd9300] border-b-[#bd9300] border-b-2"
//                             : "h-fit hover:text-[#bd9300] p-2 font-[Cinzel,sans-serif]"
//                         } ct-nav-link flex justify-center items-center relative text-[white]  w-[218px]  text-center  `}
//                         onClick={() => {
//                           setDropdown2(!dropdown2);
//                         }}
//                       >
//                         <p className="hover-underline-animation">
//                           AIRPORT TRANSFERS
//                         </p>
//                         <RiArrowDropDownLine className="text-white text-[30px]" />
//                       </div>
//                       {dropdown2 && (
//                         <div className="absolute top-10  bottom-0  w-fit h-fit z-[1000] -mt-2">
//                           <nav className="navigation-dropdown-3 w-dropdown-list">
//                             <div className="dropdown-pointer-2 group  mt-8 ">
//                               <div className="dropdown-wrapper-2 absolute w-[600px]  ">
//                                 <div className="mt-2 border grid-cols-2 grid ">
//                                   {airports.map(
//                                     ({ path, title, details }, index) => (
//                                       <Link
//                                         to={path}
//                                         key={index}
//                                         aria-current="page"
//                                         className="dropdown-link border w-inline-block w--current"
//                                       >
//                                         <div className="icon-wrap-2">
//                                           {/* <img src={imageSource} alt="" className="icon" loading="lazy" /> */}
//                                         </div>
//                                         <div className="nav-content-wrap-3">
//                                           <div className="dropdown-title-2">
//                                             {title}
//                                           </div>
//                                           {details && (
//                                             <div className="nav-link-details-2">
//                                               {details}
//                                             </div>
//                                           )}
//                                         </div>
//                                       </Link>
//                                     )
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                           </nav>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="group flex ">
//                     <div
//                       ref={ref3}
//                       className="ct-nav-link  flex justify-center items-center relative text-[white]  w-[143px]  text-center  "
//                       onClick={() => {
//                         setDropdown1(!dropdown1);
//                         setDropdown2(false);
//                       }}
//                     >
//                       <p className="hover-underline-animation">LOCATIONS</p>
//                       <RiArrowDropDownLine className="text-white text-[30px]" />
//                     </div>
//                     {dropdown1 && (
//                       <div className="absolute top-10   bottom-0  w-fit h-fit z-[1000] ">
//                         <nav className="navigation-dropdown-3 w-dropdown-list">
//                           <div className="dropdown-pointer-2 group  mt-8 ">
//                             <div className="dropdown-wrapper-2 absolute w-[500px]   ">
//                               <div className="mt-2 border grid-cols-2 grid ">
//                                 {locations.map(
//                                   ({ path, title, details }, index) => (
//                                     <Link
//                                       to={path}
//                                       key={index}
//                                       aria-current="page"
//                                       className="dropdown-link border w-inline-block w--current"
//                                     >
//                                       <div className="icon-wrap-2">
//                                         {/* <img src={imageSource} alt="" className="icon" loading="lazy" /> */}
//                                       </div>
//                                       <div className="nav-content-wrap-3">
//                                         <div className="dropdown-title-2">
//                                           {title}
//                                         </div>
//                                         {details && (
//                                           <div className="nav-link-details-2">
//                                             {details}
//                                           </div>
//                                         )}
//                                       </div>
//                                     </Link>
//                                   )
//                                 )}
//                                 <div
//                                   data-w-id="8ec2bdfc-40d6-6e92-69f4-8a08792b18ce"
//                                   className="dropdown-3"
//                                 >
//                                   <div className="dropdown-list-2 hide-optins list1"></div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="pointer-2"></div>
//                           </div>
//                         </nav>
//                       </div>
//                     )}
//                   </div>
