import { NextAuthOptions, User, getServerSession } from "next-auth";
import useSession from "next-auth/react";
import redirect from "next/dist/server/api-utils";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { useRouter } from "next/router";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "molly@books.com",
        },
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) return null;

      }
    }),
  ]
};