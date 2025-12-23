import Link from "next/link";
import { Mail, Phone, Shield, Star, Clock, CheckCircle } from "lucide-react";

export default function Hero() {
    const trustBadges = [
        { icon: Shield, text: "Licensed & Insured" },
        { icon: Star, text: "5-Star Service" },
        { icon: Clock, text: "Same-Day Available" }
    ];

    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Top Bar */}
            <div className="bg-[#2d4df5] text-white py-2 px-6 flex justify-between items-center text-sm font-medium z-20">
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-bold tracking-wide">SHARI COMPANY LLC</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>(808) 555-0123</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>contact@sharicompany.com</span>
                    </div>
                </div>
            </div>

            {/* Navigation Overlay */}
            <div className="absolute top-12 left-0 right-0 z-30 px-12 pt-6">
                <nav className="flex justify-between items-center">
                    <div className="w-52 md:w-64">
                        <img
                            src="/logo.png"
                            alt="Shari Company LLC"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="hidden md:flex items-center gap-10 text-white/90 font-medium text-lg">
                        <Link href="#services" className="hover:text-white transition-colors">Services</Link>
                        <Link href="#about" className="hover:text-white transition-colors">About</Link>
                        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>

                        <button className="bg-white text-slate-900 px-7 py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
                            Get a Free Quote
                        </button>
                    </div>
                </nav>
            </div>

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
                <img
                    src="/cleaners/hero-bg.png"
                    alt="Cleaning Professional"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFEB3B]/10 rounded-full blur-3xl z-5"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#2d4df5]/10 rounded-full blur-3xl z-5"></div>

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-12 max-w-5xl mt-20">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FFEB3B]/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 w-fit border border-[#FFEB3B]/30">
                    <div className="w-2 h-2 bg-[#FFEB3B] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">Trusted Maui Cleaning Professionals</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                    Professional Cleaning for
                    <span className="block">
                        Maui <span className="text-[#FFEB3B]">Homes & Businesses</span>
                    </span>
                </h1>

                <div className="max-w-2xl">
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                        House cleaning, office cleaning, and construction cleanup.
                        Local, licensed, and committed to quality work.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="bg-[#FFEB3B] text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Get a Free Quote
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call Now
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {trustBadges.map((badge, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#FFEB3B]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <badge.icon className="w-5 h-5 text-[#FFEB3B]" />
                                    </div>
                                    <span className="text-white font-medium">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2d4df5] via-[#FFEB3B] to-[#2d4df5] z-20"></div>
        </div>
    );
}
