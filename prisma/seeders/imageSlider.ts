import { PrismaClient } from "@prisma/client";

export const imageSliderSeeder = async (prismaClient: PrismaClient) => {
  await prismaClient.imageSlider.createMany({
    data: [
      { id: "1", image: "/temporary/slide1.png" },
      { id: "2", image: "/temporary/slide2.png" },
    ]
  });
};
