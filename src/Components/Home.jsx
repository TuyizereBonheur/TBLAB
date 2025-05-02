import React from 'react';
import Nav from './Nav'; // Uyu ni navigation (menu)
import Footer from './Footer'; // Footer ya page
import { Link } from 'react-router-dom'; // Guhuza na links zo gutembera muri pages

function Home() {
  return (
    <>
      <Nav />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          {/* Welcome section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800">Welcome to the Computer Lab</h1>
            <p className="mt-4 text-xl text-gray-600">
              Explore our state-of-the-art computers, technology resources, and lab facilities.
            </p>
          </div>
{/* Features section */}
<div className="grid md:grid-cols-3 gap-8">
  {/* Group 1 */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img src="/images/cp.jpg" alt="Computer Lab" className="w-full h-48 object-cover rounded-t-lg" />
    <h2 className="text-xl font-bold text-gray-800 mt-4">High-Tech Computers</h2>
    <p className="text-gray-600 mt-2">Our computers are equipped with the latest software for your convenience.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img src="/images/pc.jpg" alt="Software" className="w-full h-48 object-cover rounded-t-lg" />
    <h2 className="text-xl font-bold text-gray-800 mt-4">Software & Tools</h2>
    <p className="text-gray-600 mt-2">Access various software and tools that will help you in your projects and assignments.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img src="/images/po.jpg" alt="Tutorials" className="w-full h-48 object-cover rounded-t-lg" />
    <h2 className="text-xl font-bold text-gray-800 mt-4">Learning Support</h2>
    <p className="text-gray-600 mt-2">Get tutorials and support from experienced lab assistants to improve your skills.</p>
  </div>
</div>

{/* Umwanya hagati y’amafoto 3 ya mbere n’andi */}
<div className="my-12"></div> {/* Aka ni akanya gahagije hagati y’amatsinda */}

{/* Group 2 */}
<div className="grid md:grid-cols-3 gap-8">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img src="/images/mm.jpg" alt="Computer Lab" className="w-full h-48 object-cover rounded-t-lg" />
    <h2 className="text-xl font-bold text-gray-800 mt-4">High-Tech Computers</h2>
    <p className="text-gray-600 mt-2">Our computers are equipped with the latest software for your convenience.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img src="/images/cc.jpg" alt="Software" className="w-full h-48 object-cover rounded-t-lg" />
    <h2 className="text-xl font-bold text-gray-800 mt-4">Software & Tools</h2>
    <p className="text-gray-600 mt-2">Access various software and tools that will help you in your projects and assignments.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img src="/images/ii.jpg" alt="Tutorials" className="w-full h-48 object-cover rounded-t-lg" />
    <h2 className="text-xl font-bold text-gray-800 mt-4">Learning Support</h2>
    <p className="text-gray-600 mt-2">Get tutorials and support from experienced lab assistants to improve your skills.</p>
  </div>
</div>


          {/* Call to action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800">Get Started Today</h3>
            <p className="text-gray-600 mt-4">Book your computer session or contact us for more information.</p>
            <Link to="/book-session" className="inline-block mt-6 px-6 py-3 bg-green-800 text-white text-lg rounded-full hover:bg-green-700">
              Book a Session
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
