import React from "react";

function TechCard(props) {
  return (
    <div className="my-5 mx-2">
      {/* img */}
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 384 512"
        className="h-16 w-16 text-emerald-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={props.path}></path>
      </svg>
      {/* title */}
      <h1 className="font-bold mt-4 p-2">{props.title}</h1>
      {/* description */}
      <p className="p-2">{props.desc}</p>
    </div>
  );
}

export default TechCard;
