import { PrismaClient } from "@prisma/client";

export const categorySeeder = async (prismaClient: PrismaClient) => {
  await prismaClient.category.createMany({
    data: [
      { id: "1", title: "Tablas", slug: "tablas" },
      { id: "2", title: "Tablas completas", slug: "tablas completas" },
      { id: "3", title: "Trucks", slug: "trucks" },
      { id: "4", title: "Ruedas", slug: "ruedas" },
      { id: "5", title: "Accesorios", slug: "accesorios" },
      { id: "6", title: "Ropa", slug: "ropa" },
    ]
  });
};
