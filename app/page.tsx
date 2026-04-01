import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Problem from "./Components/Problem";
import Authority from "./Components/Authority";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import { CTA, Footer } from "./Components/CTA";

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