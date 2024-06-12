import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import type { NextApiRequest, NextApiResponse } from 'next';
import  { NextAuthOptions } from 'next-auth';

const GOOGLE_ID = process.env.GOOGLE_ID!;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET!;
const JWT_SECRET = process.env.JWT_SECRET!;

if (!GOOGLE_ID || !GOOGLE_SECRET || !JWT_SECRET) {
    throw new Error('Missing environment variables for Google OAuth');
}

const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        //    Add more providers here
    ],
    callbacks: {
        async session({ session, token }) {
            if (session.user && 'id' in session.user) {
                session.user.id = token.sub!;
            }
            return session;
        },
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 jours
    },
    jwt: {
        secret: JWT_SECRET,
    },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
