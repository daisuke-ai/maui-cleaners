export default function Aloha() {
    return (
        <section className="bg-[#f0f9ff] py-24 px-8 relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="text-6xl mb-6">🌺</div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Built on the Aloha Spirit</h2>
                <div className="text-xl text-slate-700 leading-relaxed font-medium space-y-2">
                    <p>We treat every space with respect, care, and pride.</p>
                    <p className="text-slate-600">
                        That’s the Aloha way — show up on time, do the job right, and leave things better than we found them.
                    </p>
                </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full opacity-40 z-0"></div>
        </section>
    );
}
