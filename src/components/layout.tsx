"use client";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function NavBar({ routeURL }: { routeURL?: string }) {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  return (
    <div className=" w-full ">
      <div className=" relative max-w-7xl w-full mx-auto hidden md:flex  py-4 gap-6 justify-between items-center">
        <Link href={"/"} className=" h-16 w-auto">
          {routeURL === "/" ? (
            <img
              className=" object-contain w-full h-full overflow-hidden"
              src="./filltex-logo.png"
              alt="company_logo"
            />
          ) : (
            <img
              className=" object-contain overflow-hidden"
              src="https://filltex.s3.ap-south-1.amazonaws.com/logo.png"
              alt="company_logo"
            />
          )}
        </Link>
        <div
          className={cn(
            " flex gap-12 items-center justify-center",
            routeURL === "/" && "text-white"
          )}
        >
          <Link href={"/"} className=" font-medium text-lg  cursor-pointer">
            Home
          </Link>
          <Link
            href={"/category"}
            className=" font-medium  gap-1 text-lg select-none cursor-pointer flex items-center justify-center"
          >
            Products
          </Link>
          <Link
            href={"/contact-us"}
            className=" font-medium  text-lg cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
        <Link
          href={"/contact-us"}
          className={cn(
            " px-5 py-2 rounded-xl font-medium text-lg bg-white text-gray-800",
            routeURL != "/" && " bg-green-600 text-white"
          )}
        >
          Get a Quote
        </Link>
      </div>

      <div className=" w-full flex md:hidden gap-6 justify-between items-center">
        <Link href={"/"} className=" h-12 w-auto">
          <img
            className=" object-contain h-full w-full overflow-hidden"
            src="https://filltex.s3.ap-south-1.amazonaws.com/logo.png"
            alt="company_logo"
          />
        </Link>
        <Menu onClick={() => setShowMobileNavbar(true)} color="white" />

        {showMobileNavbar && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className=" w-full px-4 py-4 h-full fixed flex flex-col z-50 inset-0 bg-black text-white  "
          >
            <div className="w-full flex md:hidden gap-6 justify-between items-center">
              <Link href={"/"} className=" h-12 w-auto">
                <motion.img
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className=" object-contain h-full w-full overflow-hidden"
                  src="https://filltex.s3.ap-south-1.amazonaws.com/logo.png"
                  alt="company_logo"
                />
              </Link>
              <X onClick={() => setShowMobileNavbar(false)} color="white" />
            </div>
            <div className=" mt-24 flex flex-col items-center gap-2">
              <Link
                href={"/"}
                className=" font-medium text-xl text-white cursor-pointer"
              >
                Home
              </Link>
              <Link
                href={"/category"}
                className="font-medium text-lg text-white cursor-pointer"
              >
                Products
              </Link>
              <Link
                href={"/contact-us"}
                className=" font-medium text-white text-lg cursor-pointer"
              >
                Contact Us
              </Link>
              <Link
                href={"/contact-us"}
                className=" px-5 py-2 rounded-xl font-medium text-lg bg-green-400 text-gray-800"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// function NavBarCategories() {
//   return (
//     <div className=" bg-white z-50 absolute top-24 left-0 flex w-full">
//       <div className=" bg-gray-100 p-12 flex   gap-6 flex-col ">
//         <div className="  text-2xl font-medium max-w-96 w-full ">
//           Discover Our Premium Textile Products
//         </div>
//         <div className=" font-normal mt-2 text-base max-w-96 w-full">
//           Explore our extensive range of high-quality textiles, crafted to meet
//           diverse needs in home furnishing and industrial applications.
//         </div>
//         <div className=" w-full border text-center rounded-xl border-green-700 text-green-700 px-8 py-4">
//           Download Brochure
//         </div>
//       </div>
//       <div className=" flex flex-col gap-8 p-12">
//         <div className=" text-green-700 font-medium text-2xl">Portfolios</div>
//         <div className=" flex gap-12 items-center">
//           <div className=" flex gap-6 flex-col">
//             <p className=" font-normal">All types of quilt</p>
//             <p className=" font-normal">Non Woven Polyester Roll</p>
//             <p className=" font-normal">Bleach & Unbleached Cotton Bating</p>
//           </div>
//           <div className=" flex gap-6 flex-col">
//             <p className=" font-normal">Pillows and fillers</p>
//             <p className=" font-normal">Non Woven Geo textiles Fabric</p>
//             <p className=" font-normal">Non woven polyester acoustic sheet</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export function Footer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        " border-t md:px-12 py-8 pb-4 mt-4 flex gap-6 md:gap-2 flex-col",
        className
      )}
    >
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-24 ">
        <div className="flex gap-8 w-full max-w-96 flex-col ">
          <Link href={"/"} className=" h-16 w-auto">
            <img
              className=" object-contain overflow-hidden"
              src="https://filltex.s3.ap-south-1.amazonaws.com/logo.png"
              alt="company_logo"
            />
          </Link>
          <div className=" text-gray-600 font-normal text-base max-w-96 w-full">
            We are a dedicated team of textile experts who excel in producing
            high-quality, innovative fabric solutions tailored for both home and
            industrial applications
          </div>
          <div className=" hidden md:block border-t w-full"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-28">
          <div className=" flex  flex-col gap-4 md:gap-6">
            <p className="font-medium text-lg">Company</p>
            <div className=" flex flex-col gap-4">
              <p className=" text-gray-700">About Us</p>
              <Link href={"/contact-us"} className=" text-gray-700">
                Contact Us
              </Link>
            </div>
          </div>
          <div className=" flex  flex-col gap-4 md:gap-6">
            <Link href={"/category"} className="font-medium text-lg">
              Our products
            </Link>
            <div className=" flex flex-col gap-4">
              <p className=" text-gray-700">All types of quilt</p>
              <p className=" text-gray-700">Pillows and fillers</p>
              <p className=" text-gray-700">Non Woven Polyester Roll</p>
              <p className=" text-gray-700">Non Woven Geo textiles Fabric</p>
              <p className=" text-gray-700">
                Bleach & Unbleached Cotton Bating
              </p>
              <p className=" text-gray-700">
                Non woven polyester acoustic sheet
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-4 md:gap-6">
            <p className="font-medium text-lg">Company</p>
            <div className=" flex flex-col gap-4">
              <p className=" text-gray-700">Piyush Banthia (Sales Head)</p>
              <p className=" text-gray-700">info@piramidfibecoat.com</p>
              <p className=" text-gray-700 max-w-60">
                Piramid Fibecot Private Limited A-29, Balaji Industrial Park
                Bagru, Jaipur - 303007, Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-gray-600 font-thin text-base">
        All Rights Reserved, 2024
      </div>
    </div>
  );
}

export function AdminNavBar() {
  return (
    <div className=" w-full flex gap-4 items-center ">
      <Link
        href={"/admin"}
        className=" border rounded py-1.5 px-3 text-gray-800 hover:bg-gray-100 duration-100 cursor-pointer"
      >
        Home
      </Link>
      <Link
        href={"/admin/contact-us"}
        className=" border rounded py-1.5 px-3 text-gray-800 hover:bg-gray-100 duration-100 cursor-pointer"
      >
        ContactUs
      </Link>
      <Link
        href={"/admin/new-product"}
        className=" border rounded py-1.5 px-3 bg-green-100 text-gray-800 hover:bg-green-200 duration-100 cursor-pointer"
      >
        Add new Product
      </Link>
    </div>
  );
}
