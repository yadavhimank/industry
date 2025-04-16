import Banner5 from "@/components/banner5";
import Facts from "@/components/facts";
import Whatwedo from "@/components/whatwedo";
import React from "react";

const Page = () => {
  return (
    <>
      <div className=" relative bg-[url('/what4.jpg')] bg-cover bg-center h-[40vh] md:h-[60vh] px-5 md:px-20 py-20 md:py-40">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-white text-3xl md:text-7xl font-bold text-center">
            Finding real world solutions.
          </h1>
          <p className="text-white md:text-xl text-center">
            We develop creative, comprehensive, and sustainable engineering
            solutions for a future where society can thrive.
          </p>
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto bg-[#f7f7f7]  md:-top-14 py-7 md:py-14">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-[#014152]">
          Our Expertise
        </h1>
      </div>
      <div className="text-[#014152] text-center bg-white py-8 md:py-16 px-5 md:px-0">
        <h1 className="font-bold text-xl md:text-3xl">
          Delivering results, reliability, & rock solid dependability.
        </h1>
        <p className="md:text-xl mt-4">
          We develop creative, comprehensive, and sustainable engineering
          solutions for a <br className="hidden md:block"></br> future where
          society can thrive.
        </p>
      </div>
      <section className="bg-[#004452] text-white py-20 px-5 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <p className="text-[#fec405] uppercase tracking-widest text-sm font-semibold mb-4">
              About Technical Consulting
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
      <div className="text-[#004452] text-center px-5 py-10 md:p-28">
        <h1 className="text-3xl font-bold">
          When you need experience, we have it covered.
        </h1>
        <p className="mt-5">
          Tempus ut purus nulla in. Pulvinar volutpat ante mus ultrices nunc
          habitasse. Pulvinar egestas venenatis sed duis. Dui odio parturient
          volutpat lobortis leo.
        </p>
        <p className="mt-5">
          Potenti conubia libero massa eget senectus mollis. Augue consequat
          ipsum taciti dolor felis. Pretium at per mattis. Vivamus tellus purus
          aenean duis. Fames tortor dictumst scelerisque cursus condimentum.
          Fames nunc potenti adipiscing aptent. Hac dapibus laoreet mattis
          condimentum commodo consectetur class. Orci diam egestas adipiscing
          litora dui in sociosqu.
        </p>
        <p className="mt-5">
          Tempus ut purus nulla in. Pulvinar volutpat ante mus ultrices nunc
          habitasse. Pulvinar egestas venenatis sed duis. Dui odio parturient
          volutpat lobortis leo.
        </p>
      </div>
      <Whatwedo />
      <Facts />
      <Banner5 />
    </>
  );
};

export default Page;
