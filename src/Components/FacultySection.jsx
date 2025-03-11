import React, { useState } from "react";

const facultyData = [
  { id: 1, name: "Sri Priya", title: "Entrepreneur & Speaker", category: "Startup Leaders" },
  { id: 2, name: "Dr. Subhasis Mishra", title: "Professor", category: "Faculty" },
  { id: 3, name: "Sundar Venkatesh", title: "Industry Expert", category: "Startup Leaders" },
  { id: 4, name: "Sumeet Sethi", title: "Consulting Specialist", category: "Faculty" },
  { id: 5, name: "Tim Weiss", title: "Business Strategist", category: "Faculty" },
  { id: 6, name: "Tushar Kanaal", title: "Global Speaker", category: "Startup Leaders" },
];

const FacultySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaculty =
    selectedCategory === "All"
      ? facultyData
      : facultyData.filter((member) => member.category === selectedCategory);

  return (
    <div className="flex justify-center mt-20 mb-20">
    <div className="flex min-h-screen bg-gray-100 p-8 w-3/4">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-beige rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Mesa Faculty</h2>
        <ul>
          <li
            className={`cursor-pointer p-2 rounded-md ${
              selectedCategory === "All" ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </li>
          <li
            className={`cursor-pointer p-2 rounded-md ${
              selectedCategory === "Startup Leaders" ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => setSelectedCategory("Startup Leaders")}
          >
            Startup Leaders
          </li>
          <li
            className={`cursor-pointer p-2 rounded-md ${
              selectedCategory === "Faculty" ? "bg-red-500 text-white" : ""
            }`}
            onClick={() => setSelectedCategory("Faculty")}
          >
            Faculty
          </li>
        </ul>
      </div>

      {/* Faculty Grid */}
      <div className="w-3/4 grid grid-cols-3 gap-6 ml-6">
        {filteredFaculty.map((member) => (
          <div key={member.id} className="bg-white p-4 shadow-md rounded-md">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FacultySection;
