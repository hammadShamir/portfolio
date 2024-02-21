import ProjectCard from "@/elements/ProjectCard"

const Projects = () => {
    return (
        <section className="bg-DeepNavy-blue mx-auto px-4 sm:px-6 lg:px-16 p-6  flex flex-col gap-y-6 ">
            <h2
                className="self-center bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
            >
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects
