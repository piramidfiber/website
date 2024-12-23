import { CATEGORY_DATA } from "@/const";
import Category from "@/models/category";
import Product from "@/models/product";
import connect from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log("data " + JSON.stringify(data));
  connect();
  const categoryID = CATEGORY_DATA.find(
    (category) => category.name === data.formData.category
  )?._id;

  console.log("categoryID " + categoryID);

  try {
    const product = await new Product({
      ...data.formData,
      category: categoryID,
    }).save();

    console.log("prodictId " + product._id);
    const response = await Category.findOneAndUpdate(
      { _id: categoryID },
      { $push: { products: product._id } }
    ).exec();
    console.log("product " + response);
    return new NextResponse("success", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
