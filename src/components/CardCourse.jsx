import React from "react";
import StarRating from "./Star";
import { motion } from "framer-motion";

const CardCourse = (props) => {
  const { id, img, courseName, rated, review } = props;
  return (
    <motion.article
      className="shadow-md shadow-slate-400 bg-white h-auto w-full pb-4 card-hover all ease-in-out duration-500 "
      key={id}
    >
      <div className="img w-full h-[350px] overflow-hidden">
        <img
          className="w-full object-cover h-full "
          src={img}
          alt={courseName}
        />
      </div>
      <div className="txt px-4 pt-5 flex justify-between items-center leading-4 ">
        <h1 className="font-mono uppercase font-bold text-[26px]">
          {courseName}
        </h1>
        <StarRating rating={rated} />
      </div>
      <p className="font-sans px-4 py-4 text-[20px] text-gray-600">{review}</p>
      <div className="btn-rated px-4">
        <button className="btn-primary btn-primary-Hover all ease-in-out duration-500">
          Buy Course
        </button>
      </div>
    </motion.article>
  );
};

export default CardCourse;
