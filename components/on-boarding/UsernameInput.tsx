import catSvg from '@/public/svg/cat.svg'
import loaderPink from '@/public/svg/loader-pink.svg'

import { cn } from '@/lib/utils'

import Image from 'next/image'
import Heading from '../ui/Heading'
import Text from '../ui/Text'
import Input, { InputProps } from '../ui/Input'

export type UsernameInputStates = 'checking' | 'exist' | 'perfect' | 'not-typing'

export interface UsernameInputProps extends InputProps {
    state: UsernameInputStates
}

export default function UsernameInput({ state, ...props }: UsernameInputProps) {

    let loader = state === 'checking' ? 'opacity-100' : 'opacity-0'
    let exist = state === 'exist' ? 'block' : 'hidden'
    let perfect = state === 'perfect' ? 'block' : 'hidden'

    return (
        <>
            <div className=' flex items-center gap-14 justify-center flex-wrap'>
                <Image src={catSvg} alt='cat' className=' my-6' />
                <div className=' my-6'>
                    <Heading className=' my-3'>
                        You really need a <span className=' text-pink'>username !!</span>
                    </Heading>
                    <Input className=' my-3' {...props} />
                    <div className=' flex'>
                        <Image src={loaderPink} width={20} height={20} alt='loader' className={cn(['animate-spin', loader])} />
                        <Text variant='saver/base' className={cn(['hidden', exist])}>Username already exists.</Text>
                        <Text variant='saver/base' className={cn(['hidden', perfect])}>Yepp!! nice username..</Text>
                    </div>
                </div>
            </div>
        </>
    )
}