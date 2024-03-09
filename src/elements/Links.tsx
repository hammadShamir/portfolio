import Link from "next/link"
import { usePathname } from "next/navigation"
interface SocialLinks {
    customStyle?: string
}
const Links: React.FC<SocialLinks> = ({ customStyle }) => {
    const path = usePathname()
    return (
        <ul className={`flex items-center gap-6 ${customStyle}`}>
            <li>
                <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="/about"> About </Link>
            </li>

            <li>
                <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href={path === '/' ? "#service" : "/#service"}> Services </Link>
            </li>

            <li>
                <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="/projects"> Projects </Link>
            </li>

            <li>
                <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="/about#skills"> Skills </Link>
            </li>

            <li>
                <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="#contact"> Contact </Link>
            </li>
        </ul>
    )
}

export default Links
