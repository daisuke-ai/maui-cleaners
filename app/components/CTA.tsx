export default function CTA() {
    return (
        <section className="bg-[#2d4df5] py-24 px-8 text-center text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-8">Dedicated Team of Experts</h2>
                {/* The screenshot only shows the header, but I'll add a button to make it a functional CTA */}
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Ready to experience the difference? Contact our team today for a spotless environment.
                </p>
                <button className="bg-white text-[#2d4df5] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                    Contact Us Today
                </button>
            </div>
        </section>
    );
}
