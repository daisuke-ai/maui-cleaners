export default function Features() {
    const features = [
        {
            icon: "🧹", // You can replace with lucide icons later if preferred
            title: "Expert Cleaning",
            description: "From kitchens to bathrooms and living spaces, our detailed cleaning approach ensures every corner."
        },
        {
            icon: "✨",
            title: "Eco-Friendly Products",
            description: "We use environmentally friendly and non-toxic cleaning solutions, ensuring the safety of your family."
        },
        {
            icon: "🧺",
            title: "Flexible Scheduling",
            description: "Whether you need a one-time deep clean, weekly maintenance, or special event preparation."
        }
    ];

    return (
        <section className="bg-[#fbfcfa] py-24 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="mb-6 text-6xl">{feature.icon}</div>
                        {/* Note: In a real polish phase, I'd use the exact colorful illustrations from the screenshot or similar SVG assets. 
                 For now, emojis or Lucide icons are placeholders, but I will try to use Lucide with colors to match better if needed.
                 The screenshot has nice flat illustrations. I'll stick to a clean look. 
             */}
                        <h3 className="text-2xl font-medium text-slate-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-500 leading-relaxed max-w-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
