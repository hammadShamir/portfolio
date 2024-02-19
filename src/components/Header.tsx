import Link from "next/link"
import Logo from "@/elements/Logo"

const Header = () => {
    return (
        <header className="bg-DeepNavy-blue text-light-gray">
            <div className="mx-auto px-4 sm:px-6 lg:px-16">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12 text-3xl">
                        <Logo />
                    </div>
                    <div className="md:flex md:items-center">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="transition hover:text-gray-500/75" href="#"> About </Link>
                                </li>

                                <li>
                                    <Link className="transition hover:text-gray-500/75" href="#"> Services </Link>
                                </li>

                                <li>
                                    <Link className="transition hover:text-gray-500/75" href="#"> Portfolio </Link>
                                </li>

                                <li>
                                    <Link className="transition hover:text-gray-500/75" href="#"> Blog </Link>
                                </li>

                                <li>
                                    <Link className="transition hover:text-gray-500/75" href="#"> Contact </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="block md:hidden">
                                <button className="rounded p-2 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
