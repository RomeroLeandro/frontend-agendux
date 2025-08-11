import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { FeatureList } from '../ui/FeaturedList';
import { Stethoscope } from 'lucide-react'; 

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
    {children}
  </div>
);

function MedicosCard() {
  const features = [
    'Confirmación automática',
    'Recordatorios personalizados',
  ];

  return (
    <Card>
      <IconWrapper>
        <Stethoscope size={24} />
      </IconWrapper>

      <Typography variant="heading-md" as="h3">
        Médicos y clínicas
      </Typography>

      <Typography variant="body-md" className="mt-2">
        Gestiona pacientes con confirmaciones automáticas.
      </Typography>
      
      <FeatureList items={features} />
    </Card>
  );
}

export default MedicosCard;