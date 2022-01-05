import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaBriefcaseMedical, FaAmbulance } from "react-icons/fa";
import { ChevronUpIcon } from "@heroicons/react/solid";

const FAQ = () => {
  return (
    <>
      <div className="text-center mb-20 pt-10">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-800">
          Frequently Asked Questions
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-start sm:px-6 lg:px-8 pb-24">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden">
          <div className="w-full max-w-lg p-3 mx-auto bg-cyan-50 mt-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="btn-disclosure">
                    <span>What is your refund policy?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-cyan-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="btn-disclosure">
                    <span>Do you offer technical support?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-cyan-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Yes. we do. Our technology is top notched. That's why we can
                    always offer you for our technology support
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="btn-disclosure">
                    <span>What is your Shipping Policy?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-cyan-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    We are covering every major city country. The shipment
                    leaves from center as it is our headquarter. Some extra
                    information you probably need to add here so that the
                    patient is clear of their wanted expectations.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="btn-disclosure">
                    <span>Do you have Returns offer?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-cyan-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Yes, it's like when can't do well for your patient, we must
                    have to return to get a appointment on higher level hospital
                    or health care center
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="btn-disclosure">
                    <span>Do you Tracking our health?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-cyan-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Of-course we keep eyes of your health on any kind of
                    situation.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="btn-disclosure">
                    <span>How many kind of specialist is in the hospital?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-cyan-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    There are several kind of doctor of different kind of
                    sectors. And that is the most interesting part form us you
                    will get.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-wrap sm:-m-4 md:space-y-0">
            <div className="flex flex-row items-center justify-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cyan-100 cursor-pointer hover:bg-cyan-200 text-cyan-500 outline outline-cyan-500 hover:text-cyan-600 flex-shrink-0 transition duration-200 hover:rotate-360">
                <FaBriefcaseMedical className="text-3xl" />
              </div>
              <div className="pl-6">
                <h2 className="text-cyan-600 text-lg title-font font-semibold mb-2">
                  ADVANCED TECHNOLOGY
                </h2>
                <p className="leading-relaxed text-base">
                  We are using advanced technology to give better treatment for
                  our patient. If any kind of technology we need for our any
                  operation, then we will must add that technology.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-row items-center justify-center py-4">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cyan-100 cursor-pointer hover:bg-cyan-200 text-cyan-500 outline outline-cyan-500 hover:text-cyan-600 flex-shrink-0 transition duration-200 hover:rotate-360">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="pl-6">
                <h2 className="text-cyan-600 text-lg title-font font-semibold mb-2">
                  HEALTHCARE SOLUTIONS
                </h2>
                <p className="leading-relaxed text-base">
                  HopeWell Hospital, means you can rely on us for any kind of
                  panic or patient all over the country.You get the better
                  solution and the best treatment by our specialist and doctors.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cyan-100 cursor-pointer hover:bg-cyan-200 text-cyan-500 outline outline-cyan-500 hover:text-cyan-600 flex-shrink-0 transition duration-200 hover:rotate-360">
                <FaAmbulance className="text-4xl" />
              </div>
              <div className="pl-6">
                <h2 className=" text-cyan-600 text-lg title-font font-semibold mb-2">
                  24/7 AVAILABILITY
                </h2>
                <p className="leading-relaxed text-base">
                  We are open at your service all day and all the night. Our
                  specialists are always at your duties and give better
                  treatment for you. Our ambulance is ready for any kind of
                  area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
