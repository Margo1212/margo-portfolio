import Link from "next/link"

export const NavigationMenu = () => {
    return (
        <ul className="flex w-1/3 justify-between font-semibold text-base">
            <li className="text-primary-300 hover:text-primary-100 hover:underline decoration-2  active:text-primary-500 active:underline hover:decoration-secondary-300 active:decoration-secondary-500 decoration-wavy"><Link href="/">about</Link></li>
            <li className="text-primary-300 hover:text-primary-100 hover:underline decoration-2  active:text-primary-500 active:underline hover:decoration-secondary-300 active:decoration-secondary-500 decoration-wavy"><Link href="/projects">portfolio</Link></li>
            <li className="text-primary-300 hover:text-primary-100 hover:underline decoration-2  active:text-primary-500 active:underline hover:decoration-secondary-300 active:decoration-secondary-500 decoration-wavy"><Link href="/contact">contact</Link></li>
        </ul>
    )
}