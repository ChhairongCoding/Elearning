import React from "react";
import StarRating from "./Star";

const Feedback = (props) => {
  const { id, name, comment, rated } = props;
  return (
    <article
      className="backdrop-blur-sm bg-gray-400 bg-opacity-50 w-11/12 h-auto m-auto"
      key={id}
    >
      <h1>{name}</h1>
      <p>{comment}</p>
      <StarRating rating={rated} />
    </article>
  );
};

export default Feedback;
