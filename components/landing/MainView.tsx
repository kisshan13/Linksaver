'use client'

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

import Heading from "../ui/Heading"
import Button from "../ui/Button"
import Text from "../ui/Text"

import Box from '@/public/landing/elements/box.svg'
import LinkA from '@/public/landing/elements/link.svg'
import Splash from '@/public/landing/elements/splash.svg'
import Element from '@/public/landing/elements/element.svg'

import { cn } from "@/lib/utils"

export default function MainView({ className }: { className?: string }) {

    const router = useRouter()

    return (
        <>
            <div className={cn(["relative max-w-max mx-auto perspective-origin-center mt-40 flex flex-col items-center", className])}>

                <Heading variants="saver/vlarge" className=" text-center font-semibold leading-[4rem]">
                    No more worries about <br />
                    where to <span className=" text-pink">save links..</span>
                </Heading>

                <Button variants="filled" className=" my-6 relative" onClick={() => router.push('/profile/create')}>
                    <div className=" absolute w-full h-full bg-pink blur-[100px]"></div>
                    <Link href={'/profile/create'} className=" z-10">
                        <Text color="black" className=" px-11 font-medium">
                            Create a profile
                        </Text>
                    </Link>
                </Button>

                <Image src={Box} alt="box" className=" hidden xl:block absolute xl:-left-1/3 -left-1/4 bottom-0 translate-z-12" />
                <Image src={LinkA} alt="link-a" className=" hidden xl:block absolute xl:-right-1/3 bottom-0 translate-z-5" />
                <Image src={Element} alt="element" className=" hidden xl:block absolute xl:-left-1/3 top-0 translate-z-5" />
                <Image src={Splash} alt="splash" className=" hidden xl:block absolute xl:-right-1/3 top-0 translate-z-2" />
            </div>
        </>
    )
}