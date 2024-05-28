const Home = () => {
  return (
    <div className="bg-gray-800 h-screen w-full pt-20">
      <div className="container flex">
        <div className="w-1/2 ">
            <h2 className=" text-slate-50 w-[600px] text-6xl font-normal font-['nunitoFont'] pt-12">We Provide Premium Consulting Service For your Business</h2>
            <p className=" font-normal text-xl font-['interFont'] w-[600px] text-slate-100 pt-6 pb-10">The Premium Consulting Service provides a faster way to process plans, register dealings and create titles.</p>
            <button className="font-['popinsFont'] font-medium text-xl text-white px-7 py-4 bg-orange-700 rounded-md animate-pulse">get started now</button>
            <p className="font-['interFont'] font-medium text-xl text-white py-12">Already member of our communty? <span className="underline">Sign in</span></p>
        </div>
        <div className="w-1/2 justify-center mx-auto flex">
            <img src="Inovate banner.png" alt="" className="w-[400px] h-[400px] " />
        </div>
      </div>
    </div>
  )
}

export default Home
