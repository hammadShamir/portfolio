import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import Link from "next/link";

const Contact = () => {
    const [data, setData] = useState({
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div id="contact" className="relative bg-light-gray mx-auto px-4 sm:px-6 lg:px-16 p-8 flex flex-col gap-y-6 items-center">
            <h2
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
            >
                Contact Me
            </h2>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-y-6 gap-x-12 md:py-6">
                <div className="flex flex-col justify-center gap-y-6 bg-DeepNavy-blue text-light-gray p-6 rounded-lg shadow-lg shadow-DeepNavy-blue">
                    <div className=" flex flex-col gap-y-4">
                        <h3 className="relative text-xl font-bold before:absolute before:bottom-0 before:left-0 before:w-20 before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 pb-2">Get in Touch</h3>
                        <p className="max-w-sm">Reach out and let's make things happen! Whether it's a project, collaboration, or just a friendly chat, I'm all ears. Excited to connect with you!</p>
                    </div>
                    <ul className="flex flex-col justify-center gap-6 md:gap-8">
                        <li>
                            <Link
                                href="mailto:developerhammad64@gmail.com"
                                rel="noreferrer"
                                target="_blank"
                                className=" transition hover:text-gray-700/75 flex items-center gap-x-4"
                            >
                                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16 w-16 flex justify-center items-center rounded-full shadow-sm shadow-light-gray">
                                    <MdMarkEmailRead className="text-4xl text-light-gray" />
                                </div>
                                <div className="relative text-light-gray before:absolute before:bottom-0 before:left-0 before:w-40 before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 pb-3">
                                    <h3 className="relative text-xl font-bold ">EMAIL</h3>
                                    <span className="break-all">developerhammad64@gmail.com</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="tel:+923112423899"
                                rel="noreferrer"
                                target="_blank"
                                className=" transition hover:text-gray-700/75 flex items-center gap-x-4"
                            >
                                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16 w-16 flex justify-center items-center rounded-full shadow-sm shadow-light-gray">
                                    <FaPhoneVolume className="text-4xl text-light-gray" />
                                </div>
                                <div className="text-light-gray relative text-light-gray before:absolute before:bottom-0 before:left-0 before:w-40 before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 pb-3">
                                    <h3 className="text-xl font-bold">PHONE</h3>
                                    <span className="">+92 311 2423899</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://wa.me/923112423899"
                                rel="noreferrer"
                                target="_blank"
                                className=" transition hover:text-gray-700/75 flex items-center gap-x-4"
                            >
                                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16 w-16 flex justify-center items-center rounded-full shadow-sm shadow-light-gray">
                                    <IoLogoWhatsapp className="text-4xl text-light-gray" />
                                </div>
                                <div className="text-light-gray relative text-light-gray before:absolute before:bottom-0 before:left-0 before:w-40 before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 pb-3">
                                    <h3 className="text-xl font-bold">Whatsapp</h3>
                                    <span className="">+92 311 2423899</span>
                                </div>
                            </Link>
                        </li>

                    </ul>
                </div>
                <form className="flex-1 flex flex-col gap-y-6 w-full justify-center md:items-start">
                    <div className={`relative w-full before:absolute before:top-0 before:left-0 before:w-${data.email.length > 0 ? "full" : "0"} before:h-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 
                    before:rounded-lg group
                    before:transition-all before:ease-in-out before:duration-500 shadow-sm shadow-DeepNavy-blue border-2 border-DeepNavy-blue rounded-lg`}>
                        <input type="email" name="email" className={`relative bg-transparent w-full py-2 px-4 placeholder-DeepNavy-blue text-DeepNavy-blue focus-visible:outline-none  ${data.email.length > 0 && "text-light-gray [text-shadow:_0_1px_0_var(--tw-shadow-color)] font-bold"}
                    `} placeholder="Email" onChange={handleChange} value={data.email} />
                    </div>
                    <div className={`relative w-full before:absolute before:top-0 before:left-0 before:w-${data.message.length > 0 ? "full" : "0"} before:h-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 
                    before:rounded-lg group
                    before:transition-all before:ease-in-out before:duration-500 border-2 border-DeepNavy-blue rounded-lg`}>
                        <textarea name="message" id="" rows={10} className={`relative bg-transparent w-full py-2 px-4 placeholder-DeepNavy-blue  text-DeepNavy-blue focus-visible:outline-none  ${data.message.length > 0 && "text-light-gray [text-shadow:_0_1px_0_var(--tw-shadow-color)] font-bold"}`} placeholder="Message" onChange={handleChange} value={data.message}></textarea>
                    </div>
                    <button className="relative bg-DeepNavy-blue px-12 py-2 rounded-lg shadow-md shadow-DeepNavy-blue text-light-gray text-xl before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 hover:before:h-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 
                        before:rounded-lg group
                        before:transition-all before:ease-in-out before:duration-500">
                        <span className="relative">Send</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
