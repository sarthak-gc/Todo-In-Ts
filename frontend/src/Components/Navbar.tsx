import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-8 bg-black text-white lg:px-40">
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* "Jot It" Logo */}
      <Link
        to="/home"
        className="text-4xl cursor-pointer font-bold tracking-wide whitespace-nowrap flex justify-center w-full lg:w-auto"
      >
        Jot It
      </Link>

      <div className="lg:flex space-x-4 items-center justify-center hidden">
        <Link
          to="/home"
          className="text-2xl cursor-pointer hover:text-gray-300 p-2 rounded"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-2xl cursor-pointer hover:text-gray-300 p-2 rounded"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-2xl cursor-pointer hover:text-gray-300 p-2 rounded"
        >
          Contact
        </Link>
        <Link
          to="/pricing"
          className="text-2xl cursor-pointer hover:text-gray-300 p-2 rounded"
        >
          Pricing
        </Link>
      </div>

      {/* Start for free button */}
      <Link
        to="/register"
        className="px-6 py-3 text-white bg-black border-2 border-gray-700 cursor-pointer hover:text-gray-300 rounded-lg shadow-md text-2xl hover:border-gray-500 whitespace-nowrap"
      >
        Start for free
      </Link>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 bg-black text-white w-full h-screen flex flex-col items-center justify-center space-y-4 lg:hidden">
          <Link
            to="/home"
            className="text-2xl cursor-pointer hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-2xl cursor-pointer hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-2xl cursor-pointer hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/pricing"
            className="text-2xl cursor-pointer hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
