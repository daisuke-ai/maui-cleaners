export default function Services() {
    const services = [
        {
            title: "Home Deep Cleaning",
            description: "Revitalize your living space with our thorough deep cleaning service, tackling every nook and cranny.",
            image: "/cleaners/service-home.png"
        },
        {
            title: "Office Cleaning Solutions",
            description: "Create a clean and productive workspace with our professional office cleaning services tailored.",
            image: "/cleaners/service-office.png"
        },
        {
            title: "Carpet Cleaning",
            description: "Breathe new life into your carpets and furniture with our specialized stain removal and fabric care.",
            image: "/cleaners/service-carpet.png"
        }
    ];

    return (
        <section className="bg-white pt-48 pb-24 px-8"> {/* pt-48 to account for the overlapping stats image */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-medium text-slate-900 text-center mb-16">Explore Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="rounded-3xl overflow-hidden mb-6 h-64 w-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
