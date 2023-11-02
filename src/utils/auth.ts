import {getServerSession, type NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/utils/connect";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email,  password } = credentials as { email: string; password: string; };
        if (!email || !password) throw Error("EMPTY_CREDENTIALS");

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) throw Error("WRONG_CREDENTIALS");

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) throw Error("INVALID_CREDENTIALS");

        return user;
      },
    })
  ],
  pages: {
    signIn: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
};

export const getAuthSession = () => getServerSession(authOptions);