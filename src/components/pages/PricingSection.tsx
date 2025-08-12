import { Card } from "../ui/Card";
import { FeatureList } from "../ui/FeaturedList";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";

const plansData = [
  {
    name: "Plan Básico",
    price: "15",
    description:
      "Perfecto para consultorios pequeños y profesionales que empiezan.",
    features: [
      "7 días de prueba gratis",
      "Hasta 100 citas mensuales",
      "Confirmación por WhatsApp",
      "Integración con Google Calendar",
      "Autoagenda básica",
    ],
    isFeatured: false,
  },
  {
    name: "Plan Profesional",
    price: "30",
    description: "Para clínicas y negocios establecidos que buscan crecer.",
    features: [
      "Todo lo del Plan Básico",
      "Hasta 250 citas mensuales",
      "Autoagenda personalizada",
      "Reportes básicos",
      "Soporte prioritario",
    ],
    isFeatured: true,
  },
  {
    name: "Plan Empresa",
    price: "50",
    description:
      "Soluciones a medida para grandes equipos y múltiples locales.",
    features: [
      "Todo lo del Plan Profesional",
      "Citas ilimitadas",
      "Múltiples calendarios",
      "Reportes avanzados",
      "API de integración",
    ],
    isFeatured: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* --- Cabecera de la Sección --- */}
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="badge">PLANES</Typography>
          <Typography variant="heading-xl" as="h2" className="mt-4">
            Planes que se adaptan al tamaño de tu negocio
          </Typography>
          <Typography variant="body-lg" className="mt-4">
            Escoge el plan en base a la cantidad de citas que tienes al mes.
            Siempre puedes cambiarlo más adelante.
          </Typography>
        </div>

        {/* --- Grid Responsivo para los 3 Planes --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-start">
          {plansData.map((plan) => (
            <Card
              key={plan.name}
              // Aplicamos la variante 'featured' dinámicamente
              variant={plan.isFeatured ? "featured" : "default"}
              className="flex flex-col"
            >
              <div className="flex-grow">
                <Typography variant="heading-md" as="h3">
                  {plan.name}
                </Typography>
                <div className="my-4">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    USD{plan.price}
                  </span>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    /mes
                  </span>
                </div>
                <Typography variant="body-md">{plan.description}</Typography>
                <FeatureList items={plan.features} />
              </div>
              <Button fullWidth className="mt-6">
                Empieza gratis
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
