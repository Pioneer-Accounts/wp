import React from "react";

const courses = [
  {
    name: "DPT Diploma In Personal Training",
    certificates: 5,
    duration: "4.5 Months",
    mode: "Offline/Online",
    benefits: [true, true, true, true, true, true, true, true],
    fee: "₹50000",
  },
  {
    name: "CPT Certified Personal Trainer",
    certificates: 5,
    duration: "2.5 Months",
    mode: "Offline/Online",
    benefits: [true, true, true, false, false, true, true, true],
    fee: "₹35000",
  },
  {
    name: "SFN Sports & Fitness Nutrition",
    certificates: 2,
    duration: "1.5 Months",
    mode: "Offline/Online",
    benefits: [true, false, false, true, false, false, true, true],
    fee: "₹25000",
  },
  {
    name: "FNC Fitness Nutrition Course",
    certificates: 2,
    duration: "1.5 Months",
    mode: "Offline/Online",
    benefits: [true, false, false, false, false, false, true, true],
    fee: "₹18000",
  },
  {
    name: "EREPS European Register of Exercise Professionals",
    certificates: 3,
    duration: "3 Months",
    mode: "Offline/Online",
    benefits: [true, true, true, false, false, true, true, true],
    fee: "₹45000",
  },
];

const benefitLabels = [
  "Muscle & Motion subscription",
  "ACE Preparation",
  "CPT",
  "Sports Nutritionist Course",
  "Online PT",
  "Practical Training-Online",
  "Course Material",
  "Online Student Portal",
];

const PricingComparison = () => {
  return (
    <div className="flex justify-center mt-20">
    <div className="overflow-x-auto p-6 flex justify-center w-3/4">
      <table className="min-w-full border border-gray-300 text-center">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border px-4 py-2">Benefits</th>
            {courses.map((course, index) => (
              <th key={index} className="border px-4 py-2">{course.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-bold">No. of certificates</td>
            {courses.map((course, index) => (
              <td key={index} className="border px-4 py-2">{course.certificates}</td>
            ))}
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Duration</td>
            {courses.map((course, index) => (
              <td key={index} className="border px-4 py-2">{course.duration}</td>
            ))}
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Mode</td>
            {courses.map((course, index) => (
              <td key={index} className="border px-4 py-2">{course.mode}</td>
            ))}
          </tr>
          {benefitLabels.map((label, i) => (
            <tr key={i}>
              <td className="border px-4 py-2 font-bold">{label}</td>
              {courses.map((course, j) => (
                <td key={j} className="border px-4 py-2">
                  {course.benefits[i] ? "✅" : "❌"}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-gray-200">
            <td className="border px-4 py-2 font-bold">Fee</td>
            {courses.map((course, index) => (
              <td key={index} className="border px-4 py-2 font-bold">{course.fee}</td>
            ))}
          </tr>
          <tr>
            <td className="border px-4 py-2"></td>
            {courses.map((course, index) => (
              <td key={index} className="border px-4 py-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  ENROLL NOW
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PricingComparison;
