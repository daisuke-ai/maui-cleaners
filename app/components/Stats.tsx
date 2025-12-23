import { Award, ThumbsUp, Leaf, Clock, ArrowRight } from "lucide-react";

export default function Stats() {
    const stats = [
        {
            icon: Award,
            value: "5+",
            label: "Years of Service",
            description: "Serving Maui with reliable, professional cleaning"
        },
        {
            icon: ThumbsUp,
            value: "100%",
            label: "Satisfaction Focus",
            description: "We don't leave until the job is done right"
        },
        {
            icon: Leaf,
            value: "Eco",
            label: "Friendly Products",
            description: "Safe solutions for your family and our island"
        },
        {
            icon: Clock,
            value: "24hr",
            label: "Response Time",
            description: "Quick quotes and flexible scheduling"
        }
    ];

    return (
        <section className="relative bg-slate-900 py-24 px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFEB3B]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2d4df5]/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

            {/* Decorative Lines */}
            <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-[#FFEB3B]/0 via-[#FFEB3B]/20 to-[#FFEB3B]/0"></div>
            <div className="absolute bottom-0 right-1/3 w-px h-32 bg-gradient-to-t from-[#FFEB3B]/0 via-[#FFEB3B]/20 to-[#FFEB3B]/0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#FFEB3B] font-semibold tracking-wide uppercase text-sm mb-4 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Numbers That <span className="text-[#FFEB3B]">Speak</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                        <div className="w-2 h-2 bg-[#FFEB3B] rounded-full"></div>
                        <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#FFEB3B]/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-[#FFEB3B]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFEB3B]/20 transition-colors">
                                <stat.icon className="w-7 h-7 text-[#FFEB3B]" />
                            </div>
                            <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</h3>
                            <p className="text-lg font-semibold text-[#FFEB3B] mb-2">{stat.label}</p>
                            <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Bar */}
                <div className="mt-16 bg-gradient-to-r from-[#2d4df5] to-[#2d4df5]/80 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Ready for a Cleaner Space?</h3>
                            <p className="text-white/80">Get your free, no-obligation quote today</p>
                        </div>
                    </div>
                    <button className="bg-[#FFEB3B] text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 flex items-center gap-2 group shadow-lg">
                        Get Started
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
