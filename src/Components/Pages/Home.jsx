import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import About from "./About";
import Service from "./Service";

const Home = () => {
  return (
    <div className="bg-gray-800 h-full w-full pt-20 ">
      <div className="container flex">
        <div className="w-1/2 ">
          <h2 className=" text-slate-50 w-[600px] text-6xl font-normal font-['nunitoFont'] pt-12">
            We Provide Premium Consulting Service For your Business
          </h2>
          <p className=" font-normal text-xl font-['interFont'] w-[600px] text-slate-100 pt-6 pb-10">
            The Premium Consulting Service provides a faster way to process
            plans, register dealings and create titles.
          </p>
          <button className=" font-['popinsFont'] font-medium text-xl text-white border-2 rounded-xl px-7 py-4 drop-shadow-md hover:bg-gray-950 hover:border-gray-800">
            Learn More
          </button>
          <div className="flex justify-between">
          <p className="font-['interFont'] font-medium text-xl text-white py-12">
            Already member of our communty?{" "}
            <span className="underline text-blue-400">Sign in</span>
          </p>
          </div>
          <div className="flex justify-between">
            <div className="pb-10 flex ">
              <p className="bg-slate-400 w-10 h-10 rounded-full relative border-2 border-white">
                <p className="bg-slate-400 w-10 h-10 rounded-full absolute border-2 left-6"></p>
                <p className="bg-slate-400 w-10 h-10 rounded-full absolute border-2 left-12"></p>
                <p className="bg-slate-400 w-10 h-10 rounded-full absolute border-2 left-[72px]"></p>
              </p>
            </div>
            <div className="">
              <div className="flex gap-2">
                <h1 className=" font-bold font-['interFont'] text-2xl text-blue-900">
                  4.5
                </h1>
                <div>
                  <h1 className="w-[1px] h-full bg-slate-700"></h1>
                </div>
                <div className="flex gap-1 text-yellow-600 text-sm mt-2">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-36 h-36 bg-gray-700 rounded-ss-xl pt-10">
              <h2 className="w-20 h-20 bg-slate-400 rounded-full mx-auto justify-center flex">
                <span className="flex m-auto justify-center items-center w-10 h-10 rounded-full bg-white animate-pulse">
                  <FaPlay />
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className=" h-full w-[1px] bg-slate-900"></h1>
        </div>
        <div className="w-1/2 justify-center mx-auto flex">
          <img
            src="https://mdinfotechbd.com/assets/images/K4C.webp"
            alt=""
            className="w-[600px] h-[600px] "
          />
        </div>
      </div>
      <About/>
      <Service/>
    </div>
  );
};

export default Home;
