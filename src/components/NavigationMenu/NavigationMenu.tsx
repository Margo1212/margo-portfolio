import Link from "next/link"

export const NavigationMenu = () => {
    return (
        <ul className="flex w-1/3 justify-between font-semibold text-base text-primary-300">
            <li><Link href="/">about</Link></li>
            <li><Link href="/projects">portfolio</Link></li>
            <li><Link href="/contact">contact</Link></li>
        </ul>
    )
}