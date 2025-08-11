import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { MessageSquare } from 'lucide-react';

function HelpCard() {
  return (
    <Card className="max-w-sm">
      
      <div className="flex items-center">
        <MessageSquare className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
        <Typography variant="heading-md" as="h3">
          ¿Necesitas ayuda?
        </Typography>
      </div>

      <Typography variant="body-md" className="mt-2">
        Nuestro equipo está listo para ayudarte con cualquier pregunta adicional.
      </Typography>

      <Button fullWidth className="mt-4">
        Contactar soporte
      </Button>
      
    </Card>
  );
}

export default HelpCard;