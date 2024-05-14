import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../../component/Loader";
const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <div>
      {/* privacy */}
      {loading ? (
        <div className=" bg-transparent z-[1] absolute w-[100%] h-screen">
          <div className="flex justify-center bg-white h-screen">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <div class="bredcrumbs-div wf-section"></div>
          <div class="breadcrumb wf-section">
            <AnimatePresence>
              <motion.div
                data-w-id="651acf69-719f-4dc1-2a02-199ea82bd102"
                class="heading-7226"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <strong class="bold-text-279 w-full">Privacy Policy</strong>
              </motion.div>
            </AnimatePresence>
          </div>
          <div class="content-section-2 wf-section ">
            <div class="container-504 px-2 md:px-[10rem] xl:px-[20rem] w-container">
              <AnimatePresence>
                <motion.div
                  data-w-id="f5347206-f5dd-a57a-80ac-267a6f936786"
                  class="div-block-31816"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div class="div-block-31817"></div>
                  <div class="div-block-31818 size xxxs:w-[60%] xs:w-[50%] sm:w-[37%] lg:w-[29%]">
                    <h1 class="heading-7218 c1">
                      <strong class="bold-text-282 ">Privacy Policy</strong>
                    </h1>
                  </div>
                  <div class="div-block-31817"></div>
                </motion.div>
              </AnimatePresence>
              <div class="main-content-box ">
                <p class="paragraph-2213">
                  The following document sets forth the Privacy Policy for the
                  ClassyChauffeurs website, www.blackgrandeurchauffeur.com.au
                  <br />
                </p>
                <p class="paragraph-2213 ">
                  ClassyChauffeurs is committed to providing you with the best
                  possible chauffeur driven experience. Black Grandeur Chauffeur
                  is bound by the privacy amendment (enhancing privacy
                  protection) Act 2012 which amends the privacy law 1988 and the
                  Australian privacy principles.
                  <br />
                </p>
                <h1 class="inner-content-heading">
                  <strong>Collection of your personal information</strong>
                </h1>
                <p class="paragraph-2213">
                  ClassyChauffeurs may also collect background location data
                  from drivers using our services. This data is collected for
                  the purpose of tracking the location of drivers and
                  facilitating the delivery of services to customers. By using
                  our services as a driver, you consent to the collection and
                  use of your background location data for these purposes.
                  <br />
                </p>
                <h1 class="inner-content-heading">
                  <strong>Sharing of your personal information</strong>
                </h1>
                <p class="paragraph-2213">
                  We may occasionally hire other companies to provide services
                  on our behalf, including but not limited to promotional
                  activities, processing bookings or customer service queries.
                  Those companies will be permitted to obtain only the personal
                  information they need to deliver the service. Black Grandeur
                  Chauffeur takes all reasonable steps to ensure that these
                  organisations are bound by confidentiality and privacy
                  obligations in relation to the protection of your personal
                  information.
                  <br />
                </p>
                <h1 class="inner-content-heading">
                  <strong>Use of your personal information</strong>
                </h1>
                <p class="paragraph-2213">
                  For each visitor to reach the site, we expressively collect
                  the following non-personally identifiable information,
                  including but not limited to browser type, version and
                  language, operating system, pages viewed while browsing the
                  Site, page access times and referring website address. This
                  collected information is used solely internally for the
                  purpose of gauging visitor traffic, trends and delivering
                  personalized content to you while you are at this Site. From
                  time to time, we may use customer information for new,
                  unanticipated uses not previously disclosed in our privacy
                  notice. If our information practices change at some time in
                  the future we will use these for new purposes only, data
                  collected from the time of the policy change forward will
                  adhere to our updated practices.
                  <br />
                </p>
                <h1 class="inner-content-heading">
                  <strong>Changes to this Privacy Policy</strong>
                </h1>
                <p class="paragraph-2213">
                  ClassyChauffeurs reserves the right to make amendments to this
                  Privacy Policy at any time. If you have objections to the
                  Privacy Policy, you should not access or use the Site.
                  <br />
                </p>
                <h1 class="inner-content-heading">
                  <strong>Accessing Your Personal Information</strong>
                </h1>
                <p class="paragraph-2213">
                  You have a right to access your personal information, subject
                  to exceptions allowed by law. If you would like to do so,
                  please let us know. You may be required to put your request in
                  writing for security reasons. ClassyChauffeurs reserves the
                  right to charge a fee for searching for, and providing access
                  to, your information on a per request basis.
                  <br />
                </p>
                <h1 class="inner-content-heading">
                  <strong>Contacting us</strong>
                </h1>
                <p class="paragraph-2213">
                  ClassyChauffeurs welcomes your comments regarding this Privacy
                  Policy. If you have any questions about this Privacy Policy
                  and would like further information, please contact us by any
                  of the following means during business hours Monday to Friday.
                  <br />
                </p>
                <p class="paragraph-2213">
                  Call: 0424 540 030
                  <br />
                </p>
                <p class="paragraph-2213">
                  Post:
                  <br />
                </p>
                <p class="paragraph-2213">
                  Attn: Privacy Policy
                  <br />
                  ClassyChauffeurs
                  <br />
                  Brisbane, Goldcoast and Sunshine Coast,
                  <br />
                  Australia
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
