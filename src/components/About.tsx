import Image from "next/image"

const About = () => {
    return (
        <section className='min-h-screen bg-DeepNavy-blue mx-auto p-6 sm:p-0 sm:pe-6 lg:pe-16 flex flex-col md:flex-row gap-y-4 justify-between sm:items-center'>
            {/* IMAGE BOX */}
            <div className="h-screen flex-1 relative flex justify-center items-center md:before:absolute md:before:top-0 md:before:left-0 md:before:w-full md:before:h-full md:before:bg-contain 2xl:before:bg-cover md:before:bg-no-repeat md:before:bg-left md:before:bg-[url('/img/lightBanner.png')]">
                <Image
                    className="max-w-sm xl:max-w-md 2xl:max-w-xl w-full z-[10]"
                    src="/img/lightprofile.png"
                    alt="Profile Image"
                    width={400}
                    height={400} />
            </div>
            {/* CONTENT */}
            <div className="relative flex-1 flex flex-col">
                <h2
                    className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl xl:text-6xl 2xl:text-7xl"
                >
                    About Me
                </h2>
                <p className="mt-4 max-w-xl sm:text-xl/relaxed">
                    Welcome to my web developer portfolio! I&apos;m Hammad Shamir, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I&apos;ve worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.
                </p>
                <div className="mt-6 2xl:mt-10 flex flex-wrap justify-left gap-4">
                    <a
                        className="relative block w-full rounded border border-light-gray bg-light-gray px-12 py-3 text-sm font-medium text-DeepNavy-blue  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto text-center
                        before:absolute before:top-0 before:left-0 before:w-full before:h-2 hover:before:h-full before:bg-gradient-to-r before:from-blue-500 before:via-blue-700 before:to-blue-900 
                        before:content group
                        before:transition-all before:ease-in-out before:duration-500"
                        href="#"
                    >
                        <span className="relative group-hover:text-light-gray font-bold">
                            My Journey
                        </span>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default About
