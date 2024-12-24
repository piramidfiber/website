import Category from "@/models/category";
import Product from "@/models/product";
import connect from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log("data " + JSON.stringify(data));
  connect();
  const product = await Product.findOneAndDelete({ _id: data.id }).exec();
  await Category.findOneAndUpdate(
    { _id: product.category },
    { $pull: { products: data.id } }
  );
  return new NextResponse("success", { status: 200 });
}
