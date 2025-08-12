import "./App.css";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/pages/HeroSection";
import { ForWhomSection } from "./components/pages/ForWhomSection";
import { HowItWorksSection } from "./components/pages/HowItWorksSection";
import { FeaturesSection } from "./components/pages/FeaturesSection";
import { BenefitsSection } from "./components/pages/BenefitsSection";
import { AutoSchedulingSection } from "./components/pages/AutoSchedulingSection";
import { PricingSection } from "./components/pages/PricingSection";
import { FaqSection } from "./components/pages/FaqSection";
import { WhatsAppCtaSection } from "./components/pages/WhatsAppCtaSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ForWhomSection />
        <HowItWorksSection />
        <FeaturesSection />
        <BenefitsSection />
        <AutoSchedulingSection />
        <PricingSection />
        <FaqSection />
        <WhatsAppCtaSection />
      </main>
    </>
  );
}

export default App;
