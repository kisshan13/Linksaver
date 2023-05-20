import Header from "@/components/header"
import { ProfileSubmission } from "@/components/on-boarding/profile-submission"
import Text from "@/components/ui/text"
import getCurrentProfile from "@/lib/sessions"
import { redirect } from "next/navigation"

export default async function Profile() {

    // const user = await getCurrentProfile()

    // if (!user) {
    //     redirect('/profile/create')
    // }

    return (
        <div>
            <Header />
        </div>
    )
} 