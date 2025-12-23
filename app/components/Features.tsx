import { Award, Sparkles, Calendar, CheckCircle, ArrowRight } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: Award,
            title: "Expert Cleaning",
            description: "From kitchens to bathrooms and living spaces, we pay attention to every detail that matters.",
            highlights: ["Deep cleaning expertise", "Trained professionals", "Quality guaranteed"]
        },
        {
            icon: Sparkles,
            title: "Eco-Friendly Products",
            description: "We use environmentally friendly cleaning solutions that are safe for your family and pets.",
            highlights: ["Non-toxic formulas", "Pet & child safe", "Island-conscious"]
        },
        {
            icon: Calendar,
            title: "Flexible Scheduling",
            description: "One-time deep cleans, regular maintenance, or move-out cleaning. We work around your schedule.",
            highlights: ["Same-day available", "Weekly/monthly plans", "Custom scheduling"]
        }
    ];

    return (
        <section className="relative bg-[#F5F0E6] py-24 px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#FFEB3B]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2d4df5]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FFEB3B]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#2d4df5] font-semibold tracking-wide uppercase text-sm mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        The <span className="text-[#2d4df5]">Shari Difference</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Professional cleaning services designed around your needs, delivered with aloha spirit.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                        <div className="w-2 h-2 bg-[#FFEB3B] rounded-full"></div>
                        <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#2d4df5]/20 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2d4df5] to-[#FFEB3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            {/* Icon */}
                            <div className="w-14 h-14 bg-[#2d4df5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2d4df5] transition-colors duration-300">
                                <feature.icon className="w-7 h-7 text-[#2d4df5] group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>

                            {/* Highlights */}
                            <ul className="space-y-2 mb-6">
                                {feature.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle className="w-4 h-4 text-[#2d4df5]" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Learn More Link */}
                            <button className="inline-flex items-center gap-2 text-[#2d4df5] font-semibold text-sm group-hover:gap-3 transition-all">
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Row */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FFEB3B]/20 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-[#2d4df5]" />
                        </div>
                        <span className="text-slate-600 font-medium">Satisfaction Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FFEB3B]/20 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-[#2d4df5]" />
                        </div>
                        <span className="text-slate-600 font-medium">Free Estimates</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FFEB3B]/20 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-[#2d4df5]" />
                        </div>
                        <span className="text-slate-600 font-medium">No Contracts Required</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
