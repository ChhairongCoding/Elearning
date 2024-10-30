import DataCourse from "../data/DataCourse";
import CardCourse from "../components/CardCourse";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import data from "../data/DataCourse";

const CoursePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("program");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterData = DataCourse.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <main className="bg-gray-200 shadow-sm relative overflow-hidden">
      <div className="section-1 w-11/12 m-auto mt-16">
        <h1 className="font-bebas text-5xl">Popular topics</h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 bg-gray-200 py-6 text-center">
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            Web Development
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            HTML
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            CSS
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            JavaScript
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            React Js
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            Next Js
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            PHP
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            Laravel
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            Node Js
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            Django
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            Angular
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-gray-900"
          >
            TypeScript
          </Link>
        </div>
      </div>
      <div className="section-2 w-11/12 m-auto">
        <h1>Web Development Courses</h1>
        <div className="course-to">
          <h2>Courses to get you started</h2>
          <p>Explore courses from experienced, real-world experts.</p>
        </div>
        <div className="card">
          <div className="catch flex gap-4 my-5">
            <button
              className={`border-1 ${
                selectedCategory === "program"
                  ? "border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => handleCategoryChange("program")}
            >
              Program
            </button>
            <button
              className={`border-1 ${
                selectedCategory === "design"
                  ? "border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => handleCategoryChange("design")}
            >
              Design
            </button>
            <button
              className={`border-1 ${
                selectedCategory === "network"
                  ? "border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => handleCategoryChange("network")}
            >
              Network
            </button>
          </div>
          <hr className="h-[2px] bg-gray-400 w-full" />
          <div className="course grid gap-4 w-auto h-auto m-auto grid-cols-3 pb-16 relative mt-10">
            {filterData.map((item) => (
              <CardCourse {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="section-3 relative">
        <div className="text-contents w-11/12 m-auto text-4xl font-bebas py-9">
          <h1>All Web Development courses</h1>
        </div>
      </div>
      <div className="course grid gap-4 w-11/12 h-auto m-auto grid-cols-3 pb-16 relative">
        {data.map((c) => (
          <CardCourse {...c} key={c.id} />
        ))}
      </div>
    </main>
  );
};

export default CoursePage;
