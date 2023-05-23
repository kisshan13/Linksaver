import catSvg from '@/public/svg/cat.svg'

import Image from 'next/image'
import Heading from '../ui/heading'
import Input, { InputProps } from '../ui/input'

export default function UsernameInput({...props }: InputProps) {
    return (
        <>
            <div className=' flex items-center gap-14 justify-center flex-wrap'>
                <Image src={catSvg} alt='cat' className=' my-6' />
                <div className=' my-6'>
                    <Heading className=' my-3'>
                        You really need a <span className=' text-pink'>username !!</span>
                    </Heading>
                    <Input className=' my-3' {...props} />
                </div>
            </div>
        </>
    )
}