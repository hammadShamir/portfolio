import { MdWeb } from "react-icons/md";
const ServiceCard = () => {
    return (
        <div className="relative bg-DeepNavy-blue text-light-gray p-6 rounded flex flex-col justify-center items-center gap-y-4 shadow-lg shadow-DeepNavy-blue before:absolute before:top-0 before:right-0 before:w-10 before:h-0 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group" >
            <i className="bg-light-gray text-DeepNavy-blue h-12 w-12 flex justify-center items-center rounded-full z-10 group-hover:text-light-gray font-bold"><MdWeb className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" /></i>
            <h3 className="text-xl font-bold z-10 group-hover:text-light-gray font-bold">Service Title</h3>
            <p className="text-center text-base z-10 group-hover:text-light-gray font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde tempore nihil inventore cum soluta perferendis veniam delectus ut</p>
        </div>
    )
}

export default ServiceCard
