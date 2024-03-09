import { projects } from "./Data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <section>
            {
                projects?.map((item, index) => {
                    return (
                        <div key={index} className={`mx-auto px-4 sm:px-6 lg:px-16 p-8 flex flex-col md:flex-row gap-y-4 text-DeepNavy-blue  ${index % 2 != 0 && "bg-DeepNavy-blue text-light-gray"}`}>
                            <div className='flex-1 flex flex-col justify-center'>
                                <div className='mx-auto space-y-4 px-4 md:px-0'>
                                    <h3 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl">{item.name}</h3>
                                    <p className="md:max-w-md">{item.desc}</p>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <button className={`relative max-w-full md:max-w-40 w-full h-10 rounded-md before:w-0 hover:before:w-full before:h-full before:absolute before:left-0 before:top-0 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 before:rounded-md ${index % 2 != 0 ? "bg-light-gray text-DeepNavy-blue" : "bg-DeepNavy-blue text-light-gray"}`}> <span className="relative"> Go Live</span></button>
                                        <button className={`relative max-w-full md:max-w-40 w-full h-10 rounded-md before:w-0 hover:before:w-full before:h-full before:absolute before:left-0 before:top-0 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 before:rounded-md border ${index % 2 != 0 ? "border-light-gray text-light-gray" : "border-DeepNavy-blue  text-DeepNavy-blue"}`}> <span className="relative"> Source Code</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex-1 flex justify-center items-center ${index % 2 === 0 && "md:order-first"}`}>
                                <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg p-2'>
                                    <div className='relative bg-DeepNavy-blue rounded-lg flex justify-center items-center overflow-hidden cursor-pointer'>
                                        <Image
                                            className='h-80 w-80 hover:scale-150 transition-all ease-in-out duration-500 opacity-30'
                                            src={`/img/projects/${item.img}`}
                                            width={200}
                                            height={200}
                                            alt='Project Image'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>

    )
}

export default Projects;
