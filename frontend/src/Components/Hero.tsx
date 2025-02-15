import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-[60%]  flex justify-start items-center flex-col pt-[5%]  ">
      <div className="text-8xl flex items-center w-[70%] font-bold text-center leading-28   ">
        {" "}
        <h1>
          Stay organized and get things done with{" "}
          <span className="text-[#FFEB3B]">Jot It</span>.
        </h1>
      </div>
      <p className="  w-[70%] text-4xl my-12  text-center leading-24">
        Effortlessly track your tasks and boost productivity.
      </p>

      <div className="flex  w-[80%]  justify-center gap-16">
        <div className=" items-center justify-center text-center">
          <Link
            to="/register"
            className="px-6 py-3 text-white  border-2 border-gray-700 cursor-pointer  hover:text-gray-300 rounded-lg shadow-md  text-2xl hover:border-gray-500"
          >
            Start for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
