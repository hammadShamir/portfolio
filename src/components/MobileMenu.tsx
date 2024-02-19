import Link from "next/link"
interface menu {
    menu: Boolean
}
const MobileMenu: React.FC<menu> = ({ menu }) => {
    return (
        <section className={`border-t-2 border-DeepNavy-blue bg-DeepNavy-blue w-full absolute top-16 left-0 overflow-hidden ms-auto transition-all ease-in-out duration-500 ${menu ? " h-screen  border-light-gray " : 'h-0 '} `}>
            <nav aria-label="Global" className="relative flex justify-center items-center mt-8 ">
                <ul className="flex flex-col items-center gap-6 text-text-5xl text-light-gray w-full">
                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center">
                        <Link className="transition md:hover:text-gray-500/75" href="#"> About </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center">
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Services </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center">
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Portfolio </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center">
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Blog </Link>
                    </li>

                    <li className="transition-all hover:bg-light-gray hover:text-DeepNavy-blue cursor-pointer py-4 w-full text-center">
                        <Link className="transition md:hover:text-gray-500/75" href="#"> Contact </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default MobileMenu
