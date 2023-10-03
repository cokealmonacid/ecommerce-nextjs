import NextAuth, {type NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare, hash } from "bcrypt"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/utils/connect"

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email,  password } = credentials as { email: string; password: string; }
        if (!email || !password) throw new Error("Invalid Credentials!");

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) throw new Error("Wrong Credentials!");

        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) throw new Error("User not found!");

        return user
      },
    })
  ],
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt"
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }