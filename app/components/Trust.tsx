import { HandPlatter, Leaf, ShieldCheck, Sparkles, UserCheck, DollarSign } from "lucide-react";

export default function Trust() {
    return (
        <section className="bg-white py-24 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

                {/* Column 1 */}
                <div>
                    <h2 className="text-4xl font-medium text-slate-900 mb-12">Why customers trust us?</h2>
                    <div className="space-y-10">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    We prioritize your health and the environment by using non-toxic, eco-friendly cleaning solutions.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    Our team consists of experienced and fully vetted cleaning experts dedicated to providing thorough.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    Every space is unique, and so are your needs. We offer tailored cleaning packages to ensure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h2 className="text-4xl font-medium text-slate-900 mb-12">What makes us the best?</h2>
                    <div className="space-y-10">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                                <HandPlatter className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    We understand your busy lifestyle, which is why we provide convenient scheduling options.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    No hidden fees or surprises—just straightforward, competitive pricing that fits your budget while delivering.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-600 leading-relaxed">
                                    We stand by the quality of our work. If you're not completely satisfied, we'll come back and make it right—no extra charge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
