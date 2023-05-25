import getCurrentProfile from "@/lib/sessions"
import Image from "next/image"
import { redirect } from 'next/navigation'
import { Metadata } from "next"
import Login from "@/components/Login"
import Header from "@/components/Header"


export const metadata: Metadata = {
    title: 'Create your profile'
}

export default async function Page() {

    const user = await getCurrentProfile()

    if (user) {
        redirect('/')
    }

    return (
        <div className="m-auto p-3 xl:w-4/5 xl:p-0">
            <Header />

            <Login />
        </div>
    )
}