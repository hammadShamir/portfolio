import React from 'react'
interface card {
    date: string,
    title: string,
    para: string,
    theme: boolean
}
const JourneyCard: React.FC<card> = ({ date, title, para, theme}) => {
    return (
        <div className='relative p-6 pe-0 before:w-4 before:h-4 before:rounded-full before:bg-DeepNavy-blue before:absolute before:left-0 before:top-0 before:shadow-lg before:shadow-DeepNavy-blue after:w-1 after:h-full after:bg-DeepNavy-blue after:absolute after:left-1.5 after:top-1 after:shadow-lg after:shadow-DeepNavy-blue'>
            <div className='relative flex flex-col gap-y-2 shadow-md shadow-DeepNavy-blue p-6 text-DeepNavy-blue rounded-md hover:text-light-gray hover:[text-shadow:_0_1px_0_var(--tw-shadow-color)]
                before:absolute before:top-0 before:left-0 before:w-2 before:h-full hover:before:w-full before:bg-gradient-to-r before:from-blue-500 before:via-blue-700 before:to-blue-900 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group'>
                <span className='relative text-base'>{date}</span>
                <h3 className='relative font-bold text-2xl'>{title}</h3>
                <p className='relative'>{para}</p>
            </div>
        </div>
    )
}

export default JourneyCard
