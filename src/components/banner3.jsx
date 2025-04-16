import React from "react";

const Banner3 = () => {
  return (
    <>
      <section className="bg-[#004452] text-white py-20 px-5 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <p className="text-[#fec405] uppercase tracking-widest text-sm font-semibold mb-4">
              About Pabrica
            </p>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Reliable engineering <br />
              takes many forms.
            </h2>
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              In sed nisl leo elit ultricies mauris. Sed nibh natoque eleifend
              mi ante. Magnis vivamus maximus senectus lacus inceptos. Feugiat
              natoque mi nascetur.
            </p>
            <p className="mb-8 text-base md:text-lg leading-relaxed">
              Adipiscing imperdiet eget vel. Massa ligula sociosqu a. Mus
              viverra ut ornare tempor dictumst eros habitant.
            </p>
            <button className="bg-[#fec405] text-black font-semibold py-3 px-6 rounded shadow-md hover:bg-yellow-400 transition duration-300">
              Discover More
            </button>
          </div>

          <div className="relative md:w-1/2 w-full">
            <div className="relative overflow-hidden ">
              <img
                src="/laborer.jpg"
                alt="Laborer"
                className="w-full object-cover  rounded-md shadow-lg transform skew-y-2"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center text-[#004452] bg-white py-20 px-5">
        <h1 className=" text-3xl md:text-6xl font-bold">
          Delivering results, reliability, & rock{" "}
          <br className="hidden md:block" />
          solid dependability.
        </h1>
        <p className="mt-5 md:text-xl">
          We develop creative, comprehensive, and sustainable engineering
          solutions for a <br className="hidden md:block"></br>future where
          society can thrive.
        </p>
      </div>
    </>
  );
};

export default Banner3;
