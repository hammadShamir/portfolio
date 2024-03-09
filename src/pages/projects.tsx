import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { projects } from '@/components/Data';
import Link from 'next/link';
import Projects from '@/components/Projects';
const portfolio = () => {

    return (
        <section className='mx-auto'>
            <div className='bg-DeepNavy-blue flex flex-col md:flex-row gap-y-4 justify-between sm:items-center  p-6 sm:px-6 lg:p-16'>
                <div className="overflow-hidden flex-1 banner relative flex justify-center items-center">
                    <Swiper
                        effect={'cards'}
                        slidesPerView={1}
                        grabCursor={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true
                        }}
                        modules={[EffectCards, Autoplay]}
                        style={{ margin: "0px" }}
                        className='max-w-[270px] xl:max-w-xs  overflow-hidden flex-1'
                    >
                        {
                            projects?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg p-2'>
                                        <div className='relative bg-DeepNavy-blue rounded-lg flex justify-center items-center overflow-hidden cursor-pointer'>
                                            <Image
                                                className='h-80 w-80 hover:scale-150 transition-all ease-in-out duration-500 opacity-20'
                                                src={`/img/projects/${item.img}`}
                                                width={200}
                                                height={200}
                                                alt='Project Image'
                                            />
                                            <span className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-light-gray text-xl font-bold text-center'>{item.name}</span>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="relative flex-1 flex flex-col md:order-first">
                    <h1
                        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-xl font-extrabold text-transparent min-[321px]:text-3xl md:text-4xl xl:text-6xl 2xl:text-7xl"
                    >
                        Showcasing some of my standout projects.
                    </h1>
                </div>
            </div>
            <Projects />
        </section>
    )
}

export default portfolio
