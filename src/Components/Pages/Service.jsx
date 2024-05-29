const Service = () => {
  return (
    <div className="bg-slate-200 pt-24">
      <div className="container">
        <div className="w-full flex">
          <div className="w-1/2">
            <h1 className="font-semibold text-lg font-['popinsFont'] text-orange-600">
              Services
            </h1>
            <h2 className=" font-semibold capitalize text-5xl font-['popinsFont'] w-[350px] text-gray-800 pt-2 pb-5">
              Find the service we provide
            </h2>
          </div>
          <div className="w-1/2 mt-8">
            <p className=" font-normal text-xl font-['interFont'] w-[500px] text-gray-800 pb-5">
              Our consultants have years of experience on the in success.
              ​Through the provision of our services.
            </p>
          </div>
        </div>
        <div className="w-full flex gap-3">
          <div className="w-1/4 h-[350px] bg-white rounded-lg px-2 py-10">
            <p className="mx-auto justify-center w-20 h-20 rounded-full relative after:absolute after:content:[''] after:h-24 after:w-24 after:border-[3px] after:rounded-full after:-top-2 after:-left-2 after:-bottom-2 after:-right-2 after:border-red-500 loader">
              <img src="service-1.png" alt=""  />
              <span className=" absolute w-3 h-3 rounded-full bg-red-500 left-0 top-0 rotate-180 "></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
