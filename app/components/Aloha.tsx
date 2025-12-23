import { Heart, Clock, Sparkles, Shield } from "lucide-react";

export default function Aloha() {
    const values = [
        {
            icon: Heart,
            title: "Respect & Care",
            description: "We treat your space like it's our own home."
        },
        {
            icon: Clock,
            title: "Always On Time",
            description: "Reliable scheduling you can count on."
        },
        {
            icon: Sparkles,
            title: "Quality Work",
            description: "We don't cut corners, we clean them."
        },
        {
            icon: Shield,
            title: "Fully Insured",
            description: "Peace of mind with every visit."
        }
    ];

    return (
        <section className="relative bg-[#F5F0E6] py-24 px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEB3B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2d4df5]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-[#2d4df5] font-semibold tracking-wide uppercase text-sm mb-4 block">
                            Our Promise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Built on the<br />
                            <span className="text-[#2d4df5]">Aloha Spirit</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            We treat every space with respect, care, and pride. It's not just about cleaning -
                            it's about leaving your home or business better than we found it.
                        </p>

                        {/* Quote Block */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <div className="flex gap-4">
                                <div className="w-1 bg-[#FFEB3B] rounded-full flex-shrink-0"></div>
                                <blockquote className="text-lg text-slate-700 font-medium italic">
                                    "Show up on time. Do the job right. Leave things better than we found them."
                                    <footer className="text-sm text-slate-500 mt-2 not-italic font-normal">
                                        - Our company philosophy
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Right - Values Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#2d4df5]/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-[#2d4df5]/10 rounded-xl flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-[#2d4df5]" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="mt-16 pt-12 border-t border-slate-200/60">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-slate-500">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FFEB3B]/20 rounded-full flex items-center justify-center">
                                <span className="text-lg font-bold text-slate-700">5+</span>
                            </div>
                            <span className="text-sm font-medium">Years in Business</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FFEB3B]/20 rounded-full flex items-center justify-center">
                                <span className="text-lg font-bold text-slate-700">100%</span>
                            </div>
                            <span className="text-sm font-medium">Satisfaction Guaranteed</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FFEB3B]/20 rounded-full flex items-center justify-center">
                                <span className="text-lg font-bold text-slate-700">Maui</span>
                            </div>
                            <span className="text-sm font-medium">Locally Owned</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
