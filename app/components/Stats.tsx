export default function Stats() {
    return (
        <section>
            {/* Yellow Stats Bar */}
            <div className="bg-[#FFEB3B] py-16">
                <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-6xl font-bold text-slate-900 mb-3">5+</h3>
                        <p className="text-lg font-semibold text-slate-900 mb-2">Years of Service</p>
                        <p className="text-slate-700 leading-relaxed">Serving Maui families and businesses with reliable, professional cleaning.</p>
                    </div>

                    <div>
                        <h3 className="text-6xl font-bold text-slate-900 mb-3">100%</h3>
                        <p className="text-lg font-semibold text-slate-900 mb-2">Satisfaction Focus</p>
                        <p className="text-slate-700 leading-relaxed">We don't leave until the job is done right. Your satisfaction matters.</p>
                    </div>

                    <div>
                        <h3 className="text-6xl font-bold text-slate-900 mb-3">Eco</h3>
                        <p className="text-lg font-semibold text-slate-900 mb-2">Friendly Products</p>
                        <p className="text-slate-700 leading-relaxed">Safe cleaning solutions that protect your family and our island.</p>
                    </div>
                </div>
            </div>

            {/* Featured Image Section */}
            <div className="relative h-[500px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
                    alt="Professional cleaner at work"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
        </section>
    );
}
