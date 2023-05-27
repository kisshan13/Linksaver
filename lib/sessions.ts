import { authOptions } from "./auth";
import { getServerSession } from "next-auth";
import { prisma } from "./prisma";

export default async function getCurrentProfile() {
    const session = await getServerSession(authOptions)
    const profile = await prisma.profile.findFirst({
        where: {
            userId: session?.user.id
        }
    })

    console.log(session?.user)

    return { user: session?.user, profile: profile }
}