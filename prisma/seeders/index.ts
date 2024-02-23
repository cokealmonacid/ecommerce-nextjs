import { PrismaClient } from "@prisma/client";

import { categorySeeder } from "./category";
import { imageSliderSeeder } from "./imageSlider";
import { productSeeder } from "./product";

const prisma = new PrismaClient();

async function main() {
  await categorySeeder(prisma);
  await imageSliderSeeder(prisma);
  await productSeeder(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

