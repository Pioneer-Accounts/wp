import React from "react";

const facultyMembers = [
  {
    name: "Himesh Madaan",
    title: "Professor of Operations, Kellogg School of Management",
    image: "https://tring-coin.objectstore.e2enetworks.net/seo_popular_master/202410291534_o7gXBkAOKyDld6wo.webp",
  },
  {
    name: "Anmol Sharma",
    title: "Professor of Marketing, Kellogg School of Management",
    image: "https://tring-coin.objectstore.e2enetworks.net/seo_popular_master/202410291557_Uw7PRqmXHTVE78D2.webp",
  },
  {
    name: "Ray Titus",
    title: "Pro Vice Chancellor, Alliance University, Visiting Faculty, IIM Bengaluru",
    image: "https://sps.columbia.edu/sites/default/files/styles/card_square_270x270_medium_1x/public/2021-06/screen_shot_2021-06-02_at_4.53.35_pm.png.webp?itok=OEPkfOGe",
  },
  {
    name: "Tushar Jaruhar",
    title: "Visiting Faculty, Ashoka University",
    image: "https://i1.feedspot.com/original/5584085.jpg",
  },
  {
    name: "Sandeep Das",
    title: "Visiting Faculty, IIM Bengaluru",
    image: "https://efinladder.in/assets/images/murrad.jpg",
  },
  {
    name: "Dr. Ramya Ranganathan",
    title: "Professor of Organizational Behaviour, IIM Bengaluru",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_qKXQ0CAUGPAusxGvt3-FaJkiH-R5kO7_8RfWb_leHpHETp-9",
  },
];

const FacultyShowcase = () => {
  return (
    <div className="bg-[#FAF5EF] py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Learn from <span className="italic text-orange-600">Top Faculty</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="text-center">
            <img
              src={faculty.image}
              alt={faculty.name}
              className="mx-auto rounded-full border-4 border-orange-200"
            />
            <h3 className="mt-4 font-medium">{faculty.name}</h3>
            <p className="text-sm text-gray-600">{faculty.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyShowcase;
