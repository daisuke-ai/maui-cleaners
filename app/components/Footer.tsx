export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-2">Shari Company LLC</h3>
                <p className="text-slate-400 mb-6">Professional Cleaning Services in Maui</p>

                <div className="flex justify-center gap-6 text-sm text-slate-400 mb-8 border-t border-slate-800 pt-8 max-w-lg mx-auto">
                    <span>Residential</span>
                    <span>•</span>
                    <span>Office</span>
                    <span>•</span>
                    <span>Construction</span>
                </div>

                <div className="text-xs text-slate-600">
                    <p>Licensed & Insured</p>
                    <p>Serving all of Maui</p>
                </div>
            </div>
        </footer>
    );
}
