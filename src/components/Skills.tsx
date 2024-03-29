import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { skills } from './Data';
const Skills = () => {
    return (
        <div id='skills' className='bg-DeepNavy-blue mx-auto px-4 sm:px-6 lg:px-16 p-8 '>
            <div className=''>
                <h2
                    className="self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl text-center"
                >
                    Skills
                </h2>
                <div className='relative mt-8'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true
                        }}
                        navigation={true}
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
                        modules={[Autoplay, Navigation]}
                        style={{ margin: "0px" }}
                    >
                        {
                            skills?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className='cursor-pointer'>
                                       <div key={index} className='w-52 h-52 mx-auto rounded-full p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                            <div className='bg-DeepNavy-blue h-full rounded-full flex flex-col gap-2 justify-center items-center text-light-gray'>
                                                <Image className='max-w-20' src={item.img} width={200} height={200} alt='React Icon' />
                                                <h3 className='text-2xl font-bold text-center'>{item.name}</h3>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Skills
