import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Authority from "./components/Authority";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import { CTA, Footer } from "./components/CTA";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Authority />
      <Services />
      <Pricing />
      <CTA />
      <Footer />

      <a
        href="https://wa.me/6281212940797"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-full"
      >
        WhatsApp
      </a>
    </>
  );
}