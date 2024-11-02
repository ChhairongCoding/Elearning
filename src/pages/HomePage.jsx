import React from "react";
import Hero from "../assets/home/Hero.png";
import { useNavigate, Link } from "react-router-dom";
import dataCard from "../data/Data";
import Card from "../components/Card";
import Partner from "../assets/home/partner-logo/Setec_Logo.png";
import feedbackData from "../data/FeedbackData";
import Feedback from "../components/Feedback";
import yungMan from "../assets/home/young-man.png";
import { delay, easeIn, motion } from "framer-motion";

const variate = {
  hiidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.3,
    },
  },
};

const scroll = {
  hidden: {
    opacity: 0,
    y: 300,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <motion.main
      variants={variate}
      initial="hiidden"
      animate="visible"
      viewport={{ once: true }}
      className="w-full h-auto overflow-hidden"
    >
      <div className="hero grid grid-cols-21 w-11/12 m-auto justify-center">
        <div className="row-1 h-[600px] content-center overflow-x-hidden over  max-sm:h-[400px]  ">
          <div className="text-[24px] font-sans text-gray-600  ">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, type: "tween", stiffness: 120 }}
              viewport={{ once: true }}
              className="text font-mono font-bold  uppercase text-[70px] tracking-tight text-green-800 max-sm:text-[40px] max-sm:leading-[40px] max-lg:text-[60px] max-lg:leading-[55px] md:leading-[75px] "
            >
              Welcome To My <br />
              <span>E-leaning</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.9,
                type: "tween",
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="max-sm:text-[16px] max-sm:h-[150px] max-sm:overflow-hidden max-md:h-[180px] max-md:overflow-hidden max-md:text-[20px] font-sans"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              ipsa voluptatibus blanditiis, fugit obcaecati doloremque deserunt
              vitae ipsum eum possimus laboriosam cumque, enim ut. Dolores sequi
              numquam ullam placeat porro.
            </motion.p>
          </div>
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="btn w-full h-auto pt-7 font-bebas text-[20px]"
          >
            <button
              className="btn-primary btn-primary-Hover all ease-in-out duration-500 max-sm:text-[14px]"
              onClick={() => navigate("/about")}
            >
              Go To About
            </button>
            <button
              className="btn-second btn-second-Hover all ease-in-out duration-500 max-sm:text-[14px] "
              onClick={() => navigate("/course")}
            >
              Go to Course
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 30 }}
          viewport={{ once: true }}
          className="row-2 w-full block content-center"
        >
          <img className="w-full " src={Hero} alt="hero" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-2-project h-auto bg-gray-200  py-10 relative z-10 "
      >
        <div className="flex row1 text-[60px] w-11/12 m-auto font-mono uppercase font-bold items-center ">
          <h2 className="w-1/3 ">Popular Course</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 300, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "tween", easeIn, duration: 0.6 }}
          viewport={{ once: true }}
          className="row1 w-11/12 h-auto bg-gray-200 grid grid-cols-[repeat(3,1fr)] gap-4 py-16 m-auto "
        >
          {dataCard.map((d) => (
            <Card {...d} key={d.id} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          transition={{ type: " spring" }}
          viewport={{ once: true }}
          className="flex  row1 text-5xl w-11/12 m-auto pt-2 font-mono uppercase font-bold items-center justify-end"
        >
          <div className="view-all-course pl-2 ">
            <Link
              className="btn-second btn-second-Hover px-3 all ease-in-out duration-500 "
              to="/course"
            >
              view all course
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: " spring", stiffness: 5 }}
        viewport={{ once: true }}
        className="section-3-partner  w-full h-auto py-[40px] relative"
      >
        <div className="container w-12/12 m-auto">
          <div className="text text-center uppercase font-mono font-bold text-5xl text-green-800 ">
            <h1>Our Partners</h1>
          </div>
          <div className="partners w-11/12 m-auto grid grid-cols-[repeat(5,1fr)] gap-5">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "tween" }}
              viewport={{ once: true }}
              className="partner h-auto w-full py-4  "
            >
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2 " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800">
                setec institute
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "tween" }}
              viewport={{ once: true }}
              className="partner h-auto w-full py-4  "
            >
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2 " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800">
                setec institute
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "tween" }}
              viewport={{ once: true }}
              className="partner h-auto w-full py-4  "
            >
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2 " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800">
                setec institute
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "tween" }}
              viewport={{ once: true }}
              className="partner h-auto w-full py-4  "
            >
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2 " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800">
                setec institute
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, type: "tween" }}
              viewport={{ once: true }}
              className="partner h-auto w-fu
              ll py-4  "
            >
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2  " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800 ">
                setec institute
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scroll}
        initial="hidden"
        whileInView="visible"
        transition={{
          type: "tween",
          ease: "easeIn",
          duration: 0.8,
        }}
        viewport={{ once: true }}
        className=" relative section-4-feedback w-full bg-gray-200 py-10   overflow-hidden"
      >
        <div className="row text-center pb-10 ">
          <h1 className="text-5xl font-mono font-bold uppercase ">Feedback</h1>
          <p className="font-sans text-xl text-gray-600">
            នេះជា feedback ការគាំទ្ររបស់យើង?
          </p>
        </div>
        <div className="row grid w-11/12 m-auto grid-cols-[repeat(2,1fr)] justify-center grid-rows-[repeat(2,1fr)] gap-2 ">
          {feedbackData.map((f) => (
            <Feedback {...f} key={f.id} />
          ))}
        </div>
      </motion.div>

      <div className="section-5 relative bg-gray-200 pt-10 ">
        <motion.div
          initial={{ x: 1500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.7,
          }}
          viewport={{ once: true }}
          style={{
            clipPath: "polygon(0% 10%, 100% 0% , 100% 100% ,0% 100% )",
          }}
          className='absolute content-[""] block bg-green-400 w-full h-full -z-0  bottom-0  '
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="contain flex w-8/12 m-auto content-center items-center"
        >
          <div className="relative  ">
            <img className="w-auto" src={yungMan} alt="" />
          </div>
          <divv className="relative h-auto text-white">
            <h1 className="text-5xl font-mono font-bold uppercase">
              {" "}
              Become an instructor
            </h1>
            <p className="text-slate-300">
              Instructors from around the world teach millions of learners on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="bg-green-600 mt-4 p-2 font-mono font-bold rounded-sm  hover:bg-green-500 all ease-in-out duration-200 hover:px-3 border-green-600 ">
              Let Start
            </button>
          </divv>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default HomePage;
