import { useState } from "react";
import { Menu } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

import Logo from "../../assets/Logo.webp";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  onLogout,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="flex items-center w-full backdrop-blur-sm h-18 sticky top-0 z-40 border-b border-gray-200 bg-bg dark:bg-bg-dark dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#inicio">
            <img src={Logo} alt="Logo de Agendux" className="h-8" />
          </a>
          <DesktopNav isAuthenticated={isAuthenticated} onLogout={onLogout} />
          <div className="lg:hidden">
            {!isMenuOpen && (
              <button
                onClick={toggleMenu}
                aria-label="Abrir menú"
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </button>
            )}
          </div>
        </div>
      </div>
      <MobileNav
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
      />
    </header>
  );
};
