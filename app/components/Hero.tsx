import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Top Bar - Blue */}
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

            {/* Navigation */}
            <nav className="absolute top-10 left-0 right-0 z-20 flex justify-between items-center px-12 py-6 text-white bg-transparent">
                <div className="text-3xl font-bold tracking-tight">Shari Company LLC</div>
            </nav>

            {/* True Navbar Overlay - Simplified */}
            <div className="absolute top-12 w-full z-20 flex justify-end px-12">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get a Free Quote
                </button>
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
                <h1 className="text-6xl font-bold text-white leading-tight mb-6">
                    A Cleaner Home or Office - Without the Hassle
                </h1>

                <div className="max-w-2xl">
                    <p className="text-white text-xl leading-relaxed mb-10 font-medium drop-shadow-md opacity-90">
                        We handle the cleaning so you don’t have to. Professional house, office, and construction cleaning across Maui — done right, every time.
                    </p>

                    <button className="bg-[#fde047] text-black px-8 py-4 rounded-lg font-bold text-lg mb-12 hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20">
                        Get a Free Quote
                        <span className="block text-xs font-normal mt-1 opacity-80">Fast response. No pressure.</span>
                    </button>

                    {/* Support Line */}
                    <div className="border-t border-white/20 pt-8 mt-8">
                        <div className="flex flex-col md:flex-row gap-8 text-white/90">
                            <div>
                                <h3 className="font-bold mb-1">Reliable</h3>
                                <p className="text-sm opacity-80">We show up.</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Thorough</h3>
                                <p className="text-sm opacity-80">We clean thoroughly.</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Respectful</h3>
                                <p className="text-sm opacity-80">We respect your space.</p>
                            </div>
                            <div className="md:ml-auto text-sm opacity-80 max-w-xs text-right hidden md:block">
                                Licensed, insured, and trusted by Maui homeowners.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
