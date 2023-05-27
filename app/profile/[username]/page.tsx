import getCurrentProfile from "@/lib/sessions"
import { redirect } from "next/navigation"
import UserProfile from "@/components/profile/UserProfile"
import Header from "@/components/Header"

interface ProfilePageProps {
    params: { username: string }
}

export default async function Profile({ params }: ProfilePageProps) {

    const { profile, user } = await getCurrentProfile()
    console.log({
        profile: profile,
        user: user
    })
    if (!user) { redirect('/profile/create') }

    return (
        <>
            <div className=" px-3">
                <Header />
                <div className=" my-9">
                    <UserProfile username={params.username} />
                </div>
            </div>
        </>
    )
}