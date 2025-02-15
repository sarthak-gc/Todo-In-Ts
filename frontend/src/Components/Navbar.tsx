import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-4 items-center p-4 py-8 bg-black text-white">
      <Link to="/home" className="cursor-pointer text-4xl text-center">
        Jot It
      </Link>

      <ul className="flex space-x-4   col-span-2 items-center justify-center">
        <Link
          to="/home"
          className="text-2xl w-[15%]  cursor-pointer hover:text-gray-300 p-2 rounded"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-2xl w-[15%]  cursor-pointer hover:text-gray-300 p-2 rounded"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-2xl w-[15%]  cursor-pointer hover:text-gray-300 p-2 rounded"
        >
          Contact
        </Link>
        <Link
          to="/pricing"
          className="text-2xl w-[15%]  cursor-pointer hover:text-gray-300 p-2 rounded"
        >
          Pricing
        </Link>
      </ul>

      <div className=" items-center justify-center text-center">
        <Link
          to="/register"
          className="px-6 py-3 text-white bg-black border-2 border-gray-700 cursor-pointer  hover:text-gray-300 rounded-lg shadow-md  text-2xl hover:border-gray-500"
        >
          Start for free
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
