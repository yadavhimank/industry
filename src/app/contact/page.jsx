import { Clock, Mail, MapPin } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <>
      <div className=" relative bg-[url('/what4.jpg')] bg-cover bg-center h-[40vh] md:h-[60vh] px-5 md:px-20 py-20 md:py-40">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-white text-3xl md:text-7xl font-bold">
            Let's Build Relationship
          </h1>
          <p className="text-white md:text-xl">
            Start the conversation to established good relationship and business
          </p>
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto bg-[#f7f7f7]  md:-top-14 py-14">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-[#014152]">
          Contact US
        </h1>
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 py-10 md:py-28 px-5 md:px-20 gap-10">
        <div className="text-[#014152]">
          <h1 className="text-5xl font-extrabold">Get in touch</h1>
          <p className="mt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex mt-7 gap-4">
            <MapPin className="text-[#014152] mt-2" />
            <span className="font-extrabold">
              Headquarter
              <h1 className="font-medium">
                Jln Cempaka Wangi No 22, Jakarta - Indonesia
              </h1>
            </span>
          </div>
          <div className="flex mt-7 gap-4">
            <Mail className="text-[#014152] mt-2" />

            <span className="font-extrabold">
              Email Us
              <h1 className="font-medium">support@yourdomain.tld</h1>
            </span>
          </div>
          <div className="flex mt-7 gap-4">
            <Clock className="text-[#014152] mt-2" />

            <span className="font-extrabold">
              Office Hour
              <h1 className="font-medium">
                Monday - Friday (09.00 AM - 05.00PM)
                <br />
                Saturday - Sunday (Close)
              </h1>
            </span>
          </div>
        </div>
        <div>
          <img src="/what2.jpg"></img>
        </div>
      </div>

      <div className="py-10 px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2930.8596916722377!2d77.04330552730202!3d28.592867886082626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1744785743760!5m2!1sen!2sin"
              width="100%"
              height="550"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form>
              <div className="flex flex-col md:flex-row gap-7">
                <div className="mb-4 w-full">
                  <label
                    for="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    for="company"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-7">
                <div className="mb-4 w-full">
                  <label
                    for="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    for="phone"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Number"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  for="subject"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 w-full hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f7f7] flex px-5 md:px-20 py-10 md:justify-between flex-col md:flex-row">
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

export default Page;
