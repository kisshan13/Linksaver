import getCurrentProfile from "@/lib/sessions"
import Image from "next/image"
import { redirect } from 'next/navigation'
import { Metadata } from "next"

import logo from '@/public/logo.svg'
import Heading from "@/components/ui/heading"
import LoginCard from "@/components/login-card"

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
            <header className=" my-4">
                <Image src={logo} alt="linksaver" />
            </header>

            <main>
                <Heading className="font-semibold text-center">Create your <span className=" font-semibold text-pink">profile !!</span></Heading>

                <LoginCard />
            </main>
        </div>
    )
}