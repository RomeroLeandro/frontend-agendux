import { Button } from "../ui/Button";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
  const isClickScrolling = useRef(false);
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
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll es por un clic, lo ignoramos
      if (isClickScrolling.current) {
        return;
      }

      const sections = navLinks
        .map((link) => {
          // Filtramos el link '#' que no tiene sección
          if (link.href === "#") return null;
          return document.getElementById(link.href.substring(1));
        })
        .filter((section) => section !== null);

      let currentSectionId = "";

      // Iteramos en reversa para encontrar la sección correcta
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          // Un offset de 150px suele funcionar mejor con headers fijos
          const sectionTop = section.offsetTop - 150;
          if (window.scrollY >= sectionTop) {
            currentSectionId = `#${section.id}`;
            break; // ¡Importante! Salimos del bucle al encontrar la sección activa
          }
        }
      }
      setActiveLink(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Si el link es solo '#', no hacemos scroll suave
    if (href === "#") {
      setActiveLink(href);
      return;
    }

    e.preventDefault();
    const section = document.querySelector(href);

    if (section) {
      // 1. Marcamos que estamos haciendo scroll por clic
      isClickScrolling.current = true;
      setActiveLink(href);

      section.scrollIntoView({
        behavior: "smooth",
      });

      // 2. Después de un tiempo, desmarcamos el scroll por clic
      // Este tiempo debe ser suficiente para que termine la animación "smooth"
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000); // 1 segundo
    }
  };

  return (
    <div className="hidden lg:flex items-center justify-between flex-grow">
      <nav className="flex items-center space-x-8 mx-auto">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              setActiveLink(link.href);
              handleLinkClick(e, link.href);
            }}
            className={`font-poppins font-semibold transition-colors ${
              activeLink === link.href
                ? "font-poppins text-blue-600" // Color cuando está activo
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
