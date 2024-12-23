"use client";
import { Footer, NavBar } from "@/components/layout";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { CATEGORY_DATA, CategoryDataTpye } from "@/const";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" px-4 py-4 flex-col max-w-7xl w-full mx-auto  flex gap-8">
      <NavBar />
      <CategoryBar categoryData={CATEGORY_DATA} />
      <CategoryCards categoryData={CATEGORY_DATA[0]} />
      <div className="w-full px-4 md:px-16">
        <div className="w-full border border-green-700"></div>
      </div>
      <CategoryCards categoryData={CATEGORY_DATA[1]} />
      <div className="w-full px-4 md:px-16">
        <div className="w-full border border-green-700"></div>
      </div>
      <CategoryCards categoryData={CATEGORY_DATA[2]} />
      <div className="w-full px-4 md:px-16">
        <div className="w-full border border-green-700"></div>
      </div>
      <CategoryCards categoryData={CATEGORY_DATA[3]} />
      <div className="w-full px-4 md:px-16">
        <div className="w-full border border-green-700"></div>
      </div>
      <CategoryCards categoryData={CATEGORY_DATA[4]} />
      <div className="w-full px-4 md:px-16">
        <div className="w-full border border-green-700"></div>
      </div>
      <CategoryCards categoryData={CATEGORY_DATA[5]} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;

function CategoryBar({ categoryData }: { categoryData: CategoryDataTpye[] }) {
  const [currentCategory, setCurrentCategory] = useState("all-type-of-quilt");
  // Function to scroll to category
  function scrollToCategory(id: string) {
    setCurrentCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const topPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 74;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    } else {
      console.error(`Element with ID '${id}' not found`);
    }
  }

  // Set up Intersection Observer to track visible categories
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentCategory(entry.target.id); // Set the current category to the one in view
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    // Observe each category element
    categoryData.forEach((category) => {
      const element = document.getElementById(category.slug);
      if (element) observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [categoryData]);
  return (
    <div className="md:px-16 w-full sticky top-0 bg-white ">
      <div className=" flex gap-8 overflow-x-scroll py-4 scrollbar-custom">
        <p className="font-thin text-gray-700 whitespace-nowrap">Jump to:</p>
        <div className="flex gap-10">
          {categoryData.map((category: CategoryDataTpye) => {
            return (
              <p
                key={category.slug}
                className={`cursor-pointer ${
                  currentCategory === category.slug
                    ? " text-green-700 font-semibold"
                    : "text-gray-700"
                } whitespace-nowrap capitalize`}
                onClick={() => scrollToCategory(category.slug)}
              >
                {category.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CategoryCards({ categoryData }: { categoryData: CategoryDataTpye }) {
  const categoryDataArray = [
    { name: "Product Name" },
    { name: "Product Name" },
    { name: "Product Name" },
    { name: "Product Name" },
    { name: "Product Name" },
  ];

  return (
    <div id={categoryData.slug} className=" flex flex-col py-4 md:px-16 gap-6">
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
        <ProductCard index={1} categoryCardData={categoryDataArray[0]} />
        <ProductCard index={2} categoryCardData={categoryDataArray[1]} />
        <ProductCard index={3} categoryCardData={categoryDataArray[2]} />
        <ProductCard index={4} categoryCardData={categoryDataArray[2]} />
        <ProductCard index={5} categoryCardData={categoryDataArray[2]} />
        <div className=" hidden md:flex flex-col gap-6 w-full h-auto ">
          <Link
            href={`/category/${categoryData.slug}`}
            className=" p-4 border cursor-pointer hover:shadow-lg group duration-200 rounded-2xl border-gray-700 flex flex-col gap-4"
          >
            <p className="text-xl font-medium">Explore Range of Products</p>
            <div className="flex justify-between items-center">
              <p className=" group-hover:underline underline-offset-2 text-gray-700">
                View All Products
              </p>
              <ArrowRight className=" text-gray-700" size={20} />
            </div>
          </Link>
          <div className=" flex w-full h-full gap-2">
            <div className=" w-full h-full rounded overflow-hidden ">
              <img
                className=" object-cover h-full w-full"
                src="https://filltex.s3.ap-south-1.amazonaws.com/category-image.png"
                alt=""
              />
            </div>
            <div className=" w-full h-full rounded overflow-hidden ">
              <img
                className=" object-cover h-full w-full"
                src="https://filltex.s3.ap-south-1.amazonaws.com/category-image.png"
                alt=""
              />
            </div>
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
    <div
      className={`min-w-[70vw] sm:min-w-52 w-full flex flex-col gap-4 ${
        index > 3 ? "md:hidden" : ""
      } `}
    >
      <div className="max-w-80 rounded h-72 w-full overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="https://filltex.s3.ap-south-1.amazonaws.com/category-image.png"
          alt=""
        />
      </div>
      <div>
        <p className="font-medium text-lg">{categoryCardData.name}</p>
      </div>
    </div>
  );
}
