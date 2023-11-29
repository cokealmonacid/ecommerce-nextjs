import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
import { validateNonEmptyObject } from "@/utils/helpers";

// FETCH PRODUCTS
export const GET = async () => {
  try {
    const products = await prisma.product.findMany({ include: { category: true }, orderBy: { createdAt: "desc" } });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    const data = await req.formData();
    const file: File | null = data.get("file") as unknown as File;
  
    if (!file) {
      return new NextResponse(JSON.stringify({ message: "NO_IMAGE" }), { status: 422 });
    }

    const product = {
      title: data.get("title")?.toString() ?? "",
      category_id: data.get("category_id")?.toString() ?? "",
      brand: data.get("brand")?.toString() ?? "",
      price: Number(data.get("price")) ?? 0,
      description: data.get("description")?.toString() ?? "",
      slug: data.get("slug")?.toString() ?? "",
      active: true
    };

    if (!validateNonEmptyObject(product)) {
      return new NextResponse(JSON.stringify({ message: "MISSING_VALUES" }), { status: 422 });
    }
    
    try {
      data.append("upload_preset", process.env.CLOUDINARY_PRESET ?? "");
      data.append("folder", process.env.CLOUDINARY_FOLDER ?? "");
      const uploadResponse = await fetch(
        `${process.env.CLOUDINARY_URL}/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const uploadedImageData = await uploadResponse.json();
      await prisma.product.create({
        data: {
          ...product,
          img: uploadedImageData.url
        }
      });
    
      return new NextResponse(JSON.stringify({ message: "CREATED_SUCCESS_PRODUCT" }), { status: 201 });

    } catch (err) {
      console.log("err: ", err);
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};
