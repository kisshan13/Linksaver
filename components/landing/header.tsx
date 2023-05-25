import Brand from '@/public/logo.svg'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className=' flex items-center justify-between my-4'>
            <Link href={'/'}>
                <Image src={Brand} alt='Linksaver' />
            </Link>

            <Navbar />
        </header>
    )
}