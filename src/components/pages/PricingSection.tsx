import { Card } from "../ui/Card";
import { FeatureList } from "../ui/FeaturedList";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { useState } from "react";

const plansData = [
  {
    name: "Plan Básico",
    price: { monthly: "15", annual: "150" },
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
    price: { monthly: "30", annual: "300" },
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
    price: { monthly: "50", annual: "500" },
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
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- Cabecera de la Sección --- */}
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="badge" id="planes">
            PLANES
          </Typography>
          <Typography variant="heading-xl" as="h2" className="mt-4">
            Planes que se adaptan al tamaño de tu negocio
          </Typography>
          <Typography variant="body-lg" className="mt-4">
            Escoge el plan en base a la cantidad de citas que tienes al mes.
            Siempre puedes cambiarlo más adelante.
          </Typography>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="relative flex items-center p-1 bg-gray-200 dark:bg-gray-700 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative px-6 py-2 text-sm font-semibold rounded-full transition-colors z-10 ${
                billingCycle === "monthly"
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`relative px-6 py-2 text-sm font-semibold rounded-full transition-colors z-10 ${
                billingCycle === "annual"
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Anual
            </button>
            {/* Fondo que se desliza */}
            <div
              className={`absolute top-1 h-10 w-1/2 bg-blue-600 rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                billingCycle === "monthly"
                  ? "transform translate-x-0"
                  : "transform translate-x-full"
              }`}
              style={{ left: "2px", right: "2px", width: "calc(50% - 4px)" }}
            ></div>
          </div>
        </div>
        {/* --- Grid Responsivo para los 3 Planes --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-start">
          {plansData.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.isFeatured ? "featured" : "default"}
              className="flex flex-col"
            >
              <div className="flex-grow">
                <Typography variant="heading-md" as="h3">
                  {plan.name}
                </Typography>

                {/* 👇 4. Mostramos el precio según el estado 'billingCycle' */}
                <div className="my-4">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    $
                    {billingCycle === "monthly"
                      ? plan.price.monthly
                      : plan.price.annual}
                  </span>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    /{billingCycle === "monthly" ? "mes" : "año"}
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
