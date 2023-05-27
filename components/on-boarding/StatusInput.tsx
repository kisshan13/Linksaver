import Image from "next/image"
import statusSvg from "@/public/svg/status.svg"
import Input, { InputProps } from "../ui/Input"
import Heading from "../ui/Heading"

export default function StatusInput({ ...props }: InputProps) {
    return (
        <div className=" flex flex-row-reverse items-center gap-14 justify-center flex-wrap">
            <Image src={statusSvg} alt='status' className=' my-6' />
            <div className=' my-6'>
                <Heading>Write some <span className=" text-pink my-3">cool status....</span></Heading>
                <Input {...props} className=" my-3" />
            </div>
        </div>
    )
}