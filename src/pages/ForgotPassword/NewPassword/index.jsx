import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../component/Loader";
import Footer from "../../../Footer";
import Header from "../../../Header";
import { liveurl } from "../../../hostUrl";

const NewPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const [error, setError] = useState({
    confirm: "",
    newPassword: "",
  }); // state variable for error message

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const [password, setPassword] = useState({ new: "", confirm: "" });
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility1 = () =>
    setPasswordVisible1(!passwordVisible1);
  const { email } = useParams();

  const handleToast = () => {
    toast.success("Password saved successfully!", {
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

  // function to handle form submission
  const handleSubmit = () => {
    if (!(password.new && password.confirm)) {
      if (!password.confirm) {
        setError({ ...error, confirm: "Please enter confirm password." }); // set error message if fields are empty
      }
      if (!password?.new) {
        setError({ ...error, newPassword: "Please enter new password." }); // set error message if fields are empty
      }
    } else if (password.new !== password.confirm) {
      setError({ confirm: "Passwords do not match.", ...error }); // set error message if passwords don't match
    } else {
      setError({
        confirm: "",
        newPassword: "",
      }); // clear error message
      setSubmitLoading(true);

      const body = {
        newPassword: password.new,
      };
      axios
        .post(
          `${liveurl}/api/passenger/forgotPassword?type=forgotPass&${email}`,
          body
        )
        .then((res) => {
          handleToast();
          setSubmitLoading(false);
          if (res?.data?.message) {
            navigate("/login");
          } else {
          }
        });
    }
  };

  return (
    <div>
      <div className="mb-5">
        <Header />
        <ToastContainer />
      </div>
      <div className="  flex justify-center py-2">
        <div className="border border-blue-500 flex flex-col gap-[50px] text-white bg-[#100C08] px-10 py-5">
          <p className="borde text-center text-3xl font-semibold font-[Cinzel,sans-serif] px-2 py-4 mt-10">
            {" "}
            New Password
          </p>
          <div className="borderr border-[#100C08] flex flex-col p-2 items-cente gap-5 rounded-sm bg-[#100C08]">
            <p className="borderr text-[15px] font-semibold font-[Cinzel,sans-serif] px-2 py-2 ">
              Enter New Password{" "}
            </p>
            <div className="borderr flex gap-2">
              <input
                type={passwordVisible ? "text" : "password"}
                className="border  border-white bg-transparent  w-[100%] text-[18px] rounded-[15px] px-5 py-2 focus:outline-none focus:border"
                placeholder="Enter Your Password"
                onChange={(e) => {
                  console.log("e", e.target.value);
                  if (e.target.value) {
                    setError({
                      ...error,
                      newPassword: "",
                    });
                  }
                  setPassword({ ...password, new: e.target.value });
                }}
              />
              <button onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <AiOutlineEye className="text-[20px]" />
                ) : (
                  <BsEyeSlash className="text-[20px]" />
                )}
              </button>
            </div>
            <div className="border border-[#100C08]  flex flex-col p-2 items-cente gap-5 rounded-sm bg-[#100C08]">
              {error?.newPassword !== "" && (
                <p className=" text-red-500 font-medium">
                  {error?.newPassword}
                </p>
              )}
            </div>
            <p className="borderr text-[15px] font-semibold font-[Cinzel,sans-serif] px-2 py-2 ">
              Confirm New Password
            </p>
            <div className="borderr flex gap-2 ">
              <input
                type={passwordVisible1 ? "text" : "password"}
                className="border bg-transparent border-white  w-[100%] text-[18px] rounded-[15px] px-5 py-2 focus:outline-none focus:border"
                placeholder="Enter Your Password"
                onChange={(e) => {
                  if (e.target.value) {
                    setError({
                      ...error,
                      confirm: "",
                    });
                  }
                  setPassword({ ...password, confirm: e.target.value });
                }}
              />{" "}
              <button onClick={togglePasswordVisibility1}>
                {passwordVisible1 ? (
                  <AiOutlineEye className="text-[20px]" />
                ) : (
                  <BsEyeSlash className="text-[20px]" />
                )}
              </button>
            </div>
            <div className="border border-[#100C08]  flex flex-col p-2 items-cente gap-5 rounded-sm bg-[#100C08]">
              {error?.confirm !== "" && (
                <p className=" text-red-500 font-medium">{error?.confirm}</p>
              )}
            </div>

            <div
              className="border text-center text-xl text-black font-semibold font-[Cinzel,sans-serif] px-2 py-2 ml-[2%] rounded-[15px] border-[#100C08] mt-3 cursor-pointer mb-5"
              onClick={handleSubmit}
            >
              {submitLoading ? (
                <div className="flex justify-center bg-black">
                  <Loader />
                </div>
              ) : (
                <div className=" bg-[#bd9300] font-semibold font-[Cinzel,sans-serif] px-2 py-2 w-[250px]  rounded-[25px]">
                  Submit
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

export default NewPassword;
