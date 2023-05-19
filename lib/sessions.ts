import { authOptions } from "./auth";
import { getServerSession } from "next-auth";

export default async function getCurrentProfile() {
    const session = await getServerSession(authOptions)

    return session?.user
}