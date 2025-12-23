import { MapPin } from "lucide-react";

export default function WhoWeAre() {
    const locations = [
        "Kahului", "Wailuku", "Kihei", "Lahaina",
        "Wailea", "Paia", "Makawao", "Upcountry & surrounding areas"
    ];

    return (
        <section className="bg-white py-20 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">A Local Maui Cleaning Company You Can Trust</h2>
                
                <div className="text-lg text-slate-600 leading-relaxed mb-12 space-y-4">
                    <p>
                        Shari Company LLC is a locally owned and operated cleaning company serving all of Maui. 
                        We work with homeowners, businesses, and contractors who want reliable, professional cleaning — without the stress.
                    </p>
                    <p>
                        Our team is trained, respectful, and detail-focused. We treat every space like it’s our own.
                    </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-semibold text-[#2d4df5] mb-6 flex items-center justify-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Proudly Serving All of Maui
                    </h3>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                        {locations.map((loc, index) => (
                            <span key={index} className="text-slate-700 font-medium bg-white px-4 py-2 rounded-full shadow-sm">
                                {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
