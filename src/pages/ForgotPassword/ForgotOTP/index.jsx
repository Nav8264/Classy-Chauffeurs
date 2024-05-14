import axios from "axios";
import React, { createRef, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../Footer";
import Header from "../../../Header";
import { liveurl } from "../../../hostUrl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "../../SignUp";
import Loader from "../../../component/Loader";
const ForgotOTP = () => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const [otpValues, setOTPValues] = useState(Array(6).fill(""));
  const [otp, setOtp] = useState("");

  const inputRefs = useRef([...Array(6)].map(() => createRef()));

  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  let signup = JSON.parse(localStorage.getItem("SignUp"));
  const { email } = useParams();

  useEffect(() => {
    let intervalId;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  const handleResendClick = () => {
    setTimer(120);
    const body = {
      email: email,
    };

    axios
      .post(`${liveurl}/api/passenger/existence?status=forgotPass`, body)
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToast = () => {
    toast.error("Invalid OTP", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // const handleInput = (event, index) => {
  //   const value = event.target.value.replace(/\D/g, "");
  //   if (value.length <= 1) {
  //     const newValues = [...otpValues];
  //     newValues[index] = value;
  //     setOTPValues(newValues);
  //     if (newValues.every((val) => val.length === 1)) {
  //       const otp = newValues.join("");

  //       setOtp(otp);
  //     }
  //   }
  // };

  const handleInput = (event, index) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length <= 1) {
      const newValues = [...otpValues];
      newValues[index] = value;
      setOTPValues(newValues);
      if (newValues.every((val) => val.length === 1)) {
        const otp = newValues.join("");
        setOtp(otp);
      }
      if (value && index < 5) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };
  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < 6; i++) {
      inputs.push(
        <input
          key={i}
          type="number"
          maxLength={1}
          value={otpValues[i]}
          onChange={(e) => handleInput(e, i)}
          className="border bg-transparent border-white   text-[18px] rounded-[100%] text-center  focus:outline-none  focus:border- xxs:h-[30px] xxs:w-[30px] md:h-[50px] md:w-[50px]"
          placeholder="0"
          ref={inputRefs.current[i]}
        />
      );
    }
    return inputs;
  };

  // const renderInputs = () => {
  //   const inputs = [];
  //   for (let i = 0; i < 6; i++) {
  //     inputs.push(
  //       <input
  //         key={i}
  //         type="number"
  //         maxLength={1}
  //         value={otpValues[i]}
  //         onChange={(e) => handleInput(e, i)}
  //         className="border bg-transparent border-white   text-[18px] rounded-[100%] text-center  focus:outline-none  focus:border- h-[50px] w-[50px]"
  //         placeholder="0"
  //       />
  //     );
  //   }
  //   return inputs;
  // };

  return (
    <div>
      <div className="mb-5">
        <Header />
        <ToastContainer />
      </div>
      <div className="  flex justify-center py-2">
        <div className="border border-blue-500 flex flex-col gap-[25px] bg-[#100C08] text-white px-10 py-5">
          <div className="flex items-center text-3xl font-semibold font-[Cinzel,sans-serif] px-2 py-4 mt-10">
            <hr className="w-[100%] border-[#bd9300] shadow-md shadow-white" />
            <p className=" "> Verification</p>
            <hr className="w-[100%] border-[#bd9300] shadow-md shadow-white" />
          </div>
          <div className="borderr border[#100C08] flex flex-col p-2 items-center gap-2 rounded-sm">
            <p className="borderr text-center text-xl font-semibold font-[Cinzel,sans-serif] px-2 py-4 ">
              Enter Verification Code
            </p>
            <div className="">
              <div className="flex gap-2">{renderInputs()}</div>
            </div>

            <button
              className="mt-5"
              onClick={handleResendClick}
              disabled={timer > 0}
            >
              {timer > 0 ? `Resend in ${timer} seconds` : "Resend OTP"}
            </button>
            <div></div>
            <div
              className="border text-center text-xl text-black   font-semibold font-[Cinzel,sans-serif] px-2 py-2 w-[50%]  rounded-[25px] border-[#100C08] mt-3 cursor-pointer mb-4"
              onClick={() => {
                if (!otpValues || otpValues[0] === "") {
                  handleToast();
                } else if (otpValues) {
                  setSubmitLoading(true);
                  const body = {
                    otp: otp,
                    email: email,
                  };
                  axios.post(`${liveurl}/api/verifyOtp`, body).then((val) => {
                    // console.log("val", val);
                    if (val?.data?.success === true) {
                      setSubmitLoading(false);
                      navigate(
                        `/forgotpassword/forgotemail/otp/email=${email}`
                      );
                    } else {
                      setSubmitLoading(false);

                      handleToast();
                    }
                  });
                }
              }}
            >
              {submitLoading ? (
                <div className="flex justify-center bg-[#100C08]">
                  <Loader />
                </div>
              ) : (
                <div className=" bg-[#bd9300] font-semibold font-[Cinzel,sans-serif] px-2 py-2 w-[150px]  rounded-[25px]">
                  Verify
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default ForgotOTP;
