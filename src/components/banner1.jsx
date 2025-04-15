import React from "react";

const Banner1 = () => {
  return (
    <>
      <div className="relative bg-[url('/industrial-plant.jpg')] bg-cover bg-center w-full h-screen md:h-[85vh]">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 px-6 md:px-20 py-24 md:py-28 max-w-4xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Create. Enhance.
            <br />
            and Sustain.
          </h1>

          <h1 className="text-white text-base md:text-2xl mt-6 drop-shadow">
            Accumsan ridiculus ante litora maecenas lobortis netus{" "}
            <br className="hidden md:block"></br>
            maximus gravida euismod
          </h1>

          <button className="mt-8 bg-[#fec405] text-black font-semibold py-3 px-6 rounded shadow-md hover:bg-yellow-400 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner1;
