import { MdWeb } from "react-icons/md";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
const Service = () => {
    return (
        <section id="service" className='bg-light-gray mx-auto px-4 sm:px-6 lg:px-16 p-8 flex flex-col gap-y-8 items-center'>
            <h2
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
            >
                Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div className="relative bg-DeepNavy-blue text-light-gray p-6 rounded flex flex-col justify-center items-center gap-y-4 shadow-lg shadow-DeepNavy-blue before:absolute before:top-0 before:right-0 before:w-10 before:h-0 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group" >
                    <i className="bg-light-gray text-DeepNavy-blue h-12 w-12 flex justify-center items-center rounded-full z-10 group-hover:text-light-gray font-bold"><MdWeb className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" /></i>
                    <h3 className="text-xl font-bold z-10 group-hover:text-light-gray font-bold text-center">Custom Website Development</h3>
                    <p className="text-center text-base z-10 group-hover:text-light-gray font-bold">Crafting unique websites with a focus on responsive design and user-centric experiences.</p>
                </div>
                <div className="relative bg-DeepNavy-blue text-light-gray p-6 rounded flex flex-col justify-center items-center gap-y-4 shadow-lg shadow-DeepNavy-blue before:absolute before:top-0 before:right-0 before:w-10 before:h-0 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group" >
                    <i className="bg-light-gray text-DeepNavy-blue h-12 w-12 flex justify-center items-center rounded-full z-10 group-hover:text-light-gray font-bold"><MdAddBusiness className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" /></i>
                    <h3 className="text-xl font-bold z-10 group-hover:text-light-gray font-bold text-center">E-commerce & Business Platform</h3>
                    <p className="text-center text-base z-10 group-hover:text-light-gray font-bold">Building secure and feature-rich e-commerce platforms and robust business platforms.</p>
                </div>
                <div className="relative bg-DeepNavy-blue text-light-gray p-6 rounded flex flex-col justify-center items-center gap-y-4 shadow-lg shadow-DeepNavy-blue before:absolute before:top-0 before:right-0 before:w-10 before:h-0 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group" >
                    <i className="bg-light-gray text-DeepNavy-blue h-12 w-12 flex justify-center items-center rounded-full z-10 group-hover:text-light-gray font-bold"><SiWebpack className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" /></i>
                    <h3 className="text-xl font-bold z-10 group-hover:text-light-gray font-bold text-center">Content Management Systems (CMS)</h3>
                    <p className="text-center text-base z-10 group-hover:text-light-gray font-bold">Simplifying content management through user-friendly custom CMS solutions.</p>
                </div>
                <div className="relative bg-DeepNavy-blue text-light-gray p-2 rounded flex flex-col justify-center items-center gap-y-4 shadow-lg shadow-DeepNavy-blue before:absolute before:top-0 before:right-0 before:w-10 before:h-0 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group" >
                    <i className="bg-light-gray text-DeepNavy-blue h-12 w-12 flex justify-center items-center rounded-full z-10 group-hover:text-light-gray font-bold"><BsDatabaseFillCheck className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" /></i>
                    <h3 className="text-xl font-bold z-10 group-hover:text-light-gray font-bold text-center">API Development & Database Design</h3>
                    <p className="text-center text-base z-10 group-hover:text-light-gray font-bold">Optimizing applications with robust API development and efficient database design.</p>
                </div>
            </div>
        </section>
    )
}

export default Service
