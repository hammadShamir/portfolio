import Image from "next/image"
import Link from "next/link"
interface projectData {
    name: string,
    url: string,
    img: string
}
const ProjectCard: React.FC<projectData> = ({ name, url, img }) => {
    return (
        <div className={`relative border-2 p-6 rounded min-h-80 flex flex-col justify-center items-center gap-y-4 before:rounded-br-lg before:opacity-60 before:absolute before:top-0 before:left-0 before:w-10 before:h-10 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group  before:z-20 overflow-hidden`}>
            <Image
                className="absolute left-0 top-0 h-full z-10 group-hover:scale-150 transition-all ease-in-out duration-500 w-full"
                src={`/img/projects/${img}`}
                alt="Profile Image"
                width={400}
                height={400} />
            <h3 className="relative opacity-0 group-hover:opacity-100 delay-100 transition-all ease-in-out duration-500 text-3xl font-bold text-DeepNavy-blue z-20 [text-shadow:_0_1px_0_var(--tw-shadow-color)] text-center">{name}</h3>
            <Link href={url} className="relative opacity-0 group-hover:opacity-100 delay-100 transition-all ease-in-out duration-500 border-2 border-DeepNavy-blue text-DeepNavy-blue rounded-lg py-2 px-4 drop-shadow-2xl z-20 [text-shadow:_0_1px_0_var(--tw-shadow-color)] font-bold">Go Live</Link>
        </div>
    )
}

export default ProjectCard
