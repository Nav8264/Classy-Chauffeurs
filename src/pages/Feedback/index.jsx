import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { liveurl } from "../../hostUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginlogo from "../../images/logo_1.png";
import { meUser } from "../../store";
import { motion } from "framer-motion";
import Rating from "./RatingComponent";
import currentRating from "./RatingComponent";
import { rateStar } from "../../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../component/Loader";

const Feedback = () => {
  const [{ feedback }, setFeedback] = useState({});
  const [userLoged] = useAtom(meUser);
  const [rateCount] = useAtom(rateStar);

  const [, setRateStar] = useAtom(rateStar);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  const user = {
    customerName: userLoged?.data?.name,
    customerEmail: userLoged?.data?.email,
    customerId: userLoged?.data?._id,
    feedback: feedback,
    rateCount: rateCount || 1,
  };
  const handleToast = () => {
    toast.success("Feedback submitted successfully!", {
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

  const handleDataSubmit = (e) => {
    const { name, value } = e.target;
    setFeedback((crr) => ({ ...crr, [name]: value }));
  };
  const handleSubmit = () => {
    if (feedback) {
      axios
        .post(`${liveurl}/api/passenger/createFeedback`, user, {
          headers: { Authorization: localStorage.getItem("accessToken") },
        })
        .then((res) => {
          if (res?.data?.success) {
            handleToast();
          }
          setFeedback({ feedback: "" });
          setRateStar("");
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
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="">
            <ToastContainer />
            <div className="bredcrumbs-div wf-section"></div>
            <div className="breadcrumb wf-section">
              <h1 className="heading-7225">
                <strong className="bold-text-252">Feedback</strong>
              </h1>
            </div>

            <div className="h-[44rem] border  mb-10 w-[100%] md:w-[35rem] rounded-md mt-10 mx-auto header-bg-img">
              <div class="link-block-63 w-inline-block">
                <div
                  class="logo-2"
                  className="w-[250px] sm:w-[300px] lg:w-[400px] p-8 mx-auto "
                >
                  <img
                    src={loginlogo}
                    loading="lazy"
                    alt=""
                    className="image-32442 "
                  />
                </div>
              </div>
              <div className="flex  justify-around">
                <div className=" mx-auto">
                  <div className=" mt-10 p-2 ">
                    <div className=" mb-6 text-3xl text-gray-100 text-center">
                      {" "}
                      Feedback
                    </div>
                    <div className=" ">
                      <Rating rateStar={rateStar} />
                    </div>
                    <textarea
                      onChange={handleDataSubmit}
                      cols={45}
                      rows={6}
                      name="feedback"
                      value={feedback}
                      placeholder="Write your feedback"
                      className="mt-4 rounded border-none w-[100%] p-2 bg-gray-100 focus:outline-none"
                    ></textarea>
                    <button
                      className=" bg-yellow-600 mt-4 flex justify-end border hover:bg-amber-500 border-orange-400 p-3 rounded-md  px-12  "
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Feedback;
