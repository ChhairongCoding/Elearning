import React from "react";

const Funder = (props) => {
  const { name, img, detail } = props;
  return (
    <div className="box h-[200px] backdrop-blur-sm font bg-transparent flex shadow-sm-light transition-all ease-in-out duration-200 cursor-pointer card-hover hover:shadow-green-300 text-2xl overflow-hidden border rounded-xl b pr-4 ">
      <span className="absolute w-full h-full z-0 "></span>
      <img className="object-contain w-1/2 h-full " src={img} alt="" />
      <div className="flex-1 relative py-2">
        <h1 className="font-bebas ">{name}</h1>
        <p className="text-lg leading-5 ">{detail}</p>
        <button
          className="text-lg  block border backdrop-blur-sm
         hover:bg-green-500 rounded-sm px-2 hover:scale-105 transition-all ease-in-out duration-100 absolute left-0 bottom-2 w-full uppercase font-mono font-bold "
        >
          View Class
        </button>
      </div>
    </div>
  );
};

export default Funder;
