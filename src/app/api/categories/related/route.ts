import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/utils/connect"

// FETCH RELATED PRODUCTS
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const category_id = searchParams.get("cid");

  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      where: { 
        ...(category_id && { category_id }),
        active: true,        
       }
    })
    return new NextResponse(JSON.stringify(products), { status: 200 })
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
  }
}
