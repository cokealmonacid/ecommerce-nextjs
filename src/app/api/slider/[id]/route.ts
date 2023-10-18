import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params
  const session = await getAuthSession()

  if (session) {
    try {
      await prisma.imageSlider.delete({ where: { id } })

      return new NextResponse(JSON.stringify('DELETED_RESOURCE'), { status: 200 });
    } catch (err) {
      return new NextResponse(JSON.stringify({ message: 'SOMETHING_WENT_WRONG' }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: 'NOT_AUTHENTICATED' }), { status: 401 });
  }
}
