import getCurrentProfile from "@/lib/sessions"
import Image from "next/image"
import { redirect } from 'next/navigation'
import { Metadata } from "next"
import Text from "@/components/ui/text"

import logo from '@/public/logo.svg'
import Heading from "@/components/ui/heading"
import LoginCard, { LoginCardProps } from "@/components/login-card"

import googleSvg from '@/public/svg/google.svg'
import githubSvg from '@/public/svg/github.svg'

export const metadata: Metadata = {
    title: 'Create your profile'
}

export default async function Page() {

    const user = await getCurrentProfile()

    if (user) {
        redirect('/')
    }

    const loginCardDetails: LoginCardProps[] = [
        { provider: 'google', text: 'Signup using Google', image: googleSvg },
        { provider: 'github', text: 'Signup using Github', image: githubSvg },
    ]

    return (
        <div className="m-auto p-3 xl:w-4/5 xl:p-0">
            <header className=" my-4">
                <Image src={logo} alt="linksaver" />
            </header>

            <main className=" mt-12">
                <Heading className="font-semibold text-center">Create your <span className=" font-semibold text-pink">profile !!</span></Heading>

                <div className=" max-w-max m-auto mt-28 flex flex-col justify-center gap-12">
                    {
                        loginCardDetails.map(detail => (
                            <LoginCard
                                image={detail.image}
                                provider={detail.provider}
                                text={detail.text} />
                        ))
                    }
                </div>

                <Text className=" text-center opacity-50 hover:opacity-100 cursor-pointer my-24 underline underline-offset-8">By signing up with us, you agree to our terms and condition as well.</Text>
            </main>
        </div>
    )
}