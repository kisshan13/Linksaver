import Button from "./ui/button"
import Link from "next/link"
import Text from "./ui/text"

import googleSvg from '@/public/svg/google.svg'
import Image, { StaticImageData } from "next/image"

interface LoginCardProps {
    className?: string,
    link: string,
    provider: StaticImageData,
    text: string
}

export default function LoginCard({className, link, provider, text}: LoginCardProps) {
    return (
        <Link href={link}>
            <Button variants="filled" className=" px-5 py-3 flex gap-7 items-center">
                <Image src={provider} width={35} alt='google' />
                <Text color="black">{text}</Text>
            </Button>
        </Link>
    )
}