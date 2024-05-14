import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Popupconfirm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  justify-center">
      <div className="bg-black relative border border-[#BD9300] pt-10 text-white text-center w-[96%] xs:w-96 h-80  font-medium">
        <div className="">Please Log In to your account</div>
        <Link to="/login">
          <div className="bg-[#BD9300] cursor-pointer mt-4 w-24 py-2 mx-auto rounded font-semibold">
            Log in
          </div>
        </Link>
        <div className="mt-4">
          Don’t have an account?{" "}
          <Link to="/signup">
            <span className=" cursor-pointer text-[#BD9300] font-semibold">
              Register Now
            </span>
          </Link>
        </div>
        <div className="mt-8">
          <div className="mx-auto w-[16rem] border-b sm:w-[16rem]" />
          <div className="mx-auto -mt-3 w-8 bg-black">or</div>
        </div>{" "}
        <div className=" mt-5">Continue as guest to book your reservation</div>
        <div
          className="mt-4 cursor-pointer text-[#BD9300] font-semibold"
          onClick={() => navigate("/continue-guest")}
        >
          Continue as guest
        </div>
      </div>
    </div>
  );
};

export default Popupconfirm;
