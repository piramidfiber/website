import { Footer, NavBar } from "@/components/layout";
import React from "react";

const Page = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContectSection />
      <div className=" h-8"></div>
      <Footer />
    </div>
  );
};

export default Page;

function HeroSection() {
  return (
    <div className="min-h-80 max-w-7xl flex flex-col gap-4 items-center justify-center mx-auto w-full">
      <p className=" text-5xl font-semibold text-center font-playfair ">
        About Us
      </p>
      <p className=" text-2xl text-gray-600 font-playfair max-w-xl w-full mx-auto text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        corporis.
      </p>
    </div>
  );
}

function ContectSection() {
  return (
    <div className=" flex flex-col gap-4 items-center max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mt-10">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To redefine the fashion industry with sustainable practices, ethical
            production, and inclusive designs that cater to every personality
            and occasion.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-600">
            We prioritize eco-friendly materials, ethical sourcing, and a
            customer-first approach. Our goal is to ensure you look and feel
            your best in every outfit you wear.
          </p>
        </div>
      </div>
    </div>
  );
}
