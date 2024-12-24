import ContactUs from "@/models/contactUs";
import connect from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  connect();

  try {
    const contact = await new ContactUs({
      ...data.formData,
      refrance: data.refrance,
    }).save();

    return new NextResponse("success", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
