import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";

function About() {
  return (
      <>
        <Nav />
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">About Us</h1>

      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Tb_Lab is a modern and community-driven laboratory focused on delivering accurate, fast, and reliable health results. 
          We are passionate about improving lives through innovative medical diagnostics.
        </p>
      </section>

      {/* Team Members */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl shadow">
            <img src="/images/bob.jpg" alt="Bobo" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-center mt-3 font-bold">Tuyizere Bonheur</h3>
            <p className="text-center text-sm text-gray-500">Lab Director</p>
          </div>
          <div className="p-4 border rounded-xl shadow">
            <img src="/images/og.jpg" alt="Morgan" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-center mt-3 font-bold">Niyonzima Ogiste</h3>
            <p className="text-center text-sm text-gray-500">Technician</p>
          </div>
          <div className="p-4 border rounded-xl shadow">
            <img src="/images/jaj.jpg" alt="Jaja" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-center mt-3 font-bold">Uwiragiye Jeanette</h3>
            <p className="text-center text-sm text-gray-500">Customer Service</p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2022, Tb_Lab started as a small diagnostic center with a big dream—offering top-tier lab services to everyone.
          Today, we serve hundreds of patients weekly, always focused on quality and professionalism.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p><strong>Phone:</strong> +250 793 011 589</p>
        <p><strong>Email:</strong> tblab250@gmail.com</p>
        <p><strong>Location:</strong> Rubavu, Rwanda</p>
      </section>
    </div>
      <Footer />
    </>
  );
}

export default About;
