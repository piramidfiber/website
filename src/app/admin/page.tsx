import { AdminNavBar } from "@/components/layout";
import Category from "@/models/category";
import connect from "@/utils/dbConfig";
import Product from "@/models/product";
import ShowProductsComponent from "./categoryData";

const Page = async () => {
  await connect();
  Product.find({});
  const mongooseCategoryData = await Category.find({}).populate("products");
  // console.log("data is " + JSON.stringify(mongooseCategoryData));
  return (
    <div className=" px-4 w-full max-w-7xl mx-auto flex flex-col gap-6 mt-8">
      <AdminNavBar />
      <div className=" w-full flex flex-col gap-3">
        {mongooseCategoryData.map((category, index) => (
          <ShowProductsComponent
            key={index}
            categoryData={JSON.stringify(category)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
