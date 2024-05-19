import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";

export default function Header() {
  const path = useLocation();
  const pathRoute = (route) => {
    if (route === path.pathname) {
      return true;
    }
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="border-b sticky top-0 z-50 bg-white shadow-lg">
      <header className="flex justify-between items-center p-3 max-w-6xl mx-auto overflow-x-auto">
        <div className="">
          <Link to="/">
            <img
              src="../../public/personal.jpeg"
              alt="company logo"
              className="cursor-pointer w-[120px] h-[70px]"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10 font-semibold">
          <ul className="list-none flex space-x-10">
            <li>
              <Link to="/">
                <span
                  className={`p-1 text-md font-Ubuntu ${
                    pathRoute("/") &&
                    "text-white bg-purple-700 text-sm rounded-full px-3"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/founders">
                <span
                  className={`p-1 text-md font-Ubuntu ${
                    pathRoute("/founders") &&
                    "text-white bg-purple-700 text-sm rounded-full px-3"
                  }`}
                >
                  Founders Hub
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span
                  className={`p-1 text-md font-Ubuntu ${
                    pathRoute("/about") &&
                    "text-white bg-purple-700 text-sm rounded-full px-3"
                  }`}
                >
                  About us
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span
                  className={`p-1 text-md font-Ubuntu ${
                    pathRoute("/contact") &&
                    "text-white bg-purple-700 text-sm rounded-full px-3"
                  }`}
                >
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 relative">
          <button
            className="block md:hidden text-xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
        </div>
        {showMenu && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b z-50">
            <ul className="list-none flex flex-col space-y-2 p-4">
              <li>
                <Link to="/">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/") &&
                      "text-white bg-purple-700 text-sm rounded-2xl px-2"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/founders">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/founders") &&
                      "text-white bg-purple-700 text-sm rounded-2xl px-2"
                    }`}
                  >
                    Founders Hub
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/about") &&
                      "text-white bg-purple-700 text-sm rounded-2xl px-2"
                    }`}
                  >
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/contact") &&
                      "text-white bg-purple-700 text-sm rounded-2xl px-2"
                    }`}
                  >
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
