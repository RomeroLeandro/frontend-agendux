import "./App.css";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/pages/HeroSection";
import { ForWhomSection } from "./components/pages/ForWhomSection";
import { HowItWorksSection } from "./components/pages/HowItWorksSection";
import { FeaturesSection } from "./components/pages/FeaturesSection";
import { BenefitsSection } from "./components/pages/BenefitsSection";

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
      </main>
    </>
  );
}

export default App;
