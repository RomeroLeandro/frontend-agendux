import { Link, Settings2, PackageCheck } from "lucide-react";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import React from "react";

const schedulingFeatures = [
  {
    icon: <Link />,
    title: "Link de Autoagenda",
    description:
      "Crea un link personalizado para que tus clientes elijan su cita de manera independiente, sin llamadas ni mensajes.",
    colors:
      "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400",
  },
  {
    icon: <Settings2 />,
    title: "Configuración a tu medida",
    description:
      "Define tu disponibilidad, servicios, duración y precios. Personaliza cada aspecto para adaptarlo a tu negocio.",
    colors:
      "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-400",
  },
  {
    icon: <PackageCheck />,
    title: "Todo integrado",
    description:
      "Autoagenda viene incluido en todos los planes de Agendux. Las citas se sincronizan automáticamente con tu calendario.",
    colors:
      "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400",
  },
];

const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <div
    className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${className}`}
  >
    {children}
  </div>
);

export const AutoSchedulingSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="badge">AUTOAGENDAMIENTO</Typography>
          <Typography variant="heading-xl" as="h2" className="mt-4">
            Deja que tus clientes reserven con un link
          </Typography>
          <Typography variant="body-lg" className="mt-4">
            Crea y comparte tu link de autoagenda para que tus clientes escojan
            el día y hora de su cita.
          </Typography>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mt-12">
          <div className="flex flex-col gap-8">
            {schedulingFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4 items-start">
                <IconWrapper className={feature.colors}>
                  {React.cloneElement(feature.icon, { size: 24 })}
                </IconWrapper>
                <div>
                  <Typography variant="heading-md" as="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body-md" className="mt-1">
                    {feature.description}
                  </Typography>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <Button>Prueba la autoagenda</Button>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12 h-96 flex items-center justify-center">
            <Typography variant="body-lg" className="text-center max-w-sm">
              En esta sección se implementará una simulación interactiva que
              mostrará el proceso completo de reserva desde la perspectiva del
              cliente.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
