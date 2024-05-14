import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { meUser, rideBookingType } from "../../store";
import axios from "axios";
import { liveurl } from "../../hostUrl";
import Header from "../../Header";
import { useNavigate, useParams } from "react-router-dom";

const Loading = () => {
  let rideid = sessionStorage.getItem("userRideId");
  let guest = JSON.parse(sessionStorage.getItem("guestData"));
  const navigate = useNavigate();
  const { vehicle } = useParams();
  // const [bookingType, setBookingType] = useAtom(rideBookingType)

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const paymentType = params.get("paymentType");
  const bookingType = sessionStorage.getItem("bookingType");
  const updateApi = () => { };
  console.log('bookingType', bookingType)
  const callMe = () => {
    axios
      .get(`${liveurl}/api/passenger/me`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      })
      ?.then((res) => {
        handleUpdateRide(res?.data);
        console.log("res?.data", res?.data);
      });
  };

  console.log("guest", guest);

  const rideData = JSON.parse(window.localStorage.getItem("Ride_data"));

  const vehicleTyp = JSON.parse(
    window.localStorage.getItem("SelectedVehicleId")
  );
  const updateRef = useRef(false)
  console.log('updateRef', updateRef.current)

  const handleUpdateRide = (user) => {
    let returnPricing;
    if (updateRef.current) {
      return
    }
    updateRef.current = true

    let trailerPrice = vehicleTyp?.trailerOption === true ? 50 : 0;

    if (vehicleTyp?.returnPrice) {
      returnPricing = {
        returnPrice: vehicleTyp?.returnPrice + trailerPrice,
        returnPricingDetails: {
          ...vehicleTyp.returnPricingDetails,
          deposits:
            paymentType === "directInvoice" || paymentType === "cash"
              ? 0
              : vehicleTyp?.returnPrice + trailerPrice,
          totalPrice: vehicleTyp?.returnPrice + trailerPrice,
          totalDue:
            paymentType === "directInvoice" || paymentType === "cash"
              ? vehicleTyp?.returnPrice + trailerPrice
              : 0,
        },
      };
    }

    const body = {
      paymentMethod:
        paymentType === "directInvoice"
          ? "Invoice"
          : paymentType === "cash"
            ? "Cash"
            : "Stripe",
      paymentStatus:
        paymentType === "directInvoice" || paymentType === "cash"
          ? "Pending"
          : "Completed",

      rideID: rideid,
      vehicleId: vehicle,
      vehicleType: vehicleTyp?.category,
      // firstName: user?.data?.name || guest?.name,
      // email: user?.data?.email || guest?.email,
      // phoneNo: user?.data?.phone || guest?.phone,
      // countryCode: user?.data?.countryCode || guest?.countryCode,
      // lastName: user?.data?.lastName || "",
      //comment for build
      ...rideData,

      allPrices: {
        ...vehicleTyp.pricingDetails,
        deposits:
          paymentType === "directInvoice" || paymentType === "cash"
            ? 0
            : vehicleTyp?.price + trailerPrice,
        totalPrice: vehicleTyp?.price + trailerPrice,
        totalDue:
          paymentType === "directInvoice" || paymentType === "cash"
            ? vehicleTyp?.price + trailerPrice
            : 0,
      },
      ...returnPricing,
    };

    if (bookingType === "self") {
      body.firstName = user?.data?.name || guest?.name;
      body.email = user?.data?.email || guest?.email;
      body.phoneNo = user?.data?.phone || guest?.phone;
      body.countryCode = user?.data?.countryCode || guest?.countryCode;
      body.lastName = user?.data?.lastName || "";
    } else if (bookingType === 'someoneElse') {
      body.bookedByFirstName = user?.data?.name || guest?.name;
      body.bookedByLastName = user?.data?.lastName || "";
      body.bookedByPhoneNo = user?.data?.phone || guest?.phone;
      body.bookedByEmail = user?.data?.email || guest?.email;
      body.bookedByCountryCode = user?.data?.countryCode || guest?.countryCode;
    }

    axios
      .put(
        `${liveurl}/api/adminPanel/rides/updateRide?status=paymentUpdate`,
        body
      )
      .then((res) => {
        console.log(body, "body 2");
        if (res?.data?.success === true) {
          sessionStorage.removeItem("bookingType");
          navigate("/booking/myRides");

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      if (guest) {
        handleUpdateRide(null);
      } else {
        callMe();
      }
    }, 1500);
  }, []);

  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="bg-white w-screen h-[70px] absolute top-0"></div>
      <div className="mainbod z-10">
        <div className="loadingloader">
          <span className="xxs:text-[15px] xs:text-3xl">Redirecting</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
