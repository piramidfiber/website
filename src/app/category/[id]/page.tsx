import { NavBar } from "@/components/layout";
import { CATEGORY_DATA, CategoryDataTpye } from "@/const";
import Link from "next/link";
import React from "react";

const Page = (context: { id: string }) => {
  const id = context.id;
  const categoryData = CATEGORY_DATA.find((item) => item.slug === id);
  return (
    <div>
      <NavBar />
      <CategoryBar categoryData={CATEGORY_DATA} currentCategory={id} />
    </div>
  );
};

export default Page;

function CategoryBar({
  categoryData,
  currentCategory,
}: {
  categoryData: CategoryDataTpye[];
  currentCategory: String;
}) {
  return (
    <div className="md:px-16 px-4 w-full sticky top-0 bg-white ">
      <div className=" flex gap-8 overflow-x-scroll py-4 scrollbar-custom">
        <p className="font-thin text-gray-700 whitespace-nowrap">Jump to:</p>
        <div className="flex gap-10">
          {categoryData.map((category: CategoryDataTpye) => {
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
