import ProjectCard from "@/elements/ProjectCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const Projects = () => {
    return (
        <section className="bg-DeepNavy-blue mx-auto px-4 sm:px-6 lg:px-16 p-6  flex flex-col gap-y-6 ">
            <h2
                className="self-center bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
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
                <SwiperSlide className="shadow-lg shadow-light-gray"> <ProjectCard /> </SwiperSlide>
                <SwiperSlide className="shadow-lg shadow-light-gray"> <ProjectCard /> </SwiperSlide>
                <SwiperSlide className="shadow-lg shadow-light-gray"> <ProjectCard /> </SwiperSlide>
                <SwiperSlide className="shadow-lg shadow-light-gray"> <ProjectCard /> </SwiperSlide>
                <SwiperSlide className="shadow-lg shadow-light-gray"> <ProjectCard /> </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Projects
