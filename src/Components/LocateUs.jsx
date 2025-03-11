import React from "react";

const LocateUs = () => {
  return (
    <div className="flex justify-center  bg-gray-100  rounded-xl shadow-lg">
    <div className="flex justify-center items-center bg-gray-100 p-6 rounded-xl shadow-lg mt-20 mb-20">
      <div className="w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.832049407736!2d72.8678554752783!3d19.07479068212485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82d8a178aa5%3A0x2b3d81b5a5e55b0!2sK11%20Education!5e0!3m2!1sen!2sin!4v1710000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-1/2 p-6">
        <h2 className="text-xl font-semibold text-red-500 mb-4">Locate Us</h2>
        <label className="block text-gray-700 text-sm font-bold mb-2">Head Office</label>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-900">Head Office</h3>
          <p className="text-sm text-gray-600">
            Office no. 506 & 507, Sahar Plaza, Midas II, near Chakala metro station,
            Andheri-Kurla Road, Andheri East, Mumbai, Maharashtra 400059
          </p>
          <div className="flex items-center mt-4">
            <span className="text-red-500 mr-2">📞</span>
            <span className="text-gray-700">+91-7666611011</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-red-500 mr-2">✉️</span>
            <span className="text-gray-700">info@keleven.com</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LocateUs;
