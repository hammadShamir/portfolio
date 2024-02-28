import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const Skills = () => {
    return (
        <div className='relative mx-auto px-4 sm:px-6 lg:px-16'>
            <div className='bg-DeepNavy-blue p-6 max-w-screen-lg w-full absolute left-1/2 top-[-50px] translate-x-[-50%] shadow-sm shadow-light-gray z-10 rounded-lg'>
                <h2
                    className="self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl text-center"
                >
                    Skills
                </h2>
                <div className='relative mt-6'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            576: {
                                // width: 576,
                                slidesPerView: 2,
                            },
                            900: {
                                // width: 576,
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Autoplay]}
                        style={{ margin: "0px" }}
                    >
                        <SwiperSlide className=''>
                            <div className='w-52 h-52 mx-auto rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <div className='bg-DeepNavy-blue h-full rounded-full flex flex-col gap-2 justify-center items-center text-light-gray'>
                                    <Image className='max-w-20' src={'/img/skills/react.png'} width={200} height={200} alt='React Icon' />
                                    <h3 className='text-2xl font-bold'>React</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='w-52 h-52 mx-auto rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <div className='bg-DeepNavy-blue h-full rounded-full flex flex-col gap-2 justify-center items-center text-light-gray'>
                                    <Image className='max-w-20' src={'/img/skills/react.png'} width={200} height={200} alt='React Icon' />
                                    <h3 className='text-2xl font-bold'>React</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='w-52 h-52 mx-auto rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <div className='bg-DeepNavy-blue h-full rounded-full flex flex-col gap-2 justify-center items-center text-light-gray'>
                                    <Image className='max-w-20' src={'/img/skills/react.png'} width={200} height={200} alt='React Icon' />
                                    <h3 className='text-2xl font-bold'>React</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='w-52 h-52 mx-auto rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <div className='bg-DeepNavy-blue h-full rounded-full flex flex-col gap-2 justify-center items-center text-light-gray'>
                                    <Image className='max-w-20' src={'/img/skills/react.png'} width={200} height={200} alt='React Icon' />
                                    <h3 className='text-2xl font-bold'>React</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='w-52 h-52 mx-auto rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <div className='bg-DeepNavy-blue h-full rounded-full flex flex-col gap-2 justify-center items-center text-light-gray'>
                                    <Image className='max-w-20' src={'/img/skills/react.png'} width={200} height={200} alt='React Icon' />
                                    <h3 className='text-2xl font-bold'>React</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='w-52 h-52 mx-auto rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <div className='bg-DeepNavy-blue h-full rounded-full flex flex-col gap-2 justify-center items-center text-light-gray'>
                                    <Image className='max-w-20' src={'/img/skills/react.png'} width={200} height={200} alt='React Icon' />
                                    <h3 className='text-2xl font-bold'>React</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Skills
