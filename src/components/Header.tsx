import Logo from "@/elements/Logo";
import MobileMenu from "@/elements/MobileMenu";
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [menu, setMenu] = useState<boolean>(false);

    return (
            <header className="relative text-light-gray sticky top-0 left-0 z-20 ">
                <div className="flex h-16 items-center justify-between shadow-md shadow-black w-full mx-auto px-4 sm:px-6 lg:px-16 bg-DeepNavy-blue">
                    <div className="flex-1 md:flex md:items-center md:gap-12 text-3xl">
                        <Logo />
                    </div>
                    <div className="md:flex md:items-center">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="/about"> About </Link>
                                </li>

                                <li>
                                    <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="#"> Services </Link>
                                </li>

                                <li>
                                    <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="#"> Portfolio </Link>
                                </li>

                                <li>
                                    <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="#"> Blog </Link>
                                </li>

                                <li>
                                    <Link className="transition hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent" href="#"> Contact </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="block md:hidden">
                                <button className="rounded p-2 transition hover:hover-color" onClick={() => setMenu(!menu)}>
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
                <MobileMenu menu={menu} setMenu={setMenu} />
            </header>
    )
}

export default Header
