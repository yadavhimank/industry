import { BicepsFlexed, Pickaxe, Trophy, Users } from "lucide-react";
import React from "react";

const Facts = () => {
  return (
    <>
      <section className="bg-white py-16 px-6 md:px-20 text-center relative">
        <div className="absolute inset-0 bg-[url('/Global-Map.png')] bg-no-repeat bg-center opacity-10 z-0"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl text-yellow-400 font-bold mb-6">
            740,223+
          </h1>

          <h2 className="text-2xl md:text-4xl font-extrabold text-[#004452] leading-snug mb-10 px-4 md:px-24">
            Company From All Around The World trust on Pabrica
            <br className="hidden md:block" /> for awesome project
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
            <div className="flex flex-col items-center">
              <Pickaxe className="w-12 h-12 text-yellow-400 mb-3" />

              <h3 className="text-3xl md:text-4xl font-bold text-[#004452]">
                2,415<span className="text-yellow-400">+</span>
              </h3>
              <p className="text-gray-700 mt-1">Project Realize</p>
            </div>

            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-yellow-400 mb-3" />

              <h3 className="text-3xl md:text-4xl font-bold text-[#004452]">
                1,441<span className="text-yellow-400">+</span>
              </h3>
              <p className="text-gray-700 mt-1">Expertise</p>
            </div>

            <div className="flex flex-col items-center">
              <BicepsFlexed className="w-12 h-12 text-yellow-400 mb-3" />

              <h3 className="text-3xl md:text-4xl font-bold text-[#004452]">
                8,451<span className="text-yellow-400">+</span>
              </h3>
              <p className="text-gray-700 mt-1">staff members worldwide</p>
            </div>

            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 text-yellow-400 mb-3" />

              <h3 className="text-3xl md:text-4xl font-bold text-[#004452]">
                141<span className="text-yellow-400">+</span>
              </h3>
              <p className="text-gray-700 mt-1">Awards Won</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facts;
