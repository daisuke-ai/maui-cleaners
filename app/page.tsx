import Hero from "./components/Hero";
import Services from "./components/Services";
import WhoWeAre from "./components/WhoWeAre";
import Aloha from "./components/Aloha";
import Trust from "./components/Trust";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function CleanersPage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Services />
            <WhoWeAre />
            <Aloha />
            <Trust />
            <CTA />
            <Footer />
        </main>
    );
}
