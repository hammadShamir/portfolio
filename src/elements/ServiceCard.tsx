import { MdWeb } from "react-icons/md";
const ServiceCard = () => {
    return (
        <div className="relative bg-DeepNavy-blue text-light-gray p-6 rounded flex flex-col justify-center items-center gap-y-4 shadow-lg shadow-DeepNavy-blue before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 hover:before:h-full before:bg-gradient-to-r before:from-blue-500 before:via-blue-700 before:to-blue-900 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group" >
            <i className="bg-light-gray text-DeepNavy-blue h-12 w-12 flex justify-center items-center rounded-full z-10 group-hover:text-light-gray font-bold"><MdWeb className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" /></i>
            <h3 className="text-xl font-bold z-10 group-hover:text-light-gray font-bold">Service Title</h3>
            <p className="text-center text-base z-10 group-hover:text-light-gray font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde tempore nihil inventore cum soluta perferendis veniam delectus ut</p>
        </div>
    )
}

export default ServiceCard
