// src/components/Nav.js
import { Link, useLocation } from "react-router-dom"; // Ensure useLocation is imported

const Nav = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="header flex justify-between h-16 items-center px-10 bg-gray-300">
      <h1 className="text-3xl text-transform: uppercase font-bebas">Logo</h1>
      <div className="menu-main flex gap-4 font-bebas text-2xl">
        <Link
          className={`navHover ${
            location.pathname === "/" ? "bg-blue-600" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`navHover ${
            location.pathname === "/course" ? "bg-blue-600" : ""
          }`}
          to="/course"
        >
          Course
        </Link>
        <Link
          className={`navHover ${
            location.pathname === "/about" ? "bg-blue-600" : ""
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`navHover ${
            location.pathname === "/login" ? "bg-blue-600" : ""
          }`}
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
