import { NextResponse, NextRequest } from "next/server";

import { prisma } from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

// FETCH ALL CATEGORIES
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({ include: { _count: { select: { products: true } } } });
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};

// CREATE NEW CATEGORY
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      const data = await req.json();
      const category = await prisma.category.create({
        data
      });

      return new NextResponse(JSON.stringify({ message: "CREATED_SUCCESS_CATEGORY", data: category }), { status: 201 });
    } catch (err) {
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};

// UPDATE CATEGORY
export const PUT = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      const data = await req.json();
      await prisma.category.update({
        where: { id: data.id },
        data
      });

      return new NextResponse(JSON.stringify({ message: "EDITED_SUCCESS_CATEGORY" }), { status: 202 });
    } catch (err) {
      console.log(err);
      return new NextResponse(JSON.stringify({ message: "SOMETHING_WENT_WRONG" }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "NOT_AUTHENTICATED" }), { status: 401 });
  }
};
