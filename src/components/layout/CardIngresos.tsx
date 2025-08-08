import { Card } from '../ui/Card';
import { Typography } from '../ui/Typografhy';
import { TrendingUp } from 'lucide-react'; // Ícono de ejemplo

// Reutilizamos el mismo IconWrapper
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
    {children}
  </div>
);

function IngresosCard() {
  return (
    <Card>
      <IconWrapper>
        <TrendingUp size={24} />
      </IconWrapper>

      <Typography variant="heading-md" as="h3">
        Más ingresos y menos ausentismo
      </Typography>

      <Typography variant="body-md" className="mt-2">
        Por cada cliente que olvida su cita pierdes tiempo y dinero. Agendux se encarga de confirmar y recordar tus citas.
      </Typography>
    </Card>
  );
}

export default IngresosCard;