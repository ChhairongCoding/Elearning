// src/components/Nav.js
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "tween", delay: 0.2 }}
      id="nav"
      className="header h-16 sticky top-0 shadow-md bg-white z-20"
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
  );
};

export default Nav;
