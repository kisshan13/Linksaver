import { cn } from "@/lib/utils";

import Image, { StaticImageData } from "next/image";

import Heading from "../ui/heading";
import Text from "../ui/text";

import Manage from '@/public/landing/cards/manage.png'
import Button from "../ui/button";

export interface CardProps {
    className?: string,
    key: number
    image: StaticImageData,
    heading: string,
    text: string,
    buttonText: string
}

export default function Card({ image, heading, text, buttonText, className }: CardProps) {
    return (
        <div className={cn(['flex flex-col items-center gap-7', className])}>
            <Image src={image} alt="manage" width={350} />
            <div className=" flex flex-col items-center gap-5">
                <Heading className=" font-bold">
                    {heading}
                </Heading>
                <Text className=" max-w-[250px] text-center">
                    {text}
                </Text>
            </div>
            <Button variants="filled">
                <Text color="black">
                    {buttonText}
                </Text>
            </Button>
        </div>
    )
}