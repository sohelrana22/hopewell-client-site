import React from "react";
import { HiOutlineCheck } from "react-icons/hi";

const Trends = () => {
  return (
    <>
      <div className="text-center mb-20 pt-10">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-800">
          Top Trends
        </h1>
        <div className="flex mt-6 justify-center items-center">
          <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-wrap items-center justify-center">
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Breast Cancer Types
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Medicare Eligibility
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Medicaid Eligibility
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Pumpkin Health Benefits
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Yellow Fever
              </a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Gonorrhea
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Covid-19 Vaccine
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Flu Vaccine
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Gluten-Free Diet
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                HIV / AIDS
              </a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Asthma in Cold Weather
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Medicare Eligibility
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Insurance Deadlines
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Pumpkin Health Benefits
              </a>
              <a href="/">
                <span className="bg-cyan-100 text-cyan-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <HiOutlineCheck />
                </span>
                Dietasical Syndrome
              </a>
            </nav>
          </div>
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <img
              src="https://i.ibb.co/L58QFtq/tonic.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trends;
