import SocialLinks from "@/elements/SocialLinks"
import TypeWriter from "@/elements/TypeWriter"
import Image from "next/image"

const Banner = () => {
    return (
        <section className="bg-light-gray mx-auto  p-6 md:p-0">
            <div className="flex flex-col md:flex-row gap-y-4 justify-between lg:items-center">
                {/* IMAGE BOX */}
                <div className="h-screen flex-1 banner relative flex justify-center items-center md:before:absolute md:before:top-0 md:before:right-0 md:before:w-full md:before:h-full md:before:bg-cover md:before:bg-no-repeat md:before:bg-right md:before:bg-[url('/img/banner.png')]">
                    <Image
                        className="max-w-sm xl:max-w-md 2xl:max-w-xl w-full z-[10]"
                        src="/img/profile.png"
                        alt="Profile Image"
                        width={400}
                        height={400} />
                </div>
                {/* CONTENT */}
                <div className="relative flex-1 flex flex-col justify-center md:ps-10 xl:ps-16 md:order-first">
                    <h3 className='font-extrabold text-DeepNavy-blue'>HELLO</h3>
                    <h1
                        className="bg-gradient-to-r from-DeepNavy-blue via-blue-500 to-blue-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl xl:text-6xl 2xl:text-7xl"
                    >
                        I&apos;m Hammad Shamir
                    </h1>
                    <h3 className="flex gap-x-2 bg-gradient-to-r from-DeepNavy-blue via-blue-500 to-blue-700 bg-clip-text text-xl font-extrabold text-transparent sm:text-3xl xl:text-4xl 2xl:text-5xl">a <TypeWriter /></h3>

                    {/* <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Welcome to my web developer portfolio! I&apos;m Hammad Shamir, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I&apos;ve worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.
                    </p> */}
                    <SocialLinks />

                    <div className="mt-6 2xl:mt-10 flex flex-wrap justify-left gap-4">
                        <a
                            className="block w-full rounded border border-DeepNavy-blue bg-DeepNavy-blue px-12 py-3 text-sm font-medium text-light-gray hover:bg-transparent hover:text-DeepNavy-blue focus:outline-none focus:ring active:text-opacity-75 sm:w-auto text-center"
                            href="#"
                        >
                            Hire Me
                        </a>

                        <a
                            className="block w-full rounded border border-DeepNavy-blue px-12 py-3 text-sm font-medium text-DeepNavy-blue hover:bg-DeepNavy-blue hover:text-light-gray focus:outline-none focus:ring active:DeepNavy-blue sm:w-auto text-center"
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
