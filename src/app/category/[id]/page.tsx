import { Footer, NavBar } from "@/components/layout";
import { CATEGORY_DATA, CategoryDataType } from "@/const";
import Category from "@/models/category";
import connect from "@/utils/dbConfig";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: any) => {
  const id = params.id;
  connect();
  const [categoryData]: any = await Category.find({ slug: id }).populate(
    "products"
  );
  console.log(categoryData);
  return (
    <div className=" p-4 max-w-7xl mx-auto">
      <NavBar />
      <CategoryBar categoryData={CATEGORY_DATA} currentCategory={id} />
      {categoryData && <HeroSection categoryData={categoryData} />}
      {categoryData?.products?.length > 0 && (
        <ShowProducts productsData={categoryData.products} />
      )}
      <Footer />
    </div>
  );
};

interface IcategoryData {
  name: string;
  description: string;
  image: string;
  slug: string;
}

export default Page;

function CategoryBar({ categoryData, currentCategory }: any) {
  return (
    <div className=" px-4 md:px-0 w-full mx-auto max-w-7xl sticky top-0 bg-white ">
      <div className=" flex gap-8 overflow-x-scroll py-4 scrollbar-custom">
        <p className="font-thin text-gray-700 whitespace-nowrap">Jump to:</p>
        <div className="flex gap-10">
          {categoryData.map((category: any) => {
            return (
              <Link
                href={`/category/${category.slug}`}
                key={category.slug}
                className={`cursor-pointer ${
                  currentCategory === category.slug
                    ? " text-green-700 font-semibold"
                    : "text-gray-700"
                } whitespace-nowrap capitalize`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HeroSection({ categoryData }: { categoryData: IcategoryData }) {
  return (
    <div className=" my-12 mx-auto max-w-7xl w-full flex gap-3 h-64">
      <div className=" w-full max-w-md rounded overflow-hidden h-full">
        <img
          className=" w-full h-full object-cover"
          src={categoryData.image}
          alt=""
        />
      </div>
      <div className=" h-full w-full bg-gray-100 rounded p-6 items-center justify-center gap-4 flex flex-col   ">
        <p className=" text-3xl font-semibold font-playfair">
          {categoryData.name}
        </p>
        <p className=" max-w-xl mx-auto text-center text-gray-600">
          {categoryData.description}
        </p>
      </div>
    </div>
  );
}

function ShowProducts({ productsData }: any) {
  console.log(productsData);
  return (
    <div className=" mx-auto max-w-7xl flex flex-col gap-6 w-full px-4">
      <HeadingDiverseRangofProduct />
      <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {productsData.map((data: any, idx: number) => {
          return <ProductCard productData={data} key={idx} />;
        })}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
}

function HeadingDiverseRangofProduct() {
  return (
    <div className=" w-full flex gap-4 items-center">
      <div className=" h-0.5 w-full bg-green-600"></div>
      <div className=" capitalize text-green-600 text-3xl whitespace-nowrap text-center font-playfair font-medium">
        Our Diverse range of products
      </div>
      <div className=" h-0.5 w-full bg-green-600"></div>
    </div>
  );
}

function ProductCard({ productData }: any) {
  return (
    <Link href={`/product/${productData._id}`} className=" group w-full h-full">
      <div className=" rounded overflow-hidden w-full h-48">
        <img
          src={productData.images[0]}
          className=" w-full h-full object-cover"
          alt=""
        />
      </div>
      <p className=" mt-2 group-hover:underline text-lg font-semibold">
        {productData.name}
      </p>
      <p className=" line-clamp-1 text-gray-600">
        {productData.description[0]}
      </p>
    </Link>
  );
}
