import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { projects } from "./Data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <section className="bg-DeepNavy-blue mx-auto px-4 sm:px-6 lg:px-16 p-8  flex flex-col gap-y-8 ">
            <h2
                className="self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
            >
                Projects
            </h2>
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
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay]}
                style={{ margin: "0px" }}
            >
                {projects?.map((item, index) => (
                    <SwiperSlide key={index} className="shadow-lg shadow-light-gray">
                        <div className={`relative border-2 p-6 rounded min-h-80 flex flex-col justify-center items-center gap-y-4 before:rounded-br-lg before:opacity-60 before:absolute before:top-0 before:left-0 before:w-10 before:h-10 hover:before:h-full hover:before:w-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 cursor-pointer before:transition-all before:ease-in-out before:duration-500 group  before:z-20 overflow-hidden`}>
                            <Image
                                className="absolute left-0 top-0 h-full z-10 group-hover:scale-150 transition-all ease-in-out duration-500 w-full"
                                src={`/img/projects/${item.img}`}
                                alt="Profile Image"
                                width={400}
                                height={400} />
                            <h3 className="relative opacity-0 group-hover:opacity-100 delay-100 transition-all ease-in-out duration-500 text-3xl font-bold text-DeepNavy-blue z-20 [text-shadow:_0_1px_0_var(--tw-shadow-color)] text-center">{item.name}</h3>
                            <Link href={item.url} className="relative opacity-0 group-hover:opacity-100 delay-100 transition-all ease-in-out duration-500 border-2 border-DeepNavy-blue text-DeepNavy-blue rounded-lg py-2 px-4 drop-shadow-2xl z-20 [text-shadow:_0_1px_0_var(--tw-shadow-color)] font-bold">Go Live</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Projects;
