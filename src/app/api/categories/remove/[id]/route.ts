import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  const session = await getAuthSession();

  if (session) {
    const products = await prisma.product.findMany({ where: { category_id: id } });

    if (products.length) {
      return new NextResponse(JSON.stringify({ message: "REMOVE_PRODUCTS_BEFORE_DELETE" }), { status: 422 });
    }

    try {
      await prisma.category.delete({ where: { id } });

      return new NextResponse(JSON.stringify({ message: "DELETED_RESOURCE" }), { status: 200 });
    } catch (err) {
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};
