import React from "react";
import Slide from "../components/Slide";
import data from "../data/Data";
import Card from "../components/Card";
const CourseScreen = () => {
  return (
    <main>
      <Slide />

      <div className="section-2">
        <div className="text-contents w-11/12 m-auto text-4xl font-bebas p-3 ">
          <h1>This is my All course</h1>
        </div>
      </div>

      <div className="course flex gap-4 w-11/12 h-auto m-auto">
        {data.map((c) => (
          <Card {...c} key={c.id} />
        ))}
      </div>
    </main>
  );
};

export default CourseScreen;
