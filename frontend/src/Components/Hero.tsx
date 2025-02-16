import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-[60%] flex justify-center items-center flex-col pt-[5%] sm:pt-16">
      <div className="text-3xl  flex items-center w-[90%] sm:w-[70%] font-bold text-center leading-8 md:leading-28 justify-center">
        <h1 className=" text-5xl  md:6xl lg:text-7xl w-full">
          <span className="block">Stay organized and</span>
          <span className="block">get things done</span>
          <span className="block">
            with <span className="text-[#FFEB3B]">Jot It</span>.
          </span>
        </h1>
      </div>

      <p className="w-full sm:w-[80%] md:w-[70%] text-center text-xl sm:text-lg  lg:text-3xl my-10 leading-6  max-w-full">
        Effortlessly track your tasks and boost productivity.
      </p>

      <div className="flex w-[90%] sm:w-[80%] justify-center gap-8 sm:gap-16 mt-4">
        <div className="items-center justify-center text-center">
          <Link
            to="/register"
            className="px-6 py-3 text-white border-2 border-gray-700 cursor-pointer hover:text-gray-300 rounded-lg shadow-md text-lg sm:text-2xl hover:border-gray-500"
          >
            Start for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
