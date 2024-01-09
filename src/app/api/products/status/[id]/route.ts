import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const product = await prisma.product.findFirstOrThrow({ where: { id } });

      await prisma.product.update({
        where: { id },
        data: {
          active: !product.active
        }
      });

      return new NextResponse(JSON.stringify({ message: "UPDATED_PRODUCT" }), { status: 200 });
    } catch (err) {
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};
