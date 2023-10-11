import { User } from "@prisma/client"

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  minimumFractionDigits: 0,
});

export const priceFormatter = (price: number) => `${formatter.format(price)}`

export const exclude = (user: User, key: keyof User) => {
  delete user[key];

  return user;
}