import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { MdOutlineWifiCalling3, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:flex">
          <div className="xl:w-3/5 lg:w-3/5 h-full pt-5 pb-5 xl:pr-5 xl:pl-0">
            <form onSubmit="" id="contact" className="bg-white py-4 px-8">
              <h1 className="text-4xl text-gray-800 font-semibold mb-6">
                Enter Your Details
              </h1>
              <div className="'block xl:flex w-full flex-wrap justify-between mb-6">
                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                  <div className="flex flex-col">
                    <label
                      htmlFor="full_name"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      id="full_name"
                      name="full_name"
                      type="text"
                      className="focus:outline-none focus:border focus:border-cyan-500 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 border"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="focus:outline-none focus:border focus:border-cyan-500 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 border"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <div className="w-full">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Subject
                    </label>
                    <input
                      required
                      id="subject"
                      name="subject"
                      type="tel"
                      className="focus:outline-none focus:border focus:border-cyan-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 border"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold text-gray-800 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    className="border-gray-300 border mb-4 py-2 text-sm outline-none resize-none px-3 focus:border focus:border-cyan-500"
                    rows={8}
                    id="message"
                    defaultValue={"I need an appointment in an emergency."}
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none bg-cyan-500 transition duration-150 ease-in-out hover:bg-cyan-600 text-white px-8 py-3 text-sm leading-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="xl:w-2/5 lg:w-2/5 bg-cyan-500 py-16">
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
              <h1 className="xl:text-4xl text-3xl pb-4 text-white font-semibold">
                Get in touch
              </h1>
              <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                Got a question about us? Are you interested in partnering with
                us? Have some suggestions or just want to say Hi? Just contact
                us. We are here to asset you.
              </p>
              <div className="flex pb-4 items-center">
                <div className="text-white">
                  <MdOutlineWifiCalling3 />
                </div>
                <p className="pl-4 text-white text-base">+1 (321) 321 321</p>
              </div>
              <div className="flex items-center">
                <div className="text-white">
                  <MdOutlineEmail />
                </div>
                <p className="pl-4 text-white text-base">info@mail.com</p>
              </div>
              <p className="text-lg text-white pt-10 tracking-wide">
                545, Street 11, Block F <br />
                Dhaka, Bangladesh
              </p>
              <a href="javascript:void(0)">
                <p className="text-white pt-16 font-semibold underline">
                  View our Job Openings
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
