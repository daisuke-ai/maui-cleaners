import { MapPin, CheckCircle, Users, Award, Heart } from "lucide-react";

export default function WhoWeAre() {
    const locations = [
        "Kahului", "Wailuku", "Kihei", "Lahaina",
        "Wailea", "Paia", "Makawao", "Upcountry"
    ];

    const values = [
        { icon: Users, text: "Family-Owned Business" },
        { icon: Award, text: "Professional Standards" },
        { icon: Heart, text: "Community Focused" }
    ];

    return (
        <section id="about" className="relative bg-white py-24 px-8 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#2d4df5]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFEB3B]/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#FFEB3B]/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-[#2d4df5] font-semibold tracking-wide uppercase text-sm mb-4 block">
                            Who We Are
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            A Local Maui <span className="text-[#2d4df5]">Cleaning Company</span> You Can Trust
                        </h2>

                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                            <div className="w-2 h-2 bg-[#FFEB3B] rounded-full"></div>
                            <div className="w-8 h-0.5 bg-[#FFEB3B]"></div>
                        </div>

                        <div className="text-lg text-slate-600 leading-relaxed mb-8 space-y-4">
                            <p>
                                Shari Company LLC is a locally owned cleaning company serving all of Maui.
                                We work with homeowners, businesses, and contractors who want reliable, professional cleaning.
                            </p>
                            <p>
                                Our team is trained, respectful, and focused on the details.
                            </p>
                        </div>

                        {/* Values Row */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-[#F5F0E6] px-4 py-2 rounded-full"
                                >
                                    <value.icon className="w-4 h-4 text-[#2d4df5]" />
                                    <span className="text-sm font-medium text-slate-700">{value.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Locations Card */}
                        <div className="bg-[#F5F0E6] rounded-2xl p-6 border border-slate-100">
                            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#2d4df5]/10 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[#2d4df5]" />
                                </div>
                                Serving All of Maui Island
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {locations.map((loc, index) => (
                                    <span
                                        key={index}
                                        className="bg-white text-slate-700 text-sm px-4 py-2 rounded-full border border-slate-200 hover:border-[#2d4df5]/30 hover:bg-[#2d4df5]/5 transition-all cursor-default"
                                    >
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#2d4df5]" />
                                <span className="text-sm text-slate-600 font-medium">Licensed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#2d4df5]" />
                                <span className="text-sm text-slate-600 font-medium">Insured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#2d4df5]" />
                                <span className="text-sm text-slate-600 font-medium">Bonded</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Van Image with Decorative Elements */}
                    <div className="relative">
                        {/* Decorative Frame */}
                        <div className="absolute -top-4 -left-4 w-full h-full bg-[#FFEB3B]/20 rounded-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#2d4df5]/20 rounded-2xl"></div>

                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/cleaners/shari-van.jpg"
                                alt="Shari Company Van"
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#FFEB3B] rounded-xl flex items-center justify-center">
                                    <span className="text-xl font-bold text-slate-900">5+</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Years</p>
                                    <p className="text-xs text-slate-500">Serving Maui</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge Right */}
                        <div className="absolute -top-6 right-6 bg-[#2d4df5] rounded-xl p-4 shadow-lg">
                            <div className="flex items-center gap-2 text-white">
                                <Award className="w-5 h-5" />
                                <span className="text-sm font-bold">Trusted Local Business</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
