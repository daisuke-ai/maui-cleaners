import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ArrowRight, Sparkles } from "lucide-react";

export default function Footer() {
    const services = [
        "Home Deep Cleaning",
        "Office & Commercial",
        "Construction Cleanup",
        "Move-In / Move-Out",
        "Regular Maintenance",
        "One-Time Deep Clean"
    ];

    const areas = [
        "Kahului", "Wailuku", "Kihei", "Lahaina",
        "Wailea", "Paia", "Makawao", "Haiku"
    ];

    return (
        <footer className="bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2d4df5] via-[#FFEB3B] to-[#2d4df5]"></div>

            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-[#2d4df5] rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Shari Company</h3>
                                <span className="text-xs text-slate-400">LLC</span>
                            </div>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Professional cleaning services for homes, offices, and construction sites.
                            Proudly serving all of Maui island.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-[#2d4df5] rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-[#2d4df5] rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#FFEB3B]"></span>
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#FFEB3B]"></span>
                            Service Areas
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {areas.map((area, index) => (
                                <span key={index} className="text-slate-400 text-sm py-1">
                                    {area}
                                </span>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-[#2d4df5]" />
                            <span className="text-slate-300">All of Maui, Hawaii</span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-[#FFEB3B]"></span>
                            Get In Touch
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:contact@sharicompany.com"
                                className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                            >
                                <div className="w-10 h-10 bg-slate-800 group-hover:bg-[#2d4df5] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="text-white text-sm font-medium block">Email</span>
                                    <span className="text-sm">contact@sharicompany.com</span>
                                </div>
                            </a>

                            <a
                                href="tel:+1234567890"
                                className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                            >
                                <div className="w-10 h-10 bg-slate-800 group-hover:bg-[#2d4df5] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="text-white text-sm font-medium block">Phone</span>
                                    <span className="text-sm">Call or Text for Quote</span>
                                </div>
                            </a>

                            <div className="flex items-start gap-3 text-slate-400">
                                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="text-white text-sm font-medium block">Hours</span>
                                    <span className="text-sm">Mon - Sat: 8am - 6pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter / CTA Banner */}
            <div className="border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-8 py-8">
                    <div className="bg-gradient-to-r from-[#2d4df5]/20 to-[#2d4df5]/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h5 className="text-lg font-semibold mb-1">Ready to get started?</h5>
                            <p className="text-slate-400">Get your free quote today - no strings attached.</p>
                        </div>
                        <button className="bg-[#FFEB3B] text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap">
                            Get a Free Quote
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            &copy; {new Date().getFullYear()} Shari Company LLC. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Licensed & Insured
                            </span>
                            <span>Maui, Hawaii</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
