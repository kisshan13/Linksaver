import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "./prisma";

function getClientCredentials() {

    const clientId = process.env.GOOLGE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (typeof clientId === 'string' &&
        typeof clientSecret === 'string') {
        return {
            clientId, clientSecret
        }
    }

    throw new Error('Google Credentials missing')
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        GoogleProvider({
            clientId: getClientCredentials().clientId,
            clientSecret: getClientCredentials().clientSecret
        })
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }

            return session
        },

        async jwt({ token, user }) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token.email
                }
            })

            if (!dbUser) {
                if (user) {
                    token.id = user?.id
                }

                return token
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image
            }
        },
    }
}