import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { Zap } from 'lucide-react'; 

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
    {children}
  </div>
);

function FeatureCardExample() {
  return (
    <Card>
      <IconWrapper>
        <Zap size={24} />
      </IconWrapper>
      <Typography variant="heading-md" as="h3">
        Confirmación Interactiva
      </Typography>
      <Typography variant="body-md" className="mt-2">
        Tus clientes pueden confirmar o cancelar su turno directamente desde WhatsApp.
      </Typography>
    </Card>
  );
}


export default FeatureCardExample;