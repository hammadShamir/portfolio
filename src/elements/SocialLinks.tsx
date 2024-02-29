import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface SocialLinks {
    customStyle?: string
}


const SocialLinks: React.FC<SocialLinks> = ({ customStyle }) => {
    return (
        <ul className={`flex items-center gap-6 md:gap-8 text-DeepNavy-blue ${customStyle}`}>
            <li>
                <Link
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className=" transition hover:text-gray-700/75 "
                >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="text-2xl" />
                </Link>
            </li>

            <li>
                <Link
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-gray-700/75"
                >
                    <span className="sr-only">Instagram</span>
                    <AiFillInstagram className="text-2xl" />
                </Link>
            </li>

            <li>
                <Link
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-gray-700/75"
                >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="text-2xl" />
                </Link>
            </li>

            <li>
                <Link
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-gray-700/75"
                >
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="text-2xl" />
                </Link>
            </li>
        </ul>
    )
}

export default SocialLinks
