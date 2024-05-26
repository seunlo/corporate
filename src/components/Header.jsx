import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { newheader } from "../assets/images";

export default function Header() {
  const location = useLocation();
  const isCurrentPath = (route) => route === location.pathname;

  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/startups", label: "Startup Incubation" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <div className="border-b sticky top-0 z-50 bg-white shadow-lg">
      <header className="flex justify-between items-center p-3 max-w-6xl mx-auto overflow-x-auto">
        <div>
          <Link to="/">
            <img
              src={newheader}
              alt="company logo"
              className="cursor-pointer h-[50px]"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10 font-semibold">
          <ul className="list-none flex space-x-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  <span
                    className={`p-1 text-md font-Ubuntu ${
                      isCurrentPath(link.path) &&
                      "text-white bg-forestGreen text-sm rounded-lg px-3"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link
            to="/register"
            className="px-2 py-1 border text-sm bg-forestGreen cursor-pointer rounded-tl-2xl rounded-br-2xl text-white hover:bg-limeGreen"
          >
            Apply Now
          </Link>
        </div>
        <div className="flex items-center gap-4 relative md:hidden">
          <button
            className="text-xl"
            onClick={() => setMenuVisible(!isMenuVisible)}
            aria-expanded={isMenuVisible}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
        {isMenuVisible && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b z-50"
          >
            <ul className="list-none flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} onClick={handleLinkClick}>
                    <span
                      className={`text-sm font-semibold ${
                        isCurrentPath(link.path) &&
                        "text-white bg-forestGreen text-sm rounded-lg py-1 px-2"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/register" onClick={handleLinkClick}>
                  <span className="text-sm font-semibold text-white bg-forestGreen rounded-lg py-1 px-2">
                    Apply Now
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
