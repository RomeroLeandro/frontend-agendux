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
    <section className="bg-blue-primary  py-16 md:py-24">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <Typography variant="heading-xl" as="h2" className="text-white">
          ¿Quieres recibir un mensaje de ejemplo en tu WhatsApp?
        </Typography>

        <Typography
          variant="body-lg"
          className="mt-4 max-w-2xl text-white dark:text-white"
        >
          Prueba cómo funciona Agendux recibiendo un mensaje de demostración en
          tu teléfono.
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <div className="relative flex-grow bg-white  rounded-2xl">
            <input
              type="tel"
              placeholder="+54"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full h-full rounded-2xl py-3 pr-4 pl-4 font-poppins text-gray-800"
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 focus:ring-green-400 shadow-lg flex"
          >
            <span className="font-poppins ">Enviar</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </form>

        <Typography
          variant="body-sm"
          className="mt-4 text-white dark:text-white"
        >
          No te preocupes, no guardamos tu número ni te enviaremos spam.
        </Typography>
      </div>
    </section>
  );
};
