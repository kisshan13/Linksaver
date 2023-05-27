import Header from "@/components/Header";
import { ProfileSubmission } from "@/components/on-boarding/ProfileSubmission";
import getCurrentProfile from "@/lib/sessions";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Onboard',
    description: 'Get yourself ready to explore the linksaver'
}

export default async function Onboard() {

    const {profile} = await getCurrentProfile()

    if(profile) {
        redirect(`profile/${profile.username}`)
    }

    return (
        <>
            <div className=" p-2">
                <Header />
                <ProfileSubmission />
            </div>
        </>
    )
}