import startDb from "@/lib/db";
import UserModel from "@/models/userModel";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 4 * 60 * 60 },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Credentials({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await startDb();
        const user = await UserModel.findOne({ email });
        if (!user) throw Error("email/password mismatch!");

        const passwordMatch = await user.comparePassword(password);

        if (!passwordMatch) throw Error("email/password mismatch!");
        return {
          name: user.name,
          email: user.email,
          image: user.image,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      return token;
    },
    async session({ session, token, user }) {
      let customSessionUserData = {
        ...session,
        user: { ...session.user, id: token.sub },
      };
      return customSessionUserData;
    },
  },
};

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST };
