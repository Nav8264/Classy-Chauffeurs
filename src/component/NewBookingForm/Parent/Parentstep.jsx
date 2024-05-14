import { useEffect, useState } from "react";
import React from "react";
import BookingForm from "../Step1/BookingForm";
import BookingForm2 from "../Step2/BookingForm2";
import { AnimatePresence, motion } from "framer-motion";

import { useFieldArray, useForm } from "react-hook-form";

import loginlogo from "../../../images/logo_1.png";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { meUser, rideBooking, rideBookingType, rideId } from "../../../store";
import { liveurl } from "../../../hostUrl";
import Popupconfirm from "../../PopupConfirm";
import Loader from "../../Loader";
const Parentstep = () => {
  const navigate = useNavigate();
  const [passenger, setPassenger] = useState(1);
  const [notes, setNotes] = useState("");
  const [pickUp, setpickUp] = useState();
  const [drop, setDrop] = useState();
  const [user] = useAtom(meUser);
  const [rideIds, setRideId] = useAtom(rideId);
  const [flightDetails, setFlightDetails] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [flightPlaceholder, setFlightPlaceholder] = useState();
  const [bookingType, setBookingType] = useAtom(rideBookingType);

  const [sluggage, setSluggage] = useState(0);
  const [lluggage, setLluggage] = useState(0);
  const [time, setTime] = useState(1);
  const [child, setChild] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [array, setArray] = useState([]);
  const [page, setPage] = useState(1);
  const [seatsArray, setSeatsArray] = useState([]);
  const [boking, setBooking] = useAtom(rideBooking);
  const [formErrors, setFormErrors] = useState({});

  const [airportData, setAirportData] = useState([]);
  const [airport, setAirport] = useState();
  const [terminal, setTerminal] = useState();
  const [terminalData, setTerminalData] = useState();
  // const [isGuest, setIsGuest] = useState(false);
  const [ridemode, setRidemode] = useState("One-Way-Ride");
  const [returnDateAndTime, setReturnDateAndTime] = useState({
    date: "",
    time: "",
  });
  const [returnpickup, setReturnpickup] = useState("");

  const [addStop, setAddstop] = useState("");
  const [alldata, setAlldata] = useState([
    {
      rideMode: "",
      pickupLocation: "",
      stops: "",
      dropOfLocation: "",
      numberOfPassenger: "",
      luggage: "",
      childSeats: "",
      rideType: "",
    },
  ]);
  const [hours, setHours] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  const url = `${liveurl}/api/adminPanel/rides/createRide`;

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
  const [selectedOption, setSelectedOption] = useState("perKm");

  const initialFormData = {
    date: "",
    time: "",
  };
  const [dateandtime, setDateandtime] = useState({
    date: "",
    rideTime: "",
  });
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
  // const handleToast = (err) => {
  //   toast.error("You are not logged in , Please Login First!", {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };
  // let guest = sessionStorage.getItem("guestData");
  // let guestParse = JSON.parse(guest);
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
  const onSubmit = (data) => {
    setSubmitLoading(true);
    if (page === 1) {
      return setPage(2);
    }
    if (!flightPlaceholder && data?.rideType === "Airport-pickup") {
      setSubmitLoading(false);
      return handleToast("error", "Please check flight first");
    }

    delete data?.child;
    delete data?.count;
    delete data?.count2;
    delete data?.test;
    delete data?.age;
    delete data?.stops;
    delete data?.aa;
    delete data?.returndate;
    delete data?.flightDate;
    const newDate = new Date(returnDateAndTime?.date);
    const newTime = new Date(returnDateAndTime?.time);
    newDate.setHours(newTime.getHours());
    newDate.setMinutes(newTime.getMinutes());
    newDate.setSeconds(newTime.getSeconds());

    const submitForm = async (data) => {
      const selectedDate = new Date(data?.date);
      const selectedTime = new Date(dateandtime?.rideTime);
      selectedDate.setHours(selectedTime.getHours());
      selectedDate.setMinutes(selectedTime.getMinutes());
      selectedDate.setSeconds(selectedTime.getSeconds());
      try {
        const payload = {
          ...data,
          notes: notes ? notes : "",
          pickupLocation: pickUp?.label,
          dropLocation: drop?.label,
          dropPlaceId: drop?.value?.place_id,
          pickupPlaceId: pickUp?.value?.place_id,
          passengers: Number(passenger),
          luggageCapacityLarge: Number(lluggage),
          luggageCapacitySmall: Number(sluggage),
          luggage: lluggage + sluggage,
          rideTime: dateandtime.rideTime,
          addStop: addStop,
          numberOfHours: time,
          flightId: flightDetails?.fa_flight_id,
          airportId: airport?.split("-")[1],
          // flightDetails: flightDetails[0],
          // flightDetails: flightDetails,
          returnPickupLocation: returnpickup?.label,
          returnPickupPlaceId: returnpickup?.value?.place_id,
          rideMode: ridemode,
          returnDateAndTime: newDate,

          paymentType: selectedOption || "",
          childSeats: seatsArray?.length
            ? seatsArray?.map((item) => {
                return { [item?.name]: `${item?.number}` };
              })
            : [{ infant: "0" }, { toddler: "0" }, { booster: "0" }],
          customerId: user?.data?._id,
          date: selectedDate,
          // Other properties here...
        };
        if (ridemode !== "Round-Trip") {
          delete payload?.returnDateAndTime;
          delete payload?.returnPickupLocation;
          delete payload?.returnPickupPlaceId;
        }
        if (data?.rideType !== "Airport-Pickup") {
          delete payload?.flightId;
          delete payload?.airportId;
          delete payload?.flightNumber;
        }
        delete payload?.aa;
        if (bookingType === 'someoneElse') {
          payload.firstName = data?.passengerFirstName;
          payload.lastName = data?.passengerLastName
          payload.email = data?.passengerEmail;
          payload.phoneNo = Number(data?.passengerPhone);
          payload.countryCode = data?.passengerCountryCode;
        }
        delete payload?.passengerFirstName;
        delete payload?.passengerLastName;
        delete payload?.passengerEmail;
        delete payload?.passengerPhone;
        delete payload?.passengerCountryCode;
        const res = await axios.post(url, payload);
        const serializedData = JSON.stringify(payload);

        setRideId(res.data.ride_id);
        if (window.sessionStorage.getItem("userRideId")) {
          window.sessionStorage.removeItem("userRideId");
          window.sessionStorage.setItem("userRideId", res.data.ride_id);
        } else {
          window.sessionStorage.setItem("userRideId", res.data.ride_id);
        }
        if (window.localStorage.getItem("Ride_data")) {
          window.localStorage.removeItem("Ride_data");
          window.localStorage.setItem("Ride_data", serializedData);
        } else {
          window.localStorage.setItem("Ride_data", serializedData);
        }
        setSubmitLoading(false);
        setArray(res);
        if (res?.data?.success) {
          navigate("/Vehicle");
        }
      } catch (error) {
        console.error("An error occurred while submitting the form:", error);
        // Handle other types of errors here...
      }
    };

    submitForm(data);
  };

  useEffect(() => {
    window.localStorage.removeItem("userRideId");
  }, []);

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="relative">
          <ToastContainer />
          <div className="breadcrumb  wf-section z-50 h-full  ">
            {" "}
            <h1 className="heading-7218">
              <div className="bold-text-282  text-[35px] text-center">
                Booking 
              </div>
            </h1>{" "}
          </div>
          <div className="flex justify-center my-[3rem] ">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="top-52 bg-[#020002] md:rounded-[20px] xxs:rounded-[5px] rounded-[10px]  xxs:mx-[1rem] ">
                <div className=" flex flex-col ">
                  <div className="  mt-5 flex flex-col gap-5 ">
                    <div className=" flex justify-center xxs:hidden  md:flex md:justify-center">
                      <img
                        src={loginlogo}
                        height={500}
                        width={500}
                        style={{}}
                        loading="lazy"
                        alt=""
                        className=""
                      />
                    </div>
                    <div className=" flex justify-center md:hidden">
                      <img
                        src={loginlogo}
                        height="80%"
                        width="80%"
                        style={{}}
                        loading="lazy"
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="border border-[#020002] flex justify-center">
                      <div className="rounded-[5px] h-2.7 border-[1px] border-white xxs:w-[80%]  md:w-[500px] flex justify-start ">
                        <div
                          className="progress-bar--inner h-2 text-lg pt-px pl-1 text-black"
                          style={{
                            width: page === 1 ? "2%" : "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {page === 1 && (
                    <BookingForm
                      page={page}
                      alldata={alldata}
                      setDrop={setDrop}
                      drop={drop}
                      setpickUp={setpickUp}
                      pickUp={pickUp}
                      setPage={setPage}
                      stopsAppend={stopsAppend}
                      stops={stops}
                      errors={errors}
                      stopsRemove={stopsRemove}
                      register={register}
                      addStop={addStop}
                      setValue={setValue}
                      clearErrors={clearErrors}
                      setError={setError}
                      setAddstop={setAddstop}
                      dateandtime={dateandtime}
                      setDateandtime={setDateandtime}
                      control={control}
                      getValues={getValues}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      time={time}
                      setTime={setTime}
                      ridemode={ridemode}
                      setRidemode={setRidemode}
                      returnDateAndTime={returnDateAndTime}
                      setReturnDateAndTime={setReturnDateAndTime}
                      returnpickup={returnpickup}
                      setReturnpickup={setReturnpickup}
                      bookingType={bookingType}
                      setBookingType={setBookingType}
                    />
                  )}
                  {page === 2 && (
                    <BookingForm2
                      notes={notes}
                      setNotes={setNotes}
                      page={page}
                      seatsArray={seatsArray}
                      setSeatsArray={setSeatsArray}
                      setPage={setPage}
                      childSeatAppend={childSeatAppend}
                      childSeat={childSeat}
                      errors={errors}
                      childSeatRemove={childSeatRemove}
                      register={register}
                      hours={setHours}
                      getValues={getValues}
                      setValue={setValue}
                      setAlldata={setAlldata}
                      passenger={passenger}
                      setPassenger={setPassenger}
                      lluggage={lluggage}
                      sluggage={sluggage}
                      child={child}
                      setChild={setChild}
                      time={time}
                      setTime={setTime}
                      setSluggage={setSluggage}
                      setLluggage={setLluggage}
                      submitLoading={submitLoading}
                      flightDetails={flightDetails}
                      setFlightDetails={setFlightDetails}
                      flightNumber={flightNumber}
                      setFlightNumber={setFlightNumber}
                      control={control}
                      airportData={airportData}
                      setAirportData={setAirportData}
                      airport={airport}
                      setAirport={setAirport}
                      terminalData={terminalData}
                      setTerminalData={setTerminalData}
                      terminal={terminal}
                      setTerminal={setTerminal}
                      clearErrors={clearErrors}
                      setFlightPlaceholder={setFlightPlaceholder}
                      flightPlaceholder={flightPlaceholder}
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Parentstep;
