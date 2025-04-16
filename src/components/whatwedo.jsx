import React from "react";

const Whatwedo = () => {
  return (
    <>
      <div className="bg-[#f8fdfe] grid grid-rows-1 md:grid-cols-3 px-5 md:px-20 gap-10 py-10 ">
        <div className="px-2 shadow">
          <p className="text-xl text-yellow-400 uppercase ">what we do</p>
          <h1 className="text-[#004452] text-5xl font-bold mt-4">Expertise</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="mt-8 bg-[#fec405] text-black font-semibold py-3 px-6 rounded shadow-md hover:bg-yellow-400 transition duration-300">
            Discover More
          </button>
        </div>
        <div className="bg-white shadow-xl">
          <img src="/what2.jpg"></img>
          <h1 className="text-[#004452] text-2xl text-center mt-3 font-bold">
            Procurement
          </h1>
          <p className="text-center mt-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
          </p>
          <div className="text-center py-5">
            <button className=" text-black border text-center hover:text-yellow-400 hover:border-yellow-400 transition duration-300 px-4 py-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <img src="/what1.jpg"></img>
          <h1 className="text-[#004452] text-2xl text-center mt-3 font-bold">
            Engineering & Design
          </h1>
          <p className="text-center mt-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
          </p>
          <div className="text-center py-5">
            <button className=" text-black border text-center hover:text-yellow-400 hover:border-yellow-400 transition duration-300 px-4 py-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <img src="/what3.jpg"></img>
          <h1 className="text-[#004452] text-2xl text-center mt-3 font-bold">
            Technical Consulting
          </h1>
          <p className="text-center mt-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
          </p>
          <div className="text-center py-5">
            <button className=" text-black border text-center hover:text-yellow-400 hover:border-yellow-400 transition duration-300 px-4 py-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <img src="/what4.jpg"></img>
          <h1 className="text-[#004452] text-2xl text-center mt-3 font-bold">
            Fabrication
          </h1>
          <p className="text-center mt-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
          </p>
          <div className="text-center py-5">
            <button className=" text-black border text-center hover:text-yellow-400 hover:border-yellow-400 transition duration-300 px-4 py-2">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <img src="/what5.jpg"></img>
          <h1 className="text-[#004452] text-2xl text-center mt-3 font-bold">
            Construction
          </h1>
          <p className="text-center mt-2 px-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
          </p>
          <div className="text-center py-5">
            <button className=" text-black border text-center hover:text-yellow-400 hover:border-yellow-400 transition duration-300 px-4 py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatwedo;
