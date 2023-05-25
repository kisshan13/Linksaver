import brandSvg from '@/public/logo-black.svg'

import Image from 'next/image'
import Anchor from '../ui/Anchor'
import Text from '../ui/Text'

export default function Footer({ className }: { className?: string }) {

    const links = {
        social: [{ name: 'Discord', href: '#' },
        { name: 'Github', href: '#' },
        { name: 'Instagram', href: '#' }],

        suggestions: [{ name: 'Links', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Shortners', href: '#' },
        { name: 'Generators', href: '#' },]
    }

    return (
        <footer className={className}>
            <div className=' flex items-baseline justify-between flex-wrap'>
                <Image src={brandSvg} alt={'logo'} />

                <div className=' flex xl:gap-48 gap-9 flex-wrap'>
                    <ul className=' flex flex-col gap-5 my-3'>
                        <li><Anchor variant='saver/normal' className=' font-medium hover:text-white' href='#'>Discord</Anchor></li>
                        <li><Anchor variant='saver/normal' className=' font-medium hover:text-white' href='#'>Github</Anchor></li>
                        <li><Anchor variant='saver/normal' className=' font-medium hover:text-white' href='#'>Instagram</Anchor></li>
                    </ul>

                    <ul className=' flex flex-col gap-5 my-3'>
                        <li><Anchor variant='saver/normal' className=' font-medium hover:text-white' href='#'>Links</Anchor></li>
                        <li><Anchor variant='saver/normal' className=' font-medium hover:text-white' href='#'>Community</Anchor></li>
                        <li><Anchor variant='saver/normal' className=' font-medium hover:text-white' href='#'>Shortners and Generators</Anchor></li>
                    </ul>
                </div>
            </div>

            <Text color='black' className=' opacity-60'>Designed and Developed by <a href='https://github.com/kisshan13' className='hover:opacity-100'>@dod</a></Text>
        </footer>
    )
}