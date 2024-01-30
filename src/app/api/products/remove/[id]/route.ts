import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { removePhoto } from "@/utils/helpers";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const product = await prisma.product.findFirstOrThrow({ where: { id } });
      const respCloudinary = await removePhoto(product.img);

      if (respCloudinary.error || respCloudinary.result === "not found") {
        throw new Error(respCloudinary.error.message);
      }

      await prisma.product.delete({ where: { id } });

      return new NextResponse(JSON.stringify({ message: "DELETED_RESOURCE" }), { status: 200 });
    } catch (err) {
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};
