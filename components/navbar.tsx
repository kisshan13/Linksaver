import Link from "next/link"
import Text from "./ui/text"

type navlink = { text: string, href: string }

export default function Navbar() {

    const navitems: navlink[] = [
        { text: 'collect', href: '/' },
        { text: 'organize', href: '/' },
        { text: 'share', href: '/' },
        { text: 'profile', href: '/' }
    ]

    return (
        <nav className=" flex gap-9">
            {
                navitems.map(item => (
                    <Link href={item.href}>
                        <Text className=" hover:text-pink">
                            {item.text}
                        </Text>
                    </Link>
                ))
            }
        </nav>
    )
}