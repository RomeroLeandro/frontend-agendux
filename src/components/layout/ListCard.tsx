import { Card } from '../ui/Card';
import { Typography } from '../ui/Typografhy';
import { Button } from '../ui/Button';
import { FeatureList } from '../ui/FeaturedList';

function PricingCardExample() {
  const planFeatures = [
    '7 días de prueba gratis',
    'Hasta 100 citas mensuales',
    'Confirmación por WhatsApp',
    'Integración con Google Calendar',
    'Autoagenda básica',
  ];

  return (
    // 'featured' añade un borde azul para destacar el plan
    <Card variant="featured">
      <Typography variant="heading-md" as="h3">
        Plan Básico
      </Typography>
      
      <div className="my-4">
        <span className="text-5xl font-bold text-gray-900 dark:text-white">$15</span>
        <span className="text-lg text-gray-500 dark:text-gray-400">/mes</span>
      </div>
      
      <Typography variant="body-md">
        Perfecto para consultorios pequeños
      </Typography>
      
      <Button fullWidth className="mt-6">
        Empieza gratis
      </Button>

      <FeatureList items={planFeatures} />
    </Card>
  );
}

export default PricingCardExample;