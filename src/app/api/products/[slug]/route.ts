import { prisma } from "@/utils/connect";

import { NextRequest, NextResponse } from "next/server";

// FETCH PRODUCT BY SLUG
export const GET = async (req: NextRequest, { params }: { params: { slug: string } }) => {
  const { slug } = params;
  try {
    const productBySlug = await prisma.product.findMany({
      where: { slug }
    });

    return new NextResponse(JSON.stringify(productBySlug), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};
