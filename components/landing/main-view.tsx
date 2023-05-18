'use client'

import Link from "next/link"
import Image from "next/image"

import Heading from "../ui/heading"
import Button from "../ui/button"
import Text from "../ui/text"

import Box from '@/public/landing/elements/box.svg'
import LinkA from '@/public/landing/elements/link.svg'
import Splash from '@/public/landing/elements/splash.svg'
import Element from '@/public/landing/elements/element.svg'

export default function MainView() {
    return (
        <>
            <div className=" flex flex-col items-center  relative max-w-max mx-auto perspective-origin-center perspective-5">
                <Heading variants="saver/vlarge" className=" text-center font-semibold leading-[4rem]">
                    No more worries about <br />
                    where to <span className=" text-pink">save links..</span>
                </Heading>
                <Button variants="filled" className=" my-6 relative">
                    <div className=" absolute w-full h-full bg-pink blur-[100px]"></div>
                    <Link href={'/'} className=" z-10">
                        <Text color="black" className=" px-11 font-medium">
                            Search Links
                        </Text>
                    </Link>
                </Button>

                <Image src={Box} alt="box" className=" absolute xl:-left-1/3 -left-1/4 bottom-0" />
                <Image src={LinkA} alt="link-a" className=" absolute xl:-right-1/3 " />
                <Image src={Element} alt="element" className=" absolute xl:-left-1/3 " />
                <Image src={Splash} alt="splash" className=" absolute bottom-0 xl:-right-1/3" />
            </div>
        </>
    )
}