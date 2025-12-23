export default function Stats() {
    return (
        <section className="bg-[#fff75e] py-24 min-h-[600px] relative">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">

                <div>
                    <h3 className="text-7xl font-medium text-slate-900 mb-4">450</h3>
                    <p className="text-lg font-medium text-slate-900 mb-2">Trusted Professionals</p>
                    <p className="text-slate-800 leading-relaxed">With a team of 50+ certified cleaners, we ensure every job is done right, every time.</p>
                </div>

                <div>
                    <h3 className="text-7xl font-medium text-slate-900 mb-4">1M+</h3>
                    <p className="text-lg font-medium text-slate-900 mb-2">Trusted Professionals</p>
                    <p className="text-slate-800 leading-relaxed">We've cleaned over 10,000 homes with a 99% customer satisfaction rate.</p>
                </div>

                <div>
                    <h3 className="text-7xl font-medium text-slate-900 mb-4">20K</h3>
                    <p className="text-lg font-medium text-slate-900 mb-2">Trusted Professionals</p>
                    <p className="text-slate-800 leading-relaxed">By using 100% eco-friendly products, we've helped reduce harmful chemicals.</p>
                </div>

            </div>

            {/* Video/Image Overlay Section */}
            {/* The design shows a video/image cutting into the bottom of this yellow section. 
          It seems to float between this section and the next (or just sits at the bottom).
          I'll position it absolutely at the bottom, overflowing out.
      */}
            <div className="absolute left-8 right-8 bottom-[-150px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="/cleaners/hero-bg.png" /* Using hero-bg as placeholder for the video thumbnail per plan */
                    alt="Team working"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#1f2937] text-white px-4 py-2 rounded-lg flex items-center gap-4 text-sm font-medium">
                    {/* Fake video controls */}
                    <div className="flex gap-4">
                        <span>▶</span>
                        <span>✋</span>
                        <span>⚙</span>
                    </div>
                    <div className="bg-gray-700 px-2 py-1 rounded text-xs">100%</div>
                    <button className="bg-[#1d4ed8] hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold">
                        Upgrade Now
                    </button>
                </div>
            </div>

        </section>
    );
}
