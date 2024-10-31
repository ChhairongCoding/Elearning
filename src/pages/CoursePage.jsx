import DataCourse from "../data/DataCourse";
import CardCourse from "../components/CardCourse";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import data from "../data/DataCourse";
import { color, delay, motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
motion;

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
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
        style={{
          clipPath: "polygon(0% 93%, 100% 100% ,100% 0%,0% 0%)",
        }}
        className="content-[''] bg-green-400 block w-full h-[400px] absolute"
      ></motion.div>
      <div className="section-1 w-11/12 m-auto my-12 relative text-white">
        <motion.h1
          initial={{ x: -100, transition: "all" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="font-mono font-bold uppercase text-5xl"
        >
          Popular topics
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-4 grid-rows-2 gap-4  py-6 text-center "
        >
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            Web Development
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            HTML
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            CSS
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            JavaScript
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            React Js
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            Next Js
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            PHP
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            Laravel
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            Node Js
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            Django
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            Angular
          </Link>
          <Link
            to="/course"
            className="hover:bg-gray-700 hover:text-white cursor-pointer transition-all ease-in-out duration-150 p-4 rounded border-2 border-green-500 text-white"
          >
            TypeScript
          </Link>
        </motion.div>
      </div>
      <div className="section-2 w-11/12 m-auto">
        <h1 className="text-4xl font-mono font-bold uppercase">
          Web Development Courses
        </h1>
        <div className="course-to font-mono">
          <h2 className="text-2xl font-bold">Courses to get you started</h2>
          <p className="text-gray-600">
            Explore courses from experienced, real-world experts.
          </p>
        </div>
        <div className="card">
          <div className="catch flex gap-4 my-5 font-mono text-2xl relative">
            <button
              className={`border-1 relative z-10 ${
                selectedCategory === "program"
                  ? "border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => handleCategoryChange("program")}
            >
              Program
            </button>
            <button
              className={`border-1 relative z-10 ${
                selectedCategory === "design"
                  ? "border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => handleCategoryChange("design")}
            >
              Design
            </button>
            <button
              className={`border-1 relative z-10 ${
                selectedCategory === "network"
                  ? "border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => handleCategoryChange("network")}
            >
              Network
            </button>
            <hr className="h-[2px] bg-gray-400 w-full absolute bottom-0" />
          </div>
          <div className="course grid gap-4 w-auto h-auto m-auto grid-cols-3 pb-16 relative mt-10">
            {filterData.map((item) => (
              <CardCourse {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="section-3 relative">
        <div className="text-contents w-11/12 m-auto text-4xl font-mono uppercase font-bold py-9">
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
