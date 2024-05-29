
const Navbar = () => {
  return (
    <div className="bg-gray-900 py-2 fixed w-full shadow-sm shadow-gray-800 z-20">
      <div className="container mx-auto justify-between flex">
        <div className="">
            <img src="Innovate Logo.png" alt="" />
        </div>
        <div className="">
            <ul className=" text-white text-lg flex gap-10 font-normal font-['popinsFont'] mt-4 delay-100">
                <li className=" relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[2px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-500 before:origin-left">Home</li>
                <li className=" relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[2px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-500 before:origin-left">About</li>
                <li className=" relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[2px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-500 before:origin-left">Service</li>
                <li className=" relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[2px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-500 before:origin-left">Pages</li>
                <li className=" relative before:absolute before:content:[''] before:w-full before:h-[2px] before:bg-slate-300 before:bottom-[2px] before:left-0 before:scale-0 hover:before:scale-100 before:duration-500 before:origin-left">News</li>
            </ul>
        </div>
        <div className="">
            <button className=" w-48 h-14 rounded-md text-base font-medium font-['popinsFont'] bg-gray-700 focus:bg-gray-600 text-white"> Free Consultation</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
