import { Award, Sparkles, Calendar } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Award className="w-12 h-12" />,
            color: "text-amber-500",
            bgColor: "bg-amber-50",
            title: "Expert Cleaning",
            description: "From kitchens to bathrooms and living spaces, we pay attention to every detail that matters."
        },
        {
            icon: <Sparkles className="w-12 h-12" />,
            color: "text-emerald-500",
            bgColor: "bg-emerald-50",
            title: "Eco-Friendly Products",
            description: "We use environmentally friendly cleaning solutions that are safe for your family and pets."
        },
        {
            icon: <Calendar className="w-12 h-12" />,
            color: "text-rose-400",
            bgColor: "bg-rose-50",
            title: "Flexible Scheduling",
            description: "One-time deep cleans, regular maintenance, or move-out cleaning. We work around your schedule."
        }
    ];

    return (
        <section className="bg-[#F5F0E6] py-24 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className={`mb-6 p-5 rounded-2xl ${feature.bgColor} ${feature.color}`}>
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
