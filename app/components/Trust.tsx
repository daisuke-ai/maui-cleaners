import { Check, Shield, Clock, Users, Heart, Star, ArrowRight } from "lucide-react";

export default function Trust() {
    const benefits = [
        {
            icon: Shield,
            title: "Licensed & Insured",
            text: "Full coverage for your protection and peace of mind"
        },
        {
            icon: Users,
            title: "Professional Team",
            text: "Trained cleaning specialists who care about quality"
        },
        {
            icon: Check,
            title: "Clear Pricing",
            text: "Transparent quotes with no hidden fees or surprises"
        },
        {
            icon: Clock,
            title: "Reliable Service",
            text: "On-time arrival and fast, responsive communication"
        },
        {
            icon: Heart,
            title: "Local & Caring",
            text: "A Maui company that truly cares about our community"
        }
    ];

    return (
        <section className="relative bg-[#F5F0E6] py-24 px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEB3B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2d4df5]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#FFEB3B]/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/cleaners/team-member.jpg"
                                alt="Shari Company team member"
                                className="w-full aspect-[4/3] object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#2d4df5]/20 via-transparent to-[#FFEB3B]/10"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-[#FFEB3B] rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#2d4df5]/10 rounded-2xl -z-10"></div>

                        {/* Floating Testimonial Card */}
                        <div className="absolute -bottom-8 -right-4 md:right-8 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 max-w-xs">
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#FFEB3B] text-[#FFEB3B]" />
                                ))}
                            </div>
                            <p className="text-slate-700 text-sm italic mb-3">
                                "The best cleaning service on Maui. Professional, thorough, and always on time!"
                            </p>
                            <p className="text-xs text-slate-500 font-medium">- Satisfied Maui Customer</p>
                        </div>

                        {/* Stats Badge */}
                        <div className="absolute -top-6 left-6 bg-[#2d4df5] rounded-xl p-4 shadow-lg">
                            <div className="text-white text-center">
                                <span className="text-2xl font-bold block">100%</span>
                                <span className="text-xs opacity-90">Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <span className="text-[#2d4df5] font-semibold tracking-wide uppercase text-sm mb-4 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                            Why Choose <span className="text-[#2d4df5]">Shari Company?</span>
                        </h2>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                            <div className="w-2 h-2 bg-[#FFEB3B] rounded-full"></div>
                            <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                        </div>

                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            We're not just another cleaning service. We're your neighbors,
                            committed to making Maui homes and businesses shine.
                        </p>

                        {/* Benefits Cards */}
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md hover:border-[#2d4df5]/20 transition-all duration-300 flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFEB3B]/20 rounded-xl flex items-center justify-center group-hover:bg-[#FFEB3B] transition-colors duration-300">
                                        <benefit.icon className="w-6 h-6 text-[#2d4df5] group-hover:text-slate-900 transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{benefit.title}</h3>
                                        <p className="text-sm text-slate-600">{benefit.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button className="mt-10 bg-[#2d4df5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2d4df5]/90 transition-all duration-300 flex items-center gap-2 group shadow-lg">
                            Get Your Free Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
