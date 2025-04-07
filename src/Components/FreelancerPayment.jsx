import React from "react";
import image from "../assets/freelancer.avif";
const FreelancerPayment = () => {
  return (
    <div className="font-sans p-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-6 flex justify-center">
        <h1 className="text-3xl font-bold ">Powering every industry. Powering all disruptors.</h1>
        {/* <div className="flex space-x-4 text-gray-500">
          <span>🎮</span>
          <span>📷</span>
          <span>🎵</span>
          <span>💼</span>
        </div> */}
      </nav>

      {/* Category Tabs */}
      <div className="flex space-x-6 text-gray-500 border-b pb-2 mb-6 flex justify-center">
        <span className="cursor-pointer">E-Commerce</span>
        <span className="cursor-pointer">Education</span>
        <span className="cursor-pointer">BFSI</span>
        <span className="cursor-pointer">SaaS</span>
        <span className="cursor-pointer font-semibold border-b-2 border-black">Freelancer</span>
      </div>

      {/* Content Section */}
      <div className="relative flex items-center  justify-center bg-gray-100 p-6 rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="absolute left-10 bg-white  ml-100 p-6 shadow-lg rounded-lg max-w-md">
          <h2 className="text-2xl font-bold">
            The personalized payment solution for <span className="text-green-600">freelancers</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Easily accept payments, even without a website and without any coding expertise, while also enabling the creation of your personalized, branded online store.
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            See Solutions →
          </button>
        </div>

        {/* Image Section */}
        <img
          src={image}
          alt="Freelancer working"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default FreelancerPayment;
