import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid space-b-4 grid-cols-1 md:grid-cols-2 justify-between">
          <div className="space-y-2">
            <h2 className="font-semibold sm:text-2xl lg:text-4xl md:mb-4 sm:mb-0">
              Hopewell <span className="text-cyan-500">Hospital</span>
            </h2>
            <p className="text-justify">
              Join us to grab world best treatment it at any kind of diseases at
              one place. We are giving best service for you. Patients are the
              most important for us. That's why we are care about your diseases.
              We will be great to you If we can give you our best. So why are
              you waiting for! Meet us soon.
            </p>
            <div className="flex space-x-4">
              <a
                className="bg-white shadow hover:shadow-lg hover:shadow-cyan-200 p-2 rounded-full hover:bg-cyan-500 hover:text-white"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className="transition-all text-xl cursor-pointer" />
              </a>
              <a
                className="bg-white shadow hover:shadow-lg hover:shadow-cyan-200 p-2 rounded-full hover:bg-cyan-500 hover:text-white"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="transition-all text-xl cursor-pointer" />
              </a>
              <a
                className="bg-white shadow hover:shadow-lg hover:shadow-cyan-200 p-2 rounded-full hover:bg-cyan-500 hover:text-white"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="transition-all text-xl cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="flex xs:-ml-5 md:justify-end">
            <div>
              <h3 className="text-2xl text-cyan-500 font-semibold sm:mt-5 md:mt-0 mb-2">
                Quick Links
              </h3>
              <div className="flex flex-col list-none">
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-cyan-500 hover:underline"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-cyan-500 hover:underline"
                    to="/doctors"
                  >
                    Doctors
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-cyan-500 hover:underline"
                    to="/explore"
                  >
                    Appointments
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />

                  <Link
                    className="transition hover:text-cyan-500 hover:underline"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-cyan-500 hover:underline"
                    to="/about"
                  >
                    Contact
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-cyan-500 hover:underline"
                    to="/"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link
                    className="transition hover:text-cyan-500 hover:underline"
                    to="/"
                  >
                    Others
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div>
          <p className="text-gray-600 sm:ml-1 md:ml-0">
            <span className="text-cyan-500">&copy;</span> 2022
            <span className="text-cyan-500 text-xl font-semibold ml-2">
              Hopewell Hospital
            </span>
            <br />
            Design and Developed by
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="ml-1 font-bold text-cyan-500"
            >
              Mubhassir | Sohel | Ruhul | Showvro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
