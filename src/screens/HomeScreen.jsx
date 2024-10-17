import React from "react";
import Hero from "../assets/home/Hero.png";
import { useNavigate, Link } from "react-router-dom";
import dataCard from "../data/Data";
import Card from "../components/Card";
import Partner from "../assets/home/partner-logo/Setec_Logo.png";
import feedbackData from "../data/FeedbackData";
import Feedback from "../components/Feedback";
const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-auto">
      <div className="hero grid grid-cols-21 w-11/12 m-auto justify-center  ">
        <div className="row-1 h-[600px] content-center overflow-x-hidden over">
          <div className="text-[26px] font-sans text-gray-600 ">
            <h1 className="text font-bebas text-[80px] text-green-800">
              Welcome To My Eleaning
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              ipsa voluptatibus blanditiis, fugit obcaecati doloremque deserunt
              vitae ipsum eum possimus laboriosam cumque, enim ut. Dolores sequi
              numquam ullam placeat porro.
            </p>
          </div>
          <div className="btn w-full h-auto pt-7 font-bebas text-[20px]">
            <button
              className="btn-primary btn-primary-Hover all ease-in-out duration-500"
              onClick={() => navigate("/about")}
            >
              Go To About
            </button>
            <button
              className="btn-second btn-second-Hover all ease-in-out duration-500"
              onClick={() => navigate("/course")}
            >
              Go to Course
            </button>
          </div>
        </div>
        <div className="row-2">
          <img className="w-full" src={Hero} alt="hero" />
        </div>
      </div>

      <div className="section-2-project h-auto bg-gray-200  py-10">
        <div className="flex row1 text-[60px] w-11/12 m-auto font-bebas items-center ">
          <h2 className="w-1/3 ">Popular Course</h2>
          <hr className="w-full h-4  bg-green-800" />
        </div>
        <div className="row1 w-11/12 h-auto bg-gray-200 grid grid-cols-[repeat(3,1fr)] gap-4 py-16 m-auto ">
          {dataCard.map((d) => (
            <Card {...d} key={d.id} />
          ))}
        </div>
        <div className="flex row1 text-[60px] w-11/12 m-auto pt-2 font-bebas items-center ">
          <hr className="w-full h-4  bg-green-800" />
          <div className="view-all-course w-1/3 pl-2 ">
            <Link
              className="btn-second btn-second-Hover px-3 all ease-in-out duration-500 "
              to="/course"
            >
              view all course
            </Link>
          </div>
        </div>
      </div>

      <div className="section-3-partner  w-full h-auto py-[40px] shadow-md shadow-green-950">
        <div className="container w-12/12 m-auto">
          <div className="text text-center uppercase font-bebas text-[60px] text-green-800 ">
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

      <div className="section-4-feedback w-full bg-gray-200 h-screen">
        <div className="row text-center">
          <h1>Feedback</h1>
          <p>នេះជា feedback ការគាំទ្ររបស់យើង</p>
        </div>
        <div className="row grid w-11/12 m-auto grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)]">
          {feedbackData.map((f) => (
            <Feedback {...f} key={f.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
