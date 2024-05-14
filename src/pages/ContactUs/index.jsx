import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import car from "../../images/BMW-7-Series_1.png";
import { liveurl } from "../../hostUrl";
import Loader from "../../component/Loader";

const ContacUS = () => {
  const [{ name, email, phone, message, subject }, setContact] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setContact((curr) => ({ ...curr, [name]: value }));
  };
  const handleToast = () => {
    toast.success(" Submitted successfully!", {
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

    const regexphone = /^[0-9]+$/;

    if (!elem?.name) {
      errors.name = "Please enter your name";
    }
    if (!elem.email) {
      errors.email = "Please enter your email";
    } else if (!regexEmail.test(elem.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!elem.phone) {
      errors.phone = "Please enter your phone number";
    } else if (!regexphone.test(elem.phone)) {
      errors.phone = "This is not a valid phone Number format!";
    } else if (elem.phone.length !== 10) {
      errors.phone = "Length must be at least 10 characters";
    }
    if (!elem?.message) {
      errors.message = "Please enter your message";
    }
    if (!elem?.subject) {
      errors.subject = "Please enter your subject";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation({
      name,
      email,
      phone,
      message,
      subject,
    });
    setFormErrors(errors);
    if (
      !errors.name &&
      !errors.email &&
      !errors.phone &&
      !errors.message &&
      !errors.subject
    ) {
      axios
        .post(`${liveurl}/api/passenger/contactUs`, {
          name: name,
          email: email,
          phone: phone,
          message: message,
          subject: subject,
        })
        .then((res) => {
          if (res?.data?.success) {
            handleToast();
          }
          setContact({
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          });
        })
        .catch((e) => {});
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
          <ToastContainer />
          <div className="bredcrumbs-div wf-section   "></div>
          <div className="breadcrumb black wf-section   w-full">
            <h1 className="heading-7226">
              <strong className="bold-text-283">Contact</strong>
            </h1>
          </div>
          <div className="box-section wf-section ">
            <div className="container-2 w-container ">
              <div className="div-block-297 ">
                <AnimatePresence>
                  <motion.div
                    data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae2282e"
                    className="div-block-298"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="div-block-300">
                      <img
                        src="https://uploads-ssl.webflow.com/612cb1e09aa83c7f2951ef44/61485a11f0a64e2bac0ddf4f_Call-gold.png"
                        loading="lazy"
                        alt=""
                        className="image-20"
                      />
                    </div>
                    <div className="div-block-299">
                      <h1 className="heading-5 sh4 contact">Phone</h1>
                      <p className="paragraph_1 p5 no_margin">
                        <a href="tel:+911300339525" className="contact_link">
                          +91 1300 339 525
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae22837"
                    className="div-block-298"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="div-block-300">
                      <img
                        src="https://uploads-ssl.webflow.com/612cb1e09aa83c7f2951ef44/61485a11b8a37e3f6c2ad72e_Message.png"
                        loading="lazy"
                        alt=""
                        className="image-20"
                      />
                    </div>
                    <div className="div-block-299">
                      <h1 className="heading-5 sh4 contact">Email</h1>
                      <p className="paragraph_1 p5 no_margin">
                        <a
                          href="mailto:support@blackgrandeurchauffeur.com?subject=Inquiry"
                          className="contact_link break-all"
                        >
                          support@blackgrandeurchauffeur.com
                          {/* <br /> */}
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae22840"
                    className="div-block-298"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.0 }}
                  >
                    <div className="div-block-300">
                      <img
                        src="https://uploads-ssl.webflow.com/612cb1e09aa83c7f2951ef44/61485a1127bf7a3d87b6ec8b_Location-gold.png"
                        loading="lazy"
                        alt=""
                        className="image-20"
                      />
                    </div>
                    <div className="div-block-299">
                      <h1 className="heading-5 sh4 contact">Address</h1>
                      <p className="paragraph_1 p5 no_margin">
                        Brisbane, Goldcoast andSunshine Coast, Australia
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="map-section wf-section">
            <div className="container-500 w-container">
              <div className="div-block-122">
                <div className="div-block-64 hide">
                  <div>
                    <div
                      data-delay="4000"
                      data-animation="slide"
                      className="slider-4 w-slider"
                      data-autoplay="false"
                      data-easing="ease"
                      data-hide-arrows="false"
                      data-disable-swipe="false"
                      data-autoplay-limit="0"
                      data-nav-spacing="3"
                      data-duration="500"
                      data-infinite="true"
                    >
                      <div className="mask-3 w-slider-mask">
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                        <div className="w-slide">
                          <div className="div-block-65">
                            <img
                              src="https://uploads-ssl.webflow.com/60013991c502860d753da23a/60052ec09ce2b71aa808df7d_brand-2.png"
                              loading="lazy"
                              alt=""
                              className="image-11"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="left-arrow-4 w-slider-arrow-left">
                        <div className="w-icon-slider-left"></div>
                      </div>
                      <div className="right-arrow w-slider-arrow-right">
                        <div className="w-icon-slider-right"></div>
                      </div>
                      <div className="slide-nav-2 w-slider-nav w-round"></div>
                    </div>
                  </div>
                </div>
                <div className="div-block-66">
                  <div className="div-block-67">
                    <div className="div-block-68">
                      <div>
                        <img
                          src="https://uploads-ssl.webflow.com/6399ac6867b098a644376d35/6399bf441caf6373dd8470be_featured-one-img-5.jpg"
                          loading="lazy"
                          width="276"
                          alt=""
                        />
                      </div>
                      <div className="div-block-301">
                        <img
                          src="https://uploads-ssl.webflow.com/6399ac6867b098a644376d35/6399bf31c27c3d1d2888a8e5_featured-one-img-2.jpg"
                          loading="lazy"
                          width="276"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="html-embed-2 w-embed w-iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.7723413765034!2d153.1133905156521!3d-26.68776259028877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9375e4e16b61ab%3A0x73859e41470301da!2sBrisbane%20Rd%2C%20Mooloolaba%20QLD%204557%2C%20Australia!5e0!3m2!1sen!2sin!4v1671077386810!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="map   "
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="form-section wf-section ">
            <div className="container-500 w-container">
              <div className="div-block-82    ml-0   grid xxs:grid-cols-1  md:mx-2  md:grid-cols-2 w-full">
                <AnimatePresence>
                  <motion.div
                    data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae22886"
                    className="div-block-33 md:w-[38rem] lg:w-[40rem] "
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={car}
                      alt="imvage"
                      className="md:h-[25rem] md:w-[25rem]  lg:h-[30rem] lg:w-[32rem] xl:w-[38rem]"
                      loading="lazy"
                    />
                    <div
                      data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae22887"
                      className="faq hide"
                    >
                      <div className="div-block-72">
                        <div
                          data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae22889"
                          className="dropdown-faq d_f"
                        >
                          <div className="div-block-73">
                            <h4 className="heading-11">
                              what is the process for construction ?
                            </h4>
                            <div className="div-block-75">
                              <div className="div-block-76"></div>
                              <div className="div-block-77"></div>
                            </div>
                          </div>
                          <div style={{ height: 0 }} className="answer-10-2">
                            <div className="div-block-74">
                              <p className="paragraph-7">
                                There are many variations of passages of
                                available but the majority have suffered
                                alteration in that some form by injected
                                randomised words which don’t look even as
                                slightly believable now.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae22894"
                          className="dropdown-faq"
                        >
                          <div className="div-block-73">
                            <h4 className="heading-11">
                              what is the process for construction ?
                            </h4>
                            <div className="div-block-75">
                              <div className="div-block-76"></div>
                              <div className="div-block-77"></div>
                            </div>
                          </div>
                          <div style={{ height: 0 }} className="answer-10-2">
                            <div className="div-block-74">
                              <p className="paragraph-7">
                                There are many variations of passages of
                                available but the majority have suffered
                                alteration in that some form by injected
                                randomised words which don’t look even as
                                slightly believable now.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae2289f"
                          className="dropdown-faq"
                        >
                          <div className="div-block-73">
                            <h4 className="heading-11">
                              what is the process for construction ?
                            </h4>
                            <div className="div-block-75">
                              <div className="div-block-76"></div>
                              <div className="div-block-77"></div>
                            </div>
                          </div>
                          <div style={{ height: 0 }} className="answer-10-2">
                            <div className="div-block-74">
                              <p className="paragraph-7">
                                There are many variations of passages of
                                available but the majority have suffered
                                alteration in that some form by injected
                                randomised words which don’t look even as
                                slightly believable now.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae228aa"
                          className="dropdown-faq"
                        >
                          <div className="div-block-73">
                            <h4 className="heading-11">
                              what is the process for construction ?
                            </h4>
                            <div className="div-block-75">
                              <div className="div-block-76"></div>
                              <div className="div-block-77"></div>
                            </div>
                          </div>
                          <div style={{ height: 0 }} className="answer-10-2">
                            <div className="div-block-74">
                              <p className="paragraph-7">
                                There are many variations of passages of
                                available but the majority have suffered
                                alteration in that some form by injected
                                randomised words which don’t look even as
                                slightly believable now.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src="https://uploads-ssl.webflow.com/6399ac6867b098a644376d35/6399b652b96e0e96d499f6c3_60d58c2fde3f53c23112ad31_carros-lamborghini-removebg-preview.png"
                        loading="lazy"
                        alt=""
                        className="image-36 "
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="div-block-78 ">
                  <AnimatePresence>
                    <motion.div
                      data-w-id="0b4b047d-aa5e-5f61-d16e-0d5f7ae228b7"
                      className="div-block-79  xxxs:w-[100%]   lg:mx-0   md:w-[330px]  lg:w-[420px]"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-block-11">GET IN TOUCH</div>
                      <div className="w-form  w-auto">
                        <form
                          name="email-form"
                          id="email-form"
                          onSubmit={handleSubmit}
                        >
                          <div className="div-block-80">
                            <input
                              type="text"
                              className="text-field-2 w-input"
                              name="name"
                              value={name}
                              onChange={handelChange}
                              data-name="Your Name"
                              placeholder="Your Name"
                              id="Name"
                              required=""
                            />
                            <div className="text-red-700 text-[12px] absolute bottom-0 left-8 ">
                              {formErrors?.name}
                            </div>
                          </div>
                          <div className="div-block-80">
                            <input
                              className="text-field-2 w-input"
                              type="email"
                              onChange={handelChange}
                              name="email"
                              value={email}
                              data-name="Email Address"
                              placeholder="Email Address "
                              id="Email"
                              required=""
                            />
                            <div className="text-red-700 text-[12px] absolute bottom-0 left-8 ">
                              {formErrors?.email}
                            </div>
                          </div>
                          <div className="div-block-80">
                            <input
                              type="number"
                              className="text-field-2 w-input"
                              maxLength="10"
                              name="phone"
                              onChange={handelChange}
                              value={phone}
                              data-name="Phone Number"
                              placeholder="Phone Number"
                              id="Phone"
                            />
                            <div className="text-red-700 text-[12px] absolute bottom-0 left-8 ">
                              {formErrors?.phone}
                            </div>
                          </div>
                          <div className="div-block-80">
                            <input
                              type="tel"
                              className="text-field-2 w-input"
                              maxLength="256"
                              name="subject"
                              onChange={handelChange}
                              value={subject}
                              data-name="Subject"
                              placeholder="Subject"
                              id="Subject"
                            />
                            <div className="text-red-700 text-[12px] absolute bottom-0 left-8 ">
                              {formErrors?.subject}
                            </div>
                          </div>
                          <div className="div-block-80 relative">
                            <textarea
                              name="message"
                              value={message}
                              maxLength="5000"
                              onChange={handelChange}
                              id="Message"
                              placeholder="Message"
                              data-name="field"
                              className="text-field-2 form-message-box w-input"
                            ></textarea>
                            <div className="text-red-700 text-[12px] absolute bottom-2 left-7 ">
                              {formErrors?.message}
                            </div>
                          </div>
                          <div className="div-block-80 form-btn">
                            <button
                              type="submit"
                              className="submit-button w-button"
                            >
                              SUBMIT
                            </button>
                          </div>
                        </form>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContacUS;
