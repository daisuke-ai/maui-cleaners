import Link from "next/link";
import { Mail } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Top Bar */}
            <div className="bg-[#2d4df5] text-white py-2 px-6 flex justify-between items-center text-sm font-medium z-20">
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-bold tracking-wide">SHARI COMPANY LLC</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
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

                        <button className="bg-white text-slate-900 px-7 py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors">
                            Get a Free Quote
                        </button>
                    </div>
                </nav>
            </div>


            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="/cleaners/hero-bg.png"
                    alt="Cleaning Professional"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-12 max-w-4xl mt-20">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Professional Cleaning for Maui Homes & Businesses
                </h1>

                <div className="max-w-2xl">
                    <p className="text-white text-xl leading-relaxed mb-10 font-medium opacity-90">
                        House cleaning, office cleaning, and construction cleanup. Local, licensed, and committed to quality work.
                    </p>

                    <button className="bg-[#FFEB3B] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                        Get a Free Quote
                    </button>

                    {/* Value Props */}
                    <div className="border-t border-white/20 pt-8 mt-12">
                        <div className="flex flex-col md:flex-row gap-8 text-white/90">
                            <div>
                                <h3 className="font-bold mb-1">Licensed & Insured</h3>
                                <p className="text-sm opacity-80">Full coverage for your peace of mind.</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Detail-Focused</h3>
                                <p className="text-sm opacity-80">We notice what others miss.</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Locally Owned</h3>
                                <p className="text-sm opacity-80">Serving all of Maui island.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
