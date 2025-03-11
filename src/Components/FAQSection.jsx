import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const faqData = {
  General: [
    "What is unique about Mesa’s PG Program in Startup Leadership?",
    "Does this program offer a degree or a diploma?",
    "Why is this program in-person and not online?",
    "How long is this program and why?",
    "What are the core courses I have to undertake?",
  ],
  Admissions: [],
  Careers: [],
  "Fees & Scholarships": [],
};

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="flex justify-center mt-20 mb-20">
    <div className="flex bg-[#f7f5ef] p-8 rounded-xl w-3/4">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#eee] p-6 rounded-l-xl">
        <h2 className="text-xl font-semibold">Frequently asked <span className="italic text-green-600">questions</span></h2>
        <ul className="mt-4">
          {Object.keys(faqData).map((category) => (
            <li
              key={category}
              className={`p-3 cursor-pointer ${selectedCategory === category ? "bg-white font-bold" : "text-gray-600"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {selectedCategory === category && <FaArrowRight className="inline ml-2" />}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Content */}
      <div className="w-3/4 bg-white p-6 rounded-r-xl">
        {faqData[selectedCategory].length > 0 ? (
          faqData[selectedCategory].map((question, index) => (
            <div key={index} className="border-b py-4">
              <button
                className="w-full text-left font-medium"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                {question} {openQuestion === index ? "▲" : "▼"}
              </button>
              {openQuestion === index && (
                <p className="mt-2 text-gray-600">Answer content goes here.</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No questions available for this category.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default FAQSection;
