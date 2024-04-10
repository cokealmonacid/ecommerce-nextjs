import { cache } from "react";

import { prisma } from "@/utils/connect";

export const getAllSliders = cache(async () => await prisma.imageSlider.findMany());
