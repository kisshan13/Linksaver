'use client'

import { useState } from "react"

import { LoginCardProps } from "./ui/LoginCard"
import Heading from "./ui/Heading"
import LoginCard from "./ui/LoginCard"
import Text from "./ui/Text"

import googleSvg from '@/public/svg/google.svg'
import githubSvg from '@/public/svg/github.svg'
import { BuiltInProviderType, Provider } from "next-auth/providers"
import { LiteralUnion, signIn } from "next-auth/react"

export default function Login() {

    const [clicked, setClicked] = useState(false)

    const loginCardDetails: LoginCardProps[] = [
        { provider: 'google', text: 'Signup using Google', image: googleSvg },
        { provider: 'github', text: 'Signup using Github', image: githubSvg },
    ]

    async function handleClick(provider: LiteralUnion<BuiltInProviderType>) {
        setClicked(true)
        await signIn(provider, {
            callbackUrl: '/onboard',
        })
        setClicked(false)
    }

    return (
        <>
            <main className=" mt-12">
                <Heading className="font-semibold text-center">Create your <span className=" font-semibold text-pink">profile !!</span></Heading>

                <div className=" max-w-max m-auto mt-28 flex flex-col justify-center gap-12">
                    {
                        loginCardDetails.map(detail => (
                            <LoginCard
                                onClick={() => handleClick(detail.provider)}
                                image={detail.image}
                                provider={detail.provider}
                                text={detail.text}
                                load={clicked} />
                        ))
                    }
                </div>

                <Text className=" text-center opacity-50 hover:opacity-100 cursor-pointer my-24 underline underline-offset-8">By signing up with us, you agree to our terms and condition as well.</Text>
            </main>
        </>
    )
}