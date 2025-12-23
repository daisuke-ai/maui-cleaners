import { CheckCircle2 } from "lucide-react";

export default function Trust() {
    const benefits = [
        "Licensed & insured - protect your home or business",
        "Professional cleaners you can trust",
        "Clear pricing, no surprises",
        "Fast communication & reliable service",
        "Local Maui company"
    ];

    return (
        <section className="bg-slate-50 py-24 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Shari Company LLC?</h2>
                <p className="text-slate-500 text-lg mb-12">Be sure to hire professionals and stay protected.</p>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 max-w-2xl mx-auto text-left">
                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <CheckCircle2 className="w-6 h-6 text-[#2d4df5] flex-shrink-0" />
                                <span className="text-lg font-medium text-slate-800">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
