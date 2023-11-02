import { NextResponse } from "next/server";

import { prisma } from "@/utils/connect";

// FETCH PRODUCTS
export const GET = async () => {
  try {
    const products = await prisma.product.findMany({ include: { category: true } });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};
