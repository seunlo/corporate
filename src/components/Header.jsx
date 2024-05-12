import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  const path = useLocation();
  const pathRoute = (route) => {
    if (route === path.pathname) {
      return true;
    }
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="border-b sticky top-0 z-50 bg-purple-200">
      <header className="flex justify-between items-center p-3 max-w-6xl mx-auto overflow-x-auto">
        <div className="">
          <Link to="/">
            <img
              src="https://colormadehappy.com/wp-content/uploads/2022/11/Christmas-Tree-Drawing-scaled-e1667860123547.jpg"
              alt="swiphr"
              className="cursor-pointer w-10 h-10"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10 font-semibold">
          <ul className="list-none flex space-x-10">
            <li>
              <Link to="/">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/") &&
                    "text-white bg-purple-700 text-sm rounded-full px-3"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/news">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/news") &&
                    "text-white bg-purple-700 text-sm rounded-full px-3"
                  }`}
                >
                  News
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/about") &&
                    "text-white bg-purple-700 text-sm rounded-full px-3"
                  }`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span
                  className={`p-1 text-sm font-semibold ${
                    pathRoute("/contact") &&
                    "text-white bg-purple-700 text-sm rounded-full px-3"
                  }`}
                >
                  Contact
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
                <Link to="/news">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/news") &&
                      "text-white bg-purple-700 text-sm rounded-2xl px-2"
                    }`}
                  >
                    News
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <span
                    className={`text-sm font-semibold ${
                      pathRoute("/faq") &&
                      "text-white bg-purple-700 text-sm rounded-2xl px-2"
                    }`}
                  >
                    Faq
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
