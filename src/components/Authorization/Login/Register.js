import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  //Dynamic Title
  useEffect(() => {
    document.title = "Register | Hopewell Hospital";
  }, []);

  return (
    <div className="bg-cyan-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto rounded shadow-xl overflow-hidden py-10 px-20 bg bg-white relative z-2">
          <div
            onClick={() => history.push("/")}
            className="absolute top-2 right-0 btn px-4"
          >
            <GrClose size="1.5em" />
          </div>
          <form className="space-y-6">
            <div className="">
              <h2 className="text-cyan-500 text-2xl font-bold text-center">
                Register
              </h2>
              <p className="text-cyan-500 text-center">Hey! Nice to see you!</p>
            </div>

            <div className="grid items-center grid-cols-6 gap-6 space-y-2">
              <div className="relative col-span-6 md:col-span-3">
                <input
                  id="fName"
                  name="fName"
                  type="name"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-0 border-0"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="fName"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition"
                >
                  First Name
                </label>
              </div>
              <div className="relative col-span-6 md:col-span-3">
                <input
                  id="lName"
                  name="lName"
                  type="name"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-0 border-0"
                />
                <label
                  htmlFor="lName"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Last Name
                </label>
              </div>

              <div className="relative col-span-6">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-0 border-0"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Email address
                </label>
              </div>

              <div className="relative col-span-6">
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-0 border-0"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Password
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>

            <p className="text-center">
              Already registered?
              <Link
                className="text-cyan-500 hover:text-cyan-500 no-underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
