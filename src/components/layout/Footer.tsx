import { Typography } from "../ui/Typography";
import Logo from "../../assets/Logo.webp";

const footerLinks = [
  {
    title: "Producto",
    links: [
      { label: "Funciones", href: "#" },
      { label: "Autoagenda", href: "#" },
      { label: "Precios", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos de uso", href: "#" },
      { label: "Política de cookies", href: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [{ label: "FAQ", href: "#" }],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src={Logo} alt="Logo de Agendux" className="h-10" />
            <Typography variant="body-md" className="mt-4 max-w-xs">
              App para Agendar, Confirmar y Recordar citas por WhatsApp.
            </Typography>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <Typography variant="heading-sm" as="h3" className="mb-4">
                {column.title}
              </Typography>
              <nav>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* --- Sección Inferior del Footer (Copyright) --- */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 text-center md:text-left">
          <Typography variant="body-sm">
            © {new Date().getFullYear()} Agendux, LLC. Todos los derechos
            reservados.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
