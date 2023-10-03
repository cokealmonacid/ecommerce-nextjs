import { User } from "@prisma/client";

export const exclude = (user: User, key: keyof User) => {
  delete user[key];

  return user;
}