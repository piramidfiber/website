"use client";
import { CategoryDataType } from "@/const";
import { useEffect, useState } from "react";

export function CategoryBar({
  categoryData,
}: {
  categoryData: CategoryDataType[];
}) {
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
    <div className=" w-full sticky top-0 bg-white ">
      <div className=" flex gap-8 overflow-x-scroll py-4 sidebar">
        <p className="font-thin text-gray-700 whitespace-nowrap">Jump to:</p>
        <div className="flex gap-10">
          {categoryData.map((category: CategoryDataType) => {
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
