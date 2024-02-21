import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
    return (
        <div className="relative bg-light-gray mx-auto px-4 sm:px-6 lg:px-16 p-8 flex flex-col gap-y-6 items-center">
            <h2
                className="bg-gradient-to-r from-DeepNavy-blue via-blue-500 to-blue-700 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
            >
                Contact Me
            </h2>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-y-6 gap-x-12 md:py-6">
                <div className="flex flex-col justify-center gap-y-6 bg-DeepNavy-blue text-light-gray p-6 rounded-lg shadow-lg shadow-DeepNavy-blue">
                    <div className=" flex flex-col gap-y-4">
                        <h3 className="relative text-xl font-bold before:absolute before:bottom-0 before:left-0 before:w-20 before:h-1 before:bg-DeepNavy-blue pb-2">Get in Touch</h3>
                        <p className="max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis excepturi recusandae.</p>
                    </div>
                    <ul className="flex flex-col justify-center gap-6 md:gap-8">
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className=" transition hover:text-gray-700/75 flex items-center gap-x-4"
                            >
                                <div className="border-2 border-light-gray h-16 w-16 flex justify-center items-center rounded-full shadow-sm shadow-light-gray">
                                    <MdMarkEmailRead className="text-4xl text-light-gray" />
                                </div>
                                <div className="text-light-gray">
                                    <h3 className="text-xl font-bold">EMAIL</h3>
                                    <span className="">developerhammad@gmail.com</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className=" transition hover:text-gray-700/75 flex items-center gap-x-4"
                            >
                                <div className="border-2 border-light-gray h-16 w-16 flex justify-center items-center rounded-full shadow-sm shadow-light-gray">
                                    <FaPhoneVolume className="text-4xl text-light-gray" />
                                </div>
                                <div className="text-light-gray">
                                    <h3 className="text-xl font-bold">PHONE</h3>
                                    <span className="">+92 311 2423899</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className=" transition hover:text-gray-700/75 flex items-center gap-x-4"
                            >
                                <div className="border-2 border-light-gray h-16 w-16 flex justify-center items-center rounded-full shadow-sm shadow-light-gray">
                                    <MdLocationPin className="text-4xl text-light-gray" />
                                </div>
                                <div className="text-light-gray">
                                    <h3 className="text-xl font-bold">LOCATION</h3>
                                    <span className="">Karachi, Pakistan</span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
                <form className="flex-1 flex flex-col gap-y-6 w-full justify-center md:items-start">
                    <input type="email" className="bg-transparent border-2 border-DeepNavy-blue w-full rounded-lg py-2 px-4 placeholder-DeepNavy-blue shadow-sm shadow-DeepNavy-blue" placeholder="Email" />
                    <textarea name="" id="" rows={10} className="bg-transparent border-2 border-DeepNavy-blue w-full rounded-lg py-2 px-4 placeholder-DeepNavy-blue shadow-sm shadow-DeepNavy-blue" placeholder="Message"></textarea>
                    <button className="bg-DeepNavy-blue px-12 py-2 rounded-lg shadow-md shadow-DeepNavy-blue text-light-gray text-xl">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
