import { NextResponse } from "next/server"

import { prisma } from "@/utils/connect"

// FETCH ALL SLIDER IMAGES
export const GET = async () => {
  try {
    const images = await prisma.imageSlider.findMany()
    return new NextResponse(JSON.stringify(images), { status: 200 })
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
}
