import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  // debug: !!process.env.AUTH_DEBUG,
  // theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  adapter: PrismaAdapter(prisma),
  providers: [ Google ],
})