import { Phone } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-[#2d4df5] py-24 px-8 text-center text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-6">Ready for a Cleaner Space?</h2>
                <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium">
                    Tell us what you need. We’ll handle the rest.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <button className="bg-white text-[#2d4df5] px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-lg">
                        Get a Free Quote
                    </button>
                    <div className="flex items-center gap-2 font-bold text-lg opacity-90 hover:opacity-100 cursor-pointer">
                        <Phone className="w-5 h-5" />
                        <span>Call or Text Today</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
