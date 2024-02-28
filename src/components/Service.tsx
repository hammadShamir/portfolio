import ServiceCard from "@/elements/ServiceCard"

const Service = () => {
    return (
        <section className='bg-DeepNavy-blue mx-auto px-4 sm:px-6 lg:px-16 p-8 flex flex-col gap-y-8 items-center'>
            <h2
                className="mt-60 bg-gradient-to-r from-DeepNavy-blue via-blue-500 to-blue-700 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
            >
                Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </section>
    )
}

export default Service
