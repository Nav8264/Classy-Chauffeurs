import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useAtom } from "jotai";
import { Distance } from "../../../store";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { liveurl } from "../../../hostUrl";
import { Controller } from "react-hook-form";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";

const BookingForm = ({
  page,
  setPage,
  stops,
  errors,
  stopsAppend,
  getValues,
  setValue,
  register,
  alldata,
  setpickUp,
  pickUp,
  drop,
  setDrop,
  selectedOption,
  setSelectedOption,
  addStop,
  setAddstop,
  dateandtime,
  setDateandtime,
  control,
  time,
  setTime,
  ridemode,
  setRidemode,
  returnDateAndTime,
  setReturnDateAndTime,
  returnpickup,
  setReturnpickup,
  bookingType,
  setBookingType,
}) => {
  const [place, setPlace] = useState();
  const [modal, setModal] = useState(true);
  const [latitude, setLatitude] = useAtom(Distance);
  const [countryCodeList, setCountryCodeList] = useState([]);

  const getCountryCodeList = () => {
    axios.get(`${liveurl}/api/countryCode`)?.then((res) => {
      setCountryCodeList(res?.data?.result);
    });
  };

  const inputRef = useRef(null);

  const handleTimeChange = (time) => {
    setDateandtime({ ...dateandtime, rideTime: moment(time).toISOString() });
  };

  const handlereturndateime = (time) => {
    setReturnDateAndTime({
      ...returnDateAndTime,
      time: moment(time).toISOString(),
    });
  };
  const currentDateTime = new Date();
  const selectedDateTime = new Date(dateandtime.rideTime);
  const selecteddate = new Date(dateandtime.date).toDateString();
  console.log("selectedDateTime", selecteddate);
  const ReturncurrentDateTime = new Date(dateandtime.rideTime);
  const ReturnselectedDateTime = new Date(returnDateAndTime.time);
  const selectedReturndate = new Date(returnDateAndTime.date).toDateString();

  const rideType = [
    { name: "Point-to-Point", value: "Point-to-Point" },
    { name: "Airport Pickup", value: "Airport-Pickup" },
    { name: "Airport Drop", value: "Airport-Drop" },
    { name: "Event", value: "Event" },
  ];
  const rideModeArr = [
    { name: "One Way Ride", value: "One-Way-Ride" },
    { name: "Round Trip", value: "Round-Trip" },
    { name: "Instant Ride", value: "Instant-Ride" },
  ];
  const oneYearFromNow = new Date();
  oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 12);
  // const [value, onChange] = useState("10:00");
  const [validate, setValidate] = useState(false);

  const googleApi = "AIzaSyDyAUx_-daxFtklRMBcgH5_BWEEpjq_hdo";
  const handleLocation = () => {
    setValidate(true);
    if (!sessionStorage.getItem("bookingType")) {
      sessionStorage.setItem("bookingType", "self");
    }
    if (
      ridemode === "Round-Trip" &&
      selectedOption === "perHour" &&
      pickUp &&
      drop &&
      returnpickup &&
      dateandtime.date &&
      dateandtime.rideTime &&
      returnDateAndTime?.date &&
      returnDateAndTime?.time &&
      pickUp.value.place_id !== drop.value.place_id
    ) {
      console.log("lets");
      setPage(page + 1);
    } else if (
      selectedOption === "perHour" &&
      pickUp &&
      dateandtime.date &&
      dateandtime.rideTime
    ) {
      setPage(page + 1);

      // Handle error when perHour option is selected but required fields are missing
    } else if (
      (ridemode === "One-Way-Ride" || ridemode === "Instant-Ride") &&
      pickUp &&
      drop &&
      dateandtime.date &&
      dateandtime.rideTime
    ) {
      setPage(page + 1);
    } else if (
      pickUp &&
      drop &&
      returnpickup &&
      dateandtime.date &&
      dateandtime.rideTime &&
      returnDateAndTime?.date &&
      returnDateAndTime?.time &&
      pickUp.value.place_id !== drop.value.place_id
    ) {
      console.log("lets ");
      setPage(page + 1);
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
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (ridemode === "Round-Trip") {
      setModal(!modal);
    } else {
      setModal(false);
    }
  }, [ridemode]);

  const HandleRidemode = (event) => {
    setRidemode(event.target.value);
    // console.log("event", event);
    console.log("ridemode", ridemode);
  };
  useEffect(() => {
    if (ridemode === "Round-Trip") {
      setModal(!modal);
    } else {
      setModal(false);
    }
    getCountryCodeList();
  }, [ridemode]);
  return (
    <div>
      <div className=" bg-[#020002] text-white md:w-[100%] h-fit md:px-[100px] md:py-[30px] grid grid-cols-1 gap-  font-normal rounded-lg text-[14px] xxs:w-[100%] xxs:py-5 xxs:px-10">
        <div className="borde flex flex-col p-1">
          <div className="py-2 font-semibold">Pricing</div>
          <div>
            <div className=" flex -ml-2">
              {options.map((option) => (
                <div key={option} className=" flex md:w-[15rem]  ml-2">
                  <input
                    type="radio"
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleOptionChange}
                  />
                  <div className=" ml-1">{option.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-2 border border-[#020002]  "></div>
        </div>
        <div className=" md:grid md:grid-cols-2 gap-x-[1rem] xxs:flex xxs:flex-col xxs:m-1 ">
          <div className=" flex flex-col gap-2 md:w-fit ">
            <label className="font-medium ">Select Service Type</label>
            <div>
              {" "}
              <select
                {...register("rideType")}
                className="border border-white md:w-[15rem] xxs:w-[100%] h-[35px] bg-transparent text-white rounded-[5px] pl-2 "
              >
                {rideType.map((val) => (
                  <option
                    className="h-4 text-white py-4 bg-[#020002] rounded-[5px] my-2"
                    value={val.value}
                  >
                    {val.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" h-5  font-normal mt-1 border border-[#020002]  ">
              {/* empty div for spacing */}
            </div>
          </div>
          <div className="  gap-2 xxs:flex xxs:flex-col  md:w-fit">
            <label className="font-medium ml-5 xxs:m-0">Service Mode</label>
            <div>
              {" "}
              <select
                onChange={HandleRidemode}
                // {...register("rideMode")}
                className="border border-white md:w-[15rem] xxs:w-[100%] ml-4 xxs:m-0 h-[35px] bg-transparent text-white rounded-[5px] pl-2 "
              >
                {rideModeArr.map((val) => (
                  <option
                    className="h-4 text-white py-4 bg-[#020002] rounded-[5px] my-2"
                    value={val.value}
                  >
                    {val.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* {getValues('rideMode')==="instantRide"&&(<div>
          hiii
        </div>)} */}
        </div>
        {/* {alldata?.rideMode==='instantRide'&& (<div className="">sdfsdfsdfds</div>)} */}
        <div className="md:grid md:grid-cols-2 gap-x-[1rem] xxs:flex xxs:flex-col xxs:gap-1 ">
          <div className="flex flex-col gap-2  ">
            <div className="font-medium md:m-0 xxs:mt-2">
              <label>Pickup Date</label>
            </div>
            <div>
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePicker
                    className="border-white text-black border md:w-[15rem] xxs:w-[100%] h-[35px] rounded-[5px] p-2"
                    monthsShown={1}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Date"
                    minDate={new Date()}
                    onChange={(date) => {
                      field.onChange(date);
                      setDateandtime({ ...dateandtime, date: date });
                    }}
                    selected={field.value}
                    maxDate={oneYearFromNow}
                    // value={dateandtime.pickupDate}
                    // onChange={handleChange}
                  />
                )}
              />
            </div>
            <div className="md:w-[14.5rem] h-5 text-red-500 text-[12px] font-normal mt-1 border border-[#020002] mb-2 ">
              {dateandtime?.date === "" && validate === true && (
                <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-[#020002]  ">
                  Please Choose date
                </div>
              )}
            </div>
          </div>
          <div className=" flex flex-col gap-2  ">
            <div className=" font-medium">
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
              type="time"
              onChange={(e) => handleTimeChange(e)}
              className=" h-[35px] rounded-[5px]   text-black border-white border xxs:w-[100%] md:w-[15rem] p-2"
            /> */}

            <div className="  xxs:w-[100%] xs:w-[100%] sm:w-[100%] md:w-[100%] ">
              <TimePicker
                className="w-full"
                use12Hours={true}
                showSecond={false}
                style={{ width: "100%" }}
                hideDisabledOptions
                minuteStep={5}
                placeholder="Time"
                defaultValue={dateandtime?.rideTime}
                onChange={(e) => {
                  handleTimeChange(e);
                  console.log("dateandtime", dateandtime);
                }}
              />
            </div>
            {selectedDateTime <= currentDateTime &&
            selecteddate === new Date().toDateString() ? (
              <div className="  text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                Choose Future time{" "}
                {console.log(
                  "new Date().toDateString() ",
                  new Date().toDateString()
                )}
              </div>
            ) : null}

            <div className="   md:w-[15rem] border border-[#020002] h-5 text-[12px] text-red-500 font-normal mt-1  ">
              {!dateandtime.rideTime && validate === true && (
                <div className=" h-5 text-red-500 text-[12px] font-normal border border-[#020002]   ">
                  Please Choose time
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col font-medium gap-2 xxs:mt-5">
          <label>Pick Up Location</label>
          <GooglePlacesAutocomplete
            type="text"
            apiKey={googleApi}
            ref={inputRef}
            selectProps={{
              onChange: (object) => {
                setpickUp(object);
              },
              placeholder: "Enter pick up location",
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
          />{" "}
          {pickUp?.value &&
            pickUp?.value?.place_id === drop?.value?.place_id && (
              <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                Pickup Location and Drop Location Can't be same
              </div>
            )}
          {!pickUp && validate === true && (
            <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-[#020002]  ">
              Pickup Location is required
            </div>
          )}
          <div className=" h-5  font-normal mt-1 border border-[#020002]  "></div>
        </div>

        <div>
          {selectedOption === "perHour" ? (
            <div>
              <div className=" h-[80px] mt-5 pt-2">
                <div className=" w-[100%] bordr justify-between font-medium xxs:grid xxs:grid-cols-1 xxs:gap-x-[5rem] xxs:gap-2 xs:grid xs:grid-cols-2 xs:gap-10 ">
                  <p className="xxs:text-[15.5px] xs:text-[16px] mt-2 ">
                    Number of Hours
                  </p>
                  <div className="flex xs:w-[12rem] xxs:w-[100%] xs:p-0 xxs:px-5  h-[30px]">
                    <div className="flex rounded-[5px] overflow-hidden justify-center w-[28rem] ">
                      <button
                        type="button"
                        onClick={() => {
                          time === 1
                            ? setTime(time)
                            : setTime(+time - Number(0.5));
                        }}
                        className="h-[30px] rounded-l-[5px] border w-[3.5rem]  text-[#bd9300]  text-center text-[35px] font-medium"
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

                        className="  appearance-none border w-[5rem] text-center bg-transparent h-[30px] text-white focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          time === 24
                            ? setTime(+time)
                            : setTime(+time + Number(0.5));
                        }}
                        className="h-[30px] border w-[3.5rem] text-center text-[#bd9300] text-[35px] font-medium rounded-r-[5px] "
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
                      if (stops[stops?.length - 1]?.stop !== "") {
                        stopsAppend({ stop: "" });
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
                <div className="border border-transparent h-[100px] overflow-y-scroll hide-scrollbar px-4 py-4">
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
                                  stopPlaceId: object?.value?.place_id,
                                  stopName: object?.label,
                                },
                              ]);
                              let newArr = getValues("stops") || [];
                              newArr[index] = {
                                ...newArr[index],
                                stop: object?.label,
                              };
                              setValue("stops", newArr);
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
                        {errors?.test?.[index]?.stops?.type === "required" && (
                          <p className=" ">location is required</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 font-medium   ">
                <label>Drop Off Location</label>

                <GooglePlacesAutocomplete
                  type="text"
                  apiKey={googleApi}
                  ref={inputRef}
                  selectProps={{
                    onChange: (object) => {
                      setDrop(object);
                    },
                    placeholder: "Enter drop off location",
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
        <div className=" flex flex-col pb-1">
          <div>
            <div className=" flex -ml-2 ">
              <div
                key={"self"}
                className="flex md:w-[100%] xxs:w-[12rem]  ml-2 "
              >
                <input
                  type="radio"
                  value={"self"}
                  defaultChecked={false}
                  checked={bookingType === "self"}
                  onChange={(e) => {
                    setBookingType(e?.target?.value);
                    if (!sessionStorage.getItem("bookingType")) {
                      sessionStorage.setItem("bookingType", e?.target?.value);
                    } else {
                      sessionStorage.removeItem("bookingType");
                      sessionStorage.setItem("bookingType", e?.target?.value);
                    }
                  }}
                />

                <div className="ml-1">Booking for Self</div>
              </div>
              <div
                key={"someoneElse"}
                className="flex md:w-[100%] xxs:w-[12rem]  ml-2 "
              >
                <input
                  type="radio"
                  value={"someoneElse"}
                  defaultChecked={false}
                  checked={bookingType === "someoneElse"}
                  onChange={(e) => {
                    setBookingType(e?.target?.value);
                    if (!sessionStorage.getItem("bookingType")) {
                      sessionStorage.setItem("bookingType", e?.target?.value);
                    } else {
                      sessionStorage.removeItem("bookingType");
                      sessionStorage.setItem("bookingType", e?.target?.value);
                    }
                  }}
                />

                <div className="ml-1">Booking for Someone else</div>
              </div>
            </div>
          </div>
          {bookingType === "someoneElse" && (
            <div>
              <div className=" md:grid md:grid-cols-2 xs:gap-3 xxs:m-1 xs:grid xs:grid-cols-2 h-fit">
                <div className=" flex flex-col gap-1 md:w-fit  h-[70px] ">
                  <label className="font-medium ">First Name</label>
                  <div>
                    {" "}
                    <input
                      {...register("passengerFirstName", {
                        required: true,
                        pattern: {
                          message: "Firstname is required",
                        },
                      })}
                      type="text"
                      className="w-[85%] text-black sm:w-[85%] h-8 p-1 rounded-lg text-sm"
                      placeholder="First name"
                    />
                  </div>
                  <div className="h-5  font-normal mt-1 border border-transparent"></div>
                </div>
                <div className=" gap-1 xxs:flex xxs:flex-col  md:w-fit">
                  <label className="font-medium ml-5 xxs:m-0">Last Name</label>
                  <div>
                    <input
                      {...register("passengerLastName", {
                        required: true,
                        pattern: {
                          message: "Lastname is required",
                        },
                      })}
                      type="text"
                      className="w-[85%] text-black sm:w-[85%] h-8 p-1 rounded-lg text-sm "
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className=" flex flex-col gap-1 md:w-fit  h-[70px] ">
                  <label className="font-medium">Email</label>
                  <div>
                    {" "}
                    <input
                      {...register("passengerEmail", {
                        required: true,
                        pattern: {
                          message: "Email is required",
                        },
                      })}
                      type="text"
                      className="w-[85%] text-black sm:w-[85%] h-8 p-1 rounded-lg text-sm "
                      placeholder="Email"
                    />
                  </div>
                  <div className=" h-5  font-normal mt-1 border border-transparent"></div>
                </div>
                <div className=" flex flex-col gap-1 md:w-fit  h-[70px]">
                  <label className="font-medium ">Phone Number</label>
                  <div>
                    <select
                      {...register("passengerCountryCode")}
                      defaultValue={"+91"}
                      className="w-[25%] sm:w-[25%] text-black h-8 pl-1 py-1 rounded-t-lg rounded-l-lg rounded-b-lg text-sm "
                    >
                      {[
                        {
                          _id: "6348f103bff72b138484a5c6",
                          name: "Australia",
                          isoCode: "AU",
                          dialCode: "+91",
                        },
                        ...countryCodeList,
                      ]?.map((val) => (
                        <option
                          className="text-[#020002]"
                          value={val?.dialCode}
                          key={val?._id}
                          id={val?._id}
                        >
                          {val?.dialCode}
                        </option>
                      ))}
                    </select>{" "}
                    <input
                      {...register("passengerPhone")}
                      type="text"
                      placeholder="Phone"
                      className="w-[60%] sm:w-[60%] text-black h-8 pr-1 p-1 rounded-t-lg rounded-r-lg rounded-b-lg text-sm "
                    />
                  </div>
                  <div className="h-5 font-normal mt-1 border border-transparent"></div>
                </div>
              </div>
            </div>
          )}

          <div className="h-2 border border-transparent  "></div>
        </div>
        <div>
          {modal && (
            <div>
              <div className="flex justify-between">
                <hr className=" w-[250px]" />
                <hr className=" w-[250px]" />
              </div>
              <div className=" relative     py-5  ">
                <div className="flex flex-col gap-2 font-medium  w-[100%] text-white">
                  <label>Return Pickup Location</label>

                  <GooglePlacesAutocomplete
                    type="text"
                    apiKey={googleApi}
                    ref={inputRef}
                    selectProps={{
                      onChange: (object) => {
                        setReturnpickup(object);
                      },
                      placeholder: "Enter your location",
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
                <div className="md:grid md:grid-cols-2 xxs:grid-cols-1 gap-x-[1rem] xs:grid xs:grid-cols-2 xxs:gap-1   h-[100%]">
                  <div className="flex flex-col gap-1 mt-2  relative">
                    <div className="font-medium md:m-0 xxs:mt-1">
                      <label>
                        Return Date{" "}
                        {console.log("newDate", new Date(dateandtime.date))}
                      </label>
                    </div>
                    <div>
                      <Controller
                        style={{ zIndex: 1000 }}
                        control={control}
                        name="returndate"
                        render={({ field }) => (
                          <DatePicker
                            className="border-white  text-black border md:w-[10rem] xs:w-[80%] xxs:w-[100%] h-[35px] mt-1 rounded-[5px] p-2"
                            monthsShown={1}
                            dateFormat="dd/MM/yyyy"
                            popperPlacement="top"
                            placeholderText="Date"
                            minDate={new Date(dateandtime.date)}
                            onChange={(e) => {
                              field.onChange(e);
                              console.log("e.target.value :>> ", e);
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

                    {returnDateAndTime?.date === "" && validate === true && (
                      <div className=" h-5 text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                        Please Choose date
                      </div>
                    )}
                  </div>
                  <div className=" flex flex-col h-fit xs:gap-1  xxs:gap-2 mt-2">
                    <div className=" font-medium xs:mt-1 xxs:mt-2">
                      <label className=" ">Return Time</label>
                    </div>

                    {/* <Flatpickr
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                        time_24hr: true,
                        disableMobile: "true",
                      }}
                      // value={returnDateAndTime.time}
                      onChange={(e) => handlereturndateime(e)}
                      className=" h-[35px] rounded-[5px] text-black  border-white border xxs:w-[100%] md:w-[10rem] p-2"
                      type="time"
                    /> */}
                    <div className="  xxs:w-[100%] md:w-[15rem] ">
                      <TimePicker
                        showSecond={false}
                        hideDisabledOptions
                        minuteStep={5}
                        use12Hours={true}
                        placeholder="Time"
                        defaultValue={returnDateAndTime.time}
                        onChange={(e) => handlereturndateime(e)}
                      />
                    </div>
                    {ReturnselectedDateTime <= ReturncurrentDateTime &&
                    selectedReturndate === selecteddate ? (
                      <div className="  text-red-500 text-[12px] font-normal mt-1 border border-transparent  ">
                        Choose Future time{" "}
                        {console.log(
                          " selectedReturndate !== selecteddate",
                          selectedReturndate,
                          selecteddate
                        )}
                      </div>
                    ) : null}

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
        </div>

        <div className=" h-fit  rounded-[5px] overflow-hidden">
          {
            <button
              className=" md:w-[32rem] rounded-[5px] h-[35px] bg-[#bd9300] border-[#bd9300] text-black text-[20px] font-bold xxs:w-[100%] "
              type="button"
              onClick={() => {
                handleLocation();
              }}
            >
              Continue
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
