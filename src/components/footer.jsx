import React from "react";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1f2a30]  p-5 md:px-20 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row justify-between mt-0 md:mt-10">
          <div className="text-white ">
            <h1 className="font-bold text-xl">Company </h1>
            <p className="mt-3">About Us</p>
            <p className="mt-2">Investors</p>
            <p className="mt-2">Career</p>
            <p className="mt-2">News & Update</p>
            <p className="mt-2">Legal Notice</p>
          </div>
          <div className="text-white ">
            <h1 className="font-bold text-xl">Service</h1>
            <p className="mt-3">Technology</p>
            <p className="mt-2">Industrial</p>
            <p className="mt-2">Advisory</p>
            <p className="mt-2">Construction</p>
            <p className="mt-2">Risk Management</p>
          </div>
          <div className="text-white ">
            <h1 className="font-bold text-xl">Help </h1>
            <p className="mt-3">Contact</p>
            <p className="mt-2">F.A.Q</p>

            <p className="mt-2">Help Center</p>
            <p className="mt-2">Call Center</p>
          </div>
          <div className=" text-white">
            <h1 className="text-2xl font-extrabold">Newsletter</h1>
            <p className="mt-3 ">
              Sign up our newsletter to get update news and article about
              company.
            </p>
            <Input className="bg-white mt-5" />
          </div>
        </div>
        <hr className="text-white mt-5 md:mt-14"></hr>
        <div className="flex flex-col items-center justify-center mt-5">
          <img src="/Logo-Pabrica-f.png"></img>
          <p className="text-white text-center mt-5">
            Copyright © 2021 Pabrica, All rights reserved. Present by
            MoxCreative.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
