"use client";
import { CategoryDataType } from "@/const";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CategoryCards(params: any) {
  const categoryData = JSON.parse(params.categoryData);

  return (
    <div id={categoryData.slug} className=" flex flex-col py-4 md:px-4 gap-6">
      <div className=" flex flex-col gap-4">
        <div className=" flex justify-between w-full items-center">
          <p className=" text-2xl md:text-4xl font-semibold font-playfair capitalize  ">
            {categoryData.name}
          </p>
          <p className=" text-gray-700">50 Products</p>
        </div>
        <p className=" text-sm md:text-base text-gray-700">
          {categoryData.description}
        </p>
      </div>
      <div className="flex w-full  gap-6 pb-3 overflow-x-scroll scrollbar-hide">
        {categoryData.products.map((product: any, idx: number) => {
          if (idx > 2) return null;
          return (
            <ProductCard key={idx} index={idx} categoryCardData={product} />
          );
        })}
        <div className=" hidden md:flex flex-col gap-6 w-full h-auto ">
          <Link
            href={`/category/${categoryData.slug}`}
            className=" p-4 self-end max-w-96 border cursor-pointer hover:shadow-lg group duration-200 rounded-2xl border-gray-700 flex flex-col gap-4"
          >
            <p className="text-xl font-medium">Explore Range of Products</p>
            <div className="flex justify-between items-center">
              <p className=" group-hover:underline underline-offset-2 text-gray-700">
                View All Products
              </p>
              <ArrowRight className=" text-gray-700" size={20} />
            </div>
          </Link>
          <div className=" flex max-h-60 w-full h-full gap-2">
            {categoryData?.products?.[3] && (
              <div className=" max-w-60 w-full h-full rounded overflow-hidden ">
                <img
                  className=" object-cover h-full w-full"
                  src={categoryData.products[3].images[0]}
                  alt=""
                />
              </div>
            )}
            {categoryData?.products?.[4] && (
              <div className=" max-w-60 w-full h-full rounded overflow-hidden ">
                <img
                  className=" object-cover h-full w-full"
                  src={categoryData.products[4].images[0]}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" md:hidden">
        <div className=" p-4 border cursor-pointer hover:shadow-lg duration-200 rounded-2xl border-gray-700 flex flex-col gap-4">
          <p className="text-xl font-medium">Explore Range of Products</p>
          <div className="flex justify-between items-center">
            <p className=" text-gray-700">View All Products</p>
            <ArrowRight className=" text-gray-700" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  index,
  categoryCardData,
}: {
  index: number;
  categoryCardData: any;
}) {
  return (
    <Link
      href={`/product/${categoryCardData._id}`}
      className={`min-w-[70vw] sm:min-w-52 w-full flex flex-col gap-4 ${
        index > 3 ? "md:hidden" : ""
      } `}
    >
      <div className="max-w-80 rounded h-72 w-full overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={categoryCardData.images[0]}
          alt={categoryCardData.name}
        />
      </div>
      <div>
        <p className="font-medium text-lg">{categoryCardData.name}</p>
      </div>
    </Link>
  );
}
