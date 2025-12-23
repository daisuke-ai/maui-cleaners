export default function Services() {
    const services = [
        {
            title: "Home Deep Cleaning",
            description: "Thorough cleaning for your living space. Kitchens, bathrooms, bedrooms, and common areas done right.",
            image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
        },
        {
            title: "Office Cleaning",
            description: "Keep your workspace clean and professional. Regular maintenance or one-time deep cleaning.",
            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
        },
        {
            title: "Construction Cleanup",
            description: "Post-construction cleaning to get the space move-in ready. Dust, debris, and final detail work.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        }
    ];

    return (
        <section id="services" className="bg-white py-24 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900">Explore Our Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index}>
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl mb-6">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
