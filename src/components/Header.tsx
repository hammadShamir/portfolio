import Links from "@/elements/Links";
import Logo from "@/elements/Logo";
import MobileMenu from "@/elements/MobileMenu";
import Link from "next/link"
import { useState } from "react"
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
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
                        <Links />
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="block md:hidden">
                            <button className="rounded p-2 transition hover:hover-color" onClick={() => setMenu(!menu)}>
                                {
                                    menu ? (
                                        <ImCross className="text-3xl" />
                                    ) : (
                                        <FaBars className="text-3xl" />
                                    )
                                }

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
