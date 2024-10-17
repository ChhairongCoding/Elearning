import React from "react";
import { Carousel } from "flowbite-react";

const Slide = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        <div className=" flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className=" w-full h-auto object-cover"
            src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-e-learning-word-concepts-banner-png-image_7651797.png"
            alt=""
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className=" w-full h-auto object-cover"
            src="https://img.freepik.com/free-vector/young-man-studying-chemistry-desk_1262-21314.jpg?w=1380&t=st=1729192631~exp=1729193231~hmac=514b00c5933a4cfad97bd34ea3dc4e5672fed52d29ff33767633d37ddf23e96a"
            alt=""
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            className=" w-full h-auto object-cover"
            src="https://img.freepik.com/free-vector/classroom-essentials-editable-templates-vector-presentation_53876-105811.jpg?w=1380&t=st=1729192688~exp=1729193288~hmac=afab4d840bc09e974c80747fdc9e56771a448f600f9d022dc34e8bb46957a3fe"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slide;
