"use client";
import { Footer, NavBar } from "@/components/layout";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  return (
    <div className=" flex flex-col px-4 py-4 gap-4 w-full max-w-7xl mx-auto">
      <NavBar />
      <ContactUs />
      <Footer />
    </div>
  );
};

function ContactUs() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  });
  return (
    <div className=" py-4 md:px-16 flex flex-col gap-8">
      <p className=" text-4xl md:text-5xl font-medium font-playfair">
        Contact Us
      </p>
      <div className=" flex flex-col-reverse md:flex-row gap-6">
        <div className=" border h-fit py-6 rounded-lg px-3 md:px-5 flex flex-col shrink-0 gap-6">
          <div className=" flex flex-col items-center gap-4">
            <MapPin
              color="#158036"
              size={screenWidth >= 640 ? 42 : 32}
              className="text-green-700"
            />

            <div className=" flex items-center flex-col">
              <p>A-29, Balaji Industrial Park</p>
              <p>Bagru, Jaipur - 303007, Rajasthan</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className=" flex flex-col items-center gap-4">
            <Mail
              color="#158036"
              size={screenWidth >= 640 ? 42 : 32}
              className="text-green-700"
            />

            <div className=" flex items-center flex-col">
              <p>info@piramidfibecoat.com</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className=" flex flex-col items-center gap-4">
            <PhoneCall
              color="#158036"
              size={screenWidth >= 640 ? 42 : 32}
              className="text-green-700"
            />

            <div className=" flex items-center flex-col">
              <p>(219) 555-0114</p>
              <p>(164) 333-0487</p>
            </div>
          </div>
        </div>
        <div className=" border py-6 rounded-lg px-3 md:px-5 flex flex-col gap-4 md:gap-6 w-full">
          <p className=" text-2xl font-medium">Get A Quote</p>
          <p className=" text-gray-700">
            We love hearing from you! Whether you have a question, a custom
            request, fill out the form below and help us make your experience
            even more magical.
          </p>
          <div className=" flex gap-6 flex-col md:flex-row items-center">
            <div className=" flex w-full flex-col gap-3">
              <label className=" text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="  border py-2 px-4 placeholder:text-gray-300 focus:outline-none rounded-lg w-full"
              />
            </div>
            <div className=" flex w-full flex-col gap-3">
              <label className=" text-gray-700" htmlFor="number">
                Contact Number
              </label>
              <input
                type="text"
                id="number"
                placeholder="000000000"
                className="  border py-2 px-4 placeholder:text-gray-300 focus:outline-none rounded-lg w-full"
              />
            </div>
          </div>
          <div className=" flex w-full flex-col gap-3">
            <label className=" text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder={`To Get Best QUOTES, Describe Your Requirements in Detail:
- What Are You Looking For
- Features / Specifications
- Minimum Order Quantity, etc.`}
              rows={4}
              className="border py-2 px-4 placeholder:text-gray-300 focus:outline-none rounded-lg w-full"
            />
          </div>
          <div className=" w-full sm:w-fit px-10 py-3 bg-green-700 text-center self-end cursor-pointer hover:scale-105 duration-200 text-white rounded-3xl">
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
