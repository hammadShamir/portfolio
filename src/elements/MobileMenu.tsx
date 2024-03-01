import Link from "next/link"
import { usePathname } from "next/navigation"
import { SetStateAction, useEffect } from "react"
interface menu {
    menu: boolean
    setMenu: React.Dispatch<SetStateAction<boolean>>
}
const MobileMenu: React.FC<menu> = ({ menu, setMenu }) => {
    const path = usePathname();
    useEffect(() => {
        if (menu) {
            document?.body.classList.add("overflow-y-hidden")
        } else {
            document?.body.classList.remove("overflow-y-hidden")
        }
    }, [menu])

    return (
        <section className={`bg-DeepNavy-blue w-full absolute top-0 left-0 overflow-hidden ms-auto transition-all ease-in-out duration-500 flex justify-center items-center z-[-1] ${menu ? " h-screen" : 'h-0 '} `}>
            <nav aria-label="Global" className="relative flex justify-center items-center w-full">
                <ul className="flex flex-col items-center gap-y-6 text-3xl text-light-gray w-full">
                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="/about"> About </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href={path === '/' ? "#service" : "/#service"}> Services </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="#portfolio"> Portfolio </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Blog </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="#contact"> Contact </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default MobileMenu
