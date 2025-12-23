import { Home, Building2, Hammer } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "House Cleaning",
            description: "Your home stays clean, healthy, and peaceful - without you lifting a finger.",
            features: ["Routine & deep cleaning", "Move-in / move-out", "Attention to detail", "Safe for families & homes"],
            icon: <Home className="w-8 h-8 text-[#2d4df5]" />,
            image: "/cleaners/service-home.png"
        },
        {
            title: "Office & Commercial Cleaning",
            description: "A clean workspace that looks professional and feels good to work in.",
            features: ["Offices & retail spaces", "Reliable scheduling", "Consistent results", "Professional standards"],
            icon: <Building2 className="w-8 h-8 text-[#2d4df5]" />,
            image: "/cleaners/service-office.png"
        },
        {
            title: "Construction Cleaning",
            description: "We take care of the mess so the job looks finished.",
            features: ["Post-construction & renovation", "Dust & debris removal", "Final detail before handover", "Scheduled separately"],
            icon: <Hammer className="w-8 h-8 text-[#2d4df5]" />,
            image: "/cleaners/service-carpet.png" // Reusing carpet image as placeholder for construction if needed, or keeping it generic
        }
    ];

    return (
        <section className="bg-white py-24 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#2d4df5] font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
                    <h2 className="text-5xl font-medium text-slate-900">One Team. Three Services. Done Professionally.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group cursor-pointer bg-slate-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="h-48 w-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-8">
                                <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                                            <span className="text-blue-500 mt-1">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
