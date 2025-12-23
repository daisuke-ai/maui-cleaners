import { MapPin } from "lucide-react";

export default function WhoWeAre() {
    const locations = [
        "Kahului", "Wailuku", "Kihei", "Lahaina",
        "Wailea", "Paia", "Makawao", "Upcountry"
    ];

    return (
        <section id="about" className="bg-white py-24 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#2d4df5] font-semibold tracking-wide uppercase text-sm mb-4 block">Who We Are</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-8">A Local Maui Cleaning Company You Can Trust</h2>

                        <div className="text-lg text-slate-600 leading-relaxed mb-10 space-y-4">
                            <p>
                                Shari Company LLC is a locally owned cleaning company serving all of Maui.
                                We work with homeowners, businesses, and contractors who want reliable, professional cleaning.
                            </p>
                            <p>
                                Our team is trained, respectful, and focused on the details.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-xl">
                            <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-[#2d4df5]" />
                                Serving All of Maui
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {locations.map((loc, index) => (
                                    <span key={index} className="text-slate-600 text-sm bg-white px-3 py-1.5 rounded-full border border-slate-200">
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Van Image */}
                    <div>
                        <img
                            src="/cleaners/shari-van.jpg"
                            alt="Shari Company Van"
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
