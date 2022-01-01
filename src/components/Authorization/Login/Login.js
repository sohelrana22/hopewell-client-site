import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  //Dynamic Title
  useEffect(() => {
    document.title = "Login | Hopewell Hospital";
  }, []);

  return (
    <div className="bg-cyan-50 ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto rounded shadow-xl shadow-cyan-200 overflow-hidden py-10 px-20 bg-white relative z-1">
          <div
            onClick={() => history.push("/")}
            className="absolute top-2 right-0 btn px-4"
          >
            <GrClose size="1.5em" color="#05B6D3" />
          </div>
          <form className="space-y-6">
            <div className="">
              <h2 className="text-cyan-500 text-2xl font-bold text-center">
                Login
              </h2>
              <p className="text-cyan-500 text-center">Hey! Welcome back!</p>
            </div>

            <div className="grid grid-cols-6 gap-6 space-y-2">
              <div className="relative col-span-6">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-0 border-0"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Your Email
                </label>
              </div>

              <div className="relative col-span-6">
                <input
                  required
                  id="password"
                  type="password"
                  name="password"
                  placeholder="12345"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500 focus:ring-0 border-0"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Your Password
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>

            <p className="text-center">
              If you don't have an account! <br />
              <Link
                className="text-cyan-500 hover:text-cyan-400 no-underline"
                to="/register"
              >
                Create new one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
