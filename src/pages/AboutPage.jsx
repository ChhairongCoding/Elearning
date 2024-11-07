import React from "react";

import TeacherList from "../data/Funder";
import Teacher from "../components/Funder";
import { easeIn, motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.main
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeIn" }}
      className="h-auto py-10"
    >
      <div className="section-1 w-11/12 m-auto mb-10 ">
        <h2 className="text-center font-mono font-bold uppercase text-5xl ">
          About <span className="text-green-500">us</span>
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
        <div className="banner-box w-full h-auto py-20 flex bg-green-400 max-md:grid ">
          <div className="relative font-mono uppercase font-bold content-center w-[10%] -rotate-90 text-5xl  text-center text-white  max-md:rotate-0 max-md:text-center max-md:w-full max-md:pb-5">
            <h2>our funder</h2>
          </div>
          <div className="box-card text-white  bottom-0 w-[90%] gap-5 m-auto grid grid-cols-3 pr-20 max-md:grid-cols-1 ">
            {TeacherList.map((t) => (
              <Teacher {...t} key={t.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="section-3"></div>
    </motion.main>
  );
};

export default AboutPage;
