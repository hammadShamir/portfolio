import { service } from "./Data";

const Service = () => {
    return (
        <section id="service" className='bg-light-gray mx-auto px-4 sm:px-6 lg:px-16 p-8 flex flex-col gap-y-8 items-center'>
            <h2
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
            >
                Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    service?.map((item, index) => (
                        <div key={index} className="relative bg-DeepNavy-blue text-light-gray p-6 rounded flex flex-col justify-center items-center gap-y-4 shadow-lg shadow-DeepNavy-blue before:absolute before:top-0 before:right-0 before:w-10 before:h-0 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group" >
                            <i className="bg-light-gray text-DeepNavy-blue h-12 w-12 flex justify-center items-center rounded-full z-10 group-hover:text-light-gray font-bold">{item.icon}</i>
                            <h3 className="text-xl font-bold z-10 group-hover:text-light-gray font-bold text-center">{item.title}</h3>
                            <p className="text-center text-base z-10 group-hover:text-light-gray font-bold">{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Service;
