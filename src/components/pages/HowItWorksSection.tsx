import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import {
  CircleCheckBig,
  CircleDot,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";

const StepListItem = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex">
    <div className="flex-shrink-0 mr-4">{icon}</div>
    <div>
      <Typography
        variant="body-lg"
        as="h4"
        className="font-semibold text-gray-800 dark:text-white"
      >
        {title}
      </Typography>
      <Typography variant="body-md" className="mt-1">
        {children}
      </Typography>
    </div>
  </div>
);

export const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div text-center max-w-3xl mx-auto>
          <Typography variant="badge">CÓMO FUNCIONA</Typography>
          <Typography variant="heading-xl" as="h2" className="mt-4">
            La forma más simple de agendar y confirmar citas
          </Typography>
          <Typography variant="body-lg" className="mt-4">
            Un proceso sencillo en dos pasos que automatiza la comunicación con
            tus clientes.
          </Typography>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mt-12">
          <div className="space-y-12">
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full text-lg font-bold">
                  1
                </div>
                <div className="w-px h-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="space-y-6">
                <Typography variant="heading-lg" as="h3">
                  Crea citas fácilmente
                </Typography>
                <Typography variant="body-md">
                  Utiliza nuestro calendario integrado o sincroniza con Google
                  Calendar. Crea citas desde cualquier dispositivo en segundos.
                </Typography>
                <div className="space-y-4">
                  <StepListItem
                    icon={<CircleCheckBig className="text-green-500" />}
                    title="Integración con Google Calendar"
                  >
                    Sincroniza automáticamente tus citas existentes.
                  </StepListItem>
                  <StepListItem
                    icon={<CircleCheckBig className="text-green-500" />}
                    title="Acceso desde cualquier dispositivo"
                  >
                    Gestiona tu agenda desde móvil, tablet o computadora.
                  </StepListItem>
                  <StepListItem
                    icon={<CircleCheckBig className="text-green-500" />}
                    title="Interfaz intuitiva"
                  >
                    Crea citas en segundos con nuestra interfaz fácil de usar.
                  </StepListItem>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full text-lg font-bold">
                  2
                </div>
              </div>
              <div className="space-y-6">
                <Typography variant="heading-lg" as="h3">
                  Confirmación automática
                </Typography>
                <Typography variant="body-md">
                  Agendux envía automáticamente mensajes de WhatsApp a tus
                  clientes para confirmar sus citas y actualiza tu calendario en
                  tiempo real.
                </Typography>
                <div className="space-y-4">
                  <StepListItem
                    icon={<CircleDot className="text-yellow-500" />}
                    title="Mensaje de confirmación enviado"
                  >
                    24 horas antes de la cita, enviamos automáticamente un
                    mensaje personalizado.
                  </StepListItem>
                  <StepListItem
                    icon={<CircleCheckBig className="text-green-500" />}
                    title="Cita confirmada"
                  >
                    Tu cliente confirma con un simple clic y tu calendario se
                    actualiza al instante.
                  </StepListItem>
                  <StepListItem
                    icon={<AlertTriangle className="text-red-500" />}
                    title="Cita cancelada"
                  >
                    Si el cliente cancela, liberas ese espacio para otra cita
                    potencial.
                  </StepListItem>
                  <StepListItem
                    icon={<MessageSquare className="text-blue-500" />}
                    title="Mensajes personalizables según tu negocio"
                  >
                    Elige qué, cuándo y cómo comunicar cada paso.
                  </StepListItem>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src=""
              alt="Tres teléfonos mostrando el flujo de Agendux"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <Button>Empieza ahora</Button>
        </div>
      </div>
    </section>
  );
};
