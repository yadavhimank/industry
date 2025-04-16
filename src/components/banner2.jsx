import React from "react";

const Banner2 = () => {
  return (
    <>
      <div className="grid grid-rows-1 md:grid-cols-2 bg-white px-5 md:px-20 gap-16 py-14">
        <div className=" mt-0 md:mt-10">
          <h1 className="text-4xl text-[#014152] font-bold">
            Trusted by 25,000+ world-class brands and organizations of all
            sizes.
          </h1>
          <p className="text-black mt-2">
            Tristique pharetra mauris rutrum consequat egestas felis id laoreet
            nascetur nec at. Fames conubia bibendum imperdiet eleifend tortor
            aliquam senectus orci. Euismod aliquam sit nullam amet nisi dis quam
            iaculis risus consectetuer tincidunt.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          <img src="/logo-1.png"></img>
          <img src="/logo-2.png"></img>
          <img src="/logo-3.png"></img>
          <img src="/logo-4.png"></img>
          <img src="/logo-5.png"></img>
          <img src="/logo-6.png"></img>
          <img src="/logo-7.png"></img>
          <img src="/logo-8.png"></img>
        </div>
      </div>
    </>
  );
};

export default Banner2;
