import { AdminNavBar } from "@/components/layout";
import EditProductForm from "./editProductForm";
import connect from "@/utils/dbConfig";
import Product from "@/models/product";
import { CATEGORY_DATA } from "@/const";
import Category from "@/models/category";

const Page = async ({ params }: any) => {
  const id = params.id;
  await connect();
  Category.find({});
  const productData = await Product.findById(id).populate("category", {
    _id: 1,
    name: 1,
  });

  // console.log(categoryName);
  return (
    <div className=" px-4 w-full pb-24 max-w-4xl mx-auto flex flex-col gap-6 mt-8">
      <AdminNavBar />
      <EditProductForm
        productData={JSON.stringify({
          ...productData._doc,
          category: productData?.category?.name,
        })}
      />
    </div>
  );
};

export default Page;
