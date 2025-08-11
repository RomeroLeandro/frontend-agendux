import { Accordion } from '../ui/Accordion';
import { Typography } from '../ui/Typography';

function FaqPage() {
  const faqItems = [
    {
      question: '¿Cómo funcionan los pagos?',
      answer:
        'Agendux es una suscripción, puedes pagar mensual o anualmente. Nuestros planes se adaptan a la cantidad de citas que tienes al mes. Puedes cambiar de plan en cualquier momento según tus necesidades.',
    },
    {
      question: '¿Qué pasa si no me gusta Agendux?',
      answer:
        'Ofrecemos una garantía de satisfacción. Si no estás contento con el servicio, puedes cancelar tu suscripción en cualquier momento sin penalizaciones.',
    },
    {
      question: '¿Qué app de calendarios soporta Agendux?',
      answer:
        'Actualmente, Agendux se integra perfectamente con Google Calendar. Estamos trabajando para añadir soporte para Outlook Calendar y Apple Calendar en futuras actualizaciones.',
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto text-center">
        <Typography variant="caption">FAQ</Typography>
        <Typography variant="heading-xl" as="h2" className="mt-2">
          Preguntas Frecuentes
        </Typography>
      </div>

      <div className="mt-12">
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}

export default FaqPage;