import Category from "@/models/category";
import ContactUs from "@/models/contactUs";
import Product from "@/models/product";
import connect from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  connect();
  const product = await ContactUs.findOneAndDelete({ _id: data.id }).exec();

  return new NextResponse("success", { status: 200 });
}
