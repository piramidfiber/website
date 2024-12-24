import { Footer, NavBar } from "@/components/layout";

import { CATEGORY_DATA } from "@/const";
import { CategoryCards } from "./categoryCard";
import { CategoryBar } from "./categoryBar";
import connect from "@/utils/dbConfig";
import Category from "@/models/category";
import Product from "@/models/product";

const Page = async () => {
  connect();
  Product.find({});
  const categoryData = await Category.find({}).populate({
    path: "products",
    options: { limit: 5 },
  });
  return (
    <div className=" p-4 flex-col max-w-7xl w-full mx-auto  flex gap-8">
      <NavBar />
      <CategoryBar categoryData={CATEGORY_DATA} />

      {categoryData.map((category: any, idx: number) => {
        if (category?.products?.length === 0) return null;
        return (
          <div className=" mt-8">
            <CategoryCards categoryData={JSON.stringify(category)} />
            <div className="w-full px-4">
              <div className="w-full border border-green-700"></div>
            </div>{" "}
          </div>
        );
      })}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
