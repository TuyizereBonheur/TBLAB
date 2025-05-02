import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";

const About_us = () => {
  return (
    <>
      <Nav />
    <div className="max-w-6xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">About_us Us</h1>
      
      <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        Welcome to Tb_Lab! We are dedicated to providing reliable tuberculosis lab services with a focus on accuracy, efficiency, and patient care. Our team works with cutting-edge technology and a strong commitment to improving health outcomes in our community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">To provide high-quality TB testing and diagnostics that help save lives and inform treatment decisions.</p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Our Vision</h2>
          <p className="text-gray-600">To be the leading TB diagnostic lab in the region, using innovation and care to combat tuberculosis.</p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Our Team</h2>
          <p className="text-gray-600">Our skilled technicians and medical professionals work tirelessly to ensure accurate results and excellent service.</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default About_us;
