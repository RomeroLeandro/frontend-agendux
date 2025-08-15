import { Stethoscope, Scissors, BrainCircuit, Wrench } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Typography } from "../ui/Typography";
import { FeatureList } from "../ui/FeaturedList";
const professionalsData = [
  {
    icon: <Stethoscope size={48} />,
    title: "Médicos y clínicas",
    description: "Gestiona pacientes con confirmaciones automáticas",
    features: ["Confirmación automática", "Recordatorios personalizados"],
  },
  {
    icon: <Scissors size={48} />,
    title: "Estéticas y peluquerías",
    description: "Organiza tu agenda y envía recordatorios a tus clientes",
    features: ["Confirmación automática", "Recordatorios personalizados"],
  },
  {
    icon: <BrainCircuit size={48} />,
    title: "Psicólogos y terapeutas",
    description: "Gestiona mejor e informa a tus pacientes",
    features: ["Confirmación automática", "Recordatorios personalizados"],
  },
  {
    icon: <Wrench size={48} />,
    title: "Servicios y reparaciones",
    description: "Coordina visitas técnicas y confirma disponibilidad",
    features: ["Confirmación automática", "Recordatorios personalizados"],
  },
];

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-100 opacity-50 text-blue-primary ">
    {children}
  </div>
);

export const ForWhomSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <Typography variant="badge">¿PARA QUIÉN ES?</Typography>
        <Typography variant="heading-lg" as="h2" className="mt-4">
          Ideal para profesionales que dependen de citas
        </Typography>

        <Typography variant="body-lg" className="mt-4 max-w-2xl mx-auto">
          Simplifica la gestión de citas y ahorra horas automatizando procesos
          por WhatsApp.
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-left">
          {professionalsData.map((prof) => (
            <Card key={prof.title}>
              <IconWrapper>{prof.icon}</IconWrapper>
              <Typography variant="heading-md" as="h3">
                {prof.title}
              </Typography>
              <Typography variant="body-md" className="mt-2">
                {prof.description}
              </Typography>
              <FeatureList items={prof.features} />
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Button>Crea tu cuenta gratis</Button>
        </div>
      </div>
    </section>
  );
};
