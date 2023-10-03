import { prisma } from "@/utils/connect";

import { NextRequest, NextResponse } from "next/server"

// FETCH PRODUCTS BY SLUG
export const GET = async (req: NextRequest, { params }: { params: { slug: string } }) => {
  const { slug } = params
  try {
    const category = await prisma.category.findFirst({ where: { slug } })
    const product = await prisma.product.findMany({ where: { category_id: category?.id } })

    return new NextResponse(JSON.stringify(product), { status: 200 })
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 })
  }
}
