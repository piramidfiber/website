"use client";
import { Footer, NavBar } from "@/components/layout";
import { ChevronRight, Dot, Star, StarHalf } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  return (
    <div className=" px-4 py-4 flex-col max-w-7xl flex w-full mx-auto  ">
      <NavBar />
      <ShowProduct key={0} productDetails={productDetails[0]} />
      <Footer />
    </div>
  );
};

export default Page;

type Product = {
  name: string;
  "minimum-order-quantity": string;
  material: string;
  color: string;
  filling: string;
  pattern: string;
  brand: string;
  "wash-care": string;
  "country-of-origin": string;
  description: string[];
  "production-capacity": string;
  "delivery-time": string;
  images: string[];
};

const productDetails: Product[] = [
  {
    name: "Bed Matress Protextor",
    "minimum-order-quantity": "15",
    material: "Cotton",
    color: "Black",
    filling: "Cotton",
    pattern: "plain",
    brand: "Filltex",
    "wash-care": "Machine Washable",
    "country-of-origin": "India",
    description: [
      "Three layered quilted mattress protector. exterior is made of 100% cotton with 150 gsm poly fill inside and non woven on the rear is meant to be used on top of a mattress.this is not a mattress",
      "Three layered quilted mattress protector. exterior is made of 100% cotton with 150 gsm poly fill inside and non woven on the rear is meant to be used on top of a mattress.this is not a mattress",
      "Provides additional cushioning for your mattress and protects your mattress from dust,mites,odor,body sweat,fluids",
    ],
    "production-capacity": "10",
    "delivery-time": "7-10",
    images: [
      "https://filltex.s3.ap-south-1.amazonaws.com/product-image.png",
      "https://filltex.s3.ap-south-1.amazonaws.com/category-image.png",
    ],
  },
];

function ShowProduct({ productDetails }: { productDetails: Product }) {
  const [selectedImage, setSelectedImage] = useState<any>(
    productDetails.images[0]
  );
  return (
    <div className=" flex flex-col gap-4 w-full h-full">
      {/* <div className="">{`Home > Bed Protector and Mattress Covers > ${productDetails.name}`}</div> */}
      <div className=" flex gap-1 flex-wrap items-center py-4 md:px-4">
        <p className=" cursor-pointer hover:underline text-gray-600 underline-offset-2">
          Home
        </p>
        <ChevronRight size={20} stroke="#333" />
        <p className=" cursor-pointer hover:underline text-gray-600 underline-offset-2">
          Bed Protector and Mattress Covers
        </p>
        <ChevronRight size={20} stroke="#333" />
        <p className=" cursor-pointer hover:underline text-gray-600 underline-offset-2">
          {productDetails.name}
        </p>
      </div>
      <div className="py-4 md:px-4  flex flex-col md:flex-row gap-6 md:gap-10 h-full w-full">
        <div className="top-6 shrink-0 flex w-full flex-col-reverse h-fit gap-4 md:sticky md:w-auto md:flex-row">
          <div className="flex flex-row items-start h-full gap-4 md:gap-6 md:flex-col">
            {/* Thumbnails Section */}
            {productDetails.images?.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`h-16 w-16 cursor-pointer rounded-lg object-cover ${
                  selectedImage === image ? "border-2 border-green-700" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>

          {/* Main Image Display */}
          <div className="h-96 w-80 md:h-[32rem] md:w-96">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="h-full w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
        <div className=" w-full h-[1px] bg-gray-300 md:hidden"></div>
        <div className=" flex w-full flex-col gap-6 md:px-4">
          <div className=" flex flex-col gap-2 md:gap-4">
            <p className=" text-3xl md:text-5xl font-bold md:font-medium">
              {productDetails.name}
            </p>
            <div className=" flex gap-3 md:gap-6 items-center">
              <div className=" flex gap-1 md:gap-2 items-center pr-1 md:pr-2 border-r">
                <p>4.5</p>
                <Star fill="#FFD700" strokeWidth={0} size={20} />
                <Star fill="#FFD700" strokeWidth={0} size={20} />
                <Star fill="#FFD700" strokeWidth={0} size={20} />
                <Star fill="#FFD700" strokeWidth={0} size={20} />
                <StarHalf fill="#FFD700" strokeWidth={0} size={20} />
              </div>
              <p>80 Reviews</p>
            </div>
          </div>
          <div className=" w-full h-[1px] bg-gray-300"></div>
          <div className=" flex gap-4 flex-col">
            <p className=" text-gray-700 font-bold md:font-normal">
              Product Details:{" "}
            </p>
            <div className=" flex  flex-col gap-3 md:gap-6">
              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Minimum Order Quantity:</p>
                <p className="text-gray-900">
                  {productDetails["minimum-order-quantity"]}
                </p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Material:</p>
                <p className="text-gray-900">{productDetails["material"]}</p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Color:</p>
                <p className="text-gray-900">{productDetails["color"]}</p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Filling:</p>
                <p className="text-gray-900">{productDetails["filling"]}</p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Pattern:</p>
                <p className="text-gray-900">{productDetails["pattern"]}</p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Brand:</p>
                <p className="text-gray-900">{productDetails["brand"]}</p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Wash Care:</p>
                <p className="text-gray-900">{productDetails["wash-care"]}</p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Country of Origin:</p>
                <p className="text-gray-900">
                  {productDetails["country-of-origin"]}
                </p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Production Capacity:</p>
                <p className="text-gray-900">
                  {productDetails["production-capacity"]}
                </p>
              </div>

              <div className="w-full grid gap-2 md:grid-cols-3 grid-cols-2">
                <p className="text-gray-900">Delivery Time:</p>
                <p className="text-gray-900">
                  {productDetails["delivery-time"]}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className=" flex flex-col gap-4">
            <p className=" text-gray-700 font-bold md:font-normal">
              Description :
            </p>
            <div className=" flex flex-col gap-4">
              {productDetails.description?.map(
                (description: string, index: number) => (
                  <div key={index} className=" flex gap-2">
                    <Dot strokeWidth={2} className="shrink-0 " size={20} />
                    <p key={index} className=" text-gray-900">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className=" flex flex-col gap-4">
            <p className=" text-gray-700">Additional Information :</p>
            <div className=" flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Dot strokeWidth={2} className="shrink-0 " size={20} />

                <p>Production Capacity:</p>
                <p>{productDetails["production-capacity"]} Pcs</p>
              </div>
              <div className="flex items-center gap-2">
                <Dot strokeWidth={2} className="shrink-0 " size={20} />
                <p>Production Capacity:</p>
                <p>{productDetails["delivery-time"]} Days</p>
              </div>
            </div>
          </div>
          <div className=" w-full sticky bottom-0 bg-white pb-6">
            <div className=" py-4 px-8 w-full bg-green-600  text-white rounded-lg cursor-pointer font-bold text-center">
              Get Best Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
