const NewsletterSection = () => {
    return (
      <div className="bg-purple-700 text-white p-10 flex justify-center items-center p-20 ">
        <div className="max-w-3xl w-full">
          <h2 className="text-2xl font-bold">
            Join thousands of others in growing your <br />
            <span className="text-white">Marketing & Product skills</span>
          </h2>
          <p className="text-sm mt-2 text-gray-300">
            Receive your power-packed emails with free tips to keep you ahead of the competition.
          </p>
  
          <div className="mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-2 border rounded text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-2 border rounded text-black"
            />
          </div>
  
          <div className="flex items-center gap-4 mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Marketing
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Product
            </label>
          </div>
  
          <button className="mt-4 bg-black text-white py-2 px-4 w-full rounded hover:bg-gray-800">
            Yes, Subscribe To Newsletter
          </button>
        </div>
      </div>
    );
  };
  
  export default NewsletterSection;
  