import { Footer, NavBar } from "@/components/layout";
import { CATEGORY_DATA } from "@/const";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className=" mx-auto">
      <HeroSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className=" overflow-hidden pb-8 relative p-4 w-full max-w-[102rem] flex flex-col mx-auto h-screen">
      <img
        src="./hero.jpg"
        className=" -z-10 absolute top-0 left-0 h-full w-full object-cover "
        alt=""
      />
      <NavBar />

      <div className=" max-w-5xl w-full px-4 h-full  justify-center  items-center mx-auto flex flex-col z-20 gap-8">
        <div className=" py-2 px-5 rounded-3xl text-white relative overflow-hidden  ">
          <p className=" text-center text-white text-xl font-medium">
            Start Your Experience with the Leaders in Textile Excellence
          </p>
          <div className=" w-full h-full border absolute top-0 left-0 blur-3xl bg-white opacity-60"></div>
        </div>

        <div className=" text-center text-4xl md:text-6xl text-white">
          Redefining{" "}
          <span className=" font-playfair italic">Comfort and Quality</span>{" "}
          with Expertly Crafted{" "}
          <span className=" font-playfair italic">Textile Solutions</span>
        </div>
      </div>
      <div className="  flex flex-col md:flex-row max-w-7xl mx-auto w-full gap-6 justify-between items-center">
        <p className="  text-white max-w-md">
          Unlock the World of Premium Textiles, Innovative Solutions, and
          Unmatched Quality with Us
        </p>
        <div className=" px-4 py-2 hover:gap-4 duration-200 cursor-pointer rounded-3xl flex items-center gap-2 shrink-0 justify-center border border-white text-white ">
          View Products
          <ArrowRight color="#fff" />
        </div>
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className=" border-y py-12 w-full">
      <p className="text-xl md:text-2xl px-12 mx-auto text-center font-playfair max-w-xl relative second">
        The service was amazing. I never had to wait that long for my food.
      </p>
    </div>
  );
}
