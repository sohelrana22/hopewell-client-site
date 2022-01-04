import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdPayment,
  MdShoppingCart,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";

import AdminNavbar from "./AdminNavbar";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
       
            <h1 className="font-bold text-lg text-blue-400">Hope Well </h1>
      
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <Link
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <MdOutlineDashboardCustomize />
                  Dashboard
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <Link
                  to="/settings"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <MdPayment />
                  Payments
                </Link>
              </li>
              <li className="rounded-lg mb-2 ">
                <Link
                  to="/tables"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <MdShoppingCart />
                  MyCarts
                </Link>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <Link
                  to="/maps"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <MdOutlineAdminPanelSettings />
                  Make Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
