import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaFacebook, FaTiktok } from "react-icons/fa6";

const Footer = () => {
    return (
        <>

        <footer className="bg-gradient-to-r from-green-700 to-green-800 text-black py-8">
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-white rounded-full p-2 shadow-md">
                            <FaLaptopCode className="text-white-500 text-2xl" />
                        </div>
                        <p className="font-bold text-white mb-4font-bold text-xl">TB-LAB</p>
                    </div>
                    <p className="hover:text-gray-300">Support</p>
                    <p className="hover:text-gray-300">Rubavu / Rubavu</p>
                    <p className="hover:text-gray-300">tblab250@gmail.com</p>
                    <p className="hover:text-gray-300">+250 793 011 589</p>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><p className="hover:text-gray-300">Privacy Policy</p></li>
                        <li><p className="hover:text-gray-300">Terms of Use</p></li>
                        <li><p className="hover:text-gray-300">Contact</p></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-white mb-4">Get in touch</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/" className="hover:text-gray-300"><FaInstagram size={24} />Instagram</a>
                        <a href="https://www.twitter.com/" className="hover:text-gray-300"><FaXTwitter size={24} />Twitter</a>
                        <a href="https://www.facebook.com/" className="hover:text-gray-300"><FaFacebook size={24} /> Facebook
</a>
                        <a href="https://www.tiktok.com/" className="hover:text-gray-300"><FaTiktok size={24} />ticktok</a>
                    </div>
                </div>

            </div>
        </footer>
        </>
    );
}

export default Footer;
