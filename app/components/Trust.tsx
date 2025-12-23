import { Check, Shield, Clock, Users, Heart } from "lucide-react";

export default function Trust() {
    const benefits = [
        {
            icon: <Shield className="w-5 h-5" />,
            text: "Licensed & insured for your protection"
        },
        {
            icon: <Users className="w-5 h-5" />,
            text: "Professional, trained cleaning team"
        },
        {
            icon: <Check className="w-5 h-5" />,
            text: "Clear pricing with no hidden fees"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            text: "Reliable scheduling and fast communication"
        },
        {
            icon: <Heart className="w-5 h-5" />,
            text: "Local Maui company that cares"
        }
    ];

    return (
        <section className="bg-white py-24 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                            alt="Clean modern home interior"
                            className="rounded-2xl w-full aspect-[4/3] object-cover"
                        />
                    </div>

                    {/* Content Side */}
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Shari Company?</h2>
                        <p className="text-slate-600 text-lg mb-10">
                            We're not just another cleaning service. We're your neighbors, committed to making Maui homes and businesses shine.
                        </p>

                        <div className="space-y-5">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#FFEB3B] rounded-full flex items-center justify-center text-slate-900">
                                        {benefit.icon}
                                    </div>
                                    <span className="text-lg text-slate-700">{benefit.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
