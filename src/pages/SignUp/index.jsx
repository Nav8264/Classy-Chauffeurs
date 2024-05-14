// const SignUp = () => {
//   const navigate = useNavigate();

//   const SignUp = { name, email, phone, password, countryCode };
//   const [formErrors, setFormErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [countryCodes, setCountryCodes] = useState([]);

//   const handleFormSubmit = (e) => {
//     const { value, name } = e.target;
//     setSignUp((curr) => ({ ...curr, [name]: value }));
//   };
//   const validation = (elem) => {
//     const errors = {};
//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     const regexName = /^[a-zA-Z'-\s]+$/;

//     const regexphone = /^[0-9]+$/;

//     if (!elem?.name) {
//       errors.name = "Please enter your name";
//     } else if (!regexName.test(elem.name)) {
//       errors.name = "Please use letters only";
//     } else if (!elem.countryCode) {
//       errors.countryCode = " choose a country code";
//     }

//     if (!elem.email) {
//       errors.email = "Please enter your email";
//     } else if (!regexEmail.test(elem.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!elem.phone) {
//       errors.phone = "Please enter your phone";
//     } else if (!regexphone.test(elem.phone)) {
//       errors.phone = "This is not a valid Phone number format!";
//     } else if (elem.phone.length !== 10) {
//       errors.phone = "Length must be at least 10 characters";
//     }
//     if (!elem.password) {
//       errors.password = "Please enter your password";
//     } else if (elem.password.length < 6) {
//       errors.password = "Length must be at least 6 characters";
//     }
//     return errors;
//   };
//   const handleToast = (err) => {
//     toast.error("User already exists, Please try with Different Email!", {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   const handleSubmit = () => {
//     const errors = validation({
//       name,
//       email,
//       phone,
//       password,
//       countryCode,
//     });
//     setFormErrors(errors);
//     localStorage.setItem("SignUp", JSON.stringify(SignUp));

//     if (!errors.name && !errors.countryCode && !errors.email && !errors.phone) {
//       axios
//         .post(`${liveurl}/api/passenger/existence?signUpRequest=true`, {
//           // name: name,
//           email: email,
//           // countryCode: countryCode ? countryCode : "+91",
//           // phone: phone,
//           // password: password,
//         })
//         .then((res) => {
//           if (res?.data?.userExist === false) {
//             navigate("/otp");
//           } else {
//             handleToast();
//           }
//           // setSignUp({
//           //   name: "",
//           //   email: "",
//           //   phone: "",
//           //   password: "",
//           //   countryCode: "",
//           // });
//           // navigate("/login");
//         })
//         .catch((error) => {
//           if (
//             error?.response?.data?.error?.message ===
//             "User already exists, Please Login!"
//           ) {
//             handleToast();
//           }
//         });
//     }
//   };
//   return (
//     <div>
//       {loading ? (
//         <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
//           <div className="flex justify-center bg-white h-screen">
//             <Loader />
//           </div>
//         </div>
//       ) : (
//         <div>
//           <Header />
//           <ToastContainer />
//           <div className="breadcrumb wf-section ">
//             <AnimatePresence>
//               <motion.div
//                 data-w-id="dff8a095-db4c-bee0-0d61-9c86138e05e4"
//                 className="sign-up-form h-[700px] "
//                 initial={{ y: 70, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <div class="link-block-62 w-inline-block">
//                   <div class="logo-2">
//                     <img src={logo} loading="lazy" alt="" class="image-32442" />
//                   </div>
//                 </div>
//                 <div>
//                   <h1 class="heading-272">Sign up</h1>
//                 </div>
//                 <div class="form-11">
//                   <div class="form-block-7 w-form">
//                     <form
//                       id="email-form"
//                       name="email-form"
//                       data-name="Email Form"
//                       method="get"
//                       class="form-10"
//                     >
//                       <div>
//                         <div className="relative">
//                           <label for="name" className="field-label-3">
//                             Name
//                           </label>
//                           <div className="mt-1 relative">
//                             <input
//                               type="text"
//                               className="login-input w-input rounded-md "
//                               maxlength="256"
//                               name="name"
//                               onChange={handleFormSubmit}
//                               value={name}
//                               placeholder=""
//                               id="name"
//                             />
//                           </div>
//                           <div className="text-red-700 absolute text-[12px] ">
//                             {formErrors?.name}
//                           </div>
//                         </div>

//                         <div className="forminput">
//                           <label for="email" class="field-label-5 ">
//                             Email Address
//                           </label>
//                           <div className="mt-1 relative">
//                             <input
//                               type="email"
//                               class="login-input w-input rounded-md"
//                               maxlength="256"
//                               onChange={handleFormSubmit}
//                               name="email"
//                               value={email}
//                               data-name="Email"
//                               placeholder=""
//                               id="email"
//                               required=""
//                               v
//                             />
//                           </div>
//                           <div className="text-red-700 absolute text-[12px] ">
//                             {formErrors?.email}
//                           </div>
//                         </div>
//                         <div className="forminput">
//                           <label for="email" class="field-label-5 ">
//                             Phone Number
//                           </label>
//                           <div className="mt-1 relative flex">
//                             <select
//                               name="countryCode"
//                               className="h-[10] rounded-l-md"
//                               value={countryCode || "+91"}
//                               onChange={handleFormSubmit}
//                             >
//                               {/* {countryCodes?.map((val) => (
//                                 <option
//                                   className="h-[25px] overflow-y-scroll"
//                                   key={val?._id}
//                                 >
//                                   {val?.dialCode}{" "}
//                                 </option>
//                               ))} */}

//                               {/* {countryCodes
//                                 ?.sort((a, b) =>
//                                   a.dialCode.localeCompare(b.dialCode)
//                                 )
//                                 .map((val) => (
//                                   <option
//                                     className="h-[25px] overflow-y-scroll"
//                                     key={val._id}
//                                   >
//                                     {val.dialCode}{" "}
//                                   </option>
//                                 ))} */}
//                               {[
//                                 ...new Set(
//                                   countryCodes.map((val) => val?.dialCode)
//                                 ),
//                               ]
//                                 .sort()
//                                 .map((dialCode) => (
//                                   <option
//                                     className="h-[25px] overflow-y-scroll "
//                                     key={dialCode}
//                                     defaultValue={"+91"}
//                                     selected={dialCode == "+91"}
//                                   >
//                                     {dialCode}
//                                   </option>
//                                 ))}
//                             </select>
//                             <input
//                               type="number"
//                               maxLength={10}
//                               class="login-input w-input rounded-r-md"
//                               onChange={handleFormSubmit}
//                               name="phone"
//                               value={phone}
//                               data-name="Email"
//                               placeholder=""
//                               id="phone"
//                               required=""
//                               v
//                             />
//                           </div>
//                           <div className="flex  ">
//                             <div className="text-red-700 text-[12px]   ">
//                               {formErrors?.countryCode}
//                             </div>
//                             <div className="text-red-700 text-[12px] pl-2">
//                               {formErrors?.phone}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="forminput">
//                           <label for="email-2" class="field-label-4">
//                             Password
//                           </label>

//                           <div className="mt-1">
//                             <input
//                               class="login-input w-input rounded-md"
//                               maxlength="256"
//                               onChange={handleFormSubmit}
//                               name="password"
//                               type="password"
//                               value={password}
//                               data-name="Email 2"
//                               placeholder=""
//                               id="email-2"
//                               required=""
//                             />
//                           </div>
//                           <div className="text-red-700 text-[12px] pl-2">
//                             {formErrors?.password}
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                     <button
//                       class="button-211149 w-button  rounded-md"
//                       onClick={handleSubmit}
//                     >
//                       Sign up
//                     </button>
//                     <div class="div-block-31005">
//                       <Link to={"/login"} class="link-133">
//                         <strong class="bold-text-250">
//                           Already have an account
//                         </strong>{" "}
//                         <strong class="bold-text-250">?</strong>{" "}
//                         <strong class="bold-text-250">Login.</strong>
//                       </Link>
//                     </div>
//                     <div className="mt-4 w-[16rem] mx-auto sm:w-[16rem]">
//                       <div className="mx-auto w-[16rem] border-b sm:w-[16rem]" />
//                       <div className="mx-auto -mt-3 w-8 bg-[#252525] text-white text-center">
//                         or
//                       </div>
//                     </div>{" "}
//                     <div className="mt-4 mb-4 w-full cursor-pointer text-center text-[#BD9300] font-semibold">
//                       {sessionStorage.getItem("guestData") !== null ? (
//                         <div> You are already a guest</div>
//                       ) : (
//                         <div onClick={() => navigate("/continue-guest")}>
//                           Continue as guest
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUp;
/* eslint-disable no-restricted-globals */

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

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    countryCode: "+91",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);

  useEffect(() => {
    axios.get(`${liveurl}/api/countryCode`).then((res) => {
      setCountryCodes(res?.data?.result);
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  const handleFormSubmit = (event) => {
    const { name, value } = event.target;

    // Update the signUp state with the new input value
    setSignUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Perform validations based on the input name
    switch (name) {
      case "name":
        if (value.trim() === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            name: "Name is required",
          }));
        } else if (!/^[a-zA-Z'-\s]+$/.test(value)) {
          setFormErrors((prevState) => ({
            ...prevState,
            name: "Please use letters only",
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            name: "",
          }));
        }
        break;
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
      case "phone":
        if (value.trim() === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "Phone number is required",
          }));
        } else if (!/^[0-9]+$/.test(value)) {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "This is not a valid Phone number format!",
          }));
        } else if (value.length > 10) {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "Length must be between 9-10 characters",
          }));
        } else if (value.length < 9) {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "Length must be between 9-10 characters",
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "",
          }));
        }
        break;
      case "password":
        if (value.trim() === "") {
          setFormErrors((prevState) => ({
            ...prevState,
            password: "Password is required",
          }));
        } else if (value.length < 6) {
          setFormErrors((prevState) => ({
            ...prevState,
            password: "Length must be at least 6 characters",
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            password: "",
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

    if (!signUp.name) {
      errors.name = "Please enter your name";
    } else if (!regexName.test(signUp.name)) {
      errors.name = "Please use letters only";
    } else if (!signUp.countryCode) {
      errors.countryCode = "Please choose a country code";
    }

    if (!signUp.email) {
      errors.email = "Please enter your email";
    } else if (!regexEmail.test(signUp.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!signUp.phone) {
      errors.phone = "Please enter your phone";
    } else if (!regexphone.test(signUp.phone)) {
      errors.phone = "This is not a valid Phone number format!";
    } else if (signUp.phone.length > 10) {
      errors.phone = "Length must be between 9-10 characters";
    } else if (signUp.phone.length < 9) {
      errors.phone = "Length must be between 9-10 characters";
    }

    if (!signUp.password) {
      errors.password = "Please enter your password";
    } else if (signUp.password.length < 6) {
      errors.password = "Length must be at least 6 characters";
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
      window.localStorage.setItem("signUp", JSON.stringify(signUp));
      axios
        .post(`${liveurl}/api/passenger/existence?signUpRequest=true`, {
          email: signUp.email,
        })
        .then((res) => {
          if (res?.data?.userExist === false) {
            navigate(`/otp?email=${signUp?.email}`);
          } else {
            handleToast();
          }
        })
        .catch((error) => {
          if (
            error?.response?.data?.error?.message ===
            "User already exists, Please Login!"
          ) {
            handleToast();
          }
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
                className="sign-up-form h-[700px] "
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
                  <h1 class="heading-272">Sign up</h1>
                </div>
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
                      <div>
                        <div className="relative">
                          <label for="name" className="field-label-3">
                            Name
                          </label>
                          <div className="mt-1 relative">
                            <input
                              type="text"
                              className="login-input w-input rounded-md "
                              maxLength={256}
                              name="name"
                              onChange={handleFormSubmit}
                              value={signUp.name}
                              placeholder="Enter name"
                              id="name"
                            />
                          </div>
                          <div className="text-red-700 absolute text-[12px]">
                            {formErrors?.name}
                          </div>
                        </div>

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
                        <div className="forminput">
                          <label for="email" class="field-label-5">
                            Phone Number
                          </label>
                          <div className="mt-1 relative flex">
                            <select
                              name="countryCode"
                              className="h-[10] rounded-l-md"
                              value={signUp.countryCode || "+91"}
                              onChange={handleFormSubmit}
                            >
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
                                    selected={dialCode == "+91"}
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
                              value={signUp.phone}
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

                        <div className="forminput">
                          <label for="email-2" class="field-label-4">
                            Password
                          </label>

                          <div className="mt-1">
                            <input
                              class="login-input w-input rounded-md"
                              maxLength={256}
                              onChange={handleFormSubmit}
                              name="password"
                              type="password"
                              value={signUp.password}
                              data-name="Email 2"
                              placeholder="Password"
                              id="email-2"
                              required=""
                            />
                          </div>
                          <div className="text-red-700 text-[12px] pl-2">
                            {formErrors?.password}
                          </div>
                        </div>
                      </div>
                      <button class=" button-211150 rounded-md" type="submit">
                        Sign up
                      </button>
                      <div class="div-block-31005">
                        <Link to={"/login"} class="link-133">
                          <strong class="bold-text-250">
                            Already have an account
                          </strong>{" "}
                          <strong class="bold-text-250">?</strong>{" "}
                          <strong class="bold-text-250">Login.</strong>
                        </Link>
                      </div>
                      <div className="mt-4 w-[16rem] mx-auto sm:w-[16rem]">
                        <div className="mx-auto w-[16rem] border-b sm:w-[16rem]" />
                        <div className="mx-auto -mt-3 w-8 bg-[#252525] text-white text-center">
                          or
                        </div>
                      </div>{" "}
                      <div className="mt-4 mb-4 w-full cursor-pointer text-center text-[#BD9300] font-semibold">
                        {sessionStorage.getItem("guestData") !== null ? (
                          <div> You are already a guest</div>
                        ) : (
                          <Link to={"/continue-guest"}>
                            <div
                            //  onClick={() => navigate("/continue-guest")}
                            >
                              Continue as guest
                            </div>
                          </Link>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
