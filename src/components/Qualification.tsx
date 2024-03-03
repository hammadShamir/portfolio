import React from 'react'
import { education, experiences } from './Data'

const Education = () => {
    return (
        <section className='bg-light-gray mx-auto px-4 py-8 sm:px-6 lg:px-16 flex flex-col md:flex-row gap-x-6 gap-y-12'>
            <div className='relative flex-1'>
                <h2
                    className="ms-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent"
                >
                    Education
                </h2>
                <div className='relative mt-4'>
                    {
                        education?.map((item, index) => {
                            return (
                                <div className='relative p-6 pe-0 before:w-4 before:h-4 before:rounded-full before:bg-DeepNavy-blue before:absolute before:left-0 before:top-0 before:shadow-lg before:shadow-DeepNavy-blue after:w-1 after:h-full after:bg-DeepNavy-blue after:absolute after:left-1.5 after:top-1 after:shadow-lg after:shadow-DeepNavy-blue'>
                                    <div className='relative flex flex-col gap-y-2 shadow-md shadow-DeepNavy-blue p-6 text-DeepNavy-blue rounded-md hover:text-light-gray hover:[text-shadow:_0_1px_0_var(--tw-shadow-color)]
                    before:absolute before:top-0 before:left-0 before:w-2 before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group'>
                                        <div className='flex justify-between'>
                                            <span className='text-sm sm:text-base relative'>{item.designation}</span>
                                            <span className='text-sm sm:text-base relative'>{item.date}</span>
                                        </div>
                                        <h3 className='font-bold text-xl md:text-2xl relative'>{item.title}</h3>
                                        <p className='relative text-sm md:text-base'>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='relative flex-1'>
                <h2
                    className="ms-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent"
                >
                    Experience
                </h2>
                <div className='relative mt-4'>
                    {
                        experiences?.map((item, index) => {
                            return (
                                <div className='relative p-6 pe-0 before:w-4 before:h-4 before:rounded-full before:bg-DeepNavy-blue before:absolute before:left-0 before:top-0 before:shadow-lg after:w-1 after:h-full after:bg-DeepNavy-blue after:absolute after:left-1.5 after:top-1 after:shadow-lg'>
                                    <div className='md:max-h-80 h-full relative bg-DeepNavy-blue flex flex-col gap-y-2 shadow-lg shadow-DeepNavy-blue p-6 text-light-gray rounded-md hover:text-light-gray hover:[text-shadow:_0_1px_0_var(--tw-shadow-color)]
                before:absolute before:top-0 before:right-0 before:w-2 before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group'>
                                        <div className='flex justify-between '>
                                            <span className='text-sm sm:text-base relative'>{item.designation}</span>
                                            <span className='text-sm sm:text-base relative'>{item.date}</span>
                                        </div>
                                        <h3 className='font-bold text-xl md:text-2xl relative'>{item.title}</h3>
                                        <p className='relative text-sm md:text-base'>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Education
