import Hero from "./components/Hero";
import Features from "./components/Features";
import Trust from "./components/Trust";
import Stats from "./components/Stats";
import Services from "./components/Services";
import CTA from "./components/CTA";

export default function CleanersPage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Features />
            <Trust />
            <Stats />
            <Services />
            <CTA />
        </main>
    );
}
