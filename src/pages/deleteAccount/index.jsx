import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { liveurl } from "../../hostUrl";
import logo from "../../images/Final.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Header";
import Loader from "../../component/Loader";
import OTPInput from "../../component/OTPInput";
const DeleteAccount = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    email: "",
    accountType: "chauffeur",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [otpValues, setOTPValues] = useState(Array(6).fill(""));
  const [hidden, setHidden] = useState(false);

  console.log(signUp, "values");

  const handleFormSubmit = (event) => {
    const { name, value } = event.target;

    console.log(name, value, "dhdj");
    // Update the signUp state with the new input value
    setSignUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Perform validations based on the input name
    switch (name) {
      case "email":
        if (value.trim() === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "Email is required",
          }));
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value)) {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "This is not a valid email format!",
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "",
          }));
        }
        break;

      default:
        break;
    }
  };

  const validation = () => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexName = /^[a-zA-Z'-\s]+$/;
    const regexphone = /^[0-9]+$/;

    // if (!signUp.name) {
    //   errors.name = "Please enter your name";
    // } else if (!regexName.test(signUp.name)) {
    //   errors.name = "Please use letters only";
    // } else if (!signUp.countryCode) {
    //   errors.countryCode = "Please choose a country code";
    // }

    if (!signUp.email) {
      errors.email = "Please enter your email";
    } else if (!regexEmail.test(signUp.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  const handleToast = () => {
    toast.error("User already exists, Please try with a different Email!", {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validation();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("signUp", signUp);
      axios
        .put(`${liveurl}/api/passenger/deleteAccount/sendOtp`, {
          email: signUp.email,
          type: signUp.accountType,
        })
        .then((res) => {
          console.log("res", res);
          if (res?.status === 200) {
            setHidden(true);
          } else {
            handleToast();
          }
        })
        .catch((error) => {
          alert(error?.response?.data?.message);
        });
    }
  };

  const handleVerifyOtp = () => {
    if (otpValues) {
      axios
        .put(`${liveurl}/api/passenger/deleteAccount/verifyOtp`, {
          email: signUp.email,
          otp: otpValues,
        })
        .then((res) => {
          console.log("res", res);
          if (res?.status === 200) {
            console.log("signUp.email", signUp.email);
            axios
              .delete(`${liveurl}/api/passenger/deleteAccount/delete`, {
                data: {
                  email: signUp.email,
                },
              })
              .then((res) => {
                console.log("res", res);
                if (res?.status === 200) {
                  setHidden(false);
                  alert("Account deleted successfully!");
                  setSignUp({ email: "", accountType: "chauffeur" });
                  setOTPValues(Array(6).fill(""));
                }
              })
              .catch((error) => {
                alert(error?.response?.data?.message);
              });
          }
        })
        .catch((error) => {
          alert(error?.response?.data?.message);
        });
    }
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
          <Header />
          <ToastContainer />
          <div className="breadcrumb wf-section ">
            <AnimatePresence>
              <motion.div
                data-w-id="dff8a095-db4c-bee0-0d61-9c86138e05e4"
                className="sign-up-form h-[510px] "
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div class="link-block-62 w-inline-block">
                  <div class="logo-2">
                    <img src={logo} loading="lazy" alt="" class="image-32442" />
                  </div>
                </div>
                <div>
                  <h1 class="heading-272">Delete Account</h1>
                </div>
                {/* verifyAccountAndOtp */}
                {!hidden && (
                  <main>
                    <div class="form-11">
                      <div class="form-block-7 w-form">
                        <form
                          id="email-form"
                          name="email-form"
                          data-name="Email Form"
                          method="get"
                          class="form-10"
                          onSubmit={handleSubmit}
                        >
                          <div className="forminput">
                            <label for="email" class="field-label-5">
                              Select Account
                            </label>
                            <div className="mt-1">
                              <select
                                onChange={handleFormSubmit}
                                className="border border-white w-full py-2 text-black rounded-[5px]"
                                name="accountType"
                                value={signUp?.accountType}
                              >
                                <option
                                  className="h-4 py-4 bg-transparent rounded-[5px] my-2"
                                  value={"chauffeur"}
                                >
                                  Chauffeur
                                </option>
                                s
                                <option
                                  className="h-4 py-4 bg-transparent rounded-[5px] my-2"
                                  value={"passenger"}
                                >
                                  Customer
                                </option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <div className="forminput">
                              <label for="email" class="field-label-5">
                                Email Address
                              </label>
                              <div className="mt-1 relative">
                                <input
                                  type="email"
                                  class="login-input w-input rounded-md"
                                  maxLength={256}
                                  onChange={handleFormSubmit}
                                  name="email"
                                  value={signUp.email}
                                  data-name="Email"
                                  placeholder="Enter email"
                                  id="email"
                                  required=""
                                />
                              </div>
                              <div className="text-red-700 absolute text-[12px]">
                                {formErrors?.email}
                              </div>
                            </div>
                          </div>
                          <button
                            className=" button-211150 rounded-md capitalize "
                            style={{ marginTop: "30px" }}
                            type="submit"
                          >
                            Verify
                          </button>
                        </form>
                      </div>
                    </div>
                  </main>
                )}

                {hidden && (
                  <div className="borderr border-[#100C08] flex flex-col p-2 items-center gap-2 rounded-sm">
                    <p className="borderr text-center text-xl text-white font-semibold font-[Cinzel,sans-serif] px-2 py-4 ">
                      Enter Verification Code
                    </p>
                    <div className="flex gap-2 justify-center  ">
                      <OTPInput
                        className="text-white"
                        autoFocus
                        isNumberInput
                        length={6}
                        onChangeOTP={(otp) => {
                          console.log("otp", otp);
                          setOTPValues(otp);
                        }}
                      />
                    </div>

                    {loading ? (
                      <div className="flex justify-center bg-[#100C08]">
                        <Loader />
                      </div>
                    ) : (
                      <div
                        className=" bg-[#bd9300] font-semibold font-[Cinzel,sans-serif] py-3 w-[150px]  rounded-[25px] text-center mt-8"
                        onClick={handleVerifyOtp}
                      >
                        Verify
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
