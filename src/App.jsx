import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Nav from "./routes/Nav";
import FooterPart from "./components/FooterPart";
import SignUp from "./components/SignUp";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import AboutPage from "./pages/AboutPage";

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

function AppContent() {
  const location = useLocation();

  return (
    <div className="w-full">
      {/* Conditionally render Nav based on the current route */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Nav />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <FooterPart />
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
