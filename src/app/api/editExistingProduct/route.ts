import { CATEGORY_DATA } from "@/const";
import Category from "@/models/category";
import Product from "@/models/product";
import connect from "@/utils/dbConfig";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  connect();
  const categoryID = CATEGORY_DATA.find(
    (category) => category.name === data.formData.category
  )?._id;

  console.log("id is : " + data.id);

  try {
    const result = await Product.findOneAndUpdate(
      { _id: data.id },
      {
        name: data.formData.name,
        moq: data.formData.moq,
        material: data.formData.material,
        color: data.formData.color,
        filling: data.formData.filling,
        pattern: data.formData.pattern,
        brand: data.formData.brand,
        washCare: data.formData.washCare,
        origin: data.formData.origin,
        productionCapacity: data.formData.productionCapacity,
        deliveryTime: data.formData.deliveryTime,

        description: data.formData.description,
        category: categoryID,
      }
    );

    await result.save();

    // console.log(result);
    return new NextResponse("success", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
}
