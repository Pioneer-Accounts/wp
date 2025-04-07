import React from "react";
// import l1 from "../assets/l1.webp";
// import l2 from "../assets/l2.webp";
// import l3 from "../assets/l3.webp";
// import l4 from "../assets/l4.webp";
// import l5 from "../assets/l5.webp";

const businesses = [
  { name: "Nita Tandon Sharma", role: "Founder, InnovArtInc", img: "https://media.istockphoto.com/id/2158469005/photo/close-up-portrait-of-a-young-indian-man-standing-in-glasses-and-blue-shirt-smiling-in-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=hUkRXV7gT6nqEbVr81ECIFMAlE8OdxfvZOMsP6F-wRk=" },
  { name: "Durkhil Rawal", role: "Founder, Servic", img: "https://media.istockphoto.com/id/2121827514/photo/portrait-of-young-businesswoman-with-curly-hairstyle-wear-trendy-smart-casual-outfit-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=R9TOnGlHwC2be_TtbV6WeVf_YPn5dZ24BDVVtRWUrvs=" },
  { name: "Nikila Gujar", role: "Founder, Art Palette", img: "https://media.istockphoto.com/id/1262283524/photo/smiling-indian-young-adult-woman-wearing-glasses-typing-on-laptop-computer-working-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=tZlZYGe84sgVVwuVLf1DmcS8cfy4bcmTbPen3njt758=" },
  { name: "Aashna Gautam", role: "Co-founder, Spark Studio", img: "https://media.istockphoto.com/id/1301327357/photo/young-women-using-laptop-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=MPLVrORCburbAWJmGazdkIGRnr-p-SZjg_LgvbGs0LA=" },
  { name: "Nishav Ag", role: "Co-founder, xyz", img: "https://media.istockphoto.com/id/655931794/photo/backpacker-with-laptop-sits-on-the-top-view-point-under-mountain-settelment.webp?a=1&b=1&s=612x612&w=0&k=20&c=LQk6CZKOxZc89HTKydA-aU1IaJh3q-8Q0iJ3DP04V-c=" },
];

const RazorpayGrowth = () => {
  return (
    <div className="text-center p-8 mt-10">
      {/* Heading */}
      <h1 className="text-3xl font-semibold">
        Company grows with <span className="text-blue-600">you!</span>
      </h1>
      <p className="text-gray-600 mt-2 font-medium">1,50,000+ Businesses</p>

      {/* Business Cards */}
      <div className="flex justify-center space-x-6 mt-8 overflow-x-auto">
        {businesses.map((business, index) => (
          <div key={index} className="relative w-48">
            <img
              src={business.img}
              alt={business.name}
              className="w-full h-60 object-cover rounded-lg grayscale"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">{business.name}</h3>
              <p className="text-sm">{business.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RazorpayGrowth;
