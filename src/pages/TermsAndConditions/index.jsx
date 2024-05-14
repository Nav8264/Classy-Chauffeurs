import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Loader from "../../component/Loader";

const TermsAndCondition = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  return (
    <div>
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
            <h1
              data-w-id="4549cf69-8c89-334e-6369-e330e01e359c"
              class="heading-7226"
            >
              <strong class="bold-text-279">TERMS & Conditions</strong>
            </h1>
          </div>

          <div class="content-section wf-section">
            <div class="container-504 w-container   mx-4 md:mx-[6rem]    xl:mx-[16rem]">
              <AnimatePresence>
                <motion.div
                  data-w-id="c83b9e04-4854-46b3-8190-3352b22e7b25"
                  className="div-block-31816"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.4 }}
                >
                  <div class="div-block-31817"></div>
                  <div className="div-block-31818  size xxxs:w-[100%] xs:w-[50%] sm:w-[37%] lg:w-[29%]">
                    <h1 className="heading-7218  c1">
                      <strong className="bold-text-282 ">
                        TERMS & Conditions
                      </strong>
                    </h1>
                  </div>
                  <div class="div-block-31817"></div>
                </motion.div>
              </AnimatePresence>
              <div class="main-content-box">
                <p class="paragraph-3">
                  Welcome to ClassyChauffeurs (the
                  "www.blackgrandeurchauffeur.com.au"). This Website is owned
                  and operated by ClassyChauffeurs ("we", "us" or "our"). Please
                  carefully read the following terms and conditions governing
                  your use of our App , Website and Services ("Terms and
                  conditions"). By accessing the App , Website and using our
                  services, you agree to and are bound by these Terms and
                  Conditions. IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS,
                  DO NOT USE OUR APP , WEBSITE AND OUR SERVICES. We reserve the
                  right to change the Terms and Conditions at any time and will
                  post any new or revised Terms and Conditions on the Website.
                  Your continued use of this Website and using our services
                  constitutes acceptance of the Terms and conditions in effect
                  at the time of such use. Accordingly, we recommend that you
                  periodically visit this page to review the then-current Terms
                  and conditions to which you are bound.
                </p>
                <p class="paragraph-3">
                  All transactions are done in Australian Dollars: All
                  transactions, be it in cash, e-payment, or by credit or debit
                  cards shall be conducted in Australian Dollars unless in case
                  of exceptions as per our discretion.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">SSL Statement</strong> – This website
                  supports Secure Socket Layers of 128-bit and greater.
                  You/Your/hirer = The individual, company, or entity who booked
                  and paid for the vehicle hire and their accompanying guests.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Reservations</strong> – Online
                  quotations in terms of price, time, or distance are for
                  guidance only and are subject to management's verification and
                  approval/acceptance. We are not bound to accept a quotation
                  generated incorrectly because of some bug or glitch in the
                  price database.
                </p>
                <p class="paragraph-3">
                  We only accept online bookings for the today, next day or
                  later and reservations are always processed during office
                  hours.
                </p>
                <p class="paragraph-3">
                  For last minute transfer bookings please contact us at
                  Helpline Number – 0424 540 030. Bookings made via e-mail
                  within a short period of time cannot be guaranteed to be
                  fulfilled. If the booking for your transfer is made by
                  telephone, your reservation is also subject to, acceptance of
                  the terms and conditions described on this page. An online
                  booking is not a confirmed booking until such time the booking
                  details are verified and sent to you with a confirmation of
                  the booking details with a reference number. If you attempt to
                  make an online booking and do not receive a confirmation email
                  / booking reference number, please feel free to contact us
                  either by telephone / email. We are not responsible for any
                  bookings that contain incorrect contact details and hence
                  cannot be verified. All such bookings shall remain as
                  unconfirmed bookings. All bookings made either online /
                  offline are subject to vehicle availability. If we are already
                  booked, then we will advise via reply email as soon as
                  possible. If our service includes two or more passengers, the
                  person making the reservation shall be deemed and will act as
                  an agent for all members of the party and accepts the service
                  conditions on behalf of each member of the party. Bookings
                  done over the telephone or via email are also deemed to accept
                  the terms and conditions of this website. Pick up times are at
                  the sole discretion of the passenger, ClassyChauffeurs will
                  only provide guidance in the form of typical travel times and
                  distances. Allowances should be made for the time of day, peak
                  traffic congestion and weather conditions or any
                  circumstances. We shall not be, under any circumstances, be
                  responsible for missed flights / late arrival at destinations.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Cancellations / Amendments–
                    <br />
                  </strong>
                </p>
                <ul role="list" class="list-7">
                  <li class="l-item">
                    If vehicle is cancelled before 36 hours of service, a full
                    refund will be initiated.
                  </li>
                  <li class="l-item">
                    If vehicle is cancelled within 36 hours of service, 50%
                    refund will be initiated.
                  </li>
                  <li class="l-item">
                    If vehicle is cancelled within 24 hours of service, 100% of
                    the charges will be applied and no refund will be issued.
                  </li>
                </ul>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Stretch limousine cancellation
                    <br />
                  </strong>
                </p>
                <p class="paragraph-3">
                  If vehicle is cancelled within 72 hours of the service date
                  100% of the charges will be applied and no refund will be
                  issued.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Cancellation – General & School Formals/Functions/Weddings
                    <br />
                  </strong>
                </p>
                <p class="paragraph-3">
                  Your deposit is NOT refundable if your booking is cancelled
                  within 15 days of the booked date. The total confirmed fee may
                  be charged if the reservation is cancelled within 7 days of
                  the booked date.
                </p>
                <p class="paragraph-3">
                  Cancellations MUST be made in writing (email or letter) by
                  quoting your booking reference number at least 14 days prior
                  to the booked date.
                </p>
                <p class="paragraph-3">
                  We ask that you provide as much notice as possible if your
                  flight is cancelled. If there are any delays in customs, you
                  must contact us as soon as possible to inform us about the
                  delay and we will wait for up to one hour from the time your
                  flight has landed. After which waiting time applies (subject
                  to availability). In this rare case, if you fail to contact us
                  and no communication has made you will forfeit your full fare.
                  Due to conditions outside our control you will need to seek
                  recourse from the party responsible for the delay. We strongly
                  recommend you take out travel insurance to cover such
                  incidents. If you miss your connecting flight and you are now
                  coming in later flight, please inform us via our help line
                  number for the confirmation of the change. If you are emailing
                  us about the change of pick up time, please ensure that you
                  have received the acknowledgment of the email and Confirmation
                  of the change (subject to availability).
                </p>
                <p class="paragraph-3">
                  If your flight arrives early, we will make sure that our
                  driver is at the airport as closer to the time possible. As
                  all the cars are rostered and in some situations you might
                  have to wait if your flight has arrived early as this is
                  unpredictable. As we track all the flights, we will make every
                  effort to pick you up as soon as possible, however we cannot
                  guarantee this. As a guidance most of the time on domestic
                  airport average pick up time after landing is 10 minutes to 20
                  minutes and at international it can take up to 25 minutes to
                  45 minutes.
                </p>
                <p class="paragraph-3">
                  Failure to arrive at the time / place of booking without an
                  emailed cancellation notice and receipt of same from us will
                  result in “no show” thus entitled to 100% forfeiture. When you
                  arrive at the Airport please make an endeavour to locate our
                  driver; refund will only be provided if our driver fails to
                  reach your pick up point but no refund will be considered if
                  the driver is at the pick-up point but you fail / neglect to
                  contact or locate him/her.
                </p>
                <p class="paragraph-3">
                  To make amendments to your transfer details you must first
                  cancel your previous reservation and then submit another
                  booking from the website with the correct information. Please
                  advise us via email of your amended details so that we can
                  help you within our current guidelines and make the required
                  refunds.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">At pick up point </strong> – We give 10
                  minutes complementary waiting time. If you need our driver to
                  wait any longer than this, waiting time will be charged from
                  the original pick up time in the booking (this is subject to
                  availability). Driver have full right to leave if no
                  communication is made and the job will be taken as a “No
                  Show”. Overtime/waiting rates are charged at $40.00 inc GST
                  ($160 inc GST per hour) per 15 mins’ increments. This is
                  Strictly Subject to Availability Please check with our
                  helpline number for more information.
                </p>
                <p class="paragraph-3">
                  In case of any incident, accident or any breakdown during the
                  journey: The full refund of the service will be provided in
                  the same way as it was paid. If the fare is to be paid at the
                  end to the journey, then passenger is advised not to pay any
                  money to the driver. We highly recommend to call local taxi
                  provider, to complete the journey on your own expense.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Liabilities & Insurance </strong> – Our
                  maximum liability is limited to a full refund of amount paid
                  related to the booking in question. We accept no liability or
                  claim for liquidated damages, consequential loss or for any
                  other eventuality. Our insurance policies ONLY cover
                  passengers whilst inside the vehicle and enroute.If YOU DO NOT
                  AGREE TO THESE TERMS AND CONDITIONS, DO NOT USE THIS WEBSITE
                  AND OUR SERVICES.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Vehicle Restrictions & Road Rules{" "}
                  </strong>{" "}
                  – There may be instances where our vehicles are unable to be
                  negotiated over like speed bumps, through turns, driveways or
                  in any unsafe conditions etc., rendering some locations
                  inaccessible. In such a case, we will endeavour to pick up /
                  drop passengers at the closest safest point possible. Should
                  the driver deem any location or situation unsuitable for the
                  vehicle, an alternative will be sought & used or termination
                  of travel will occur if necessary – the driver’s decision will
                  be final and no refund will be paid. Drivers will adhere
                  stringently to all legal road rules at all times. All drivers
                  will plot his / her travel route/s and the company is not
                  liable for the same.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Food, Smoking, Illegal Substances & Alcohol{" "}
                  </strong>{" "}
                  – Our policy states that no food and drinks is to be opened or
                  consumed on our Public Passenger vehicle at any time.Eating or
                  drinking is strictly prohibited in our vehicles. However, if
                  the passenger drink or eat in the car driver have a full right
                  to stop the vehicle and refuse to drive or in rare cases
                  cancel the job on the spot. If client eat and drink at their
                  own risk and the damage was made. There will be cleaning and
                  downtime charges involved depending on the nature of damage.It
                  is a Zero Tolerance Policy about misusing our services.
                </p>
                <p class="paragraph-3">
                  Please help us to maintain service standard during each and
                  every trip.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Subcontractors </strong> – The services
                  of other similar Transfer companies may be used during peak
                  times. Although other companies will remain under our
                  supervision, they are governed by their own operational
                  guidelines & operate at all times under their own insurance
                  policies.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Customer User Names and Passwords{" "}
                  </strong>{" "}
                  – You may be required to set up an account with Black Grandeur
                  Chauffeur in order to access certain areas of the Website. You
                  must be 18 years of age or older to register for an account
                  and only one (1) account is allowed per person.
                </p>
                <p class="paragraph-3">
                  You are solely responsible for maintaining the security and
                  confidentiality of your account and any password you use to
                  access the Website. You agree not to transfer your password,
                  user name, account or the use of your account, to any third
                  party. You are also solely responsible for all interactions
                  with the Website that occur in association with your password
                  or user name. You agree to immediately notify Black Grandeur
                  Chauffeur at the following email address
                  support@blackgrandeurchauffeur.com of any unauthorized use of
                  your password or user name or any other breach of security
                  related to your account or the Website and to “log off” from
                  your account (if applicable) at the end of each session. We
                  are not liable for any loss or damage arising from your
                  failure to comply with any of the foregoing obligations.
                </p>
                <p class="paragraph-3">
                  All registration and billing information provided must be true
                  and accurate. Providing any untruthful or inaccurate
                  information may constitute a breach of these terms and
                  conditions. By confirming your purchase at the end of the
                  checkout process, you agree to accept and pay for the services
                  offered. We reserve the right to refuse service, terminate
                  accounts, remove or edit content or cancel bookings in our
                  sole discretion.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Ownership of Materials, Website Access and Limited License{" "}
                  </strong>{" "}
                  –All of the Website’s content, including, without limitation,
                  any materials, information, matter, files, text, data,
                  graphics, logos, designs, pictures, photographs, images,
                  illustrations, computer generated displays and interfaces,
                  software, audio recordings, video recordings, audio-visual
                  recordings, documents, articles, blogs,advertising copy and
                  other works of whatsoever nature (collectively, the
                  “Materials”), is owned or licensed by ClassyChauffeurs and
                  protected by applicable by Australian and international
                  copyright, trademark, patent and/or other intellectual
                  property laws. The selection, coordination, arrangement and
                  other compilation of the Materials on the Website is the
                  exclusive property of ClassyChauffeurs and is protected by
                  Australian and International copyright laws.
                </p>
                <p class="paragraph-3">
                  ClassyChauffeurs grants you a limited license to access the
                  Website and make personal non-commercial use of the Materials
                  subject to these terms and conditions. You may not modify,
                  copy, download, distribute, transmit, display, perform,
                  reproduce, publish, license, create works derived from,
                  transfer, sell or otherwise use the Materials in any way for
                  any public or commercial purpose without the prior written
                  consent of ClassyChauffeurs. ClassyChauffeurs neither warrants
                  or represents that your use of the Materials will not violate
                  any law or infringe upon the rights of any third party. All
                  rights not granted to you herein are expressly reserved and
                  owned by ClassyChauffeurs or ClassyChauffeurs’s licensors.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Trademarks </strong> –The registered
                  and unregistered trademarks, trade names, domain names,
                  service marks, trade dress and logos displayed on the Website,
                  including, without limitation, are owned or licensed by Black
                  Grandeur Chauffeur. No right or license to use the Marks is
                  granted to you under these Terms and conditions and your
                  access to or use of the Website does not authorize you to use
                  the Marks in any manner.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    User Content Posted on the Website{" "}
                  </strong>{" "}
                  –All comments, questions, reviews, suggestions, feedback,
                  ideas and other submissions that you submit or offer to Black
                  Grandeur Chauffeur in connection with your use of this
                  Website, including, without limitation, any User Content
                  (collectively, “Submissions”) will be treated as
                  non-confidential and non-proprietary and become and remain the
                  sole and exclusive property of ClassyChauffeurs, unless
                  otherwise prohibited by law. To the extent that all right,
                  title and interest in and to any Submissions cannot legally be
                  assigned to ClassyChauffeurs under these terms and conditions
                  , you hereby grant to Black Grandeur Chauffeur the
                  non-exclusive, irrevocable, perpetual, worldwide,
                  royalty-free, transferable, assignable and fully sub
                  licensable right and license to use, publish, reproduce,
                  distribute, display, exhibit, publicly perform, modify, create
                  works derived from, sell and otherwise exploit (“Exploit”) all
                  or any portion of such Submissions in any manner and on or
                  through any media now know or hereafter devised (“Media”)
                  without compensation, credit or liability to you. You also
                  grant to ClassyChauffeurs the non-exclusive, perpetual,
                  worldwide, royalty-free, transferable, assignable and full
                  license to use, publish, reproduce, distribute, display and
                  publicly perform your name, user name, image, voice, likeness,
                  biographical materials and/or other attributes of your
                  identity (“Likeness”) in any manner and on or through any
                  Media in connection with the Exploitation of any Submissions,
                  without compensation or liability to you.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">You represent and warrant that</strong>{" "}
                  –(i) you own or control all of the rights necessary to assign
                  or license the Submissions and license the use of your
                  Likeness to us and (ii) our use of the Submissions and your
                  Likeness in the manner permitted herein shall not violate any
                  law or infringe the intellectual property, privacy, publicity
                  or other rights of any third party. You hereby irrevocably
                  waive any moral rights you many have in and to any Submissions
                  even if such Submissions are altered or changed in a manner
                  not agreeable to you. You acknowledge and agree that we are
                  not obligated to review or use your Submissions. This,
                  including, without limitation, all rights and licenses
                  assigned or granted hereunder shall survive any termination of
                  these Terms and conditions.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Submissions</strong> –All comments,
                  questions, reviews, suggestions, feedback, ideas and other
                  submissions that you submit or offer to Black Grandeur
                  Chauffeur in connection with your use of this Website,
                  including, without limitation, any User Content (collectively,
                  “Submissions”) will be treated as non-confidential and
                  non-proprietary and become and remain the sole and exclusive
                  property of ClassyChauffeurs, unless otherwise prohibited by
                  law. To the extent that all right, title and interest in and
                  to any Submissions cannot legally be assigned to
                  ClassyChauffeurs under these terms and conditions , you hereby
                  grant to ClassyChauffeurs the non-exclusive, irrevocable,
                  perpetual, worldwide, royalty-free, transferable, assignable
                  and fully sub licensable right and license to use, publish,
                  reproduce, distribute, display, exhibit, publicly perform,
                  modify, create works derived from, sell and otherwise exploit
                  (“Exploit”) all or any portion of such Submissions in any
                  manner and on or through any media now know or hereafter
                  devised (“Media”) without compensation, credit or liability to
                  you. You also grant to ClassyChauffeurs the non-exclusive,
                  perpetual, worldwide, royalty-free, transferable, assignable
                  and full license to use, publish, reproduce, distribute,
                  display and publicly perform your name, user name, image,
                  voice, likeness, biographical materials and/or other
                  attributes of your identity (“Likeness”) in any manner and on
                  or through any Media in connection with the Exploitation of
                  any Submissions, without compensation or liability to you. You
                  represent and warrant that: (i) you own or control all of the
                  rights necessary to assign or license the Submissions and
                  license the use of your Likeness to us and (ii) our use of the
                  Submissions and your Likeness in the manner permitted herein
                  shall not violate any law or infringe the intellectual
                  property, privacy, publicity or other rights of any third
                  party. You hereby irrevocably waive any moral rights you many
                  have in and to any Submissions even if such Submissions are
                  altered or changed in a manner not agreeable to you. You
                  acknowledge and agree that we are not obligated to review or
                  use your Submissions. This, including, without limitation, all
                  rights and licenses assigned or granted hereunder shall
                  survive any termination of these Terms and conditions.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Privacy and Protection of Personal Information
                  </strong>{" "}
                  –We respect the privacy of our Website’s visitors. Please see
                  our Privacy Policy related to our collection and use of your
                  information. If you do not agree to each and every part of our
                  Privacy Policy then you should not use, or submit any
                  personally identifiable information though our Website.
                  Questions regarding privacy issues should be directed to us
                  via email at: support@blackgrandeurchauffeur.com
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Product / Service Description</strong>{" "}
                  –We attempt to make our product / service descriptions as
                  accurate as possible. However, we do not warrant that the
                  product descriptions or any other content on the Website is
                  accurate, complete, reliable, current or error free. If a
                  product / service offered by us are not as described, your
                  sole remedy is to report to us by emailing us at:
                  support@blackgrandeurchauffeur.com and we shall then take the
                  necessary action based on your reporting at our own sole
                  discretion.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Objectionable Content</strong> –You
                  understand that by using this Website, the Materials or any
                  services provided through the Website, you may encounter
                  content that may be deemed by some to be offensive, indecent
                  or objectionable, which content may or may not be identified
                  as such. You agree to use the Website, the Materials or any
                  services provided through the Website at your sole risk and
                  that ClassyChauffeurs and ClassyChauffeurs’s parent company,
                  subsidiaries, affiliates, licensees, successors and assigns
                  (the “ClassyChauffeurs Affiliated Parties”) shall have no
                  liability to you for any content that may be deemed offensive,
                  indecent or objectionable.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Disclaimer of Warranties –</strong>{" "}
                  This website is provided by ClassyChauffeurs on an “as is” and
                  “as available” basis. To the fullest extent permissible by
                  applicable law, ClassyChauffeurs disclaims all implied
                  warranties, including, but not limited to the implied
                  warranties of merchant-ability, fitness for a particular
                  purpose and non-infringement of proprietary rights.
                </p>
                <p class="paragraph-3">
                  ClassyChauffeurs makes no representations or warranties of any
                  kind, express or implied, as to the operation, security or use
                  of the website, the availability of any goods or services
                  offered on the website or the accuracy, reliability,
                  completeness or timeliness of the services, products,
                  materials, user content or other items offered or included on
                  this website. ClassyChauffeurs does not warrant that any
                  functions, inaccuracies or typographical errors in the
                  materials or user content will be repaired or corrected or
                  that the website or the server that makes it available are
                  free of viruses or other harmful components. ClassyChauffeurs
                  is not responsible for any damage to your computer, computer
                  system or portable devices resulting from use of the website
                  or any materials downloaded or otherwise obtained from the
                  website, including, without limitation, damages from any
                  security breach, virus, bug, tampering, fraud, error, omission
                  interruption, defect, delay in operation or transmission,
                  computer line or network failure or any other malfunction.
                  Because some states or other jurisdictions do not allow the
                  exclusion of implied warranties, some or all of the above
                  exclusions may not apply to you.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Future Communication –</strong> Black
                  Grandeur Chauffeur may use your personal information to
                  contact you in future with Newsletters, Marketing or any
                  Promotional materials and other information that may be of
                  interest to you. You may opt out of receiving any, or all, of
                  these communications from ClassyChauffeurs by following the
                  unsubscribe link or instructions to provide in any email we
                  send in future.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Limitation of Liability –</strong>{" "}
                  Under no circumstances and under no legal or equitable theory
                  (whether in tort, contract, strict liability, warranty or
                  otherwise), shall ClassyChauffeurs, the Black Grandeur
                  Chauffeur affiliated parties, the officers, directors,
                  employees, agents and representatives of each, or any of Black
                  Grandeur Chauffeur’s vendors or suppliers be liable for any
                  indirect, punitive, incidental, special, exemplary or
                  consequential damages of any nature arising out of or in
                  connection with: (i) the use of or inability to use the
                  website, the materials or any products or services offered
                  through the website; (ii) any transaction conducted through or
                  facilitated by the website; (iii) any claim attributable to
                  errors, omissions or inaccuracies in the website, the
                  materials or any user content; (iv) unauthorized access to or
                  alterations of your transmissions or data or (v) any other
                  matter relating to the website; even if the parties have been
                  advised of the possibility of such damages. If you are
                  dissatisfied with the website, the materials or these terms
                  and conditions, your sole remedy is to discontinue using the
                  website. Because some states or other jurisdictions do not
                  allow the exclusion or limitation of liability for incidental
                  or consequential damages, some or all of the above limitations
                  and exclusions may not apply to you. In such states and other
                  jurisdictions, ClassyChauffeurs’s liability is limited or
                  excluded to the greatest extent permitted by law.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Online Conduct –</strong> You agree to
                  use the Website, the Materials and any products and/or
                  services provided through the Website only for lawful
                  purposes. Unacceptable uses of the Website include, without
                  limitation: (i) planning or engaging in any illegal activity;
                  (ii) posting, transmitting or disseminating any threatening,
                  false, misleading, abusive, harassing, defamatory, grossly
                  offensive, vulgar, obscene, scandalous, pornographic or
                  malicious statements or materials; (iii) creating,
                  disseminating or transmitting files, graphics, software,
                  recordings or other materials that actually or potentially
                  violate any law or infringe the intellectual property,
                  privacy, publicity or other rights of any third party; (iv)
                  creating a false identity or otherwise attempting to mislead
                  any person as to the origin or source of any communication or
                  information; (v) exporting, re-exporting or permitting the
                  downloading of any message, software or content in violation
                  of any export or import law, regulation or restriction of the
                  Australia and its agencies or authorities, or without all
                  required approvals, licenses or exemptions; (vi) interfering,
                  disrupting or attempting to gain unauthorized access to other
                  accounts on the Website or any other computer network; (vii)
                  disseminating or transmitting viruses, worms, Trojan horses,
                  Easter egg, RATs, keyboard loggers, time bombs, spyware,
                  adware, cancel bots or any other malicious or invasive code or
                  program; (viii) modifying, adapting, translating, replacing,
                  reverse engineering, decompiling or disassembling any portion
                  of the Website; (ix) causing to appear on the Website any
                  pop-up, pop-under, exit windows, expanding buttons, banners,
                  advertisements or anything else which minimizes, covers or
                  otherwise inhibits the full display of the Website’s pages;
                  (ix) using any deep-link, page-scrape, robot, crawl, index,
                  spider, click spam, macro programs, Internet agent or other
                  similar automatic device, program, algorithm or methodology to
                  access, copy, acquire, input or store information, generate
                  impressions or clicks, search or generate searches, or monitor
                  any portion of the Website, the Materials or any User Content
                  or engaging in any other activity deemed by us to be in
                  conflict with the spirit or intent of the Website.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Circumvention –</strong> You
                  acknowledge and agree that you shall not circumvent or attempt
                  to circumvent any of these terms and conditions or our
                  services we offered through the Website or over the phone or
                  otherwise interrupt or attempt to interrupt the operation of
                  the Website and our services (a “Circumvention Act”). If we
                  determine, in our sole discretion, that you have engaged, or
                  attempted to engage, in any Circumvention Act or other
                  fraudulent act with regard to the Website and our services,
                  then, in such an event, we reserve the right to institute
                  civil or criminal proceedings against you and to report you to
                  the relevant regulatory authorities. In any circumstances, for
                  use of our services if you enter into a dispute of the payment
                  with your credit card provider or PayPal once you have used
                  our services. We may charge interest on unpaid amount at the
                  Cash Target rate, from the day you have used our services.
                  Failure to pay the subsequent demanded/ unpaid invoice may
                  result in the state government issuing a penalty infringement
                  notice as a fare evasion or referral of this matter by Black
                  Grandeur Chauffeur for Civil Debt recovery action.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Termination –</strong> These terms and
                  conditions are effective until terminated by either you or us.
                  You may terminate these terms at any time by discontinuing use
                  of the Website and our Services. Your access to the Website
                  may be terminated immediately without notice from us if we
                  determine, in our sole discretion, that you have failed to
                  comply with any term or provision of these terms and
                  conditions.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Revisions to the Website –</strong> We
                  reserve the right at any time and from time to time,
                  temporarily or permanently, to: (i) modify or discontinue the
                  Website or any services offered through the Website without
                  notice to you; (ii) limit the Website’s availability to any
                  persons, geographic areas or jurisdictions we choose; (iii)
                  charge fees in connection with the use of the Website and
                  modify and/or waive any such fees and/or (iv) offer
                  opportunities to some or all of the users of the Website. You
                  acknowledge and agree that neither ClassyChauffeurs nor any of
                  the ClassyChauffeurs Affiliated Parties shall be liable to you
                  or to any third party for any modification, suspension or
                  discontinuance of all or any portion of the Website, the
                  Materials or any services offered through the Website.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Use Of Cookies –</strong> Cookies are
                  utilized on this site. Information gathered using Cookies
                  might be utilized to investigate the capacity and utilization
                  of the site, dependably on an unknown premise. Assessments and
                  diagrams might be produced concerning the quantity of visits,
                  number of pages saw per client and so on. The investigation
                  will be utilized only for reasons for our own statistical
                  surveying and for the change and the improvement of our site.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Security –</strong> We reserve the
                  right to monitor all network traffic to the Website and our
                  services user to identify and/or block unauthorized attempts
                  to: (i) upload content to the Website; (iii) modify the
                  Website’s Materials or any User Content and/or (iii) cause
                  damage to the Website or our offered services in any fashion.
                  Anyone using the Website and our services expressly consents
                  to such monitoring.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">Indemnification –</strong> You agree to
                  indemnify, defend and hold ClassyChauffeurs, the Black
                  Grandeur Chauffeur Affiliated Entities and the officers,
                  directors, employees, representatives and agents of each
                  (collectively, the “ClassyChauffeurs Indemnified Parties”)
                  from and against any and all costs, expenses, fees, including,
                  without limitation attorneys’ fees, charges, expenditures,
                  damages, liabilities and/or other losses of whatsoever nature
                  incurred by any of the Black Grandeur Chauffeur Indemnified
                  Parties with respect to, arising from or out of any claim
                  relating to your: (i) use of the Website and our services
                  (including, without limitation, your posting of any User
                  Content on the Website); (ii) violation of these Terms and
                  Conditions or (iii) violation of any law or infringement of
                  the intellectual, property, privacy, publicity or other rights
                  of any third party.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Governing Law, Venue and Jurisdiction –
                  </strong>
                  These terms and conditions shall be governed by and enforced
                  in accordance with the law of the state of QUEENSLAND without
                  giving effect to any choice of law or conflicts of law rules
                  of any jurisdiction. Venue and jurisdiction for any claim with
                  respect to or arising out of these Terms and conditions shall
                  lie in the state or federal courts sitting in BRISBANE,
                  QUEENSLAND to which you hereby unconditionally consent. You
                  agree that regardless of any statute or law to the contrary,
                  any claim or cause of action arising out of or relating to:
                  (i) use of the Website; (ii) these terms and conditions and/or
                  (iii) the Privacy Policy, must be filed within ONE (1) YEAR
                  after such claim or cause of action arose or will be forever
                  barred.
                </p>
                <p class="paragraph-3">
                  Content All materials, including images, details, data,
                  illustrations, designs, icons, photographs, video clips, text,
                  software, graphics, scripts, logos, and other materials that
                  are part of this Site (collectively, the “Content”) are owned
                  exclusively (either directly or indirectly) by Black Grandeur
                  Chauffeur and/or its content providers. The Content is
                  protected by copyrights, trademarks, service marks, trade
                  dress and other intellectual or ownership rights owned by the
                  ClassyChauffeurs and/or its content providers. If there are
                  any questions regarding Website images, details, data,
                  illustrations, designs, icons, photographs, video clips, text,
                  software, graphics, scripts, logos, and other materials,
                  please contact us at support@blackgrandeurchauffeur.com and we
                  will respond as soon as possible.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">General Provisions –</strong> These
                  Terms and conditions constitute the entire agreement between
                  you and us concerning the subject matter hereof. No prior or
                  contemporaneous representations, inducements, promises, or
                  agreements, oral or otherwise, between you and us with
                  reference to the subject matter of these Terms and conditions
                  will be of any force or effect. Section headings are used for
                  convenience only and shall have no interpretive effect or
                  impact whatsoever. If any one or more of the provisions of
                  these Terms and conditions should be ruled wholly or partly
                  invalid or unenforceable by a court or tribunal with dispute
                  or interpretive jurisdiction over the Terms and conditions,
                  then such provision shall be reformed by such court or
                  tribunal in such a manner to make the provision enforceable
                  and as near the manifest intent of both you and us as possible
                  and the validity and enforce ability of all other provisions
                  of the Terms and conditions shall be unaffected. Our waiver of
                  performance of any provision of these Terms and conditions
                  shall not be a waiver of, nor prejudice to our right to
                  require, strict performance of the same or any other provision
                  in the future. The rights and remedies of you and us pursuant
                  to these Terms and conditions shall be cumulative and not
                  alternative and no delay by either you or us in exercising any
                  right or remedy here under shall constitute a waiver of such
                  right or remedy or any other right or remedy or the further
                  exercise thereof.
                </p>
                <p class="paragraph-3">
                  <strong class="bold-p">
                    Rules for Sweepstakes, Contests and Similar Promotions –
                  </strong>
                  Any sweepstakes, contest, raffle or other similar promotion
                  (“Promotion”) made available through this Website is void
                  where prohibited and governed by specific rules that are
                  separate from these Terms and conditions. By participating in
                  any such Promotion, you will become subject to the Promotion’s
                  rules which may vary from these Terms and conditions.
                  Accordingly, we recommend that you read the rules for the
                  applicable Promotion which will be posted on this Website and
                  review our Privacy Policy, which governs any personal
                  information you submit in connection with such Promotion.
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

export default TermsAndCondition;
