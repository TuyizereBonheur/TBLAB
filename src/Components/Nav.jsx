import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

function Nav() {
  return ( 
    <>
      {/* Navigation Bar */}
      <div className="hidden md:flex md:items-center bg-gradient-to-r from-green-600 to-green-800 justify-between px-8 h-[70px]">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full p-2 shadow-md">
            <FaLaptopCode className="text-black-500 text-2xl" />
          </div>
          <p className="font-bold text-xl text-black">TB-LAB</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link className="text-white font-bold hover:text-black px-1 py-1 rounded-md text-sm" to={"/"}> Home </Link>
          <Link className="text-white font-bold hover:text-black px-1 py-1 rounded-md text-sm" to={"/About_us"}> About_us </Link>
          <Link className="text-white font-bold hover:text-black px-1 py-1 rounded-md text-sm" to={"/About"}> About </Link>
          <div className="flex space-x-4">
            <Link className="text-white font-bold hover:text-black px-1 py-1 rounded-md text-sm" to={"/Login"}> Login </Link>
                     </div>
        </div>
      </div>

 
    </>
  );
}

export default Nav;
