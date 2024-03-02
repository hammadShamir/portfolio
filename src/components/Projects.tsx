import ProjectCard from "@/elements/ProjectCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { projects } from "./Data";

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
                        <ProjectCard name={item.name} url={item.url} img={item.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Projects;
