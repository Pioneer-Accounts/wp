const LearningExperience = () => {
    return (
      <div className="bg-cream px-6 py-10 md:px-16 md:py-16 w-full flex  justify-center items-center  flex-col mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          The Mesa <span className="italic text-green-700">learning experience</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Rigorous, hands-on & case-based – a pedagogy designed in partnership with top leaders & operators
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">01 <span className="font-bold">Pedigreed faculty</span></h3>
            <p className="text-gray-700 text-sm mt-2">Learn from professors from global business schools</p>
          </div>
  
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">02 <span className="font-bold">Startup-focused</span></h3>
            <p className="text-gray-700 text-sm mt-2">Interact with over 200+ industry leaders visiting campus</p>
          </div>
  
          <div className="bg-yellow-200 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">03 <span className="font-bold">Hands-on learning</span></h3>
            <p className="text-gray-700 text-sm mt-2">Learn how to build & scale a business from scratch</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default LearningExperience;
  