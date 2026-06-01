import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import ServiceCentralisation from "@/components/landing/ServiceCentralisation";
import HowItWorks from "@/components/landing/HowItWorks";
import Safety from "@/components/landing/Safety";
import Clients from "@/components/landing/Clients";

import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Problem />
        <Solution />
        <ServiceCentralisation />
        <HowItWorks />
        <Safety />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
