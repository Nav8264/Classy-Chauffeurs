/* eslint-disable no-undef */
import axios from "axios";
import { GiPencil } from "react-icons/gi";
import React, { useState } from "react";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Loader from "../../Loader";
import DatePicker from "react-datepicker";
import moment from "moment";
import { liveurl } from "../../../hostUrl";
import { ToastContainer, toast } from "react-toastify";

const BookingForm2 = ({
  register,
  setNotes,
  notes,
  submitLoading,
  setSeatsArray,
  seatsArray,
  passenger,
  setPassenger,
  lluggage,
  sluggage,
  getValues,
  setChild,
  errors,
  setSluggage,
  setLluggage,
  control,
  flightDetails,
  setFlightDetails,
  flightNumber,
  setFlightNumber,
  airportData,
  setAirportData,
  airport,
  setAirport,
  terminalData,
  setTerminalData,
  terminal,
  setTerminal,
  clearErrors,
  setValue,
  setFlightPlaceholder,
  flightPlaceholder,
}) => {
  const [flightDate, setFlightDate] = useState();
  const oneYearFromNow = new Date();
  oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 12);

  const oneDayFromNow = new Date();
  oneDayFromNow.setDate(oneDayFromNow.getDate() + 1);

  // const [airportData, setAirportData] = useState([]);
  // const [airport, setAirport] = useState();
  // const [terminal, setTerminal] = useState();
  // const [terminalData, setTerminalData] = useState();

  const getAirports = () => {
    axios
      .get(`${liveurl}/api/adminPanel/airport/getAllAirports`)
      .then((res) => {
        setAirportData(res?.data?.data);
      });
  };

  useEffect(() => {
    getAirports();
  }, [getValues]);

  const handleToast = (type, message) => {
    const style = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };
    type == "success"
      ? toast.success(message, style)
      : toast.error(message, style);
  };

  let terminals = [];
  const calculateTerminals = (id) => {
    const count = airportData?.find((item) => item?._id === id);

    const totalCount = Number(count?.numberOfTerminals);
    for (let i = 1; i < totalCount + 1; i++) {
      terminals.push(i);
    }
    setTerminal(terminals);
  };

  const url = `${liveurl}/api/getFlightDetails`;
  const checkFlights = async () => {
    const payload = {
      params: { flightNumber: flightNumber },
    };

    if (airport?.split("-")[0] && flightNumber) {
      await axios.get(url, payload).then((res) => {
        const filteredRide = res?.data?.data?.find(
          (val) =>
            moment(val?.scheduled_out).format("YYYY-MM-DD") ==
            moment(flightDate?.date).format("YYYY-MM-DD")
        );

        if (filteredRide !== undefined) {
          setFlightDetails(filteredRide);
          setFlightPlaceholder(
            filteredRide?.origin?.code_iata +
              " " +
              "-" +
              " " +
              filteredRide?.destination?.code_iata +
              " " +
              `(${filteredRide?.status})`
          );

          handleToast("success", "Flight Found!");
        } else {
          setFlightPlaceholder("Flight Details");
          handleToast("error", "Flight not found!");
        }
      });
    } else {
      console.log("error");
    }
  };

  return (
    <div
      className=" bordr  xxs:py-[1rem] text-white xs:grid xs:grid-cols-1 gap-6 w-[100%] xxs:flex xxs:flex-col xxs:text-center xxs:justify-center   h-fit  grid grid-cols-1  rounded-[0px] font-normal text-[14px]  xxs:w-[100%]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 23%, rgba(0,0,0,0.7819502801120448) 80%)",
      }}
    >
      <div className="mb-5">
        <ToastContainer />
      </div>
      <div className="xs:text-lg xxs:text-[18px] text-center font-semibold text-white  flex justify-center mb-4">
        GET A QUOTE OR BOOK ONLINE
      </div>
      <div>
        {getValues("rideType") === "Airport-Pickup" && "Airport-Drop" && (
          <div>
            <div className="font-normal text-[20px]  flex flex-col ">
              {/* <p className="py-2">Flight Information</p> */}

              <div className=" xxs:grid-cols-1 grid xs:grid-cols-2">
                <div>
                  <p className="font-medium  xxs:mt-1  text-[16px] mb-2  ">
                    Select Airport
                  </p>
                  <div className="w-[90%] ml-5 mb-2 text-black">
                    <select
                      {...register("aa", {
                        required: true,
                        pattern: {
                          message: "Please Choose a Airport",
                        },
                      })}
                      onChange={(e) => {
                        calculateTerminals(e.target.value);
                        clearErrors("aa");
                        setAirport(e?.target?.value);
                        setFlightPlaceholder();
                        // setValue("flightNumber", undefined);
                      }}
                      className="border border-white md:w-[10rem] xxs:w-[95%] h-[35px] bg-white text-black rounded-[5px] text-[15px] "
                    >
                      <option className="hidden">Select airport</option>
                      {airportData?.map((val) => (
                        <option
                          className="h-4 text-[#020002] py-4 bg-transparent rounded-[5px] my-2"
                          value={`${val?.airportCode}-${val._id}`}
                        >
                          {val?.airportLocation?.name}
                        </option>
                      ))}
                    </select>
                    <div className="w-[100%]  text-red-500 font-normal mt-1 mb-2 text-[12px]">
                      {errors.aa?.type === "required" && (
                        <p className=" px-1">Please Choose a Airport</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 ">
                  <div className="font-medium  text-[16px] md:m-0 xxs:mt-1">
                    <label>Flight Date</label>
                  </div>
                  <div>
                    <Controller
                      control={control}
                      name="flightDate"
                      render={({ field }) => (
                        <DatePicker
                          className="border-white text-black border md:w-[10rem] xs:w-[70%] xxs:w-[90%] h-[35px] mt-1 rounded-[5px] p-2"
                          monthsShown={1}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Date"
                          minDate={new Date()}
                          onChange={(flightDate) => {
                            field.onChange(flightDate);
                            setFlightDate({
                              date: flightDate.toISOString(),
                            });
                          }}
                          selected={field.value}
                          // maxDate={oneDayFromNow}
                        />
                      )}
                    />
                  </div>

                  {!flightDate && (
                    <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                      Please Choose flight date
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid xs:grid-cols-2 gap-2 xxs:grid-cols-1">
              <div className=" w-[80%] ml-5 xxs:mx-auto xs:mx-0 xxs:w-[90%]   ">
                <p className="font-medium  xxs:mt-1  text-[16px] mb-2 ">
                  Flight Number
                </p>
                <div className="  flex gap-2">
                  <input
                    {...register("flightNumber", {
                      required: true,
                      pattern: {
                        message: "FlightNumber is required",
                      },
                    })}
                    type="text"
                    value={flightNumber}
                    onChange={(e) => {
                      setFlightNumber(e.target.value);
                      if (e.target.value) {
                        clearErrors("flightNumber");
                      }
                    }}
                    className=" border-white border h-[35px] text-black rounded-[5px] ml-5 w-[100%] pl-2   "
                    placeholder="Flight No."
                  />
                  <button
                    className="text-sm border border-white  px-2 py-1 rounded-lg"
                    onClick={(e) => {
                      // e?.stopPropagation();
                      e?.stopPropagation();

                      checkFlights();
                    }}
                    type="button"
                  >
                    Check
                  </button>
                </div>
                <div className="w-[100%]  text-red-500 font-normal mt-1 mb-2 text-[12px]">
                  {errors.flightNumber?.type === "required" && (
                    <p className=" px-1">Flight Number is required</p>
                  )}
                </div>
              </div>
              <div className="  mb-2   ">
                <div className="   ">
                  <div className="">
                    <div className="flex flex-col  ">
                      <div className="font-medium text-[16px]">
                        <label>Flight Details</label>

                        <div className="  mb-2 mt-2">
                          <input
                            type="text"
                            name="flightDetails"
                            className="w-[85%] sm:w-[85%] p-2 rounded-lg text-sm"
                            disabled
                            placeholder={flightPlaceholder ?? `Flight Detail`}
                          />
                          <div className="w-[100%]  text-red-500 font-normal mt-1 mb-2 text-[12px]">
                            {/* {errors.terminalNumber?.type === "required" && (
                              <p className=" px-1">Please Choose a Terminal</p>
                            )} */}
                          </div>
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="  ">
                  <div className=""></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {
        <div className=" w-[100%] bordr justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
          <p className="xxs:text-[15.5px] xs:text-[16px] mt-2 ">
            Number of Passengers
          </p>
          <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]">
            <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem] ">
              <button
                type="button"
                onClick={() => {
                  +passenger === 1
                    ? setPassenger(+passenger)
                    : setPassenger(+passenger - 1);
                }}
                className="h-[30px] rounded-l-[5px] border w-[2.5rem]  text-[#bd9300]  text-center text-[35px] font-medium"
              >
                -
              </button>
              <input
                {...register("passengers")}
                value={+passenger}
                onChange={(e) => {
                  setPassenger(e.target.value);
                }}
                type="number"
                className="  appearance-none border w-[5rem] text-center bg-transparent h-[30px] text-white focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  setPassenger(+passenger + 1);
                }}
                className="h-[30px] border w-[2.5rem] text-center text-[#bd9300] text-[35px] font-medium rounded-r-[5px] "
              >
                +
              </button>
            </div>
          </div>
        </div>
      }
      <div className="flex flex-col w-[100%] gap-6 xxs:gap-2 font-medium">
        <div className=" w-[100%] borer justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10  ">
          <p className=" xxs:text-[15.5px] xs:text-[16px] mt-2 ">
            Small Luggage Count
          </p>

          <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]">
            <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem]">
              <button
                type="button"
                onClick={() => {
                  +sluggage === 0
                    ? setSluggage(+sluggage)
                    : setSluggage(+sluggage - 1);
                }}
                className="h-[30px] border w-[2.5rem] text-center text-[35px] text-[#bd9300] rounded-l-[5px] font-medium"
              >
                -
              </button>

              <input
                {...register("count")}
                type="number"
                name="count"
                className="border w-[5rem] text-center h-[30px]  bg-transparent text-white  appearance-none focus:outline-none"
                value={+sluggage}
              />

              <button
                type="button"
                onClick={() => {
                  setSluggage(+sluggage + 1);
                }}
                className="h-[30px] border w-[2.5rem] text-center text-[35px] text-[#bd9300] font-medium rounded-r-[5px] "
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="w-[100%] bordr justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
          {
            <p className=" xxs:text-[15.5px] xs:text-[16px] mt-2">
              Large Luggage Count{" "}
            </p>
          }

          {
            <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]  ">
              <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem]">
                <button
                  type="button"
                  className="h-[30px] border w-[2.5rem] text-center rounded-l-[5px] text-[#bd9300] text-[35px] font-medium"
                  onClick={() => {
                    +lluggage === 0
                      ? setLluggage(+lluggage)
                      : setLluggage(+lluggage - 1);
                  }}
                >
                  -
                </button>
                <input
                  {...register("count2")}
                  value={+lluggage}
                  type="number"
                  className="border w-[5rem] h-[30px] text-center bg-transparent text-white focus:outline-none"
                />
                <button
                  type="button"
                  className="h-[30px] border w-[2.5rem] text-[#bd9300] text-center text-[35px] font-medium rounded-r-[5px] "
                  onClick={() => {
                    setLluggage(+lluggage + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          }
        </div>
        <div className="w-[100%] borer justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10">
          {
            <p className="xxs:text-[15.5px] xs:text-[16px] mt-2">
              Total Luggage Count
            </p>
          }
          <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px] ">
            <div className="flex rounded-[5px]  justify-center w-[28rem]">
              {
                <input
                  {...register("luggage")}
                  value={+sluggage + +lluggage}
                  className="border xs:w-[10rem] xxs:w-[9rem] text-center h-[30px]  bg-transparent text-white rounded-[5px] pointer-events-none"
                />
              }
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-start">
        <p className="text-red-500 font-normal text-[16px]">
          Note: Extra 50$ for Trailer{" "}
        </p>
        <div className="flex my-3 gap-2">
          <input
            type="checkbox"
            name="trailer"
            {...register("addTrailer")}
            // checked={formData.noPickupFlightDetails}
            // onChange={handleInputChange}
            className=" accent-amber-500 text-black"
          />{" "}
          <p>Want to add Trailer for luggage </p>
        </div>
      </div> */}

      <div>
        {seatsArray?.map((ele, index) => (
          <div>
            <div className="mt-2 text-center">
              {
                <div className="  py-1 w-[100%] borde  justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
                  <div className=" border-white w-[100%] h-[35px]  bg-transparent text-black  rounded-[5px]  ">
                    <p className=" xxs:text-[15.5px] xs:text-[16px] mt-2 text-[16px] bg-transparent text-center text-white my-2 font-semibold">
                      {ele?.label}
                    </p>
                  </div>
                  <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]">
                    <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem]">
                      <button
                        type="button"
                        className="h-[30px] border w-[2.5rem] text-[#bd9300] text-center rounded-l-[5px] text-[35px] font-medium"
                        onClick={() => {
                          const newData = seatsArray?.map((item, index2) => {
                            if (index2 === index) {
                              return {
                                ...item,
                                number:
                                  item.number === 0
                                    ? item.number
                                    : item.number - 1,
                              };
                            } else {
                              return item;
                            }
                          });
                          setSeatsArray(newData);
                        }}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="border  h-[30px] w-[5rem] text-center bg-transparent text-white focus:outline-none appearance-none"
                        value={ele.number}
                        onChange={(e) => {
                          setChild((prev) => {
                            return {
                              ...prev,
                              number: e.target.value,
                            };
                          });
                        }}
                      />
                      <button
                        type="button"
                        className="h-[30px] text-[#bd9300] border w-[2.5rem] text-center rounded-r-[5px] text-[35px] font-medium"
                        onClick={() => {
                          const newData = seatsArray?.map((item, index2) => {
                            if (index2 === index) {
                              return {
                                ...item,
                                number: item.number + 1,
                              };
                            } else {
                              return item;
                            }
                          });
                          setSeatsArray(newData);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        ))}
        <div></div>
      </div>

      <div className=" text-start ml-2 text-[22px] flex">
        <GiPencil />{" "}
        <p className="ml-2">
          Notes <span className="text-[12px] my-[2px]">(optional)</span>
        </p>
      </div>
      <div className=" flex flex-col justify-start ml-2">
        <textarea
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          maxLength="250"
          className="bg-transparent border resize-none h-[100px] w-[100%] px-3 py-2 text-[18px]"
          name=""
          id=""
          rows=""
        ></textarea>
      </div>
      <div className="   flex justify-center rounded-[5px] overflow-hidden ">
        {submitLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <button
            className=" xs:w-[50%] xxs:w-[100%] h-[35px] rounded-[5px] bg-[#bd9300] text-black font-bold text-[16px]  "
            type="submit"
          >
            Select Vehicle
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingForm2;
