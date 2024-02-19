const ServiceCard = () => {
    return (
        <div className="card bg-DeepNavy-blue text-light-gray p-6 rounded flex flex-col justify-center items-center gap-y-4 shadow-md shadow-black before:absolute md:before:top-0 before:left-0 before:w-full before:h-full  before:bg-[red]">
            <i className="bg-light-gray text-DeepNavy-blue px-4 py-4 rounded-full">icon</i>
            <h3 className="text-xl font-bold">Service Title</h3>
            <p className="text-center text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde tempore nihil inventore cum soluta perferendis veniam delectus ut suscipit nesciunt doloribus corrupti excepturi laborum architecto modi, reprehenderit fugit accusamus cupiditate!</p>
        </div>
    )
}

export default ServiceCard
