import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { User, Phone, Mail, Lock } from 'lucide-react';

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <Nav />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div>
            <label className="block font-medium">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Your name"
                {...register("name", {
                  required: "name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "name is not defined"
                  }
                })}
              />
            </div>
            {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium">Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="078,073,072,079 ......."
                {...register("telephone", {
                  required: "this field is required",
                  pattern: {
                    value: /^(078|073|072|079)\d{7}$/,
                    message: "phone must start with 078,073,072,079 and be 10 digits"
                  }
                })}
              />
            </div>
            {errors.telephone && <p className='text-red-700'>{errors.telephone.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="your@email.com"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "email is not valid"
                  }
                })}
              />
            </div>
            {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 7,
                    message: "password must be at least 7 characters"
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+/-=\[\]{};':"\\|,.<>\/?]).{7,}$/,
                    message: "password must contain at least one letter and one number"
                  }
                })}
              />
            </div>
            {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-800 font-bold py-2 px-40 rounded-lg hover:bg-green-800 transition text-white"
          >
            Register
          </button>

          <div>
            <Link className="text-green-800 underline font-bold" to={"/Login"}>
              Do you have an account? Login please
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
