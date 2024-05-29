import { IoIosCheckmark } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-white h-screen w-full pt-24">
      <div className="container flex">
        <div className="w-1/2">
          <img
            src="https://mdinfotechbd.com/assets/images/K4C.webp"
            alt=""
            className="w-[400px] h-[400px] m-auto justify-center"
          />
        </div>
        <div className="w-1/2 mt-10">
          <h1 className="font-semibold text-lg font-['popinsFont'] text-orange-600">
            ABOUT US
          </h1>
          <h2 className=" font-semibold text-5xl font-['popinsFont'] w-[500px] text-gray-800 pt-2 pb-5">
            Welcome to World Best Business Company
          </h2>
          <p className=" font-normal text-xl font-['interFont'] w-[500px] text-gray-800 pb-5">
            We partner with experienced and qualified Accountants, Financial
            Advisors and Chartered Secretaries to provide.
          </p>
          <div className=" pb-10">
            <ul className="flex gap-3 mb-1">
              <span className="p-2 rounded-full bg-blue-300 text-black">
                <IoIosCheckmark />
              </span>
              <li className=" text-xl font-normal font-['interFont'] text-gray-800">Monthly assesment report</li>
            </ul>
            <ul className="flex gap-3 mb-1">
              <span className="p-2 rounded-full bg-blue-300 text-black">
                <IoIosCheckmark />
              </span>
              <li className=" text-xl font-normal font-['interFont'] text-gray-800">Tax planning consultation</li>
            </ul>
            <ul className="flex gap-3">
              <span className="p-2 rounded-full bg-blue-300 text-black">
                <IoIosCheckmark />
              </span>
              <li className=" text-xl font-normal font-['interFont'] text-gray-800">Montly rent problem solution</li>
            </ul>
          </div>
          <button className=" font-['popinsFont'] font-medium text-2xl text-gray-800 border-[3px] border-gray-900 rounded-xl px-7 py-4 shadow-md hover:bg-sky-800 hover:border-sky-800 delay-100 hover:text-gray-100 ">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
