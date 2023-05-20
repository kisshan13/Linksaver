import catSvg from '@/public/svg/cat.svg'
import loaderSvg from '@/public/svg/loader-pink.svg'

import Image from 'next/image'
import Heading from '../ui/heading'
import Text from '../ui/text'
import Input, { InputProps } from '../ui/input'

type usernameConclusion = 'Username already exists' | 'Yeah a great usernme' | 'Username must include alpha numeric values only.' | ' '

interface UsernameInputProps extends InputProps {
    conclusion?: usernameConclusion,
    loading?: boolean
}

export default function UsernameInput({ conclusion, loading, ...props }: UsernameInputProps) {
    return (
        <>
            <div className=' flex items-center gap-14 justify-center flex-wrap'>
                <Image src={catSvg} alt='cat' className=' my-6' />
                <div className=' my-6'>
                    <Heading className=' my-3'>
                        You really need a <span className=' text-pink'>username !!</span>
                    </Heading>
                    <Input className=' my-3' {...props} />
                    <Text variant='saver/base' className=' flex items-center gap-2'>
                        {conclusion === ' ' && <Image src={loaderSvg} alt='loading' width={20} height={20} className=' animate-spin' />}
                        {conclusion}
                    </Text>
                </div>
            </div>
        </>
    )
}