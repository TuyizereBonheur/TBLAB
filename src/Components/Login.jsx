import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Footer from './Footer';
import { User, Lock } from 'lucide-react'; // Shyiramo icons za lucide-react

function Login() {
    return (
        <>
            <Nav />
            <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>

                {/* Username Field */}
                <div>
                    <label className="block text-md font-medium text-gray-700 mb-1">Username</label>
                    <div className="flex items-center border border-gray-300 rounded-md">
                        <User className="text-gray-500 ml-3" size={20} />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="flex items-center border border-gray-300 rounded-md">
                        <Lock className="text-gray-500 ml-3" size={20} />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Login Button */}
                <div className="text-center">
                    <button className="mt-4 w-full font-bold bg-green-800 text-white py-2 rounded-md hover:bg-green-800 transition">
                        Login
                    </button>
                    <div>
                        <Link className="text-green-800 underline font-bold" to={"/Signup"}>
                            Don't have an account? Please go to Signup
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
