import axios, { HttpStatusCode } from "axios";
import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import loginlogo from "../../images/logo_1.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { liveurl } from "../../hostUrl";
import Header from "../../Header";
import Loader from "../../component/Loader";

const LogInForm = () => {
  const navigate = useNavigate();
  const [{ email, password }, setLogin] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const logged = window.localStorage.getItem("loggedIn");
    if (logged && logged?.includes("true")) {
      navigate("/");
    }
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  const handleFormSubmit = (e) => {
    const { value, name } = e.target;
    setLogin((curr) => ({ ...curr, [name]: value }));
  };

  const validation = (elem) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!elem.email) {
      errors.email = "Please enter your email";
    } else if (!regexEmail.test(elem.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!elem.password) {
      errors.password = "Please enter your password";
    }
    return errors;
  };
  const handleToast = () => {
    toast.error("Incorrect username or password. Please try again.", {
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
  const handleToast2 = () => {
    toast.success("Thanks For Logging In !", {
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
      email,

      password,
    });
    setFormErrors(errors);
    if (!errors.email && !errors.password) {
      axios
        .post(`${liveurl}/api/passenger/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          handleToast2();
          setTimeout(() => {
            if (res?.data?.success) {
              window.localStorage.setItem(
                "accessToken",
                res?.data?.accessToken
              );

              const rideId = window.sessionStorage.getItem("userRideId");

              console.log(res.data.user?._id, "id", rideId);

              if (res?.data?.accessToken && rideId) {
                navigate("/checkout");
                handleToast2();
              } else if (res?.data?.accessToken) {
                navigate("/");
                window.localStorage.setItem("loggedIn", true);
              }
            }
          }, 2000);
          sessionStorage.removeItem("guestData");
          sessionStorage.removeItem("SignUp");

          setLogin({ email: "", password: "" });
        })
        .catch((error) => {
          handleToast();
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
          <div className="breadcrumb  wf-section">
            <h1
              data-w-id="1b23df6a-e44d-a5b5-7bd3-b0f7d3e1d223"
              className="heading-7225"
            >
              <AnimatePresence>
                <motion.div
                  data-w-id="b931e2c9-2b60-65e5-58e8-5834c2ccf676"
                  className="login-form p-2 h-[20px]"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.4 }}
                >
                  <div className="link-block-63 w-inline-block">
                    <div className="logo-2">
                      <img
                        src={loginlogo}
                        loading="lazy"
                        alt=""
                        className="image-32442"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className=" text-center text-[25px] font-[Cinzel]">
                      Login
                    </h1>
                  </div>
                  <div className="form-11 p-[20px] ">
                    <div className="form-block-7 w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        method="get"
                        className="form-10"
                      >
                        <div className="relative">
                          <label for="email-3" className="field-label-7">
                            Email
                          </label>
                          <input
                            type="email"
                            className="login-input w-input rounded-md mb-2 text-black"
                            name="email"
                            onChange={handleFormSubmit}
                            value={email}
                            placeholder="Example-abc@gmail.com"
                            id="email-3"
                            required=""
                          />
                          <div className="text-red-700 a text-[12px] ">
                            {formErrors?.email}
                          </div>
                        </div>

                        <label for="email-2" className="field-label-6">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="login-input  w-input rounded-md text-black"
                          placeholder="Password"
                          required=""
                          onChange={handleFormSubmit}
                          value={password}
                        />
                        <div className="text-red-700 a text-[12px] ">
                          {formErrors?.password}
                        </div>
                      </form>
                    </div>
                  </div>
                  <button
                    className="button-211150 w-button rounded-[25px] "
                    onClick={() => handleSubmit()}
                  >
                    Log In
                  </button>
                  <div
                    className="pass text font-semibold flex justify-center cursor-pointer"
                    onClick={() => {
                      navigate("/forgotpassword/forgotemail");
                    }}
                  >
                    Forgot Password
                  </div>
                  <div class="div-block-31005  relative bottom-3">
                    <Link to={"/signup"} class="link-133 font-sans">
                      <strong class="bold-text-250">
                        Not have an account yet
                      </strong>{" "}
                      <strong class="bold-text-250">?</strong>{" "}
                      <Link to={"/signup"}>
                        <strong class="bold-text-250">Sign Up</strong>
                      </Link>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogInForm;
