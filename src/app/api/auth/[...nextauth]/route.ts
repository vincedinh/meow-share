import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { authConfig } from "@/lib/auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST }