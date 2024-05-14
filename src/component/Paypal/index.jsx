import React, { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { liveurl } from "../../hostUrl";
const Paypal = ({ price, vehicleId, rideId, setPaypalloading }) => {
  console.log("rideId", rideId);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState(false);
  const navigate = useNavigate();

  let guest = JSON.parse(sessionStorage.getItem("guestData"));
  const vehicleTyp = JSON.parse(
    window.localStorage.getItem("SelectedVehicleId")
  );
  const rideData = JSON.parse(window.localStorage.getItem("Ride_data"));
  console.log("price", price);
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Ride",
            amount: {
              currency_code: "USD",
              value: price,
            },
          },
        ],
      })
      .then((orderId) => {
        setOrderId(orderId);
        return orderId;
      });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);

      handleUpdateRide();
      //   }
    });
  };

  const updateRideApi = (user) => {
    setPaypalloading(true);

    const url = `${liveurl}/api/adminPanel/rides/updateRide?status=price`;

    let returnPricing;

    let trailerPrice = vehicleTyp?.trailerOption === true ? 50 : 0;

    if (vehicleTyp?.returnPrice) {
      returnPricing = {
        returnPrice: vehicleTyp?.returnPrice + trailerPrice,
        returnPricingDetails: {
          ...vehicleTyp.returnPricingDetails,
          deposits: vehicleTyp?.returnPrice + trailerPrice,
          totalPrice: vehicleTyp?.returnPrice + trailerPrice,
          totalDue: 0,
          paymentMethod: "Paypal",
        },
      };
    }

    const body = {
      paymentMethod: "Paypal",
      rideID: rideId,
      price: price,
      vehicleId: vehicleId,
      paymentStatus: "Completed",
      vehicleType: vehicleTyp?.category,

      firstName: user?.data?.name || guest?.name,
      email: user?.data?.email || guest?.email,
      phoneNo: user?.data?.phone || guest?.phone,
      countryCode: user?.data?.countryCode || guest?.countryCode,
      lastName: user?.data?.lastName || "",
      ...rideData,

      allPrices: {
        ...vehicleTyp.pricingDetails,
        deposits: vehicleTyp?.price + trailerPrice,
        totalPrice: vehicleTyp?.price + trailerPrice,
        totalDue: 0,
      },
      ...returnPricing,
    };

    axios
      .put(
        url,

        body
      )
      ?.then((res) => {
        console.log("res", res);
        console.log("res.status", res.status);
        setTimeout(() => {
          navigate("/booking/myrides");
          setPaypalloading(false);
          window.location.reload();
          setPaypalloading(false);

          // window.sessionStorage.setItem("loading", JSON.stringify(true));
        }, 1000);
      });
  };

  const handleUpdateRide = () => {
    axios
      .get(`${liveurl}/api/passenger/me`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      })
      ?.then((res) => {
        updateRideApi(res?.data);
      })
      ?.catch((err) => {
        updateRideApi(null);
      });
  };
  const onError = (data, actions) => {
    setError("An Error has occured with your payment!");
  };
  return (
    <div className="mt-4">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AdLFdO1mws1AObVJpKvmTWGELTWr3_a9IMKLxrBMKaWtbuHsk_pLbeoRu76QYGNSNQzBVoaoh1VB7QfR",
        }}
      >
        <div className="overflow-y-scroll  hide-scrollbar max-h-[350px]">
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        </div>

        {success ? (
          <div className="text-gray-500 font-light   text-sm">
            Your payment has been successfully submitted, check confirmation for
            email!{" "}
          </div>
        ) : (
          <div className="text-gray-400 text-center font-light text-sm">
            Payment Pending!
          </div>
        )}
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
