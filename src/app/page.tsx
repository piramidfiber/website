"use client";
import { Footer, NavBar } from "@/components/layout";
import { CATEGORY_DATA } from "@/const";
import { cn } from "@/utils/cn";
import { ArrowRight, Download, DownloadIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { set } from "mongoose";

export default function Home({ params }: any) {
  //   const headersList = headers();
  // const referer = headersList.get('referer'); // Full referer URL
  // const urlPath = new URL(referer || '').pathname;

  const pathname = usePathname();
  return (
    <div className=" mx-auto">
      <HeroSection routeURL={pathname} />
      <QuoteSection />
      <AboutUs />
      <ExploreMore />
      <DiscoverMore />
      <Footer className="px-4" />
    </div>
  );
}

function HeroSection({ routeURL }: any) {
  return (
    <div className=" border">
      <img
        src="./hero.jpg"
        loading="lazy"
        className=" -z-10 absolute top-0 h-[92vh] md:h-screen left-0  w-full object-cover "
        alt=""
      />

      <div className=" overflow-hidden pb-8 relative p-4 w-full max-w-7xl flex flex-col mx-auto h-[92vh] md:h-screen">
        <NavBar routeURL={routeURL} />

        <div className=" max-w-5xl w-full px-4 h-full  justify-center  items-center mx-auto flex flex-col z-20 gap-8">
          <div className=" py-2 px-5 rounded-3xl text-white relative overflow-hidden  ">
            <p className=" text-center text-white text-xl font-medium">
              Start Your Experience with the Leaders in Textile Excellence
            </p>
            <div className=" w-full h-full border absolute top-0 left-0 blur-3xl bg-gray-400 -z-10 opacity-80"></div>
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
          <div
            onClick={() =>
              document.querySelector("#products")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="  group px-4 py-2 hover:gap-3 duration-200 cursor-pointer rounded-3xl flex items-center gap-2 shrink-0 justify-center border border-white text-white "
          >
            View Products
            <ArrowRight
              className=" group-hover:rotate-90 duration-200"
              color="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className=" px-4 border-b  mt-6 md:mt-8 py-6 md:py-12 w-full">
      <p className="text-xl md:text-2xl px-12 mx-auto text-center font-playfair max-w-xl relative second">
        The service was amazing. I never had to wait that long for my food.
      </p>
    </div>
  );
}

function AboutUs() {
  return (
    <div className=" w-full mt-6 md:mt-8 py-6 md:py-12 flex-col md:flex-row px-4 max-w-7xl mx-auto flex gap-12 justify-between">
      <div className=" w-full flex justify-between flex-col gap-6">
        <p className=" text-3xl font-semibold">About Us</p>
        <div className=" flex flex-col gap-3">
          <p className=" text-lg text-gray-600">
            Founded in 2017, we specialize in high-quality bed protectors and
            mattress padding. Our diverse product range, crafted from premium
            materials, ensures comfort and durability.
          </p>
          <p className=" text-lg text-gray-600">
            Founded in 2017, we specialize in high-quality bed protectors and
            mattress padding. Our diverse product range, crafted from premium
            materials, ensures comfort and durability.
          </p>
        </div>
        <div className=" flex justify-between md:justify-start gap-3">
          <div className="size-24">
            <img
              src="./iso-icon.png"
              className=" w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="size-24">
            <img
              src="./iso-icon.png"
              className=" w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="size-24">
            <img
              src="./iso-icon.png"
              className=" w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" max-w-96 w-full">
        <img
          src="./home-about-three.png"
          className=" w-full h-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
}

function ExploreMore() {
  return (
    <div className=" w flex-full  mt-6 md:mt-8 py-6 md:py-12 max-w-7xl flex flex-col px-4 mx-auto gap-12">
      <ExploreMoreHeading />
      <ExploreMoreCards />
    </div>
  );
}

function ExploreMoreHeading() {
  return (
    <div
      id="products"
      className=" flex flex-col md:flex-row justify-between gap-6 items-center "
    >
      <div className=" text-2xl font-semibold ">
        Explore Our{" "}
        <span className=" text-green-600  font-playfair italic">
          specialty textiles
        </span>
      </div>
      <Link
        href={
          "https://filltex.s3.ap-south-1.amazonaws.com/downloard-brochure.pdf"
        }
        target="_blank"
        className=" px-4 flex gap-3  border border-green-600 justify-center  rounded-md py-2"
      >
        <div className="">
          <DownloadIcon size={20} color="#16a34a" />
        </div>
        <p className="font-semibold text-green-600">Download Our Brochure</p>
      </Link>
    </div>
  );
}

function ExploreMoreCards() {
  return (
    <div className=" w-full grid max-h-[42rem] gap-3 grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-6">
      <ExploreCard
        categoryName={CATEGORY_DATA[0].name}
        link={CATEGORY_DATA[0].slug}
        img="./Quilt.png"
        className="col-span-2 md:col-span-1 row-span-1 md:row-span-4"
      ></ExploreCard>
      <ExploreCard
        categoryName={CATEGORY_DATA[1].name}
        link={CATEGORY_DATA[1].slug}
        img="./non-polyester.png"
        className="row-span-1 md:row-span-3"
      ></ExploreCard>
      <ExploreCard
        categoryName={CATEGORY_DATA[2].name}
        link={CATEGORY_DATA[2].slug}
        img="./Cotton-BAting.png"
        className="row-span-1 md:row-span-2"
      ></ExploreCard>

      <ExploreCard
        categoryName={CATEGORY_DATA[3].name}
        link={CATEGORY_DATA[3].slug}
        img="./Polyester-Acoustic.png"
        className="row-span-1 md:row-span-4"
      ></ExploreCard>
      <ExploreCard
        categoryName={CATEGORY_DATA[4].name}
        link={CATEGORY_DATA[4].slug}
        img="./Non-Woven-Geo-Textile.png"
        className="row-span-1 md:row-span-3"
      ></ExploreCard>
      <ExploreCard
        categoryName={CATEGORY_DATA[5].name}
        link={CATEGORY_DATA[5].slug}
        img="./Pillows-and-Fillers.png"
        className="col-span-2 row-span-1 md:row-span-2"
      ></ExploreCard>
    </div>
  );
}

function ExploreCard({
  className,
  categoryName,
  link,
  img,
}: {
  categoryName: string;
  link: string;
  img: string;
  className?: string;
}) {
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    // determine window size
    const width = window.innerWidth;
    if (width < 768) {
      setShowDetail(true);
    }
  }, []);
  return (
    <Link
      href={`/category/${link}`}
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
      className={cn(
        " w-full h-full rounded group overflow-hidden cursor-pointer  relative ",
        className
      )}
    >
      <img src={img} className=" w-full h-full object-cover" alt="" />
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" block capitalize text-lg md:text-2xl  w-full h-full absolute text-white top-0 left-0 z-10 p-4 bg-gradient-to-b from-transparent to-black bg-opacity-60"
          >
            <p className=" flex items-end w-full h-full ">{categoryName}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}
//  Animate presence is not completed

function DiscoverMore() {
  return (
    <div className=" w-full max-w-7xl mx-auto flex justify-center flex-col px-4  mt-6 md:mt-8 py-6 md:py-12 gap-6 md:gap-8">
      <div className=" flex gap-4 md:gap-8 flex-col md:flex-row items-end justify-center">
        <div className="md:flex flex-col gap-2 items-end">
          <span className="  text-4xl">Discover the Essence of</span>
          <span className=" font-playfair ml-2 md:ml-0 text-5xl text-green-600 italic capitalize font-semibold">
            softness{" "}
          </span>
        </div>
        <div className=" md:text-right text-gray-600">
          Delve into a world where comfort meets
          <br />
          Innovation with our premium fiberfill solutions
        </div>
      </div>
      <ScrollPictureAnimation />
    </div>
  );
}

function ScrollPictureAnimation() {
  return (
    <div className="relative flex gap-4 overflow-x-hidden">
      <div className="py-8 animate-marquee3 flex gap-4 whitespace-nowrap">
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
      </div>

      <div className=" mx-3 absolute top-0 py-8 flex gap-4 animate-marquee4 whitespace-nowrap">
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
      </div>
    </div>
  );
}

function ScrollPictureAnimationImage({ img }: { img: string }) {
  return (
    <div className=" w-56 overflow-hidden rounded h-72">
      <img className=" w-full h-full object-cover" src={img} alt="" />
    </div>
  );
}
