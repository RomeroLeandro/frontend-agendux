import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "../ui/Button";
import Logo from "../../assets/Logo.webp";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const navLinks = [
  { href: "#comoFunciona", label: "Cómo funciona" },
  { href: "#planes", label: "Planes" },
  { href: "#FAQ", label: "FAQ" },
  { href: "#", label: "Contacto" },
];

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  isAuthenticated,
  onLogout,
}) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Error en el logout de la API:", error);
    } finally {
      onLogout(); // Llama a la función del contexto
      onClose(); // Cierra el menú móvil
      navigate("/"); // Redirige a la home
    }
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-bg dark:bg-bg-dark lg:hidden"
      aria-hidden={!isOpen}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={Logo} alt="Logo de Agendux" className="h-10" />
          <button onClick={onClose} aria-label="Cerrar menú">
            <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 pt-8 pb-16 bg-bg dark:bg-bg-dark">
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className=" font-poppins text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-6 w-full px-8 pt-8  border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="flex items-center gap-4 p-2 hover:text-blue-500"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                onClick={onClose}
                className="text-2xl font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <Button
                onClick={handleLogout}
                className="text-2xl font-semibold text-red-500 hover:text-red-700"
              >
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/auth"
                onClick={onClose}
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800"
              >
                Iniciar Sesión
              </Link>
              <Link to="/auth" className="...">
                <Button>Empieza Ahora</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
