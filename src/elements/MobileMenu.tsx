import Link from "next/link"
import { SetStateAction } from "react"
interface menu {
    menu: boolean
    setMenu: React.Dispatch<SetStateAction<boolean>>
}
const MobileMenu: React.FC<menu> = ({ menu, setMenu }) => {
    return (
        <section className={`bg-DeepNavy-blue w-full absolute top-0 left-0 overflow-hidden ms-auto transition-all ease-in-out duration-500 z-20 flex justify-center items-center ${menu ? " h-screen" : 'h-0 '} `}>
            <nav aria-label="Global" className="relative flex justify-center items-center w-full mt-10">
                <ul className="flex flex-col items-center gap-6 text-3xl text-light-gray w-full">
                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="/about"> About </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Services </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Portfolio </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Blog </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Contact </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default MobileMenu
