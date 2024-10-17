import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CourseScreen from "./screens/CourseScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import Nav from "./components/Nav";
import { Footer } from "flowbite-react";
import FooterPart from "./components/FooterPart";

// A simple 404 component
const NotFound = () => (
  <div className="w-full h-full flex flex-col justify-center items-center bg-gray-100">
    <h1 className="text-5xl font-bold text-red-500">Error 404</h1>
    <p className="mt-4 text-xl">Page not found.</p>
    <Link to="/" className="mt-6 text-blue-500 hover:underline">
      Go back to Home
    </Link>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <Nav />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/course" element={<CourseScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterPart />
      </div>
    </BrowserRouter>
  );
}

export default App;
