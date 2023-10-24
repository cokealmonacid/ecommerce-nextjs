import { NextRequest, NextResponse } from "next/server";

import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { generateSHA1, generateSignature, getPublicIdCloudinary } from "@/utils/helpers";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  const session = await getAuthSession()

  if (session) {
    try {
      const slider = await prisma.imageSlider.findFirstOrThrow({ where: { id } });
      const publicId = getPublicIdCloudinary(slider.image);
      const signature = generateSHA1(generateSignature(publicId));
      const timestamp = new Date().getTime();

      const data = new FormData();
      data.append('api_key', process.env.CLOUDINARY_API_KEY ?? '');
      data.append('public_id', publicId);
      data.append('signature', signature);
      data.append('timestamp', timestamp.toString())

      const deleteFromCloudinaryResponse = await fetch(
        `${process.env.CLOUDINARY_URL}/destroy`,
        {
          method: "POST",
          body: data,
        }
      );

      const respCloudinary = await deleteFromCloudinaryResponse.json();
      if (respCloudinary.error) {
        throw new Error(respCloudinary.error.message);
      }

      await prisma.imageSlider.delete({ where: { id } });

      return new NextResponse(JSON.stringify({ message: 'DELETED_RESOURCE' }), { status: 200 });
    } catch (err) {
      return new NextResponse(JSON.stringify({ message: 'SOMETHING_WENT_WRONG' }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: 'NOT_AUTHENTICATED' }), { status: 401 });
  }
}
