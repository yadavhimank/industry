"use client";

const Banner4 = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-[#0A3B47] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let us help you invest in sustainable infrastructure.
          </h1>
          <h2 className="text-xl sm:text-2xl mb-6 font-light">
            It is literally true that you can succeed best and quickest by
            helping others to succeed.here
          </h2>
          <p className="text-base text-gray-200 mb-8">
            Adipiscing euismod sit bibendum ultrices pede letius eros ac
            inceptos nec a. Ipsum praesent faucibus quam urna feugiat libero
            pretium aptent ridiculus eros diam. Gravida lacus faucibus platea
            senectus venenatis sagittis finibus letius.
          </p>
        </div>

        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto relative">
          <img
            src="/what2.jpg"
            alt="Construction professionals discussing project"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner4;
