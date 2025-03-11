import React from "react";

const students = [
  {
    name: "Milee Thakkar",
    role: "Performance Marketer",
    company: "RODEX",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEXsoTVJSv4Fw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716370739305?e=2147483647&v=beta&t=2qY8zLygOhfZkTMOh-FqEdBmpdK71x6NwFC0kRWcnQo",
  },
  {
    name: "Risha Jain",
    role: "Sr. Influencer Executive",
    company: "WRM",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHu4L_w2Fm_Mg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685897619474?e=2147483647&v=beta&t=vtGy6gw5RtAwkwFw7E5YmgsiqhWREcdEGSp_1DeRUN8",
  },
  {
    name: "Rahul Gadiya",
    role: "Founder & CEO",
    company: "HEALTHCON",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG1uJSpuzFAaw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669145321289?e=2147483647&v=beta&t=EhtiVpY68IKdkcFjAdnTEgJd7Ql1M9SYw6hFzqmHwF8",
  },
  {
    name: "Riya Shah",
    role: "Sr. Account Executive",
    company: "BLACAB",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQF-Mkpbia4v_A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711949250440?e=2147483647&v=beta&t=ZFYKv8CuzziH0m0PpPvuJJc5z-BWGlfpvsBIToWpwfs",
  },
];

const StudentLife = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold">
        Explore Student Life at <span className="text-blue-600">IIDE</span>
      </h2>
      <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
        Explore how IIDE’s digital marketing courses helped shape their careers and fuel
        their success.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {students.map((student, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 w-60 text-center">
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-gray-600 text-sm">{student.role}</p>
            <p className="text-blue-600 font-semibold text-sm">{student.company}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
        Talk To Our Alumni
      </button>
    </section>
  );
};

export default StudentLife;
