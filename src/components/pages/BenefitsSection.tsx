import { CalendarCheck, Clock, MessageSquare, TrendingUp } from "lucide-react";
import { Typography } from "../ui/Typography";
import { Card } from "../ui/Card";
import React from "react";

const benefitsData = [
  {
    icon: <TrendingUp />,
    title: "Más ingresos y menos ausentismo",
    description:
      "Por cada cliente que olvida su cita pierdes tiempo y dinero. Agendux se encarga de confirmar y recordar tus citas.",
    colors:
      "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400",
  },
  {
    icon: <Clock />,
    title: "Ahorra tiempo automatizando mensajes",
    description:
      "¿Actualmente confirmas a tus clientes manualmente? ¿Los llamas o les escribes uno a uno? Deja que Agendux haga eso por ti.",
    colors:
      "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-400",
  },
  {
    icon: <MessageSquare />,
    title: "WhatsApp: el canal más efectivo",
    description:
      "Los emails y SMS no son efectivos, y las llamadas son intrusivas. Agendux usa WhatsApp para garantizar que tus clientes vean el mensaje y confirmen la cita.",
    colors: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-400",
  },
  {
    icon: <CalendarCheck />,
    title: "Tu agenda siempre sincronizada",
    description:
      "Con la integración de Google Calendar, tu disponibilidad se actualiza en tiempo real, evitando que te agenden turnos cuando ya estás ocupado.",
    colors:
      "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400",
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
    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${className}`}
  >
    {children}
  </div>
);

export const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- Cabecera de la Sección --- */}
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="badge">VENTAJAS</Typography>

          <Typography variant="heading-xl" as="h2" className="mt-4">
            Beneficios de utilizar Agendux
          </Typography>

          <Typography variant="body-lg" className="mt-4">
            Optimiza tu negocio con nuestra plataforma de gestión de citas.
          </Typography>
        </div>

        {/* --- Grid Responsivo 2x2 para las Tarjetas --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {benefitsData.map((benefit) => (
            <Card key={benefit.title} className="text-left">
              <IconWrapper className={benefit.colors}>
                {React.cloneElement(benefit.icon, { size: 24 })}
              </IconWrapper>

              <Typography variant="heading-md" as="h3">
                {benefit.title}
              </Typography>

              <Typography variant="body-md" className="mt-2">
                {benefit.description}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
