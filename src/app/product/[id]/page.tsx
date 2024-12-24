import { Footer, NavBar } from "@/components/layout";
import Product from "@/models/product";
import connect from "@/utils/dbConfig";
import { ShowProduct } from "./showProducts";

const Page = async ({ params }: any) => {
  const id = params.id;
  connect();
  const productData = await Product.findById(id).populate("category", {
    _id: 1,
    name: 1,
    slug: 1,
  });
  console.log(productData);
  return (
    <div className=" px-4 py-4 flex-col max-w-7xl flex w-full mx-auto  ">
      <NavBar />
      <ShowProduct key={0} productDetails={JSON.stringify(productData)} />
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
