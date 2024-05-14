import axios from "axios";
import moment from "moment";
import { GiPencil } from "react-icons/gi";
import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Loader from "../../Loader";
import { liveurl } from "../../../hostUrl";
import { toast } from "react-toastify";

const BookingForm2 = ({
  setNotes,
  notes,
  register,
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
  // const [flightPlaceholder, setFlightPlaceholder] = useState();
  const [flightDate, setFlightDate] = useState();

  const getAirports = () => {
    axios
      .get(`${liveurl}/api/adminPanel/airport/getAllAirports`)
      .then((res) => {
        setAirportData(res?.data?.data);
      });
  };
  const oneDayFromNow = new Date();
  oneDayFromNow.setDate(oneDayFromNow.getDate() + 1);

  const oneYearFromNow = new Date();
  oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 12);
  useEffect(() => {
    getAirports();
  }, [getValues]);
  console.log(flightNumber);

  let terminals = [];
  const calculateTerminals = (id) => {
    const count = airportData?.find((item) => item?._id === id);

    const totalCount = Number(count?.numberOfTerminals);
    for (let i = 1; i < totalCount + 1; i++) {
      terminals.push(i);
    }
    setTerminal(terminals);
  };

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

  const url = `${liveurl}/api/getFlightDetails`;
  const checkFlights = async () => {
    const payload = {
      params: { flightNumber: flightNumber },
    };

    if (airport?.split("-")[0] && flightNumber) {
      await axios.get(url, payload).then((res) => {
        console.log("res :>> ", res);
        const filteredRide = res?.data?.data?.find(
          (val) =>
            moment(val?.scheduled_out).format("YYYY-MM-DD") ==
            moment(flightDate?.date).format("YYYY-MM-DD")
        );

        console.log("filteredRide :>> ", filteredRide);
        console.log("flightNumber :>> ", flightNumber);
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
    <div className=" bg-[#020002] text-white w-[100%] h-fit md:w-[45rem] lg:py-[50px] xs:px-[80px] lg:px-[100px] md:py-[50px] md:px-[100px] grid grid-cols-1 rounded-lg  gap-5 font-normal xxs:px-[50px] xxs:py-[50px] xxs:text-center xs:text-start">
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
                  <div className="w-[90%] mb-2 text-black">
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
                          {val?.airportName}
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
                          className="border-white text-black border md:w-[14rem] xs:w-[80%] xxs:w-[95%] h-[35px] mt-1 rounded-[5px] p-2"
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
                          maxDate={oneDayFromNow}
                        />
                      )}
                    />
                  </div>
                  {!flightDate && (
                    <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                      Please Choose date
                    </div>
                  )}

                  {/* {dateandtime?.date === "" && validate === true && (
              <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                Please Choose date
              </div>
            )} */}
                </div>
              </div>
            </div>
            <div className=" grid xs:grid-cols-2 gap-2 xxs:grid-cols-1 ">
              <div className=" xs:w-[80%]  xxs:mx-auto xs:mx-0 xxs:w-[90%] ">
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
                    className=" border-white border h-[35px] text-black rounded-[5px]  w-[100%] pl-2   "
                    placeholder="Flight No."
                  />
                  <button
                    className="text-sm border border-white  px-2 py-1 rounded-lg"
                    onClick={(e) => {
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
      {/* <div>
        {getValues("rideType") === "Airport-Pickup" && (
          <div className=" w-fit ">
            <div className="font-medium py-2">
              <label>Flight Information</label>
            </div>
            <div className="grid sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1 lg:gap-5 xxs:gap-4 ">
              <div className=" w-fit">
                <div>
                  <input
                    {...register("airlineName", {
                      required: true,
                      pattern: {
                        message: "AirlineName is required",
                      },
                    })}
                    type="text"
                    className=" border-white border w-[100%] h-[35px] rounded-[5px] p-2 bg-transparent text-white"
                    placeholder="Airline Name"
                  />
                </div>
                <div className="  text-red-500 font-normal w-[100%] mt-1 text-[14px] ">
                  {errors.airlineName?.type === "required" && (
                    <p className="px-1 ">Airline Name is required</p>
                  )}
                </div>
              </div>
              <div className=" w-fit">
                <div className="">
                  <input
                    {...register("flightNumber", {
                      required: true,
                      pattern: {
                        message: "FlightNumber is required",
                      },
                    })}
                    type="text"
                    className=" border-white border text-white h-[35px] rounded-[5px] p-2 w-[100%] bg-transparent"
                    placeholder="Flight #"
                  />
                </div>
                <div className="w-[100%]  text-red-500 font-normal mt-1  text-[14px]">
                  {errors.flightNumber?.type === "required" && (
                    <p className=" px-1">Flight Number is required</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div> */}

      <div className=" w-[100%] bordr justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
        <p className="xxs:text-[15.5px] xs:text-[16px] mt-2 ">
          Number of Passengers
        </p>
        <div className="flex xs:w-[12rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]">
          <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem] ">
            <button
              type="button"
              onClick={() => {
                +passenger === 1
                  ? setPassenger(+passenger)
                  : setPassenger(+passenger - 1);
              }}
              className="h-[30px] rounded-l-[5px] border w-[3.5rem]  text-[#bd9300]  text-center text-[35px] font-medium"
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
              className="h-[30px] border w-[3.5rem] text-center text-[#bd9300] text-[35px] font-medium rounded-r-[5px] "
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] xs:gap-5 xxs:gap-2 font-medium ">
        <div className=" w-[100%] borer justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10  ">
          <p className=" xxs:text-[15.5px] xs:text-[16px] mt-2 ">
            Small Luggage Count
          </p>

          <div className="flex xs:w-[12rem]  xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]">
            <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem]">
              <button
                type="button"
                onClick={() => {
                  +sluggage === 0
                    ? setSluggage(+sluggage)
                    : setSluggage(+sluggage - 1);
                }}
                className="h-[30px] border w-[3.5rem] text-center text-[35px] text-[#bd9300] rounded-l-[5px] font-medium"
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
                className="h-[30px] border w-[3.5rem] text-center text-[35px] text-[#bd9300] font-medium rounded-r-[5px] "
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
            <div className="flex xs:w-[12rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]  ">
              <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem]">
                <button
                  type="button"
                  className="h-[30px] border w-[3.5rem] text-center rounded-l-[5px] text-[#bd9300] text-[35px] font-medium"
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
                  className="h-[30px] border w-[3.5rem] text-[#bd9300] text-center text-[35px] font-medium rounded-r-[5px] "
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
          <div className="flex xs:w-[12rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px] ">
            <div className="flex rounded-[5px]  justify-center w-[28rem]">
              {
                <input
                  {...register("luggage")}
                  value={+sluggage + +lluggage}
                  className="border xs:w-[12rem] xxs:w-[9rem] text-center h-[30px]  bg-transparent text-white rounded-[5px] pointer-events-none"
                />
              }
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <p className="text-red-500 font-normal text-[18px]">
          Note: Extra 50$ for Trailer{" "}
        </p>
        <div className="flex my-3 gap-2">
          <input
            type="checkbox"
            name="addTrailer"
            {...register("addTrailer")}
            // checked={formData.noPickupFlightDetails}
            // onChange={handleInputChange}
            className=" accent-amber-500 text-black"
          />{" "}
          <p>Want to add Trailer for luggage </p>
        </div>
      </div> */}

      <div className="  ">
        {
          <button
            type="button"
            className=" text-[13px]  text-black  bg-[#bd9300]  p-2 rounded-[5px] font-semibold w-fit xxs:ml-2 xs:m-0"
            onClick={() => {
              let dummArr = [
                {
                  label: "Infant (ages 0-1)",
                  name: "infant",
                  number: 0,
                },
                {
                  label: "Toddler Seat (ages 1-3)",
                  name: "toddler",
                  number: 0,
                },
                {
                  label: "Booster Seat (ages 3-6)",
                  name: "booster",
                  number: 0,
                },
              ];

              setSeatsArray(dummArr);
            }}
          >
            + Add Child Seat
          </button>
        }
        {seatsArray?.map((ele, index) => (
          <div>
            <div className="mt-2  xxs:text-center">
              <div className="  py-1 w-[100%] borde  justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
                <div className=" border-white w-[100%] h-[35px]  bg-transparent text-black  rounded-[5px]  ">
                  <p className=" xxs:text-[15.5px] xs:text-[16px] mt-2 text-[16px] bg-transparent text-center text-white my-2 font-semibold">
                    {ele?.label}
                  </p>
                </div>
                <div className="flex xs:w-[12rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]">
                  <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem]">
                    <button
                      type="button"
                      className="h-[30px] border w-[3.5rem] text-[#bd9300] text-center rounded-l-[5px] text-[35px] font-medium"
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
                      className="h-[30px] text-[#bd9300] border w-[3.5rem] text-center rounded-r-[5px] text-[35px] font-medium"
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
            </div>
          </div>
        ))}
        <div></div>
      </div>
      <div className=" text-start ml-2 text-[22px] flex">
        <GiPencil /> <p className="ml-2">Notes</p>{" "}
        <span className="text-[12px] my-[2px] ml-1 ">(optional)</span>
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

      <div className=" ">
        {submitLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <button
            className=" w-[100%] h-[35px] bg-[#bd9300] text-black font-bold text-[20px] border border-[#bd9300]  rounded-[5px] overflow-hidden "
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
