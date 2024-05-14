import React, { useState } from "react";
import logo from "../../../src/images/Final-p-1080.png";

function FlightInformation() {
  const [formData, setFormData] = useState({
    airlineName: "",
    flightNumber: "",
    airlineNameDropOff: "",
    flightNumberDropOff: "",
    noPickupFlightDetails: false,
    noDropOffFlightDetails: false,
  });

  const [formErrors, setFormErrors] = useState({
    airlineName: "",
    flightNumber: "",
    airlineNameDropOff: "",
    flightNumberDropOff: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.noPickupFlightDetails) {
      const errors = {};
      if (!formData.airlineNameDropOff) {
        errors.airlineNameDropOff = "Airline Name is required";
      }
      if (!formData.flightNumberDropOff) {
        errors.flightNumberDropOff = "Flight # is required";
      }

      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
      }
    }
    if (formData.noDropOffFlightDetails) {
      const errors = {};
      if (!formData.airlineName) {
        errors.airlineName = "Airline Name is required";
      }
      if (!formData.flightNumber) {
        errors.flightNumber = "Flight # is required";
      }
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
      }
    }
    if (formData.noPickupFlightDetails && formData.noDropOffFlightDetails) {
      const errors = {};
      setFormData({
        airlineName: "",
        flightNumber: "",
        airlineNameDropOff: "",
        flightNumberDropOff: "",
      });
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
      }
    }
    if (!formData.noPickupFlightDetails && !formData.noDropOffFlightDetails) {
      setFormData({
        airlineName: "",
        flightNumber: "",
        airlineNameDropOff: "",
        flightNumberDropOff: "",
      });
      const errors = {};
      if (!formData.airlineName) {
        errors.airlineName = "Airline Name is required";
      }
      if (!formData.flightNumber) {
        errors.flightNumber = "Flight # is required";
      }
      if (!formData.airlineNameDropOff) {
        errors.airlineNameDropOff = "Airline Name is required";
      }
      if (!formData.flightNumberDropOff) {
        errors.flightNumberDropOff = "Flight # is required";
      }

      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
      }
    }
  };
  return (
    <div className="bordewrr bordewrr-black bg-black  shadow-lg py-6 rounded-lg h-full my-[5%]  xxs:mx-[5%] sm:mx-[10%] md:mx-[20%] lg:mx-[25%] xl:mx-[32%] ">
      <img
        src={logo}
        alt=""
        className="xxxs:px-6 md:px-20 py-6"
        loading="lazy"
      />
      <form onSubmit={handleSubmit}>
        <div className="mx-6 text-white">
          <div className="  my-4  text-white text-center py-3 p-2 text-2xl rounded font-semibold">
            Flight Information
          </div>
          <div className="p-4 ">
            <p>Pick-Up Flight Details (Recommended)</p>
            <div className=" grid xxxs:grid-cols-1 md:grid-cols-2 gap-4 mt-2 bordewrr w-[100%]">
              <div className="bordewrr ">
                <input
                  type="text"
                  className=" shadow-md p-2  rounded text-black  w-[100%] "
                  placeholder="Airline Name or Code"
                  name="airlineName"
                  value={formData.airlineName}
                  onChange={handleInputChange}
                  disabled={formData.noPickupFlightDetails}
                />
                <div className="">
                  {formErrors.airlineName && (
                    <div className="text-red-500 bordewrr bordewrr-blue-500 font-normal text-sm ">
                      {formErrors.airlineName}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="bordewrr  bordewrr-[#BD9300] text-black shadow-md p-2  rounded w-[100%] "
                  placeholder="Flight #"
                  name="flightNumber"
                  value={formData.flightNumber}
                  onChange={handleInputChange}
                  disabled={formData.noPickupFlightDetails}
                />
                {formErrors.flightNumber && (
                  <span className="text-red-500 font-normal text-sm  bordewrr bordewrr-blue-600">
                    {formErrors.flightNumber}
                  </span>
                )}
              </div>
            </div>
            <div className="flex my-3 gap-2">
              <input
                type="checkbox"
                name="noPickupFlightDetails"
                checked={formData.noPickupFlightDetails}
                onChange={handleInputChange}
                className=" accent-amber-500 text-black"
              />{" "}
              <p>I do not have my flight Details yet</p>
            </div>
          </div>
          <div className="p-4 bordewrr bordewrr-red-500 ">
            <p className=" ">Drop-Off Flight Details (Recommended)</p>
            <div className=" grid xxxs:grid-cols-1 md:grid-cols-2 gap-4 mt-2 bordewrr w-[100%]">
              <div className="bordewrr ">
                <input
                  type="text"
                  className=" shadow-md p-2  rounded text-black w-[100%] "
                  placeholder="Airline Name or Code"
                  name="airlineNameDropOff"
                  value={formData.airlineNameDropOff}
                  onChange={handleInputChange}
                  disabled={formData.noDropOffFlightDetails}
                />
                <div className="">
                  {formErrors.airlineNameDropOff && (
                    <div className="text-red-500 bordewrr bordewrr-blue-500 font-normal text-sm ">
                      {formErrors.airlineNameDropOff}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="bordewrr  bordewrr-[#BD9300] text-black shadow-md p-2  rounded w-[100%] "
                  placeholder="Flight #"
                  name="flightNumberDropOff"
                  value={formData.flightNumberDropOff}
                  onChange={handleInputChange}
                  disabled={formData.noDropOffFlightDetails}
                />
                {formErrors.flightNumberDropOff && (
                  <span className="text-red-500 font-normal text-sm  bordewrr bordewrr-blue-600">
                    {formErrors.flightNumberDropOff}
                  </span>
                )}
              </div>
            </div>
            <div className="flex my-3 gap-2">
              <input
                type="checkbox"
                name="noDropOffFlightDetails"
                checked={formData.noDropOffFlightDetails}
                onChange={handleInputChange}
                className=" accent-amber-500 text-black"
              />
              <p>I do not have my flight Details yet</p>
            </div>
          </div>
        </div>
        <div className="  mx-8 flex justify-center rounded-md text-[25px] text-black bg-[#BD9300]">
          <div className=" px-2 py-4" onClick={handleSubmit} type="submit">
            Continue
          </div>
        </div>
      </form>
    </div>
  );
}

export default FlightInformation;
