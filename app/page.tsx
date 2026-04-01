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
    </>
  );
}
