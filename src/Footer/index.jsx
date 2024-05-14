import React from "react";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import location from "../images/location.svg";
// import logo from "../images/Final.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="footer font-[Cinzel]  "
    >
      <div className="footer-section wf-section    xxs:px-4   lg:px-28 xl:px-40 ">
        <div className="container-1 horizontal w-container    "></div>
        <div className="container-501 w-container   px-4 ">
          <div className="footer-second   ">
            <div className="w-layout-grid   grid  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 ">
              <div
                id="w-node-_20aaed9d-6773-fd3a-4a7f-e446a63426ef-6dbce4cf"
                className="footer-one  xxs:text-center sm:text-start  xs:text-start   "
              >
                <h1 className="footer-head  ">Contact Details</h1>
                <div className="footer-desc xxs:text-center   xs:text-start ">
                  If you have any questions or need help. feel free contact our
                  team.
                </div>
                <a
                  href="tel:+911300339525"
                  className="phone-block w-inline-block xxs:text-center sm:text-start "
                >
                  <img
                    src={phone}
                    loading="lazy"
                    alt="phone symbol"
                    className="image"
                  />
                  <div className="phone-text xxs:text-center sm:text-start">
                    +91 1300 339 525
                  </div>
                </a>
                <a
                  href="mailto:support@blackgrandeurchauffeur.com"
                  className="email-block w-inline-block xxs:text-center sm:text-start  "
                >
                  <img src={email} loading="lazy" alt="Email symbol" />
                  <div className="email-text ">
                    support@blackgrandeurchauffeur.com
                  </div>
                </a>
              </div>
              <div className="footer-two  xxxs:text-center sm:text-start  xs:text-start sm:ml-[125px]  ">
                <h1 className="footer-head ">Links</h1>
                <div className="ft-link-blocks xxxs:text-center sm:text-start  xs:text-start  sm:ml-0">
                  <Link
                    to={"/"}
                    aria-current="page"
                    className={`${
                      window.location.pathname === "/"
                        ? "text-[#bd9300]"
                        : "flb-link"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`${
                      window.location.pathname === "/about"
                        ? "text-[#bd9300]"
                        : "flb-link"
                    }`}
                  >
                    About us
                  </Link>

                  <Link
                    to={"/services"}
                    className={`${
                      window.location.pathname === "/services"
                        ? "text-[#bd9300]"
                        : "flb-link"
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to={"/ourfleet"}
                    className={`${
                      window.location.pathname === "/ourfleet"
                        ? "text-[#bd9300]"
                        : "flb-link"
                    }`}
                  >
                    Our Fleet
                  </Link>
                  <Link
                    to={"/blog"}
                    className={`${
                      window.location.pathname === "/blog"
                        ? "text-[#bd9300]"
                        : "flb-link"
                    }`}
                  >
                    Blog
                  </Link>
                  <Link
                    to={"/contact"}
                    className={`${
                      window.location.pathname === "/contact"
                        ? "text-[#bd9300]"
                        : "flb-link"
                    }`}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
              <div
                className="footer-three xxs:text-center xs:text-start
              
              sm:text-start  sm:ml-[30px] "
              >
                <h1 className="footer-head">Locations</h1>
                <div className="ft-link-blocks   xxxs:text-center sm:text-start   xs:text-start sm:ml-0">
                  <Link
                    to={"/australia"}
                    className={`${
                      window.location.pathname === "/australia"
                        ? "text-[#bd9300]"
                        : "flb-link"
                    }`}
                  >
                    Australia Wide
                  </Link>
                  <Link
                    to={"/newzealand"}
                    className={`${
                      window.location.pathname === "/newzealand"
                        ? "text-[#bd9300]"
                        : "flb-link"
                    }`}
                  >
                    New Zealand Wide
                  </Link>
                </div>
              </div>
              <div className="footer-four xxxs:text-center sm:text-start  sm:ml-20  lg:ml-0 xl:mx-auto  xs:text-start ">
                <h1 className="footer-head">Helpful Links</h1>
                <div className="ft-link-blocks   xxxs:text-center sm:text-start  xs:text-start sm:ml-0  ">
                  <Link to={"/privacypolicy"} className="flb-link">
                    Privacy Policy
                  </Link>
                  <Link to={"/termsandcondition"} className="flb-link">
                    Terms & Condition
                  </Link>
                  <Link href="#" className="flb-link ">
                    Corporate Open Account Autorization PDF Form
                  </Link>
                </div>
              </div>
              <div className="footer-five  xxs:text-center sm:text-start lg:ml-20  xs:text-start  ">
                <h1 className="footer-head  ">Follow Us</h1>
                <div className="   flex  justify-center xs:justify-start">
                  <a
                    href="https://www.facebook.com/blackgrandeurchauffeur"
                    target="_blank"
                    className="social-icon w-inline-block"
                  >
                    <div className="facebook-icon"></div>
                  </a>
                  <a
                    href="https://www.instagram.com/black_grandeur_chauffeur/"
                    target="_blank"
                    className="social-icon l w-inline-block"
                  >
                    <div className="text-block-6"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-block"></div>
          <div className="copyright-section">
            <div className="cs-left">
              <div className="csl-text">© 2024 ClassyChauffeurs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
