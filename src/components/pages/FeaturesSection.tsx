import {
  MessageSquare,
  CheckSquare,
  Calendar,
  Link2,
  RotateCw,
  BarChart2,
  Cog,
  Users,
  Smartphone,
} from "lucide-react";
import { Typography } from "../ui/Typography";
import { CtaBanner } from "../cta/CtaBanner";

const featuresData = [
  {
    icon: <MessageSquare />,
    title: "Recordatorios por WhatsApp",
    description:
      "Envía recordatorios automáticos para que tus clientes no olviden su cita.",
    colors:
      "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400",
  },
  {
    icon: <CheckSquare />,
    title: "Confirmación Interactiva",
    description:
      "Tus clientes pueden confirmar o cancelar su turno directamente desde WhatsApp.",
    colors: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400",
  },
  {
    icon: <Calendar />,
    title: "Integración con Google Calendar",
    description:
      "Sincroniza tu agenda de Agendux con tu calendario personal para evitar duplicados.",
    colors:
      "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400",
  },
  {
    icon: <Link2 />,
    title: "Link de Autoagenda Personal",
    description:
      "Comparte un link único para que tus clientes agenden por sí mismos, 24/7.",
    colors:
      "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400",
  },
  {
    icon: <RotateCw />,
    title: "Reprogramación Fácil",
    description:
      "Tus clientes pueden cancelar o reprogramar sus citas fácilmente con un solo clic.",
    colors:
      "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-400",
  },
  {
    icon: <BarChart2 />,
    title: "Dashboard de Gestión",
    description:
      "Visualiza y gestiona todas tus citas en un calendario centralizado.",
    colors: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400",
  },
  {
    icon: <Cog />,
    title: "Configuración Flexible",
    description:
      "Define tus servicios, precios y horarios de trabajo con total libertad.",
    colors:
      "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-400",
  },
  {
    icon: <Users />,
    title: "Gestión de Clientes",
    description:
      "Visualiza un historial de todos tus clientes y sus citas pasadas en un solo lugar.",
    colors: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-400",
  },
  {
    icon: <Smartphone />,
    title: "Diseño Responsivo",
    description:
      "Gestiona tu agenda desde cualquier dispositivo: móvil, tablet o computadora.",
    colors: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-400",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="heading-xl" as="h2">
            ¿Cómo funciona Agendux?
          </Typography>
          <Typography variant="body-lg" className="mt-4">
            Descubre todas las funcionalidades que hacen de Agendux la
            herramienta
            <span className="text-blue-600 font-medium">
              {" "}
              perfecto para gestionar tu agenda profesional
            </span>{" "}
            de manera eficiente.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 flex gap-4 items-start"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${feature.colors}`}
              >
                {feature.icon}
              </div>
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
        </div>
        <div className="mt-16">
          <CtaBanner />
        </div>
      </div>
    </section>
  );
};
