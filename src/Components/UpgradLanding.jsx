import React from "react";

const UpgradLanding = () => {
  return (
    <div className="flex items-center justify-center p-8 space-x-8 mt-10">
      {/* Left Section */}
      <div className="max-w-md mr-60">
        <h1 className="text-3xl font-bold">
          <span className="text-red-600">Master tomorrow's skills today.</span>
        </h1>
        <p className="text-gray-700 mt-2 text-lg">
          Excel with India’s top upskilling platform.
        </p>

        {/* Search Box */}
        <div className="mt-4 flex border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Tell us what you’re looking to learn"
            className="flex-1 p-2 outline-none"
          />
          <button className="bg-red-600 text-white px-4 py-2">🔍</button>
        </div>

        {/* Goal Selection Buttons */}
        <p className="text-gray-700 mt-3 text-sm">Or select your goal 👇</p>
        <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
          {["Get a promotion", "Industry Certification", "Move to a new career path", "Study Abroad", "Free Course", "Prepare for your first job", "Ace interview skills", "Get an international degree"].map(
            (goal, index) => (
              <button
                key={index}
                className="border rounded-full py-1 px-2 text-gray-600 hover:bg-gray-200"
              >
                {goal}
              </button>
            )
          )}
        </div>

        {/* Community Count */}
        <p className="text-gray-700 mt-4 text-sm">
          Join the community of <span className="text-red-600 font-bold">10,942,534</span> learners.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-black text-white rounded-lg p-6 max-w-sm text-center relative">
        <h2 className="text-red-600 text-4xl font-bold absolute top-4 left-4">upGrad</h2>
        <img
          src="https://media.istockphoto.com/id/2015087617/photo/portrait-of-young-businesswoman-using-laptop-wear-trendy-smart-casual-outfit-isolated-on.jpg?s=612x612&w=0&k=20&c=omB62qhKZjQJMnxHL9f0MrOdwcXmxdmTcMqtnn-6SWw="
          alt="Testimonial"
          className="rounded-lg mx-auto mt-10"
        />
        <p className="mt-4 italic">“The flexibility of online learning helped me finish my degree.”</p>
      </div>
    </div>
  );
};

export default UpgradLanding;
