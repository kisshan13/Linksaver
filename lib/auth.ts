import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { prisma } from "./prisma";

function getClientCredentials() {

    const googleClientId = process.env.GOOLGE_CLIENT_ID
    const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET

    const githubClientId = process.env.GITHUB_CLIENT_ID
    const githubClientSecret = process.env.GITHUB_CLIENT_SECRET

    if (googleClientId && googleClientSecret && githubClientId && githubClientSecret) {
        return {
            googleClientId, googleClientSecret, githubClientId, githubClientSecret
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
            clientId: getClientCredentials().googleClientId,
            clientSecret: getClientCredentials().googleClientSecret
        }),

        GithubProvider({
            clientId: getClientCredentials().githubClientId,
            clientSecret: getClientCredentials().githubClientSecret
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