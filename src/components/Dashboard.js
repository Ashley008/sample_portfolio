import React from "react";

function Dashboard(props) {
  return (
    <div className="bg-teal-100 flex place-content-evenly ">
      {/* text */}
      <div className="bg-teal-100 align-middle py-24 px-12">
        <h1 className="text-6xl font-bold font-serif">I'm {props.name}</h1>
        <h2 className="text-2xl">{props.post}</h2>
        <h3 className="text-lg text-gray-600">{props.usp}</h3>
        <div>
          <button className="rounded-md text-white bg-gray-400 p-1 m-1">
            Git
          </button>
          <button className="rounded-md text-white bg-gray-400 p-1 px-2 m-1">
            {" "}
            in
          </button>
          <button className="rounded-md text-white bg-gray-400 p-1 m-1">
            Twi
          </button>
        </div>
      </div>
      {/* clipart */}
      <img
        className="hidden md:block my-20 mr-16 w-52 h-52"
        src="https://cdni.iconscout.com/illustration/premium/thumb/developer-2143200-1801815.png"
        alt="logo"
      />
      <div></div>
    </div>
  );
}

export default Dashboard;
