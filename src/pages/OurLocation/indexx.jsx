import React from "react";
import { Link } from "react-router-dom";
import Ausimg from "../../images/icons8-australia-96.png";
import newzealandimg from "../../images/icons8-new-zealand-96.png";
import AustraliaWide from "../AustraliaWide";

const OurLocation = () => {
  return (
    <div>
      <nav class="navigation-dropdown-3 w-dropdown-list">
        <div class="dropdown-pointer-2 group">
          <div class="dropdown-wrapper-2 ">
            <div>
              <Link
                to={"/austrial"}
                aria-current="page"
                class="dropdown-link border w-inline-block w--current "
              >
                <div class="icon-wrap-2">
                  <img src={Ausimg} alt="" loading="lazy" class="icon" />
                </div>
                <div class="nav-content-wrap-3">
                  <div class="dropdown-title-2">Australia Wide</div>
                  <div class="nav-link-details-2">Clone webflow components</div>
                </div>
              </Link>
              <Link
                to={"newzealand"}
                class="dropdown-link border w-inline-block"
              >
                <div class="icon-wrap-2">
                  <img src={newzealandimg} alt="" loading="lazy" class="icon" />
                </div>
                <div class="nav-content-wrap-3">
                  <div class="dropdown-title-2">NEW ZEALAND Wide</div>
                  <div class="nav-link-details-2">Clone webflow components</div>
                </div>
              </Link>
              <div
                data-w-id="8ec2bdfc-40d6-6e92-69f4-8a08792b18ce"
                class="dropdown-3"
              >
                <div class="dropdown-list-2 hide-optins list1"></div>
              </div>
            </div>
          </div>
          <div class="pointer-2"></div>

          <div className="">
            <AustraliaWide />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default OurLocation;
