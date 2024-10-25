import React from "react";
import Banner from "../assets/home/CardImage/bannera.jpg";

const AboutScreen = () => {
  return (
    <main className="h-auto">
      <div className="section-1">
        <h2>About us</h2>
        <p>
          Our journey started with a simple idea: to create a learning space
          that adapts to the needs of today’s digital learners. Founded in 2023,
          TEACHCODE has since grown into a global learning platform, connecting
          students and professionals with experts from around the world. We are
          driven by our passion for education and our commitment to innovation,
          constantly enhancing our platform to bring the best learning
          experience to our students.
        </p>
      </div>
      <div className="section-2">
        <div className="banner-box relative w-full block">
          <img className="" src={Banner} alt="banner" />
          <div className="why-choose-us absolute z-10 top-0 text-center  w-full  ">
            <h1>Why Choose Us</h1>
          </div>
          <div className="box-card absolute bottom-0 w-11/12 m-auto">
            <div className="">dsafhjksdha</div>
            <div className="">dsafhjksdha</div>
            <div className="">dsafhjksdha</div>
          </div>
        </div>
      </div>
      <div className="section-3"></div>
    </main>
  );
};

export default AboutScreen;
