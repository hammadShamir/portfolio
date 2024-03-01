import SocialLinks from "@/elements/SocialLinks"
import TypeWriter from "@/elements/TypeWriter"
import Image from "next/image"
import Link from "next/link"

const Banner = () => {
    return (
        <section className='min-h-screen mx-auto p-6 sm:p-0 sm:ps-6 lg:ps-16 flex flex-col md:flex-row gap-y-4 justify-between sm:items-center'>
            <div className="h-screen flex-1 banner relative flex justify-center items-center md:before:absolute md:before:top-0 md:before:right-0 md:before:w-full md:before:h-full md:before:bg-contain 2xl:before:bg-cover md:before:bg-no-repeat md:before:bg-right md:before:bg-[url('/img/banner.png')]">
                <Image
                    className="max-w-sm xl:max-w-md 2xl:max-w-xl w-full z-[10]"
                    src="/img/darkprofile.png"
                    alt="Profile Image"
                    width={400}
                    height={400} />
            </div>
            <div className="relative flex-1 flex flex-col md:order-first">
                <h3 className='font-extrabold text-DeepNavy-blue'>HELLO</h3>
                <h1
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl xl:text-6xl 2xl:text-7xl"
                >
                    I&apos;m Hammad Shamir
                </h1>

                <h3 className="flex gap-x-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-xl font-extrabold text-transparent sm:text-3xl xl:text-4xl 2xl:text-5xl">a <TypeWriter /></h3>

                <SocialLinks customStyle="mt-6 justify-left" />

                <div className="mt-6 2xl:mt-10 flex flex-wrap justify-left gap-4">
                    <Link href={'/about'}
                        className="relative block w-full rounded border border-DeepNavy-blue
                         bg-DeepNavy-blue px-12 py-3 text-sm font-medium text-light-gray focus:outline-none focus:ring active:text-opacity-75 sm:w-auto text-center
                        before:absolute before:top-0 before:right-0 before:w-0 before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 
                        before:rounded group
                        before:transition-all before:ease-in-out before:duration-500"
                    >
                        <span className="relative">
                            My Journey
                        </span>
                    </Link>

                    <Link href={'/HammadShamir.pdf'} download={true}
                        className="relative block w-full rounded border border-DeepNavy-blue
                         px-12 py-3 text-sm font-medium text-DeepNavy-blue hover:text-light-gray focus:outline-none focus:ring active:DeepNavy-blue sm:w-auto text-center
                        before:absolute before:top-0 before:left-0 before:w-0 before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 
                        before:rounded group
                        before:transition-all before:ease-in-out before:duration-500
                        before:rounded"
                    >
                        <span className="relative">
                            Download CV
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner
