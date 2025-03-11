import React from "react";

const StudentDifferentiation = () => {
  const features = [
    {
      title: "3-4 hours with experts everyday",
      description:
        "Out of 7-8 hours of training everyday, you spend 3-4 hours with industry experts who've worked as sales and marketing leaders at companies like Nestle, HUL, Perfetti, etc.",
      icon: "🧑‍🏫",
    },
    {
      title: "Over 100+ assignments",
      description:
        "1 million assignments and mock interviews later on, you'll solve business problems in your sleep. Get ready to crack any and every job interview.",
      icon: "📑",
    },
    {
      title: "300+ hours on actual brand problems",
      description:
        "Spend 3-4 hours everyday working on actual business problems. No more cookie-cutter mug-ups. Only real-world business skills through case studies across sectors.",
      icon: "💡",
    },
    {
      title: "140+ hours with Human Skills coaches",
      description:
        "You learn skills that'll help you not just to get the job, but also ace it and become a future sales and marketing leader. Get prepared for any challenge your job throws at you.",
      icon: "🎤",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold">
        Differentiating our students through
        <br />
        <span className="text-yellow-500 font-bold">intensity and practicality</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex space-x-4 items-start"
          >
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDifferentiation;
