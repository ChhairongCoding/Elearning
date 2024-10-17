import React from "react";
import { Card } from "flowbite-react";

const Feedback = (props) => {
  const { id, name, comment } = props;
  return (
    <>
      <Card
        href="#"
        className="relativ max-w-full backdrop-blur-lg bg-transparent   "
        key={id}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {comment}
        </p>
      </Card>
    </>
  );
};

export default Feedback;
