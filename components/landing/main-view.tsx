'use client'

import Link from "next/link"
import Image from "next/image"

import Heading from "../ui/heading"
import Button from "../ui/button"
import Text from "../ui/text"

export default function MainView() {
    return (
        <>
            <div className=" flex flex-col items-center  relative">
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

                
            </div>
        </>
    )
}