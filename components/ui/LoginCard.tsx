'use client'

import Button from "./Button"
import Link from "next/link"
import Text from "./Text"

import googleSvg from '@/public/svg/google.svg'
import loaderSvg from '@/public/svg/loader.svg'
import Image, { StaticImageData } from "next/image"
import { signIn } from 'next-auth/react'
import { cn } from "@/lib/utils"

export type Provider = 'google' | 'github'

export interface LoginCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    image: StaticImageData,
    text: string,
    provider: Provider,
    load?: boolean,
}

export default function LoginCard({ className, image, provider, text, load = false, ...props }: LoginCardProps) {
    return (
        <Button
            variants="filled"
            className={cn([" px-5 py-3 flex gap-7 items-center max-w-fit disabled:opacity-50 disabled:active:shadow-3xl", className])}
            disabled={load}
            {...props}>
            {
                load ? <Image src={loaderSvg} width={35} alt="loader" className="animate-spin" /> :
                    <Image src={image} width={35} alt='google' />
            }
            <Text color="black">{text}</Text>
        </Button>
    )
}