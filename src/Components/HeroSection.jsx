import React from "react";
import image from "../assets/image.png";
const HeroSection = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <ul className="flex space-x-6 text-gray-600">
          <li className="text-red-500 font-semibold">Home</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>Work With Us</li>
          <li>Download Prospectus</li>
          <li>Contact Us</li>
          <li>FAQ’s</li>
        </ul>
      </nav>
      <div className="flex justify-between px-16 py-12 items-center ml-72 mt-10 mb-10">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold leading-tight">
            Level up your <span className="text-purple-700">Marketing</span> or
            <br /> <span className="text-purple-700">Product</span> career with
            Practical expert-led courses
          </h1>
          <p className="text-gray-600 mt-4">
            Begin, switch, or scale your career by learning the most in-demand
            skills from elite industry experts.
          </p>
          <button className="mt-6 bg-purple-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-800">
            Explore Courses
          </button>
        </div>
        {/* Right Content */}
        <div className="relative mr-72">
          <div className=" rounded-lg p-4">
            <img
              src={image}
              alt="Expert-led Courses"
              className="rounded-lg"
            />
          </div>
          {/* <div className="absolute top-4 left-4 bg-white px-3 py-1 shadow rounded-lg text-sm">
            Digital Marketing
          </div>
          <div className="absolute top-20 left-10 bg-white px-3 py-1 shadow rounded-lg text-sm">
            UI/UX
          </div>
          <div className="absolute bottom-4 right-4 bg-white px-3 py-1 shadow rounded-lg text-sm">
            Performance Marketing
          </div>
          <div className="absolute bottom-10 right-10 bg-white px-3 py-1 shadow rounded-lg text-sm">
            Copy Writing
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
