import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetail";
import Blog from "./pages/BlogPage";
import Home from "./pages/home/index";
import Services from "./pages/servicepage";
import OurFleetPage from "./pages/OurFleetPage";
import ContacUS from "./pages/ContactUs";
// import Booking from "./pages/Booking";
import LogInForm from "./pages/LogInForm";
// import SignUp from "./SignUp";

import OurLocations0 from "./pages/OurLocations0";
import OurLocation from "./pages/OurLocation";
import NewZeaLand from "./pages/NewZealand";
import { useState } from "react";
import ScrollToTop from "./component/srollTop";
import TermsAndCondition from "./pages/TermsAndConditions";
import SignUp from "./pages/SignUp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BasicLayout from "./layout/BasicLayout";

import Parentstep from "./component/NewBookingForm/Parent/Parentstep";

import Vehicle from "./pages/Vehicle";
import Feedback from "./pages/Feedback";
import MyRides from "./pages/Vehicle/Myrides";

import Guest from "./pages/SignUp/Guest";
import ForgotEmail from "./pages/ForgotPassword/ForgotEmail";
import ForgotOTP from "./pages/ForgotPassword/ForgotOTP";
import NewPassword from "./pages/ForgotPassword/NewPassword";
import Otp from "./pages/SignUp/Otp/index";
import Loading from "./pages/Loading";
import Device from "./pages/Device";
import UpdateRideForm from "./pages/UpdateRideForm";
import CheckOutPage from "./pages/CheckoutPage";
import OurLocations from "./pages/OurLocations";
// import { AirportTransfer } from "./component/AirportTransfer/AirportTransfer";
import AirportTransfers from "./pages/AirportTransfer";
import DeleteAccount from "./pages/deleteAccount";

function App() {
  const [nav, setNav] = useState(false);

  const location = useLocation();
  console.log("location", location);
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <BasicLayout nav={nav} setNav={setNav}>
              <Home nav={nav} setNav={setNav} />
            </BasicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <BasicLayout>
              <About />
            </BasicLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <BasicLayout>
              <Blog />
            </BasicLayout>
          }
        />
        <Route
          path="/services"
          element={
            <BasicLayout>
              <Services />
            </BasicLayout>
          }
        />
        <Route
          path="/blog/:blogId"
          element={
            <BasicLayout>
              <BlogDetails />
            </BasicLayout>
          }
        />
        <Route
          path="/ourfleet"
          element={
            <BasicLayout>
              <OurFleetPage />
            </BasicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <BasicLayout>
              <ContacUS />
            </BasicLayout>
          }
        />

        <Route
          path="/ourLocation/:place"
          element={
            <BasicLayout>
              <OurLocations />
            </BasicLayout>
          }
        />

        <Route
          path="/AirportTransfer/:airport"
          element={
            <BasicLayout>
              <AirportTransfers />
            </BasicLayout>
          }
        />
        <Route
          path="/newzealand"
          element={
            <BasicLayout>
              <NewZeaLand />
            </BasicLayout>
          }
        />
        <Route
          path="/booking"
          element={
            <>
              <BasicLayout>
                <Parentstep />
              </BasicLayout>
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/continue-guest" element={<Guest />} />
        <Route path="/login" element={<LogInForm />} />
        <Route
          path="/ourlocation"
          element={
            <BasicLayout>
              <OurLocation />
            </BasicLayout>
          }
        />
        <Route
          path="/privacypolicy"
          element={
            <BasicLayout>
              <PrivacyPolicy />
            </BasicLayout>
          }
        />
        <Route
          path="/termsandcondition"
          element={
            <BasicLayout>
              <TermsAndCondition />
            </BasicLayout>
          }
        />
        <Route path="/vehicle" element={<Vehicle />} />

        <Route
          path="/feedback"
          element={
            <BasicLayout>
              <Feedback />
            </BasicLayout>
          }
        />
        <Route path="/forgotpassword/forgotemail" element={<ForgotEmail />} />
        <Route
          path="/forgotpassword/forgotemail/:email"
          element={<ForgotOTP />}
        />
        <Route
          path="/forgotpassword/forgotemail/otp/:email"
          element={<NewPassword />}
        />
        <Route path="/device" element={<Device />} />
        <Route path="/deleteAccount" element={<DeleteAccount />} />

        <Route path="/booking/myrides" element={<MyRides />} />
        <Route path="booking/loading/:vehicle" element={<Loading />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/updateride/:id" element={<UpdateRideForm />} />
        <Route path="/checkout" element={<CheckOutPage />} />

        {/* Temporary */}
        <Route
          path="/ourLocation0/:place"
          element={
            <BasicLayout>
              <OurLocations0 />
            </BasicLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
