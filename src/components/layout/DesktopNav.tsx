import { Button } from "../ui/Button";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { href: "#comoFunciona", label: "Cómo funciona" },
  { href: "#planes", label: "Planes" },
  { href: "#FAQ", label: "FAQ" },
  { href: "#", label: "Contacto" },
];

interface DesktopNavProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
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
      navigate("/"); // Redirige a la home
    }
  };
  const [activeLink, setActiveLink] = useState<string>("");

  return (
    <div className="hidden lg:flex items-center justify-between flex-grow">
      <nav className="flex items-center space-x-8 mx-auto">
        {navLinks.map((link) => (
          <a
            onClick={() => setActiveLink(link.href)}
            key={link.label}
            href={link.href}
            className={`font-poppins font-semibold transition-colors ${
              activeLink === link.href
                ? "text-blue-600" // Color cuando está activo
                : "font-poppins text-font-secondary hover:text-blue-primary dark:text-gray-300 transition-colors" // Color normal
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className="p-2 text-font-secondary dark:text-gray-300 hover:text-blue-primary transition-colors"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="">
              Dashboard
            </Link>
            <Button onClick={handleLogout} className="...">
              Cerrar Sesión
            </Button>
          </>
        ) : (
          <>
            <Link
              to="/auth"
              className="font-poppins text-font-secondary hover:text-blue-primary dark:text-gray-300 transition-colors"
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
  );
};
