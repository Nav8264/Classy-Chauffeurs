import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { liveurl } from "../../../hostUrl";
import logo from "../../../images/Final.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAtom } from "jotai";
import { guest } from "../../../store";
import Header from "../../../Header";
const Guest = () => {
  const navigate = useNavigate();
  const [{ name, email, phone, countryCode }, setSignUp] = useAtom(guest);
  console.log("guest", guest);
  const guestData = { name, email, phone, countryCode };
  const [countryCodes, setCountryCodes] = useState([]);

  const [value, setValue] = useState();
  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    axios.get(`${liveurl}/api/countryCode`).then((res) => {
      setCountryCodes(res?.data?.result);
    });
  }, []);

  const handleFormSubmit = (e) => {
    const { value, name } = e.target;
    setSignUp((curr) => ({ ...curr, [name]: value }));
  };
  const validation = (elem) => {
    const errors = {};

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPhone = /^\d{9,10}$/;
    const regexName = /^[a-z\d\-_\s]+$/i;
    if (!elem?.name) {
      errors.name = "Please enter your name";
    } else if (!regexName.test(elem.name)) {
      errors.name = "Please use letters only";
    }
    if (!elem?.phone) {
      errors.phone = "Phone enter your phone ";
    } else if (!regexPhone.test(elem.phone)) {
      errors.phone = "This is not a valid phone format!";
    }
    if (!elem.email) {
      errors.email = "Please enter your email";
    } else if (!regexEmail.test(elem.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!elem.countryCode) {
      errors.countryCode = "Please Choose a country code";
    }

    return errors;
  };

  const handleSuccessToast = () => {
    toast.success("Logged in as Guest!", {
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

  const handleSubmit = () => {
    const errors = validation({
      name,
      email,
      phone,
      countryCode,
    });
    setFormErrors(errors);

    // let guest = sessionStorage.getItem("guestData");
    const rideId = sessionStorage.getItem("userRideId");
    if (!Object.keys(errors).length && rideId) {
      sessionStorage.setItem("guestData", JSON.stringify(guestData));

      navigate("/checkout");
      setSignUp("");
    } else if (!Object.keys(errors).length) {
      handleSuccessToast();
      sessionStorage.setItem("guestData", JSON.stringify(guestData));

      setTimeout(() => {
        navigate("/");
        setSignUp("");
      }, 2000);
    }
  };
  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="breadcrumb wf-section border ">
        <AnimatePresence>
          <motion.div
            data-w-id="dff8a095-db4c-bee0-0d61-9c86138e05e4"
            className="sign-up-form h-[600px] "
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="link-block-62 w-inline-block">
              <div class="logo-2">
                <img src={logo} loading="lazy" alt="" class="image-32442" />
              </div>
            </div>
            <div>
              <h1 class="text-white text-center text-[25px] font-semibold font-[Cinzel] ">
                Guest Details
              </h1>
            </div>
            <div class="form-11 ">
              <div class="form-block-7 w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  class="form-10"
                >
                  <div>
                    <div className="relative">
                      <label for="name" className="field-label-3">
                        Name
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="text"
                          className="login-input w-input rounded-md"
                          maxlength="25"
                          name="name"
                          onChange={handleFormSubmit}
                          value={name}
                          placeholder="Enter name"
                          id="name"
                          required=""
                        />
                      </div>
                      <div className="text-red-700 absolute text-[12px] ">
                        {formErrors?.name}
                      </div>
                    </div>
                    <div className="forminput">
                      <label for="email" class="field-label-5 ">
                        Email Address
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="email"
                          class="login-input w-input rounded-md"
                          maxlength="256"
                          onChange={handleFormSubmit}
                          name="email"
                          value={email}
                          data-name="Email"
                          placeholder="Enter email"
                          id="email"
                          required=""
                          v
                        />
                      </div>
                      <div className="text-red-700 absolute text-[12px] ">
                        {formErrors?.email}
                      </div>
                    </div>
                    <div className="forminput">
                      <label for="email" class="field-label-5">
                        Phone Number
                      </label>
                      <div className="mt-1 relative flex">
                        <select
                          name="countryCode"
                          className="h-[10] rounded-l-md"
                          value={countryCode || "+91"}
                          onChange={handleFormSubmit}
                        >
                          {console.log("countryCode", countryCode)}
                          {[
                            ...new Set(
                              countryCodes.map((val) => val?.dialCode)
                            ),
                          ]
                            .sort()
                            .map((dialCode) => (
                              <option
                                className="h-[25px] overflow-y-scroll "
                                key={dialCode}
                                defaultValue={"+91"}
                                selected={dialCode === "+91"}
                              >
                                {dialCode}
                              </option>
                            ))}
                        </select>
                        <input
                          type="number"
                          maxLength={10}
                          class="login-input w-input rounded-r-md"
                          onChange={handleFormSubmit}
                          name="phone"
                          value={phone}
                          data-name="Email"
                          placeholder="Enter mobile number"
                          id="phone"
                          required=""
                        />
                      </div>
                      <div className="flex  ">
                        <div className="text-red-700 text-[12px]   ">
                          {formErrors?.countryCode}
                        </div>
                        <div className="text-red-700 text-[12px] pl-2">
                          {formErrors?.phone}
                        </div>
                      </div>
                    </div>
                    {/* <div className="forminput">
                      <label for="email-2" class="field-label-4">
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          type="phone"
                          class="login-input w-input rounded-md"
                          maxlength="10"
                          onChange={handleFormSubmit}
                          name="phone"
                          value={phone}
                          data-name="Email 2"
                          placeholder=""
                          id="email-2"
                          required=""
                        />
                      </div>
                      <div className="text-red-700 absolute text-[12px] ">
                        {formErrors?.phone}
                      </div>
                    </div> */}
                  </div>
                </form>
                <button
                  class="button-211149 w-button  rounded-md"
                  onClick={handleSubmit}
                >
                  Continue as Guest
                </button>
              </div>
            </div>
            <div class="div-block-31005">
              <Link href="#" class="link-133">
                <strong class="bold-text-250">Already have an account</strong>{" "}
                <strong class="bold-text-250">?</strong>{" "}
                <Link to={"/login"}>
                  <strong class="bold-text-250">Login.</strong>
                </Link>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Guest;
