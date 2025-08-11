import "./App.css";
import { Header } from "./components/layout/Header";
import { Typography } from "./components/ui/Typography";
import ListCard from "./components/layout/ListCard";
import Card from "./components/layout/Card";
import CardMedic from "./components/layout/CardMedic";
import CardIngresos from "./components/layout/CardIngresos";
import Faq from "./components/layout/Faq";
import HelpCard from "./components/layout/HelpCard";
import { HeroSection } from "./components/pages/HeroSection";
import  {ForWhomSection}  from "./components/pages/ForWhomSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ForWhomSection />
        <div className="container mx-auto px-4 py-20">
          <Typography variant="display">Bienvenido a Agendux</Typography>
          <Typography variant="heading-xl">Bienvenido a Agendux</Typography>
          <Typography variant="heading-lg" className="mt-4">
            Bienvenido a Agendux
          </Typography>
          <Typography variant="heading-md">Bienvenido a Agendux</Typography>
          <Typography variant="heading-sm">Bienvenido a Agendux</Typography>
          <Typography variant="body-lg">Bienvenido a Agendux</Typography>
          <Typography variant="body-md">Bienvenido a Agendux</Typography>
          <Typography variant="body-sm">Bienvenido a Agendux</Typography>
          <Typography variant="caption">Bienvenido a Agendux</Typography>
          <Typography variant="badge">Ventajas</Typography>
          <div className="flex">
            <ListCard />
            <ListCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <Card />
            <CardMedic />
            <CardIngresos />
          </div>
          <Faq />
          <HelpCard />
        </div>
      </main>
    </>
  );
}

export default App;
