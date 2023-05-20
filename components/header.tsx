import logo from '@/public/logo.svg'
import Image from 'next/image'

export default function Header() {
    return (
        <header className=" my-4">
            <Image src={logo} alt="linksaver" />
        </header>
    )
}