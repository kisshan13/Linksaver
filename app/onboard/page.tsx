import Header from "@/components/header";
import { ProfileSubmission } from "@/components/on-boarding/profile-submission";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Onboard',
    description: 'Get yourself ready to explore the linksaver'
}

export default function Onboard() {
    return (
        <>
            <div className=" p-2">
                <Header />
                <ProfileSubmission />
            </div>
        </>
    )
}