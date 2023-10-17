import { NextResponse, NextRequest } from "next/server"

import { prisma } from "@/utils/connect"
import { getAuthSession } from "@/utils/auth"

// FETCH ALL SLIDER IMAGES
export const GET = async () => {
  try {
    const images = await prisma.imageSlider.findMany()
    return new NextResponse(JSON.stringify(images), { status: 200 })
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
}

// export const POST = async (req: NextRequest) => {
//   const session = await getAuthSession()

//   if (session) {
//     try {
//       return new NextResponse(JSON.stringify({}), { status: 200 });
//     } catch (err) {
//       return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
//     }
//   } else {
//     return new NextResponse(JSON.stringify({ message: 'You are not authenticated!' }), { status: 401 });
//   }
// }

export const POST = async (req: NextRequest) => {
  const data = await req.formData()
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return new NextResponse(JSON.stringify({ message: 'There is no image!' }), { status: 400 });
  }

  data.append("upload_preset", "jr99tmzg");

  const uploadResponse = await fetch(
    "https://api.cloudinary.com/v1_1/dzmyrcc99/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  const uploadedImageData = await uploadResponse.json();

  const image = await prisma.imageSlider.create({
    data: {
      image: uploadedImageData.url
    }
  })

  return new NextResponse(JSON.stringify({ message: 'It works!' }), { status: 200 })
}