import { atom } from "jotai";
export const meUser = atom([]);
export const rateStar = atom(1);
export const Distance = atom({});
export const rideId = atom();
export const guest = atom({
  name: "",
  countryCode: "+91",
  email: "",
  phone: "",
});
export const rideBooking = atom(false);
export const rideBookingType = atom("self");
