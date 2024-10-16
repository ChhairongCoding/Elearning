// src/components/Nav.js
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <div id="nav" className="header h-16 sticky top-0 shadow-md bg-white z-10">
      <div className="nav flex justify-between items-center h-full w-11/12 m-auto ">
        <h1 className="text-3xl text-transform: uppercase font-bebas">Logo</h1>
        <div className="menu-main flex gap-4 font-bebas text-2xl">
          <Link
            className={`navHover ${
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
    </div>
  );
};

export default Nav;
