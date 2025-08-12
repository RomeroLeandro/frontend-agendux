import React, { useState } from "react";
import { Typography } from "../ui/Typography";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export const WhatsAppCtaSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensaje de prueba enviado al: +54${phoneNumber}`);
  };

  return (
    <section className="bg-blue-600 dark:bg-blue-700 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <Typography variant="heading-xl" as="h2" className="text-white">
          ¿Quieres recibir un mensaje de ejemplo en tu WhatsApp?
        </Typography>

        <Typography
          variant="body-lg"
          className="mt-4 max-w-2xl text-blue-100 dark:text-blue-200"
        >
          Prueba cómo funciona Agendux recibiendo un mensaje de demostración en
          tu teléfono.
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <div className="relative flex-grow">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              + 54
            </span>
            <input
              type="tel"
              placeholder="Tu número de WhatsApp"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full h-full rounded-lg py-3 pr-4 pl-14 border-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 focus:ring-green-400 shadow-lg"
          >
            <span>Enviar</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </form>

        <Typography variant="body-sm" className="mt-4 text-blue-200">
          No te preocupes, no guardamos tu número ni te enviaremos spam.
        </Typography>
      </div>
    </section>
  );
};
