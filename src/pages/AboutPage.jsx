import React from "react";

import TeacherList from "../data/Funder";
import Teacher from "../components/Funder";

const AboutPage = () => {
  return (
    <main className="h-auto py-10">
      <div className="section-1 w-11/12 m-auto mb-10 ">
        <h2 className="text-center font-mono font-bold uppercase text-5xl ">
          About us
        </h2>
        <p className="text-justify font-sans text-xl text-gray-600 ">
          Our journey started with a simple idea: to create a learning space
          that adapts to the needs of today’s digital learners. Founded in{" "}
          <b>2023</b>,<b>TEACHCODE</b> has since grown into a global learning
          platform, connecting students and professionals with experts from
          around the world. We are driven by our passion for education and our
          commitment to innovation, constantly enhancing our platform to bring
          the best learning experience to our students.
        </p>
      </div>
      <div className="section-2 w-full relative">
        <span className="block w-full h-full bg-gradient-to-r from-green-500 from-10% to-blue-500 to-100% blur-sm absolute"></span>

        <div className="banner-box w-full h-auto py-20 flex ">
          <div className="relative font-mono uppercase font-bold content-center w-[10%] -rotate-90 text-5xl  text-center text-white ">
            <h2>our funder</h2>
          </div>
          <div className="box-card text-white  bottom-0 w-[90%] gap-5 m-auto grid grid-cols-3 pr-20 ">
            {TeacherList.map((t) => (
              <Teacher {...t} key={t.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="section-3"></div>
    </main>
  );
};

export default AboutPage;
