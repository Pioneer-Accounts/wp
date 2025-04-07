import { useState } from "react";

const IIDEImpact = () => {
  const [selected, setSelected] = useState(2);

  const items = [
    "Exclusive Access to the World Advertising Research Center’s (WARC) Assets",
    "Personalized Mentorship From Industry Leaders",
    "Cutting-Edge Curriculum Designed by Industry Experts",
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Left Section (Text Content) */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The IIDE Impact</h2>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-md transition-all ${
                selected === index
                  ? "border border-blue-600 text-blue-700 bg-blue-50"
                  : "text-gray-700"
              }`}
              onClick={() => setSelected(index)}
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-gray-600">
          Expert-designed and industry-aligned, our digital marketing courses prepare you for the industry challenges of today and the opportunities of tomorrow, ensuring a clear path to success.
        </p>
      </div>

      {/* Right Section (Image & Button) */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <img
          src="https://media.istockphoto.com/id/1428719703/photo/a-woman-instructor-talking-to-the-class-while-conducting-cpr-training.jpg?s=612x612&w=0&k=20&c=qyRWn0YurOuyfvmFD6tlRWpI_yT7W2kHooV0KK9Qy7s="
          alt="Classroom"
          className="w-full rounded-lg shadow-md"
        />
        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-blue-700 transition">
          Get Free Consultation →
        </button>
      </div>
    </div>
  );
};

export default IIDEImpact;
