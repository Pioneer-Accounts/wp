import React from "react";
import { FaUserPlus, FaVideo, FaClipboardCheck, FaMapMarkerAlt, FaLightbulb, FaRocket } from "react-icons/fa";

const Roadmap = () => {
  const steps = [
    { icon: <FaUserPlus className="text-green-700 text-2xl"/>, title: "Step 1", description: "Register solo or with your dream team by filling out the registration form." },
    { icon: <FaVideo className="text-green-700 text-2xl"/>, title: "Step 2", description: "Submit a 3-minute video pitching your startup idea by April 10th, 2025." },
    { icon: <FaClipboardCheck className="text-green-700 text-2xl"/>, title: "Step 3", description: "Await your shortlist notification after evaluation by a panel of startup experts." },
    { icon: <FaMapMarkerAlt className="text-green-700 text-2xl"/>, title: "Step 4", description: "Touchdown at Mesa Campus on April 19th, 2025, for shortlisted students." },
    { icon: <FaLightbulb className="text-green-700 text-2xl"/>, title: "Step 5", description: "Immerse yourself in startup bootcamp sessions & get 1:1 mentorship." },
    { icon: <FaRocket className="text-green-700 text-2xl"/>, title: "Step 6", description: "Pitch to India’s most influential entrepreneurs & unicorn founders." },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          The <span className="italic text-green-700">Roadmap.</span>
        </h2>
        <div className="relative mt-8 flex items-center">
          <div className="absolute top-5 left-0 w-full h-1 bg-green-500"></div>
          <div className="flex justify-between w-full">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative z-10 w-1/6">
                <div className="bg-white p-4 rounded-full border border-green-500 inline-flex justify-center items-center shadow-md">
                  {step.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
