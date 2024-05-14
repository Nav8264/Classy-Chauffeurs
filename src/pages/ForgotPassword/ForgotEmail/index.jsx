import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../component/Loader";
import Footer from "../../../Footer";
import Header from "../../../Header";
import { liveurl } from "../../../hostUrl";
const ForgotEmail = () => {
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();
  const handleToast = () => {
    toast.error("User doesn't exist!", {
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
  const validation = (elem) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!elem.email) {
      errors.email = "Please enter your email";
    } else if (!regexEmail.test(elem.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  return (
    <div>
      <div className="mb-5">
        <Header />
        <ToastContainer />
      </div>
      <div className="  flex justify-center py-2">
        <div className="border border-blue-500 flex flex-col gap-[50px] bg-[#100C08] text-white px-10 py-5 ">
          <p className="bordr text-center text-3xl font-semibold font-[Cinzel,sans-serif] px-2 py-4 mt-10">
            {" "}
            Forgot Password
          </p>
          <div className="borderr border-[#100C08] flex flex-col p-2 items-center gap-2 rounded-sm">
            <p className="borderr text-center text-xl font-semibold font-[Cinzel,sans-serif] px-2 py-4 ">
              Enter Email Address
            </p>
            <div className="borderr ">
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border bg-transparent border-white  w-[100%] text-[18px] rounded-[25px] px-5 py-2 focus:outline-none  focus:border"
                placeholder="Enter Your Email"
              />

              <div className="text-red-700 ml-5 mt-2 text-[12px] ">
                {formErrors?.email}
              </div>
            </div>
            <p className="borde text-center text-[12px] font-semibold font-[sans-serif] px-2 py-1 mt-4  cursor-pointer ">
              Back to{" "}
              <span
                className="hover:text-red-500"
                onClick={() => navigate("/login")}
              >
                Log In
              </span>{" "}
            </p>
            <div
              className="border text-center text-xl text-black bg-[#100C08]   border-[#100C08] mt-3 cursor-pointe  "
              onClick={() => {
                const errors = validation({
                  email,
                });
                setFormErrors(errors);

                const body = {
                  email: email,
                };
                if (email && !errors.email) {
                  setSubmitLoading(true);
                  axios
                    .post(
                      `${liveurl}/api/passenger/existence?status=forgotPass`,
                      body
                    )
                    .then((res) => {
                      if (res?.data?.userExist === false) {
                        console.log("res", res);
                        handleToast();
                        setSubmitLoading(false);
                      } else {
                        navigate(`/forgotpassword/forgotemail/${email}`);
                      }
                    });
                }
              }}
            >
              {submitLoading ? (
                <div className="flex justify-center bg-black">
                  <Loader />
                </div>
              ) : (
                <div className=" bg-[#bd9300] font-semibold font-[Cinzel,sans-serif] px-2 cursor-pointer py-2 w-[150px]  rounded-[25px]">
                  Send
                </div>
              )}
            </div>
            <div className="flex  justify-center items-center w-[80%]">
              <hr className="border border-[#bd9300] w-[50%]" />{" "}
              <p className="text-center text-[15px] font-semibold font-[sans-serif] px-2 py-2 ">
                Or
              </p>
              <hr className="border border-[#bd9300] w-[50%]" />
            </div>

            <p className=" text-center text-[12px] font-semibold font-[sans-serif] px-2 py-">
              Don't have an account?
            </p>
            <div
              className="text-center text-xl font-semibold font-[Cinzel,sans-serif] px-2 pb-4  w-[50%] cursor-pointer hover:text-[#bd9400]"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp
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

export default ForgotEmail;
