import { Accordion } from "../ui/Accordion";
import { MessageSquare } from "lucide-react";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const faqData = [
  {
    question: "¿Cómo funcionan los pagos?",
    answer:
      "Agendux es una suscripción, puedes pagar mensual o anualmente. Nuestros planes se adaptan a la cantidad de citas que tienes al mes. Puedes cambiar de plan en cualquier momento según tus necesidades.",
  },
  {
    question: "¿Qué pasa si no me gusta Agendux?",
    answer:
      "Puedes solicitar un reembolso en los primeros 30 días de tu suscripción. Ofrecemos una garantía de satisfacción completa para que puedas probar nuestra plataforma sin riesgos. Aquí puedes leer nuestra política de reembolso.",
  },
  {
    question: "¿Qué app de calendarios soporta Agendux?",
    answer:
      "Tienes dos opciones: puedes utilizar el Calendario que viene dentro de Agendux, o puedes conectar tu cuenta de Google Calendar. La sincronización es bidireccional, lo que significa que cualquier cambio en un calendario se reflejará automáticamente en el otro.",
  },
  {
    question: "¿Cómo funciona la integración de WhatsApp?",
    answer:
      "Agendux utiliza la API oficial de WhatsApp Business para enviar mensajes de confirmación y recordatorios a tus clientes. Los mensajes son personalizables y se envían automáticamente según los parámetros que configures.",
  },
  {
    question: "¿Tienes más preguntas?",
    answer:
      "Aquí estamos a tu orden. Puedes contactarnos directamente por WhatsApp para resolver cualquier duda adicional que tengas sobre nuestra plataforma.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* --- Layout principal de 2 columnas --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* --- Columna Izquierda: Título y Tarjeta de Ayuda --- */}
          <div className="flex flex-col gap-8">
            <div>
              <Typography variant="badge">FAQ</Typography>
              <Typography variant="heading-xl" as="h2" className="mt-4">
                Preguntas
                <span className="text-blue-600 dark:text-blue-500">
                  {" "}
                  Frecuentes
                </span>
              </Typography>
              <Typography variant="body-lg" className="mt-4">
                Encuentra respuestas a las preguntas más comunes sobre Agendux y
                cómo puede ayudarte a gestionar tus citas.
              </Typography>
            </div>
            <Card className="bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                <Typography variant="heading-md" as="h3">
                  ¿Necesitas ayuda?
                </Typography>
              </div>
              <Typography variant="body-md" className="mt-2">
                Nuestro equipo está listo para ayudarte con cualquier pregunta
                adicional.
              </Typography>
              <Button fullWidth className="mt-4">
                Contactar soporte
              </Button>
            </Card>
          </div>
          <div>
            <Accordion items={faqData} />
          </div>
        </div>
      </div>
    </section>
  );
};
