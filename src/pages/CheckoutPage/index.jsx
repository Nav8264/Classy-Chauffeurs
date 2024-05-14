import React, { useEffect } from "react";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import stripe from "../../images/stripe.png";
import paypal from "../../images/paypl-removebg-preview.png";
import invoice from "../../images/invoice.png";
import cash from "../../images/cashCollect.png";
import { useNavigate } from "react-router-dom";
import Paypal from "../../component/Paypal";
import { useAtom } from "jotai";
import { meUser, rideId } from "../../store";
import { liveurl } from "../../hostUrl";
import axios from "axios";
import Header from "../../Header";
import PaypalLoader from "../../component/Paypal/PaypalLoader";
import { ToastContainer, toast } from "react-toastify";

const CheckOutPage = () => {
  const [data, setData] = useState();
  const [paypalloading, setPaypalloading] = useState(false);
  const [user] = useAtom(meUser);
  const [me, setMe] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userRideId] = useAtom(rideId);
  const [isPromoCode, setIsPromoCode] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [ridePrice, setRidePrice] = useState({ original: 0, updated: 0 });
  const navigate = useNavigate();
  let guest = JSON.parse(sessionStorage.getItem("guestData"));

  const callMe = () => {
    axios
      .get(`${liveurl}/api/passenger/me`, {
        headers: { Authorization: localStorage.getItem("accessToken") },
      })
      ?.then((res) => {
        setMe(res?.data?.data);
      });
  };

  const Dataa = JSON.parse(window.localStorage.getItem("SelectedVehicleId"));
  const vehiclePrice = JSON.parse(window.localStorage.getItem("TrailerAdded"));

  useEffect(() => {
    callMe();
    setData(Dataa);
    setRidePrice({
      ...ridePrice,
      original: Number(Dataa?.price) + Number(Dataa?.returnPrice || 0),
    });
  }, []);

  console.log("ridePrice :>> ", ridePrice);

  const handleStripe = (booking) => {
    if (user || guest) {
      axios
        .post(
          `${liveurl}/api/adminPanel/stripeCheckout/create-checkout-session`,

          { booking }
        )
        .then((res) => {
          if (res.data?.url === `${liveurl}/booking/myrides`) {
          }

          sessionStorage.setItem("payment", JSON.stringify(res));
          sessionStorage.setItem(
            "payment_status",
            JSON.stringify(res.data.payment_status)
          );
          sessionStorage.setItem("status", JSON.stringify(res.data.status));
          if (res?.data?.url) {
            window.location.href = res.data?.url;
          }
        })
        .catch((error) => {
          console.log("errorzz", error);
        });
    } else {
      navigate("/signup");
    }
  };

  const applyPromocode = (coupon) => {
    console.log("coupon :>> ", coupon);

    const updatedPrice =
      ridePrice?.original - (coupon?.percentOff / 100) * ridePrice?.original;

    setRidePrice({ ...ridePrice, updated: Number(updatedPrice?.toFixed(2)) });
    setData({ ...data, price: Number(updatedPrice?.toFixed(2)) });
    toast.success("Promocode applied!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    window.localStorage.removeItem("SelectedVehicleId");
    window.localStorage.setItem(
      "SelectedVehicleId",
      JSON.stringify({ ...data, price: Number(updatedPrice?.toFixed(2)) })
    );
  };

  const usePromoCode = () => {
    axios
      .put(
        `${liveurl}/api/adminPanel/promocodes/usePromoCode?code=${promoCode}`
      )
      .then((res) => {
        if (res?.data?.success) {
          applyPromocode(res?.data?.data);
          // setData({...data , price:})
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="relative ">
      {/* <Header /> */}
      <div className="mb-5">
        <ToastContainer />
      </div>

      <div className="grid grid-cols-1 z-[-1000] xxs:mt-0  mt-10">
        <div className="flex justify-center ">
          <div className="border border-black bg-gray-100 shadow-xl xxs:h-[280px] md:h-[280px] md:w-[850px] xxs:w-[300px] grid md:grid-cols-2 xxs:grid-cols-1 xxs:my-1 md:my-10 rounded-xl">
            <div className="border ml-5 md:h-[230px] md:w-[350px]  xxs:w-[200px] xxs:mx-10 xxs:h-[150px] xxs:mt-2 rounded-xl overflow-hidden xxs:my-0  md:my-5">
              <img
                alt="car"
                loading="lazy"
                src={data?.vehicleImage?.url}
                height="100%"
                width="100%"
                className="md:h-[230px] md:w-[350px]   xxs:w-[250px] xxs:h-[150px]  shadow-lg shadow-gray-400 "
              />
            </div>
            <div className=" h-52 md:w-[400px] xxs:w-[300px] xxs:my-0 xxs:mt-2  md:my-5 ">
              <div className="md:text-3xl xxs:text-xl font-bold text-center md:mt-2 xxs:mt-0   text-[#222]">
                {data?.category}
              </div>
              <div className="grid xxs:grid-cols-1 md:grid-cols-2">
                <div className="  md:flex-col md:my-5  xxs:my-1 xxs:flex justify-center xxs:gap-6 md:gap-2 ">
                  <div className="flex md:mx-auto">
                    <div>
                      <HiUserGroup className="h-6 w-6" />
                    </div>
                    <div className="ml-2 font-light text-[#555] text-lg">
                      max. {data?.capacity}
                    </div>
                  </div>
                  <div className="flex md:mx-auto ">
                    <div>
                      <FaShoppingBag className="h-6 w-6" />
                    </div>
                    <div className="ml-2 font-light text-[#555] text-lg">
                      max. {data?.luggageQuantity}
                    </div>
                  </div>
                </div>
                <div className="  xxs:grid-cols-2 md:grid-cols-1 grid justify-center md:mt-5 xxs:mx-10">
                  <div className="md:text-2xl text-center xxs:text-xl p-1 font-[500] md:mt-4  ">
                    ${" "}
                    {ridePrice?.updated
                      ? ridePrice?.updated?.toFixed(2)
                      : vehiclePrice === null
                      ? Number(data?.price?.toFixed(2) || 0) +
                        Number(data?.returnPrice?.toFixed(2) || 0)
                      : Number((data?.price + 50).toFixed(2) || 0) +
                        Number(data?.returnPrice?.toFixed(2) || 0)}
                  </div>
                  <div className="xxs:block md:hidden">
                    <div className="flex justify-center  p-1">
                      <div
                        onClick={() => {}}
                        className=" cursor-pointer text-center text-xl xxs:text-xl my-1 md:w-[100px] bg-gradient-to-r from-yellow-500 via-yellow-100 to-yellow-500 px-1    rounded-md "
                      >
                        Selected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xxs:hidden md:block">
                <div className="flex justify-center  p-1">
                  <div
                    onClick={() => {}}
                    className=" cursor-pointer text-center text-xl xxs:text-xl my-1 md:w-[100px] bg-gradient-to-r from-yellow-500 via-yellow-100 to-yellow-500 px-1    rounded-md "
                  >
                    Selected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="promoCode flex flex-col justify-center my-4">
        <div className="font-[400] flex  justify-center text-gray-500">
          <span>Have a promo code?</span>
          <span
            className="text-blue-700 font-semibold"
            onClick={() => setIsPromoCode(true)}
          >
            Add here
          </span>
        </div>
        <div className="flex gap-2 justify-center items-center mt-4 ">
          {isPromoCode && (
            <>
              <input
                placeholder="Enter your promo code"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e?.target?.value?.toLocaleUpperCase());
                }}
                className="focus:border-1 focus:border-gray-500 px-2 py-2 border rounded-lg text-sm placeholder:text-sm"
              />
              <button
                className="text-white h-8 bg-blue-700 rounded-md px-3 font-[400]"
                onClick={usePromoCode}
              >
                Apply
              </button>
            </>
          )}
        </div>
      </div>
      <div>
        <div className=" text-center md:text-3xl xxs:text-xl mt-8">
          Choose a payment Method{" "}
          <span className="text-sm text-gray-500">
            <br />
            (click one of the option below)
          </span>
        </div>
        <div className="flex justify-center mt-10">
          <div className=" w-fit px-5 flex ">
            <div className="flex-col cursor-pointer justify-center items-center place-content-center ">
              <div
                onClick={() => {
                  setPaymentMethod("stripe");
                }}
                className={
                  paymentMethod === "stripe"
                    ? "border-blue-500 bg-gray-100 px-5 py-2 border-2  rounded-xl shadow-md shadow-gray-500"
                    : "border bg-gray-100 px-5 py-2 rounded-xl shadow-sm shadow-gray-100"
                }
              >
                <img src={stripe} alt="stripe" height="50px" width="110px" />
              </div>
              <div
                className={
                  paymentMethod === "stripe"
                    ? "md:text-sm xxs:text-xs text-center text-gray-500 my-5"
                    : "md:text-sm xxs:text-xs text-center text-gray-300 my-5"
                }
              >
                Pay With Stripe
              </div>
            </div>
            {/* <div className="flex-col cursor-pointer justify-center items-center place-content-center ml-5">
              <div
                onClick={() => {
                  setPaymentMethod("paypal");
                }}
                className={
                  paymentMethod === "paypal"
                    ? "border-blue-500 bg-gray-100 px-5 py-2 border-2  rounded-xl shadow-md shadow-gray-500"
                    : "border bg-gray-100 px-5 py-2 rounded-xl shadow-sm shadow-gray-100"
                }
              >
                <img src={paypal} alt="paypal" height="100px" width="200px" />
              </div>
              <div
                className={
                  paymentMethod === "paypal"
                    ? "md:text-sm xxs:text-xs  text-center text-gray-500 xxs:my-3 md:my-5"
                    : "md:text-sm xxs:text-xs text-center text-gray-300 md:my-5 xxs:my-3"
                }
              >
                Pay With Paypal
              </div>
            </div> */}
            {/* {me && ( */}
            <>
              {me?.byAdmin && (
                <div className="flex-col cursor-pointer justify-center items-center place-content-center ml-5">
                  <div
                    onClick={() => {
                      setPaymentMethod("directInvoice");
                    }}
                    className={
                      paymentMethod === "directInvoice"
                        ? "border-blue-500 bg-gray-100 px-5 py-3 border-2  rounded-xl shadow-md shadow-gray-500"
                        : "border bg-gray-100 px-5 py-3 rounded-xl shadow-sm shadow-gray-100"
                    }
                  >
                    <img
                      src={invoice}
                      alt="paypal"
                      style={{
                        height: "100px",
                        width: "110px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div
                    className={
                      paymentMethod === "directInvoice"
                        ? "md:text-sm xxs:text-xs  text-center text-gray-500 xxs:my-3 md:my-5"
                        : "md:text-sm xxs:text-xs text-center text-gray-300 md:my-5 xxs:my-3"
                    }
                  >
                    Direct Invoice
                  </div>
                </div>
              )}

              <div className="flex-col cursor-pointer justify-center items-center place-content-center ml-5">
                <div
                  onClick={() => {
                    setPaymentMethod("cash");
                  }}
                  className={
                    paymentMethod === "cash"
                      ? "border-blue-500 bg-gray-100 px-5 py-3 border-2  rounded-xl shadow-md shadow-gray-500"
                      : "border bg-gray-100 px-5 py-3 rounded-xl shadow-sm shadow-gray-100"
                  }
                >
                  <img
                    src={cash}
                    alt="invoice"
                    style={{
                      height: "100px",
                      width: "110px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  className={
                    paymentMethod === "cash"
                      ? "md:text-sm xxs:text-xs  text-center text-gray-500 xxs:my-3 md:my-5"
                      : "md:text-sm xxs:text-xs text-center text-gray-300 md:my-5 xxs:my-3"
                  }
                >
                  Collect
                </div>
              </div>
            </>
            {/* )} */}
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-[50%]" />
        </div>
        <p className="text-center text-gray-400 font-normal md:text-sm xxs:text-xs md:mt-5 xxs:mt-2">
          {paymentMethod !== ""
            ? " Click the button below to get redirected to payment website to complete your transaction"
            : ""}
        </p>
        <div className="flex justify-center md:mt-8 xxs:mt-2  ">
          <button
            onClick={() => {
              if (paymentMethod === "stripe") {
                const rideIdd = window.localStorage.getItem("userRideId");
                handleStripe({
                  ...data,
                  _id: data?.vehicleId,
                  rideId: userRideId ?? rideIdd,
                  firstName: user?.data?.name || guest?.name,
                  email: user?.data?.email || guest?.email,
                  phoneNo: user?.data?.phone || guest?.phone,
                  countryCode: user?.data?.countryCode || guest?.countryCode,
                  lastName: user?.data?.lastName || "",
                  customerId: user?.data?._id,

                  price:
                    vehiclePrice === null
                      ? Number(data?.price?.toFixed(2) || 0) +
                        Number(data?.returnPrice?.toFixed(2) || 0)
                      : Number((data?.price + 50).toFixed(2) || 0) +
                        Number(data?.returnPrice?.toFixed(2) || 0),
                });
              } else {
                navigate(
                  `/booking/loading/${data?.vehicleId}?paymentType=${paymentMethod}`
                );
              }
            }}
            className={
              paymentMethod !== "paypal" && paymentMethod !== ""
                ? "w-[150px] border text-center px-4 py-2 cursor-pointer   text-black  text-[15px] font-serif rounded-md bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500"
                : ""
            }
          >
            {paymentMethod !== "paypal" && paymentMethod !== ""
              ? "Continue"
              : ""}
          </button>

          <div className="xxs:mt-1 md:mt:3">
            {paymentMethod === "paypal" && (
              <Paypal
                price={
                  // price?.value || paymentMethodModal?.id?.price
                  vehiclePrice === null
                    ? Number(data?.price?.toFixed(2) || 0) +
                      Number(data?.returnPrice?.toFixed(2) || 0)
                    : Number((data?.price + 50).toFixed(2) || 0) +
                      Number(data?.returnPrice?.toFixed(2) || 0)
                }
                // price={price?.value}}
                vehicleId={data?.vehicleId}
                rideId={userRideId}
                setPaypalloading={setPaypalloading}
              />
            )}
          </div>
        </div>
        <div className=" xxs:my-4 px-1 md:my-10 xxs:text-xs md:text-lg font-light flex justify-center items-center">
          If you wish you want to change the vehicle you selected for your ride
          <div className="flex justify-center ml-2  ">
            <div
              onClick={() => {
                navigate("/vehicle");
              }}
              className=" cursor-pointer text-center  py-1 px-2  text-black  md:text-[15px] xxs:text-[12px] mr-2  rounded-md bg-blue-300"
            >
              Click
            </div>
          </div>
        </div>
      </div>

      {paypalloading && (
        <div className=" absolute h-full w-screen top-0 bg-white z-[50000] ">
          <div className="flex justify-center mt-[350px]">
            <div className="  ">
              <PaypalLoader />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
