'use client'

import Link from "next/link"
import Image from "next/image"

import Heading from "../ui/heading"
import Button from "../ui/button"
import Text from "../ui/text"

import { motion } from "framer-motion"

import Box from '@/public/landing/elements/box.svg'
import LinkA from '@/public/landing/elements/link.svg'
import Splash from '@/public/landing/elements/splash.svg'
import Element from '@/public/landing/elements/element.svg'

export default function MainView() {
    return (
        <>
            <div className="relative max-w-max mx-auto perspective-origin-center mt-40">
                <motion.div
                    initial={{ opacity: 0, translateY: 150, rotateX: 10 }}
                    animate={{ opacity: 1, translateY: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="flex flex-col items-center">

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
                </motion.div>


                <Image src={Box} alt="box" className=" absolute xl:-left-1/3 -left-1/4 bottom-0 translate-z-12" />
                <Image src={LinkA} alt="link-a" className=" absolute xl:-right-1/3 translate-z-5" />
                <Image src={Element} alt="element" className=" absolute xl:-left-1/3 top-0 translate-z-5" />
                <Image src={Splash} alt="splash" className=" absolute xl:-right-1/3 top-0 translate-z-2" />
            </div>
        </>
    )
}