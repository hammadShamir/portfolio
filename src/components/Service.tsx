import ServiceCard from "@/elements/ServiceCard"

const Service = () => {
    return (
        <section id="about" className="min-h-screen bg-light-gray text-DeepNavy-blue mx-auto p-6 flex flex-col gap-y-6 items-center">
            <h2
                className="bg-gradient-to-r from-DeepNavy-blue via-blue-700 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent xl:text-6xl 2xl:text-7xl"
            >
                Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ServiceCard />
            </div>
        </section>
    )
}

export default Service
