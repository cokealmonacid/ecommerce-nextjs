import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
import { removePhoto, uploadPhoto, validateNonEmptyObject } from "@/utils/helpers";

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
      sale: Number(data.get("sale")) ?? null,
      description: data.get("description")?.toString() ?? "",
      slug: data.get("slug")?.toString() ?? "",
      active: true
    };

    if (!validateNonEmptyObject(product)) {
      return new NextResponse(JSON.stringify({ message: "MISSING_VALUES" }), { status: 422 });
    }
    
    try {
      const uploadedImageUrl = await uploadPhoto(data);
      await prisma.product.create({
        data: {
          ...product,
          img: uploadedImageUrl
        }
      });
    
      return new NextResponse(JSON.stringify({ message: "CREATED_SUCCESS_PRODUCT" }), { status: 201 });

    } catch (err) {
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};

// UPDATE PRODUCT
export const PUT = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      const data = await req.formData();
      const file: File | null = data.get("file") as unknown as File;

      const productToUpdate = {
        id: data.get("id")?.toString() ?? "",
        title: data.get("title")?.toString() ?? "",
        category_id: data.get("category_id")?.toString() ?? "",
        brand: data.get("brand")?.toString() ?? "",
        price: Number(data.get("price")) ?? 0,
        sale: Number(data.get("sale")) ?? null,
        description: data.get("description")?.toString() ?? "",
        slug: data.get("slug")?.toString() ?? "",
      };

      if (file) {
        const product = await prisma.product.findFirstOrThrow({ where: { id: productToUpdate.id } });
        const respCloudinary = await removePhoto(product.img);
        if (respCloudinary.error || respCloudinary.result === "not found") {
          throw new Error(respCloudinary.error.message);
        }

        const uploadedImageUrl = await uploadPhoto(data);
        await prisma.product.update({
          where: { id: productToUpdate.id },
          data: {
            ...productToUpdate, img: uploadedImageUrl
          }
        });

      } else {
        await prisma.product.update({
          where: { id: productToUpdate.id },
          data: productToUpdate
        });
      }

      return new NextResponse(JSON.stringify({ message: "UPDATED_PRODUCT" }), { status: 202 });
    } catch (err) {
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};
