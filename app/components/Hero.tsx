import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Top Bar - Blue */}
            <div className="bg-[#2d4df5] text-white py-2 px-6 flex justify-between items-center text-sm font-medium z-20">
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>4296 Coplin Avenue, Phoenix</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>chat@clearmaster.pro</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[#2d4df5]" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <span>8:48:17pm</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="absolute top-10 left-0 right-0 z-20 flex justify-between items-center px-12 py-6 text-white bg-transparent">
                <div className="text-5xl font-bold tracking-tight">Best Cleaners in Maui</div>
                {/* Note: The logo text in the screenshot is actually part of the hero headline visually, but logically it's the logo. 
            However, looking closely at the screenshot, "Best Cleaners in Maui" is the H1. The Navbar seems to have "All Pages", "Company", etc.
            Let's adjust. width full container centered.
        */}
            </nav>

            {/* True Navbar Overlay */}
            <div className="absolute top-12 w-full z-20 flex justify-center">
                <div className="flex gap-8 text-white/90 font-medium text-lg">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-white">All Pages <span className="text-xs">▼</span></div>
                    <Link href="#" className="hover:text-white">Company</Link>
                    <Link href="#" className="hover:text-white">Reviews</Link>
                    <Link href="#" className="hover:text-white">Contact</Link>
                </div>
                <div className="absolute right-12 top-[-10px]">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Book An Appointment
                    </button>
                </div>
            </div>


            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/20 z-10"></div> {/* Subtle overlay for text readability */}
                <img
                    src="/cleaners/hero-bg.png"
                    alt="Cleaning Professional"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-12 max-w-2xl mt-20">
                <h1 className="text-7xl font-bold text-white leading-tight mb-8">
                    Best Cleaners in Maui
                </h1>

                <div className="max-w-xl">
                    <button className="bg-[#fde047] text-black px-8 py-4 rounded-lg font-bold text-lg mb-8 hover:bg-yellow-300 transition-colors">
                        Book An Appointment
                    </button>

                    <p className="text-white text-xl leading-relaxed mb-6 font-medium drop-shadow-md">
                        Experience the joy of a spotless home without lifting a finger. Our professional cleaning services are tailored to fit your needs.
                    </p>
                </div>
            </div>
        </div>
    );
}
