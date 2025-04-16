import React from "react";

const Banner5 = () => {
  return (
    <>
      <div className="relative bg-[url('/what4.jpg')] bg-cover bg-center w-full h-screen md:h-[85vh] ">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 px-6 md:px-20 py-24 md:py-28 max-w-4xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Let&apos;s start your <br className="hidden md:block" />
            project to be <br className="hidden md:block" />
            realize.
          </h1>

          <h1 className="text-white text-base md:text-2xl mt-6 drop-shadow">
            We planted our roots with a commitment to earning your trust{" "}
            <br className="hidden md:block" />
            and protecting lives, property, and prestige. Contact Us
          </h1>

          <button className="mt-8 bg-[#fec405] text-black font-semibold py-3 px-6 rounded shadow-md hover:bg-yellow-400 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
      <div className="bg-white flex px-5 md:px-20 py-10 md:justify-between flex-col md:flex-row">
        <div>
          <h1 className="text-[#004452] text-5xl font-extrabold">Need Help?</h1>
          <p className="text-black mt-1">
            Dont hesitate to contact us for more information about company or
            service
          </p>
        </div>
        <button className="mt-8 bg-[#fec405] text-black font-semibold py-3 px-6 rounded shadow-md hover:bg-yellow-400 transition duration-300">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Banner5;
