import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
import { uploadPhoto } from "@/utils/helpers";

// FETCH ALL SLIDER IMAGES
export const GET = async () => {
  try {
    const images = await prisma.imageSlider.findMany();
    return new NextResponse(JSON.stringify(images), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};

// CREATE SLIDER IMAGE
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    const data = await req.formData();
    const file: File | null = data.get("file") as unknown as File;
  
    if (!file) {
      return new NextResponse(JSON.stringify({ message: "NO_IMAGE" }), { status: 422 });
    }

    try {
      const uploadedImageUrl = await uploadPhoto(data);
      await prisma.imageSlider.create({
        data: {
          image: uploadedImageUrl
        }
      });
    
      return new NextResponse(JSON.stringify({ message: "CREATED_SUCCESS_IMAGE" }), { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};
