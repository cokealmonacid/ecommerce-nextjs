import { prisma } from "@/utils/connect";

export const getAllSliders = async () => await prisma.imageSlider.findMany();
