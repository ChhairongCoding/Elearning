// src/components/Nav.js
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const location = useLocation();
  const [open, setOpen] = useState("hidden");

  function handleOpen() {
    setOpen((prevState) => (prevState === "hidden" ? "block" : "hidden"));
  }

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", delay: 0.2 }}
        id="nav"
        className="header h-16 max-sm:hidden sticky top-0 shadow-md bg-white z-20"
      >
        <div className="nav flex justify-between items-center h-full w-11/12 m-auto ">
          <h1 className="text-3xl text-transform: uppercase font-mono font-bold">
            Logo
          </h1>
          <div className="menu-main flex gap-4 font-mono font-bold text-2xl">
            <Link
              className={`navHover font- ${
                location.pathname === "/" ? "bg-green-800 text-white" : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`navHover ${
                location.pathname === "/course" ? "bg-green-800 text-white" : ""
              }`}
              to="/course"
            >
              Course
            </Link>
            <Link
              className={`navHover ${
                location.pathname === "/about" ? "bg-green-800 text-white" : ""
              }`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`navHover ${
                location.pathname === "/login" ? "bg-green-800 text-white" : ""
              }`}
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", delay: 0.2 }}
        id="nav"
        className="header sm:hidden h-16 sticky top-0 shadow-md  bg-white z-20 "
      >
        <div className="nav flex justify-between items-center h-full w-11/12 m-auto ">
          <h1 className="text-3xl text-transform: uppercase font-mono font-bold">
            Logo
          </h1>
          <div>
            <div
              className="dropDown cursor-pointer text-2xl"
              onClick={handleOpen}
            >
              {open === "block" ? (
                <FontAwesomeIcon icon={faClose} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
            <div
              className={`menu-main font-mono font-bold text-2xl absolute right-0 top-16 px-5 w-full py-5 bg-white ${open}`}
            >
              <Link
                className={`navHover block py-3 my-1 font- ${
                  location.pathname === "/" ? "bg-green-800 text-white" : ""
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`navHover block py-3 my-1 ${
                  location.pathname === "/course"
                    ? "bg-green-800 text-white"
                    : ""
                }`}
                to="/course"
              >
                Course
              </Link>
              <Link
                className={`navHover block py-3 my-1 ${
                  location.pathname === "/about"
                    ? "bg-green-800 text-white"
                    : ""
                }`}
                to="/about"
              >
                About
              </Link>
              <Link
                className={`navHover block py-3 my-1 ${
                  location.pathname === "/login"
                    ? "bg-green-800 text-white"
                    : ""
                }`}
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
