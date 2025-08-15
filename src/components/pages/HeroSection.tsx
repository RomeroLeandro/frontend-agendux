import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { CircleCheckBig } from "lucide-react";
import GoogleCalendarIcon from "../../assets/CalendarIcon.webp";
import { MessageSquareIcon, CalendarIcon } from "lucide-react";
import MovilHero from "../../assets/HeroPhone.webp";

const SyncPill = () => (
  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4">
    <img
      src={GoogleCalendarIcon}
      alt="Logo de Google Calendar"
      className="size-6"
    />
    <Typography variant="body-sm">Sincronizado con Google Calendar</Typography>
  </div>
);

const TopMiniCard = () => (
  <div className="absolute -top-4 -left-8 bg-white rounded-2xl shadow-md p-2 flex items-center text-xs">
    <MessageSquareIcon className="w-6 h-6 mr-1 text-green-500" />
    <div className="flex flex-col">
      <Typography variant="heading-md-card" className="ml-2 font-bold">
        Mensaje enviado
      </Typography>
      <Typography variant="body-md" className="ml-2">
        95% confirmación
      </Typography>
    </div>
  </div>
);

const BottomMiniCard = () => (
  <div className="absolute -bottom-4 -right-8 bg-white rounded-2xl shadow-md p-2 flex items-center text-xs">
    <CalendarIcon className="w-6 h-6 mr-1 text-blue-500 " />
    <div className="flex flex-col">
      <Typography variant="heading-md-card" className="ml-2 font-bold">
        Cita confirmada
      </Typography>
      <Typography variant="body-md" className="ml-2">
        Automáticamente
      </Typography>
    </div>
  </div>
);

export const HeroSection = () => {
  const features = [
    "Recordatorios automáticos por WhatsApp",
    "Analytics y reportes detallados",
    "Agenda inteligente sincronizada",
  ];

  return (
    <section id="inicio" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <SyncPill />
            <Typography variant="display" as="h1">
              Gestiona tu agenda
              <span className="bg-gradient-to-r from-blue-secondary to-blue-primary bg-clip-text text-transparent ">
                {" "}
                de forma inteligente
              </span>
            </Typography>
            <Typography
              variant="body-lg"
              className="mt-6 max-w-xl mx-auto md:mx-0"
            >
              Automatiza recordatorios por WhatsApp, sincroniza tu calendario y
              optimiza tu tiempo. La solución completa para profesionales
              modernos.
            </Typography>
            <ul className="mt-8 space-y-4 text-left inline-block">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CircleCheckBig className="h-6 w-6 text-green-500" />
                  <Typography variant="body-md" as="span">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button>Empieza gratis</Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {/* 1. El Resplandor (div en el fondo) */}
            <div className="relative flex justify-center items-center">
              <img
                src={MovilHero}
                alt="Demostración de Agendux en un teléfono móvil"
                className="
                w-full max-w-xs md:max-w-sm relative z-10
                [filter:drop-shadow(0_20px_25px_rgba(99,102,241,0.5))_drop-shadow(0_15px_20px_rgba(59,130,246,0.6))]
              "
              />
              <div className="absolute inset-0 z-20">
                <TopMiniCard />
                <BottomMiniCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
