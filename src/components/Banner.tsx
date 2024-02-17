import TypeWriter from "@/elements/TypeWriter"
import Image from "next/image"

const Banner = () => {
    return (
        <section className="mx-auto max-w-screen-xl bg-light-gray p-6 md:p-0">
            <div className="flex flex-col md:flex-row gap-y-4 justify-between lg:items-center">
                {/* IMAGE BOX */}
                <div className="h-screen flex-1 banner relative flex justify-center items-center md:before:absolute md:before:top-0 md:before:right-0 md:before:w-full md:before:h-full md:before:bg-contain md:before:bg-no-repeat md:before:bg-right md:before:bg-[url('/img/banner.png')]">
                    {/* <img src="/img/profile.png" alt="" className="max-w-sm w-full z-[10]" /> */}
                    <Image
                        className="max-w-sm w-full z-[10]"
                        src="/img/profile.png"
                        alt=""
                        width={400}
                        height={400} />
                </div>
                {/* CONTENT */}
                <div className="relative md:px-16 md:order-first">
                    <h3 className='font-extrabold text-DeepNavy-blue'>HELLO</h3>
                    <h1
                        className="bg-gradient-to-r from-DeepNavy-blue via-blue-500 to-blue-700 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl"
                    >
                        I'm Hammad Shamir

                        <div className="flex gap-x-2">
                            a
                            <TypeWriter />
                        </div>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Welcome to my web developer portfolio! I'm Mitchell, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-left gap-4">
                        <a
                            className="block w-full rounded border border-DeepNavy-blue bg-DeepNavy-blue px-12 py-3 text-sm font-medium text-light-gray hover:bg-transparent hover:text-DeepNavy-blue focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#"
                        >
                            Hire Me
                        </a>

                        <a
                            className="block w-full rounded border border-DeepNavy-blue px-12 py-3 text-sm font-medium text-DeepNavy-blue hover:bg-DeepNavy-blue hover:text-light-gray focus:outline-none focus:ring active:DeepNavy-blue sm:w-auto"
                            href="#"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
