import { Home, Building2, HardHat, ArrowRight, Star, Clock } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: Home,
            title: "Home Deep Cleaning",
            description: "Thorough cleaning for your living space. Kitchens, bathrooms, bedrooms, and common areas done right.",
            image: "/cleaners/efrain-cleaning.jpg",
            badge: "Most Popular",
            features: ["Kitchen & Bathrooms", "Bedrooms & Living Areas", "Floors & Surfaces"]
        },
        {
            icon: Building2,
            title: "Office Cleaning",
            description: "Keep your workspace clean and professional. Regular maintenance or one-time deep cleaning.",
            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
            badge: "Commercial",
            features: ["Workstations & Desks", "Common Areas", "Restroom Sanitation"]
        },
        {
            icon: HardHat,
            title: "Construction Cleanup",
            description: "Post-construction cleaning to get the space move-in ready. Dust, debris, and final detail work.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            badge: "Specialized",
            features: ["Debris Removal", "Dust & Surface Cleaning", "Final Detail Work"]
        }
    ];

    return (
        <section id="services" className="relative bg-white py-24 px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d4df5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFEB3B]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#2d4df5] font-semibold tracking-wide uppercase text-sm mb-4 block">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Explore Our <span className="text-[#2d4df5]">Cleaning Solutions</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        From residential deep cleans to commercial spaces and construction sites,
                        we have the expertise to handle any job.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                        <div className="w-2 h-2 bg-[#FFEB3B] rounded-full"></div>
                        <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#2d4df5]/20 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#FFEB3B]/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Icon Overlay */}
                                <div className="absolute bottom-4 right-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2d4df5] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-600">
                                            <div className="w-1.5 h-1.5 bg-[#2d4df5] rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-[#2d4df5] transition-colors duration-300 flex items-center justify-center gap-2 group/btn">
                                    Request Quote
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Info Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#F5F0E6] rounded-2xl p-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#FFEB3B]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Star className="w-6 h-6 text-[#2d4df5]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">Custom Cleaning Plans</h4>
                            <p className="text-slate-600 text-sm">Need something specific? We create tailored cleaning packages.</p>
                        </div>
                    </div>
                    <div className="bg-[#F5F0E6] rounded-2xl p-6 flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#FFEB3B]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-[#2d4df5]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-1">Same-Day Service Available</h4>
                            <p className="text-slate-600 text-sm">Need urgent cleaning? Call us for same-day availability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
