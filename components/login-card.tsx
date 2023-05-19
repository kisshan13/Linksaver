'use client'

import Button from "./ui/button"
import Link from "next/link"
import Text from "./ui/text"

import googleSvg from '@/public/svg/google.svg'
import Image, { StaticImageData } from "next/image"
import { signIn } from 'next-auth/react'
import { cn } from "@/lib/utils"

export interface LoginCardProps {
    className?: string,
    image: StaticImageData,
    provider: 'google' | 'github',
    text: string
}

export default function LoginCard({ className, image, provider, text }: LoginCardProps) {
    return (

        <Button variants="filled" className={cn([" px-5 py-3 flex gap-7 items-center", className])} onClick={() => signIn(provider)}>
            <Image src={image} width={35} alt='google' />
            <Text color="black">{text}</Text>
        </Button>
    )
}