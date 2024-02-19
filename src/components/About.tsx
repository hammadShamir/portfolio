import Image from "next/image"
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-DeepNavy-blue text-light-gray mx-auto p-6 md:p-0">
      <div className="mx-auto flex flex-col md:flex-row gap-y-4 justify-between lg:items-center">
        {/* IMAGE BOX */}
        <div className="h-screen flex-1 relative flex justify-center md:justify-left items-center">
          <Image
            className="max-w-sm xl:max-w-md 2xl:max-w-xl w-full z-[10]"
            src="/img/profile.png"
            alt="Profile Image"
            width={400}
            height={400} />
        </div>
        {/* CONTENT */}
        <div className="relative flex-1 flex flex-col justify-center">
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
              className="block w-full rounded border border-light-gray bg-light-gray px-12 py-3 text-sm font-medium text-DeepNavy-blue hover:bg-transparent hover:text-light-gray focus:outline-none focus:ring active:text-opacity-75 sm:w-auto text-center"
              href="#"
            >
              My Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
