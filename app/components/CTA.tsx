import { Phone, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";

export default function CTA() {
    const benefits = [
        "Free, no-obligation quotes",
        "Same-week availability",
        "Flexible scheduling"
    ];

    return (
        <section id="contact" className="relative py-24 px-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&q=80"
                    alt="Clean bright space"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d4df5]/95 via-[#2d4df5]/90 to-[#1a2d8f]/95"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#FFEB3B]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        <span className="inline-block bg-[#FFEB3B]/20 text-[#FFEB3B] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            Get Started Today
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Ready for a<br />
                            <span className="text-[#FFEB3B]">Cleaner Space?</span>
                        </h2>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Get a free quote today. No pressure, no obligation.
                            Just honest pricing for quality cleaning services across Maui.
                        </p>

                        {/* Benefits List */}
                        <ul className="space-y-3 mb-10">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3 text-white/90">
                                    <CheckCircle className="w-5 h-5 text-[#FFEB3B] flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Response Time Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Clock className="w-4 h-4 text-[#FFEB3B]" />
                            <span className="text-sm text-white/90">Typically respond within 2 hours</span>
                        </div>
                    </div>

                    {/* Right - Contact Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Your Free Quote</h3>
                        <p className="text-slate-600 mb-8">Choose how you'd like to reach us</p>

                        {/* Contact Options */}
                        <div className="space-y-4 mb-8">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-[#2d4df5] hover:bg-[#2d4df5]/5 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-[#2d4df5] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block">Call Us</span>
                                    <span className="text-slate-500 text-sm">Quick answers to your questions</span>
                                </div>
                            </a>

                            <a
                                href="sms:+1234567890"
                                className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-[#2d4df5] hover:bg-[#2d4df5]/5 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-[#FFEB3B] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <MessageCircle className="w-6 h-6 text-slate-900" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block">Text Us</span>
                                    <span className="text-slate-500 text-sm">Send details at your convenience</span>
                                </div>
                            </a>

                            <a
                                href="mailto:contact@sharicompany.com"
                                className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-[#2d4df5] hover:bg-[#2d4df5]/5 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <Mail className="w-6 h-6 text-slate-700" />
                                </div>
                                <div>
                                    <span className="font-bold text-slate-900 block">Email Us</span>
                                    <span className="text-slate-500 text-sm">contact@sharicompany.com</span>
                                </div>
                            </a>
                        </div>

                        {/* Or Divider */}
                        <div className="relative mb-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 text-sm text-slate-400">or</span>
                            </div>
                        </div>

                        {/* Primary CTA Button */}
                        <button className="w-full bg-[#2d4df5] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2339d4] transition-colors shadow-lg shadow-[#2d4df5]/25">
                            Request a Quote Online
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
