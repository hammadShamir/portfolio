import TypeWriter from "@/elements/TypeWriter"

const Banner = () => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-DeepNavy-blue">
            <div className="lg:flex justify-between lg:items-center">
                <div className="relative">
                    <h3 className='font-extrabold text-DeepNavy-blue'>HELLO</h3>
                    <h1
                        className="bg-gradient-to-r from-DeepNavy-blue via-blue-500 to-blue-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        I'm Hammad Shamir

                        <span className="sm:flex gap-x-4">
                            a
                            <TypeWriter />
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Welcome to my web developer portfolio! I'm Mitchell, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-left gap-4">
                        <a
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <img src="/img/profile.jpg" alt="" />
            </div>
        </section>
    )
}

export default Banner
