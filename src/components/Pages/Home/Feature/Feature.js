import React from "react";
import { FaBriefcaseMedical, FaAmbulance } from "react-icons/fa";

const Feature = () => {
  return (
    <>
      <section className="text-gray-800 body-font">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-800 mb-4">
              Our Features
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cyan-100 cursor-pointer hover:bg-cyan-200 text-cyan-500 hover:text-cyan-600 mb-5 flex-shrink-0">
                <FaBriefcaseMedical className="text-3xl" />
              </div>
              <div className="flex-grow">
                <h2 className=" text-cyan-500 text-lg title-font font-semibold mb-3">
                  ADVANCED TECHNOLOGY
                </h2>
                <p className="leading-relaxed text-base">
                  We are using advanced technology to give better treatment for
                  our patient. If any kind of technology we need for our any
                  operation, then we will must add that technology.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cyan-100 hover:bg-cyan-200 cursor-pointer text-cyan-500 hover:text-cyan-600 mb-5 flex-shrink-0">
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
              <div className="flex-grow">
                <h2 className=" text-cyan-500 text-lg title-font font-semibold mb-3">
                  HEALTHCARE SOLUTIONS
                </h2>
                <p className="leading-relaxed text-base">
                  HopeWell Hospital, means you can rely on us for any kind of
                  panic or patient all over the country.You get the better
                  solution and the best treatment by our specialist and doctors.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-cyan-100 hover:bg-cyan-200 cursor-pointer text-cyan-500 hover:text-cyan-600 mb-5 flex-shrink-0">
                <FaAmbulance className="text-4xl" />
              </div>
              <div className="flex-grow">
                <h2 className=" text-cyan-500 text-lg title-font font-semibold mb-3">
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
      </section>
    </>
  );
};

export default Feature;
