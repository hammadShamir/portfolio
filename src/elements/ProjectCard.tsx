import Image from "next/image"

const ProjectCard = () => {
    return (
        <div className={`relative border-2 p-6 rounded min-h-80 flex flex-col justify-center items-center gap-y-4 before:rounded-br-lg before:opacity-60 before:absolute before:top-0 before:left-0 before:w-0 before:h-0 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-blue-500 before:via-blue-700 before:to-blue-900 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group  before:z-20 overflow-hidden `}>
            <Image
                className="absolute left-0 top-0 h-full z-10 group-hover:scale-150 transition-all ease-in-out duration-500"
                src="/img/projects/hostelow.png"
                alt="Profile Image"
                width={400}
                height={400} />
            <h3 className="relative opacity-0 group-hover:opacity-100 delay-100 transition-all ease-in-out duration-500 text-3xl font-bold text-light-gray z-20">Analog Mutations</h3>
            <button className="relative opacity-0 group-hover:opacity-100 delay-100 transition-all ease-in-out duration-500 border-2 border-light-gray text-light-gray rounded-lg py-2 px-4 drop-shadow-2xl z-20">Read More</button>
        </div>
    )
}

export default ProjectCard
