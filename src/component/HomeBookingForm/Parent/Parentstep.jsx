/* eslint-disable no-lone-blocks */
import { useState } from "react";
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
import { meUser, rideBooking, rideBookingType, rideId } from "../../../store";
import { liveurl } from "../../../hostUrl";
import Popupconfirm from "../../PopupConfirm";
import { ToastContainer, toast } from "react-toastify";
const Parentstep = () => {
  const navigate = useNavigate();
  const [passenger, setPassenger] = useState(1);
  const [pickUp, setpickUp] = useState();
  const [drop, setDrop] = useState();
  const [user] = useAtom(meUser);
  const [rideIds, setRideId] = useAtom(rideId);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [flightDetails, setFlightDetails] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [flightPlaceholder, setFlightPlaceholder] = useState();
  const [bookingType, setBookingType] = useAtom(rideBookingType);

  const [sluggage, setSluggage] = useState(0);
  const [lluggage, setLluggage] = useState(0);
  const [time, setTime] = useState(1);
  const [child, setChild] = useState([]);
  // const [isGuest, setIsGuest] = useState(false);
  const [array, setArray] = useState([]);
  const [page, setPage] = useState(1);
  const [seatsArray, setSeatsArray] = useState([]);
  const [boking, setBooking] = useAtom(rideBooking);
  const [formErrors, setFormErrors] = useState({});

  const [airportData, setAirportData] = useState([]);
  const [airport, setAirport] = useState();
  const [terminal, setTerminal] = useState();
  const [terminalData, setTerminalData] = useState();
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
  console.log("bookingType", bookingType);
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
  // let guest = sessionStorage.getItem("guestData");
  // let guestParse = JSON.parse(guest);
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

    // const selectedDate = moment(data?.date).format("YYYY-MM-DD");
    //   const selectedTime = moment(dateandtime?.rideTime).format("HH:mm:ss.SSS");
    //   const mergedTimestamp = moment(`${selectedDate}T${selectedTime}Z`);
    const submitForm = async (data) => {
      const selectedDate = new Date(data?.date);
      const selectedTime = new Date(dateandtime?.rideTime);
      selectedDate.setHours(selectedTime.getHours());
      selectedDate.setMinutes(selectedTime.getMinutes());
      selectedDate.setSeconds(selectedTime.getSeconds());
      try {
        const payload = {
          ...data,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,

          //this data is commented because of booking type scenerio
          // firstName: user?.data?.name || guestParse?.name,
          // email: user?.data?.email || guestParse?.email,
          // lastName: user?.data?.lastName || "",
          // countryCode: user?.data?.countryCode || " +91",
          // phoneNo: Number(user?.data?.phone) || guestParse?.number || 0,
          notes: notes ? notes : "",
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
          rideTime: dateandtime?.rideTime,
          addStop: addStop,
          numberOfHours: time,
          rideMode: ridemode,
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
          date: selectedDate,
          customerId: user?.data?._id,
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

        if (bookingType === "someoneElse") {
          payload.firstName = data?.passengerFirstName;
          payload.lastName = data?.passengerLastName;
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

        console.log("res", res);
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
        console.log(error);
      }
    };
    submitForm(data);
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
  return (
    <div className="">
      <div>
        <ToastContainer />
      </div>
      <div className=" z-[100000]sm:mr-20 md:mr-10 lg:mr-20  xxs:block xxs:mt-0 sm:pt-20  lg:p-0 xxxs:hidde xs:block xs:w-[482px] mx-auto xxs:rounded-none xs:rounded-[25px] overflow-hidde">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className=" bg-black  top-52 bg-transparent md:rounded-[20px] xxs:rounded-[5px] overflw-hidden  xxs:py-[2rem] xxs:px-[2rem] xs:w-[100%] xxs:w-[100%]  "
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6923144257703081) 5%)",
              }}
            >
              <div className=" z-[100000]">
                {page === 1 && (
                  <BookingForm
                    page={page}
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
                    alldata={alldata}
                    dateandtime={dateandtime}
                    setDateandtime={setDateandtime}
                    control={control}
                    setSeatsArray={setSeatsArray}
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
                    getValues={getValues}
                    bookingType={bookingType}
                    setBookingType={setBookingType}
                  />
                )}
                {page === 2 && (
                  <BookingForm2
                    setNotes={setNotes}
                    notes={notes}
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
                    control={control}
                    setTime={setTime}
                    setSluggage={setSluggage}
                    setLluggage={setLluggage}
                    submitLoading={submitLoading}
                    flightDetails={flightDetails}
                    setFlightDetails={setFlightDetails}
                    flightNumber={flightNumber}
                    setFlightNumber={setFlightNumber}
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
    </div>
  );
};

export default Parentstep;
