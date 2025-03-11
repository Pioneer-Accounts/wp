import React from "react";

const DigitalMarketingCourses = () => {
  return (
    <div className="bg-white p-8 flex justify-center items-center flex-col">
      <h2 className="text-center text-2xl font-bold mb-4">
        Explore Our <span className="text-blue-600">Digital Marketing Courses</span>
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Discover the knowledge, skills, and guidance you need to build a career in digital marketing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Course Card */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://media.istockphoto.com/id/1333702051/photo/digital-marketing-hexagonal-touch-screen-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=hihuRTM3Dejh-lLpspJ51fVN2z0CaBtzpxFwG-kRoEk="
            alt="Advanced Online Digital Marketing Course"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Live & Online</span>
            <h3 className="text-lg font-semibold mt-2">Advanced Online Digital Marketing Course</h3>
            <p className="text-gray-600 text-sm">Scholarship up to ₹10,000</p>
            <p className="text-gray-600 text-sm">Starts from Mar 15, 2025</p>
            <p className="text-gray-600 text-sm">Duration: 4-6 Months</p>
            <div className="flex gap-4 mt-4">
              <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100">View Course</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Brochure</button>
            </div>
          </div>
        </div>
        
        {/* Second Course Card */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Digital Marketing Certification Courses"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Online</span>
            <h3 className="text-lg font-semibold mt-2">10+ Digital Marketing Certification Courses</h3>
            <p className="text-gray-600 text-sm">Upgrade your skillset with IIDE's short-term certification courses.</p>
            <p className="text-gray-600 text-sm">Duration: 7+ Hours</p>
            <p className="text-gray-600 text-sm">Weekly 12 hours</p>
            <div className="flex gap-4 mt-4">
              <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100">Explore Courses</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Book 1:1 Session</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingCourses;