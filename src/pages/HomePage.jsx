import React from "react";
import Hero from "../assets/home/Hero.png";
import { useNavigate, Link } from "react-router-dom";
import dataCard from "../data/Data";
import Card from "../components/Card";
import Partner from "../assets/home/partner-logo/Setec_Logo.png";
import feedbackData from "../data/FeedbackData";
import Feedback from "../components/Feedback";
import yungMan from "../assets/home/young-man.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-auto overflow-hidden">
      <div className="hero grid grid-cols-21 w-11/12 m-auto justify-center">
        <div className="row-1 h-[600px] content-center overflow-x-hidden over  max-sm:h-[400px]  ">
          <div className="text-[24px] font-sans text-gray-600  ">
            <h1 className="text font-mono font-bold  uppercase text-[70px] tracking-tight text-green-800 max-sm:text-[40px] max-sm:leading-[40px] max-lg:text-[60px] max-lg:leading-[55px] md:leading-[75px] ">
              Welcome To My <br />
              <span>E-leaning</span>
            </h1>
            <p className="max-sm:text-[16px] max-sm:h-[150px] max-sm:overflow-hidden max-md:h-[180px] max-md:overflow-hidden max-md:text-[20px] font-sans">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              ipsa voluptatibus blanditiis, fugit obcaecati doloremque deserunt
              vitae ipsum eum possimus laboriosam cumque, enim ut. Dolores sequi
              numquam ullam placeat porro.
            </p>
          </div>
          <div className="btn w-full h-auto pt-7 font-bebas text-[20px]">
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
          </div>
        </div>
        <div className="row-2 w-full block content-center">
          <img className="w-full " src={Hero} alt="hero" />
        </div>
      </div>

      <div className="section-2-project h-auto bg-gray-200  py-10 relative z-10 ">
        <div className="flex row1 text-[60px] w-11/12 m-auto font-mono uppercase font-bold items-center ">
          <h2 className="w-1/3 ">Popular Course</h2>
        </div>
        <div className="row1 w-11/12 h-auto bg-gray-200 grid grid-cols-[repeat(3,1fr)] gap-4 py-16 m-auto ">
          {dataCard.map((d) => (
            <Card {...d} key={d.id} />
          ))}
        </div>
        <div className="flex  row1 text-5xl w-11/12 m-auto pt-2 font-mono uppercase font-bold items-center justify-end">
          <div className="view-all-course pl-2 ">
            <Link
              className="btn-second btn-second-Hover px-3 all ease-in-out duration-500 "
              to="/course"
            >
              view all course
            </Link>
          </div>
        </div>
      </div>
      <div className="section-3-partner  w-full h-auto py-[40px] shadow-md shadow-green-950 relative z-10">
        <div className="container w-12/12 m-auto">
          <div className="text text-center uppercase font-mono font-bold text-5xl text-green-800 ">
            <h1>Our Partners</h1>
          </div>
          <div className="partners w-11/12 m-auto grid grid-cols-[repeat(5,1fr)] gap-5">
            <div className="partner h-auto w-full py-4  ">
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2 " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800">
                setec institute
              </div>
            </div>
            <div className="partner h-auto w-full py-4  ">
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2 " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800">
                setec institute
              </div>
            </div>
            <div className="partner h-auto w-full py-4  ">
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2 " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800">
                setec institute
              </div>
            </div>
            <div className="partner h-auto w-full py-4  ">
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2 " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800">
                setec institute
              </div>
            </div>
            <div className="partner h-auto w-full py-4  ">
              <div className="logo-partner  w-auto h-auto m-auto ">
                <img className="w-full m-auto pb-2  " src={Partner} alt="" />
              </div>
              <div className="brand-name text-center uppercase font-sans text-[20px] font-[700] text-green-800 ">
                setec institute
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative section-4-feedback w-full bg-gray-200 py-10 z-10   overflow-hidden">
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
      </div>

      <div className="section-5 relative bg-gray-200 pt-10 ">
        <div
          style={{
            clipPath: "polygon(0% 10%, 100% 0% , 100% 100% ,0% 100% )",
          }}
          className='absolute content-[""] block bg-green-400 w-full h-full -z-0  bottom-0  '
        ></div>

        <div className="contain flex w-8/12 m-auto content-center items-center">
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
        </div>
      </div>
    </main>
  );
};

export default HomePage;
