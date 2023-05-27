import collectPng from '@/public/landing/cards/collect.png'
import Image from 'next/image'
import Text from '../ui/Text'


export default function UserProfile({ username }: { username: string }) {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-9'>
                <Image src={collectPng} alt='building' width={250} />
                <Text>
                    Hey <span className=' text-pink'>{username}</span>, we’re currently building
                    see you soon....
                </Text>
            </div>
        </>
    )
}