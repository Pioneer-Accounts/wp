import React from "react";

const JoinMovement = () => {
  return (
    <div className="flex justify-center mt-20 ">
    <div
      className="w-3/4 h-screen bg-cover bg-center flex items-center justify-center rounded-xl"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600')"  }}
    >
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold">
          Join the <span className="text-blue-600 font-bold">movement</span>
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Sign up to get ACE-sponsored research, expert blog articles, industry insights, 
          and fitness tips—plus exclusive information on careers in health and fitness.
        </p>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md w-full hover:bg-red-600">
            SUBMIT
          </button>
        </div>
        <div className="mt-2 flex items-start">
          <input type="checkbox" id="subscribe" className="mr-2 mt-1"/>
          <label htmlFor="subscribe" className="text-gray-600 text-sm text-left">
            Yes! I’d like to receive the latest news and updates from ACE.
          </label>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JoinMovement;
