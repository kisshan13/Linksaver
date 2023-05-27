import { cn } from "@/lib/utils";

import Image, { StaticImageData } from "next/image";

import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Button from "../ui/Button";

export interface CardProps {
    className?: string,
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
