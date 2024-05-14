import React, { useEffect, useRef, useState } from "react";
import loginlogo from "../../images/logo_1.png";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { liveurl } from "../../hostUrl";
import axios from "axios";
import moment from "moment";
import Loader from "../../component/Loader";
import { meUser, rideId } from "../../store";
import { useAtom } from "jotai";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRideForm = () => {
  const [rideIds, setRideId] = useAtom(rideId);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [passenger, setPassenger] = useState(1);
  const [sluggage, setSluggage] = useState(0);
  const [lluggage, setLluggage] = useState(0);
  const [child, setChild] = useState([]);
  const [array, setArray] = useState([]);
  const { id } = useParams();
  const Postcall = `${liveurl}/api/adminPanel/rides/createRide`;
  const GetSingleRide = `${liveurl}/api/adminPanel/rides/getSingleRideDetails?rideID=${id}`;

  const [selectedOption, setSelectedOption] = useState();
  const [data, setData] = useState();
  const firstRender = useRef(false);
  useEffect(() => {
    axios
      .get(GetSingleRide)
      .then((res) => {
        setData(res?.data?.data);
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [selectedOption]);
  useEffect(() => {
    if (data) {
      if (firstRender.current) return;

      setSelectedOption(data?.paymentType);
      setTime(data?.numberOfHours);
      setPassenger(data?.passengers);
      setSluggage(data?.luggageCapacitySmall);
      setLluggage(data?.luggageCapacityLarge);
      firstRender.current = true;
    }
  }, [data]);

  console.log("data", data);

  const timestamp = data?.time;
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  console.log("formattedTime", formattedTime);

  const timestampDate = data?.date;
  const date2 = new Date(timestampDate);

  const day = date2.getDate();
  const month = date2.getMonth() + 1; // Months are zero-based, so add 1 to get the correct month
  const year = date2.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  console.log("formattedDate", formattedDate);

  const navigate = useNavigate();

  const [user] = useAtom(meUser);
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
  const [seatsArray, setSeatsArray] = useState(dummArr);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const {
    fields: stops,
    append: stopsAppend,
    remove: stopsRemove,
  } = useFieldArray({
    control,
    name: "stops",
  });
  const {
    fields: childSeat,
    append: childSeatAppend,
    remove: childSeatRemove,
  } = useFieldArray({
    name: "child",
    control,
  });
  const googleApi = "AIzaSyDyAUx_-daxFtklRMBcgH5_BWEEpjq_hdo";
  const [returnpickup, setReturnpickup] = useState("");
  const [returnDateAndTime, setReturnDateAndTime] = useState({
    date: "",
    time: "",
  });
  const handleLocation = () => {
    setValidate(true);
  };
  const handlereturndateime = (time) => {
    setReturnDateAndTime({ ...returnDateAndTime, time: time[0].toISOString() });
  };

  const inputRef = useRef(null);

  console.log("${data?.paymentType}", `${data?.paymentType}`);
  console.log("selectedOption", selectedOption);

  const [rideoptions, setRideoptions] = useState("Point-to-Point");
  const [modal, setModal] = useState(false);
  const [addStop, setAddstop] = useState("");

  const [ridemode, setRidemode] = useState("One-Way-Ride");
  const [pickUp, setpickUp] = useState("");
  const [drop, setDrop] = useState("");
  const [time, setTime] = useState();
  const [terminal, setTerminal] = useState("");
  // useEffect(() => {
  //   if (ridemode === "Round-Trip") {
  //     setModal(!modal);
  //   } else {
  //     setModal(false);
  //   }
  // }, [ridemode]);

  //   const [drop, setDrop] = useState("");

  const [dateandtime, setDateandtime] = useState({
    date: "",
    rideTime: "00:00",
  });
  const handleTimeChange = (time) => {
    setDateandtime({ ...dateandtime, rideTime: time });
  };
  const [validate, setValidate] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleRideoptionChange = (event) => {
    setRideoptions(event.target.value);
  };
  const HandleRidemode = (event) => {
    setRidemode(event.target.value);
    // console.log("event", event);
    console.log("ridemode", ridemode);
  };
  const oneYearFromNow = new Date();
  oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 12);
  const [flightPlaceholder, setFlightPlaceholder] = useState();
  const [flightDate, setFlightDate] = useState();
  const [airportData, setAirportData] = useState();
  const [flightDetails, setFlightDetails] = useState();
  const [airport, setAirport] = useState();
  const [flightNumber, setFlightNumber] = useState();
  //   const [airportData, setAirportData] = useState();
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
  console.log("airport", terminal);

  const getAirports = () => {
    axios
      .get(`${liveurl}/api/adminPanel/airport/getAllAirports`)
      .then((res) => {
        setAirportData(res?.data?.data);
      });
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
  const options = [
    {
      id: 1,
      value: "perKm",
      name: "Per Km",
    },
    { id: 2, value: "perHour", name: "Per Hour" },
  ];
  const rideType = [
    { name: "Point-to-Point", value: "Point-to-Point" },
    { name: "Airport Pickup", value: "Airport-Pickup" },
    { name: "Airport Drop", value: "Airport-Drop" },
    { name: "Event", value: "Event" },
  ];
  const rideMode = [
    { name: "One Way Ride", value: "One-Way-Ride" },
    { name: "Round Trip", value: "Round-Trip" },
    { name: "Instant Ride", value: "Instant-Ride" },
  ];
  const onSubmit = (data) => {
    setSubmitLoading(true);

    delete data?.child;
    delete data?.count;
    delete data?.count2;
    delete data?.test;
    delete data?.age;
    delete data?.stops;
    // delete data?.aa;
    delete data?.returndate;
    delete data?.flightDate;
    delete data?.flightDate;

    // delete data?.airportId;
    // delete data?.flightNumber;
    const newDate = new Date(returnDateAndTime?.date);
    const newTime = new Date(returnDateAndTime?.time);
    newDate.setHours(newTime.getHours());
    newDate.setMinutes(newTime.getMinutes());
    newDate.setSeconds(newTime.getSeconds());

    const submitForm = async (data) => {
      try {
        const payload = {
          ...data,
          // firstName: user?.data?.name || guestParse?.name,
          // email: user?.data?.email || guestParse?.email,
          // lastName: user?.data?.lastName || "",
          // countryCode: user?.data?.countryCode || " +91",
          // phoneNo: Number(user?.data?.phone) || guestParse?.number || 0,
          pickupLocation: pickUp?.label,
          dropLocation: drop?.label,
          dropPlaceId: drop?.value?.place_id,
          pickupPlaceId: pickUp?.value?.place_id,
          returnPickupLocation: returnpickup?.label,
          returnPickupPlaceId: returnpickup?.value?.place_id,
          passengers: Number(passenger),
          luggageCapacityLarge: Number(lluggage),
          luggageCapacitySmall: Number(sluggage),
          luggage: lluggage + sluggage,
          rideTime: dateandtime?.rideTime[0],
          addStop: addStop,
          numberOfHours: time,
          rideMode: ridemode,
          rideType: rideoptions,
          returnDateAndTime: newDate,
          // terminalNumber: ,
          flightId: flightDetails?.fa_flight_id,
          // flightDetails: flightDetails[0],
          airportId: data?.aa?.split("-")[1],
          paymentType: selectedOption || "",
          childSeats: seatsArray?.length
            ? seatsArray?.map((item) => {
                return { [item?.name]: `${item?.number}` };
              })
            : [{ infant: "0" }, { toddler: "0" }, { booster: "0" }],
          date: moment(data?.date),
          customerId: user?.data?._id,
        };
        if (ridemode !== "Round-Trip") {
          delete payload?.returnDateAndTime;
          delete payload?.returnPickupLocation;
          delete payload?.returnPickupPlaceId;
        }
        if (rideoptions !== "Airport-Pickup") {
          delete payload?.flightId;
          delete payload?.airportId;
          delete payload?.flightNumber;
        }
        delete payload?.aa;
        const res = await axios.post(Postcall, payload);

        setRideId(res.data.ride_id);
        if (window.sessionStorage.getItem("userRideId")) {
          window.sessionStorage.removeItem("userRideId");
          window.sessionStorage.setItem("userRideId", res.data.ride_id);
        } else {
          window.sessionStorage.setItem("userRideId", res.data.ride_id);
        }
        setSubmitLoading(false);
        setArray(res);
        if (res?.data?.success) {
          // navigate("/Vehicle");
        }
      } catch (error) {
        console.log(error);
      }
    };
    submitForm(data);
  };
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center  p-6">
          <div className=" border  shadow-md  h-fit">
            <div className="bg-black flex justify-center">
              <img
                src={loginlogo}
                height={100}
                width={300}
                loading="lazy"
                alt=""
                className=""
              />
            </div>
            <div className="xl:flex">
              <div className="border  p-5">
                <div>
                  <div className="borde flex flex-col p-1">
                    <div className="py-2 font-semibold">Pricing</div>
                    <div>
                      <div className=" flex -ml-2">
                        {options.map((option) => (
                          <div
                            key={option}
                            className=" flex md:w-[15rem]  ml-2"
                          >
                            <input
                              type="radio"
                              defaultChecked={
                                data?.paymentType === selectedOption
                              }
                              defaultValue={data?.paymentType}
                              value={option.value}
                              checked={selectedOption === option.value}
                              onChange={handleOptionChange}
                            />
                            <div className=" ml-1">{option.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" md:grid md:grid-cols-2 xs:gap-3 xxs:m-1 xs:grid xs:grid-cols-2 h-fit">
                    <div className=" flex flex-col gap-1 md:w-fit  h-[70px] ">
                      <label className="font-medium ">
                        Select Service Type
                      </label>
                      <div>
                        {" "}
                        {/* <select
                          onChange={handleRideoptionChange}
                          className="border border-white md:w-[10rem] xxs:w-[95%] h-[35px] bg-[#020002] text-white rounded-[5px]  "
                        >
                          {rideType.map((val) => (
                            <option
                              className="h-4 text-white py-4 bg-transparent rounded-[5px] my-2"
                              value={val.value}
                            >
                              {val.name}
                            </option>
                          ))}
                        </select> */}
                        <div className="border border-black md:w-[10rem] xxs:w-[95%] h-[35px] bg-white text-black rounded-[5px]  py-2 px-2 ">
                          {data?.rideType}
                        </div>
                      </div>
                      <div className=" h-5  font-normal mt-1 border border-transparent  "></div>
                    </div>
                    <div className=" gap-1 xxs:flex xxs:flex-col  md:w-fit">
                      <label className="font-medium ml-5 xxs:m-0">
                        Service Mode
                      </label>
                      {/* <div>
                        {" "}
                        <select
                          onChange={HandleRidemode}
                          // {...register("rideMode")}
                          className="border border-white md:w-[10rem] xxs:w-[95%] ml-4 xxs:m-0 h-[35px] bg-[#020002] text-white rounded-[5px] "
                        >
                          {rideMode.map((val) => (
                            <option
                              className="h-4 text-white py-4 bg-transparent rounded-[5px] my-2"
                              value={val?.value}
                            >
                              {val?.name}
                            </option>
                          ))}
                        </select>
                      </div> */}
                      <div className="border border-black md:w-[8rem] xxs:w-[95%] ml-4 xxs:m-0 h-[35px] bg-white text-black rounded-[5px] text- py-2 px-2 ">
                        {data?.rideMode}
                      </div>
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 xxs:grid-cols-1 gap-x-[1rem] xs:grid xs:grid-cols-2 xxs:gap-1   h-[100%]">
                    <div className="flex flex-col gap-1 ">
                      <div className="font-medium md:m-0 xxs:mt-1">
                        <label>Pickup Date</label>
                      </div>
                      <div>
                        {/* <Controller
                          control={control}
                          name="date"
                          render={({ field }) => (
                            <DatePicker
                              className="border-white text-black border md:w-[10rem] xs:w-[80%] xxs:w-[95%] h-[35px] mt-1 rounded-[5px] p-2"
                              monthsShown={1}
                              dateFormat="dd/MM/yyyy"
                              placeholderText="Date"
                              minDate={new Date()}
                              onChange={(date) => {
                                field.onChange(date);
                                setDateandtime({
                                  ...dateandtime,
                                  date: date.toISOString(),
                                });
                              }}
                              selected={field.value}
                              maxDate={oneYearFromNow}
                            />
                          )}
                        /> */}
                        <div className="border-black text-black border  md:w-[8rem] xs:w-[80%] xxs:w-[95%] h-[35px] mt-1 rounded-[5px] p-2">
                          {formattedDate}
                        </div>
                      </div>

                      {dateandtime?.date === "" && validate === true && (
                        <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                          Please Choose date
                        </div>
                      )}
                    </div>
                    <div className=" flex flex-col h-fit xs:gap-1  xxs:gap-2">
                      <div className=" font-medium xs:mt-1 xxs:mt-2">
                        <label className=" ">Pickup Time</label>
                      </div>

                      {/* <Flatpickr
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: "H:i",
                          time_24hr: true,
                          disableMobile: "true",
                        }}
                        value={dateandtime.rideTime}
                        onChange={(e) => handleTimeChange(e)}
                        className=" h-[35px] rounded-[5px] text-black  border-white border xxs:w-[95%] md:w-[10rem] p-2"
                        type="time"
                      /> */}
                      <div className="h-[35px] rounded-[5px] text-black  border-black border xxs:w-[95%] md:w-[8rem] p-2">
                        {formattedTime}
                      </div>
                      {!dateandtime.rideTime && validate === true && (
                        <div className="  text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                          Please Choose time
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col font-medium gap-2 xs:mt-5  w-[95%]  ">
                    <div className="border  border-transparent   xxs:block xs:hidden"></div>
                    <label>Pick Up Location</label>

                    <GooglePlacesAutocomplete
                      type="text"
                      apiKey={googleApi}
                      ref={inputRef}
                      selectProps={{
                        onChange: (object) => {
                          setpickUp(object);
                        },
                        placeholder:
                          data?.pickupLocation?.name ||
                          "Enter pick up location",
                        suggestionsClassNames: "text-red-500 css-1hwfws3 ",
                      }}
                      theme={{
                        Theme: {
                          borderRadius: 0,
                          colors: {
                            primary25: "hotpink",
                            primary: "black",
                          },
                        },
                      }}
                    />
                    {pickUp?.value &&
                      pickUp?.value?.place_id === drop?.value?.place_id && (
                        <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                          Pickup Location and Drop Location Can't be same
                        </div>
                      )}

                    {!pickUp && validate === true && (
                      <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                        Pickup Location is required
                      </div>
                    )}
                    <div className=" h-1  font-normal mt-1 border border-transparent  "></div>
                  </div>
                  <div>
                    {selectedOption === "perHour" ? (
                      <div>
                        <div className=" h-[80px] mt-5 pt-2">
                          <div className=" w-[100%] bordr justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
                            <p className="xxs:text-[15.5px] xs:text-[16px] mt-2 ">
                              Number of Hours
                            </p>
                            <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0    h-[30px]">
                              <div className="flex rounded-[5px] overflow-hidden  justify-center  ">
                                <button
                                  type="button"
                                  onClick={() => {
                                    time === 1
                                      ? setTime(time)
                                      : setTime(+time - Number(0.5));
                                  }}
                                  className="h-[30px] rounded-l-[5px] border w-[2.5rem]  text-[#bd9300]  text-center text-[35px] font-medium"
                                >
                                  -
                                </button>
                                <input
                                  {...register("numberOfHours")}
                                  type="number"
                                  value={+time}
                                  // onChange={(e) => {
                                  //   setTime(e.target.value);
                                  // }}
                                  className="  appearance-none border w-[5rem] text-center bg-transparent h-[30px] text-black focus:outline-none"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    time === 24
                                      ? setTime(+time)
                                      : setTime(+time + Number(0.5));
                                  }}
                                  className="h-[30px] border w-[2.5rem] text-center text-[#bd9300] text-[35px] font-medium rounded-r-[5px] "
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              if (stops?.length === 0) {
                                stopsAppend({ stop: "" });
                              } else {
                                if (stops?.length > 0) {
                                  if (addStop) {
                                    stopsAppend({ stops: "" });
                                  }
                                }
                              }
                            }}
                            className=" text-[12px] font-semibold border text-black bg-[#bd9300] border-[#bd9300] rounded-[5px] px-2 py-1 mb-2"
                          >
                            + Add Stop
                          </button>
                          <div className=" h-2  font-normal mt-1 border border-transparent  ">
                            {/* empty div for spacing */}
                          </div>
                          <div className="border border-transparent h-[100px] overflow-y-scroll hide-scrollbar py-4">
                            {stops.map((items, index) => (
                              <div className="flex flex-col gap-3  w-[95%]">
                                <div className="flex  ">
                                  <GooglePlacesAutocomplete
                                    type="text"
                                    apiKey={googleApi}
                                    ref={inputRef}
                                    selectProps={{
                                      onChange: (object) => {
                                        setAddstop([
                                          ...addStop,
                                          {
                                            stopPlaceId:
                                              object?.value?.place_id,
                                            stopName: object?.label,
                                          },
                                        ]);
                                      },
                                      placeholder: "Enter stop location",
                                      suggestionsClassNames: "text-red-500",
                                    }}
                                    theme={{
                                      Theme: {
                                        borderRadius: 0,
                                        colors: {
                                          primary25: "hotpink",
                                          primary: "black",
                                        },
                                      },
                                    }}
                                  />
                                </div>
                                <div className="md:w-[18rem]  text-red-500 font-normal mt-1 ">
                                  {errors?.test?.[index]?.stops?.type ===
                                    "required" && (
                                    <p className=" ">location is required</p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 font-medium  w-[95%] ">
                          <label>Drop Off Location</label>

                          <GooglePlacesAutocomplete
                            type="text"
                            apiKey={googleApi}
                            ref={inputRef}
                            selectProps={{
                              onChange: (object) => {
                                setDrop(object);
                              },
                              placeholder:
                                data?.dropLocation?.name ||
                                "Enter drop off location ",
                              suggestionsClassNames: "text-red-500",
                            }}
                            theme={{
                              Theme: {
                                borderRadius: 0,
                                colors: {
                                  primary25: "hotpink",
                                  primary: "black",
                                },
                              },
                            }}
                          />
                          {pickUp?.value &&
                            pickUp?.value?.place_id ===
                              drop?.value?.place_id && (
                              <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                                Pickup Location and Drop Location Can't be same
                              </div>
                            )}

                          {!drop && validate === true && (
                            <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent   ">
                              DropOff Location is required
                            </div>
                          )}

                          <div className=" h-2  font-normal mt-1 border border-transparent  "></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* <div>
                    {data?.rideMode === "Round-Trip" && (
                      <div>
                        <div className="md:flex justify-between  xxs:hidden  ">
                          <hr className=" w-[150px]" />
                          <hr className=" w-[150px]" />
                        </div>
                        <div className=" py-5  ">
                          <div className="flex flex-col gap-2 font-medium  w-[95%] text-black">
                            <label>Return Pickup Location</label>

                            <GooglePlacesAutocomplete
                              type="text"
                              apiKey={googleApi}
                              ref={inputRef}
                              selectProps={{
                                onChange: (object) => {
                                  setReturnpickup(object);
                                },
                                placeholder: data?.returnPickupLocation,
                                suggestionsClassNames: "text-red-500 ",
                              }}
                              theme={{
                                Theme: {
                                  borderRadius: 0,
                                  colors: {
                                    primary25: "hotpink",
                                    primary: "black",
                                  },
                                },
                              }}
                            />

                            {!returnpickup && validate === true && (
                              <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent   ">
                                Return Location is required
                              </div>
                            )}
                          </div>
                          <div className="md:grid md:grid-cols-2 xxs:grid-cols-1 gap-x-[1rem] xs:grid xs:grid-cols-2 xxs:gap-1   ">
                            <div className="flex flex-col gap-1 mt-2  relative">
                              <div className="font-medium md:m-0 xxs:mt-1">
                                <label>Return Date</label>
                              </div>
                              <div>
                                <Controller
                                  style={{ zIndex: 1000 }}
                                  control={control}
                                  name="returndate"
                                  render={({ field }) => (
                                    <DatePicker
                                      className="border-white  text-black border md:w-[10rem] xs:w-[80%] xxs:w-[95%] h-[35px] mt-1 rounded-[5px] p-2"
                                      monthsShown={1}
                                      dateFormat="dd/MM/yyyy"
                                      popperPlacement="top"
                                      placeholderText="Date"
                                      minDate={new Date()}
                                      onChange={(e) => {
                                        field.onChange(e);
                                        setReturnDateAndTime({
                                          ...returnDateAndTime,
                                          date: e,
                                        });
                                      }}
                                      selected={field.value}
                                      maxDate={oneYearFromNow}
                                    />
                                  )}
                                />
                              </div>

                              {returnDateAndTime?.date === "" &&
                                validate === true && (
                                  <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent">
                                    Please Choose date
                                  </div>
                                )}
                            </div>
                            <div className=" flex flex-col  xs:gap-1  xxs:gap-2 mt-2">
                              <div className=" font-medium xs:mt-1 xxs:mt-2">
                                <label className=" ">Return Time</label>
                              </div>

                              <Flatpickr
                                options={{
                                  enableTime: true,
                                  noCalendar: true,
                                  dateFormat: "H:i",
                                  time_24hr: true,
                                  disableMobile: "true",
                                }}
                                // value={returnDateAndTime.time}
                                onChange={(e) => handlereturndateime(e)}
                                className=" h-[30px] rounded-[5px] text-black  border-white border xxs:w-[95%] md:w-[10rem] p-2"
                                type="time"
                              />

                              {!returnDateAndTime.time && validate === true && (
                                <div className="  text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                                  Please Choose time
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div> */}

                  <div className=" h-fit  rounded-[5px] overflow-hidden flex justify-center ">
                    {/* <button
                    className="  h-[35px] bg-[#bd9300] border-[#bd9300] rounded-[5px] text-black text-[20px] font-bold px-3 "
                    type="button"
                    onClick={() => {
                      handleLocation();
                    }}
                  >
                    Continue
                  </button> */}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  data?.rideType === "Airport-Pickup"
                    ? "px-2  py-6"
                    : "xxs:p-0 md:px-[100px] md:py-10"
                }`}
              >
                {console.log(
                  'data?.rideType === "Airport-Pickup"',
                  data?.rideType === "Airport-Pickup"
                )}
                <div>
                  {data?.rideType === "Airport-Pickup" && (
                    <div className="w-fit ">
                      <div className="font-normal text-[20px]  flex flex-col ">
                        {/* <p className="py-2">Flight Information</p> */}

                        <div className=" xxs:grid-cols-1 grid xs:grid-cols-2">
                          <div>
                            <p className="font-medium  xxs:mt-1  text-[16px] mb-2 xxxs:px-2 sm:px-0 ">
                              Select Airport
                            </p>
                            <div className="w-[90%]  mb-2 text-black border-black">
                              <select
                                {...register("aa", {
                                  required: true,
                                  className:
                                    "border border-white md:w-[10rem] xxs:w-[95%] ml-4 xxs:m-0 h-[35px] bg-[#020002] text-white rounded-[5px",
                                  pattern: {
                                    message: "Please Choose a Airport",
                                  },
                                })}
                                onChange={(e) => {
                                  calculateTerminals(e.target.value);

                                  setAirport(e?.target?.value);
                                }}
                                className="border border-white md:w-[10rem] xxs:w-[95%] h-[35px] bg-white text-black rounded-[5px] text-[15px] "
                              >
                                {airportData?.map((val) => (
                                  <option
                                    className="h-4 text-[#020002] py-4  bg-transparent rounded-[5px] my-2"
                                    value={`${val?.airportCode}-${val._id}`}
                                  >
                                    {val?.airportName}
                                  </option>
                                ))}
                              </select>
                              <div className="w-[100%]  text-red-500 font-normal mt-1 mb-2 text-[12px]">
                                {errors.aa?.type === "required" && (
                                  <p className=" px-1">
                                    Please Choose a Airport
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 px-10 ">
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
                                    placeholderText={formattedDate}
                                    minDate={new Date()}
                                    onChange={(flightDate) => {
                                      field.onChange(flightDate);
                                      setFlightDate({
                                        date: flightDate.toISOString(),
                                      });
                                    }}
                                    selected={field.value}
                                    maxDate={oneYearFromNow}
                                  />
                                )}
                              />
                            </div>

                            {/* {dateandtime?.date === "" && validate === true && (
              <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                Please Choose date
              </div>
            )} */}
                          </div>
                        </div>
                      </div>
                      <div className="grid xs:grid-cols-2 gap-2 xxs:grid-cols-1">
                        <div className=" w-[80%] ml-5 xxs:mx-auto xs:mx-0 xxs:w-[90%]   ">
                          <p className="font-medium  xxs:mt-1  text-[16px] mb-2 ">
                            Flight Number
                          </p>
                          <div className="  flex gap-2 bo">
                            <input
                              {...register("flightNumber", {
                                required: true,

                                pattern: {
                                  message: "FlightNumber is required",
                                },
                              })}
                              defaultValue={data?.flightNumber}
                              type="text"
                              value={flightNumber}
                              onChange={(e) => {
                                setFlightNumber(e.target.value);
                              }}
                              className=" border-black border h-[35px] text-black rounded-[5px] xxs:w-[100%]  md:w-[10rem] pl-2   "
                              placeholder="Flight No."
                            />
                            <button
                              className="text-sm border border-black  px-2 py-1 rounded-lg"
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
                              <div className="flex flex-col px-10 ">
                                <div className="font-medium text-[16px]">
                                  <label>Flight Details</label>

                                  <div className="  mb-2 mt-2">
                                    <input
                                      type="text"
                                      name="flightDetails"
                                      className="w-[80%] sm:w-[85%] p-2 rounded-lg text-sm border border-black"
                                      disabled
                                      placeholder={
                                        flightPlaceholder ?? `Flight Detail`
                                      }
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
                  <div className="xxxs:px-4 md:px-0   w-[100%]  justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
                    <p className="xxs:text-[15.5px] xs:text-[16px] mt-2 ">
                      Number of Passengers
                    </p>
                    <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0   h-[30px]">
                      <div className="flex rounded-[5px] overflow-hidden justify-center  ">
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
                          className="  appearance-none border w-[5rem] text-center bg-transparent h-[30px] text-black focus:outline-none"
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
                  <div className="xxxs:px-4 md:px-0   my-3 w-[100%] borer justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10  ">
                    <p className=" xxs:text-[15.5px] xs:text-[16px] mt-2 ">
                      Small Luggage Count
                    </p>

                    <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0   h-[30px]">
                      <div className="flex rounded-[5px] overflow-hidden justify-center ">
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
                          className="border w-[5rem] text-center h-[30px]  bg-transparent text-black  appearance-none focus:outline-none"
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

                  <div className=" mb-3 xxxs:px-4 md:px-0   w-[100%]  justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
                    {
                      <p className=" xxs:text-[15.5px] xs:text-[16px] mt-2">
                        Large Luggage Count{" "}
                      </p>
                    }

                    {
                      <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0   h-[30px]  ">
                        <div className="flex rounded-[5px] overflow-hidden justify-center ">
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
                            className="border w-[5rem] h-[30px] text-center bg-transparent text-black focus:outline-none"
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
                  <div className=" xxxs:px-4 md:px-0 w-[100%] borer justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10">
                    {
                      <p className="xxs:text-[15.5px] xs:text-[16px] mt-2">
                        Total Luggage Count
                      </p>
                    }
                    <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0   h-[30px] ">
                      <div className="flex rounded-[5px]  justify-center ">
                        {
                          <input
                            {...register("luggage")}
                            value={+sluggage + +lluggage}
                            className="border xs:w-[10rem] xxs:w-[9rem] text-center h-[30px]  bg-transparent text-black rounded-[5px] pointer-events-none"
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
                      <div className="mt-2 xxxs:px-4 md:px-0">
                        {
                          <div className="  py-1 w-[100%]   justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
                            <div className=" border-white w-[100%] h-[35px]  bg-transparent text-black  rounded-[5px]  ">
                              <p className=" xxs:text-[15.5px] xs:text-[16px] mt-2 text-[16px] bg-transparent text-black my-2 ">
                                {ele?.label}
                              </p>
                            </div>
                            <div className="flex xs:w-[10rem] xxs:w-[100%] xs:p-0 xxs:px-4  h-[30px]">
                              <div className="flex rounded-[5px] overflow-hidden justify-center ">
                                <button
                                  type="button"
                                  className="h-[30px] border w-[2.5rem] text-[#bd9300] text-center rounded-l-[5px] text-[35px] font-medium"
                                  onClick={() => {
                                    const newData = seatsArray?.map(
                                      (item, index2) => {
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
                                      }
                                    );
                                    setSeatsArray(newData);
                                  }}
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  className="border  h-[30px] w-[5rem] text-center bg-transparent text-black focus:outline-none appearance-none"
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
                                    const newData = seatsArray?.map(
                                      (item, index2) => {
                                        if (index2 === index) {
                                          return {
                                            ...item,
                                            number: item.number + 1,
                                          };
                                        } else {
                                          return item;
                                        }
                                      }
                                    );
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
                <div className="  m-3 flex justify-center rounded-[5px] overflow-hidden ">
                  {submitLoading ? (
                    <div>
                      <Loader />
                    </div>
                  ) : (
                    <button
                      className=" xs:w-[50%] xxs:w-[100%] h-[35px] rounded-[5px] bg-[#bd9300] text-black font-bold text-[16px]  "
                      type="submit"
                    >
                      Update
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateRideForm;
