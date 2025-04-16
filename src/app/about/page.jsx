import Banner2 from "@/components/banner2";
import Banner5 from "@/components/banner5";
import Whatwedo from "@/components/whatwedo";
import { Crosshair, Lightbulb } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" relative bg-[url('/what4.jpg')] bg-cover bg-center h-[40vh] md:h-[60vh] px-5 md:px-20 py-20 md:py-40">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-white text-3xl md:text-7xl font-bold">
            Builds a Better World.
          </h1>
          <p className="text-white md:text-xl">
            Builds a better world by applying world class expertise to solve its
            clients greatest challenges.
          </p>
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto bg-[#f7f7f7]  md:-top-14 py-14">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-[#014152]">
          About Us
        </h1>
      </div>
      <Banner2 />
      <div className="bg-[#f7f7f7] px-5 md:px-20 py-20">
        <div className="grid grid-rows-1 md:grid-cols-2 ">
          <div className="">
            <img src="/ship-construction.jpg" className="h-full"></img>
          </div>
          <div className="bg-white p-5 md:p-20">
            <p className="text-yellow-400 uppercase">History</p>
            <h1 className="text-[#014152] text-5xl font-extrabold mt-5">
              Start from zero become to hero.
            </h1>
            <p className="mt-5">
              Sagittis placerat senectus magna. Congue senectus etiam vehicula.
              Condimentum arcu purus himenaeos. Cras sagittis habitant
              suspendisse. Sed adipiscing nisi ligula consectetuer himenaeos.
              Nisi neque tempor dictumst lobortis sociosqu tortor. Urna congue
              sagittis lacinia conubia maecenas integer fames.
            </p>
            <p className="mt-3">
              Litora sodales id nisl rhoncus quis vehicula. Dolor dapibus eget
              imperdiet ex gravida vel. Inceptos dis congue est accumsan rutrum
              aliquam porttitor. Sollicitudin tortor congue venenatis. Faucibus
              convallis curae primis turpis ultrices taciti. Sapien at venenatis
              tempus ac laoreet. Lectus id suscipit maecenas a mattis curae
              dictum. Libero laoreet fringilla himenaeos massa.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-2">
          <div className="bg-white p-5 md:p-20">
            <p className="text-yellow-400 uppercase">Our Value</p>
            <h1 className="text-[#014152] text-5xl font-extrabold mt-5">
              Why we are different.
            </h1>
            <p className="mt-5">
              Quisque purus at magnis cursus dapibus neque ullamcorper cubilia
              congue torquent tincidunt. Vulputate mi volutpat magnis proin
              congue ultrices nec convallis accumsan felis. Venenatis volutpat
              suspendisse malesuada purus lacus in elementum ultricies curae
              letius.
            </p>
            <div className="flex gap-3 mt-4">
              <Lightbulb size={40} className="mt-1 text-yellow-400" />
              <span className="text-[#014152] font-medium text-xl">
                Vision
                <p className="font-light text-sm">
                  Habitasse inceptos taciti scelerisque dis aenean dignissim
                  ornare nulla nisl
                </p>
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <Crosshair size={40} className="mt-1 text-yellow-400" />
              <span className="text-[#014152] font-medium text-xl">
                Mission
                <p className="font-light text-sm">
                  Habitasse inceptos taciti scelerisque dis aenean dignissim
                  ornare nulla nisl
                </p>
              </span>
            </div>
          </div>
          <div className="">
            <img src="/business-team.jpg" className="h-full"></img>
          </div>
        </div>
      </div>

      <Whatwedo />
      <Banner5 />
    </>
  );
};

export default page;
