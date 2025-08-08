import { X, Sun, Moon } from "lucide-react";
import NavigationLinks from "./NavigationLinks";
import Logo from "../assets/Logo.webp";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
  navLinks: { label: string; href: string }[];
}

function MobileMenu({ isOpen, toggleMenu, toggleTheme, theme, navLinks }: MobileMenuProps) {
  return (
    <div className={`fixed inset-0 z-50 bg-white dark:bg-gray-800 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transform`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <img src={Logo} alt="Logo de Agendux" />
        <button onClick={toggleMenu} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <X size={20} />
        </button>
      </div>
      <NavigationLinks
        links={navLinks}
        linkClassName="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        navClassName="mt-4"
        onClick={toggleMenu}
      />
      <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Iniciar sesión</a>
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-sm text-sm font-medium">
          Empieza gratis
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;