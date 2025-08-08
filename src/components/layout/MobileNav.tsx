import React from 'react';
import { useTheme } from '../../hooks/useTheme'; 
import { Sun, Moon } from 'lucide-react';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';
import Logo from '../../assets/Logo.webp';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
    { href: '#', label: 'Cómo funciona' },
    { href: '#', label: 'Precio' },
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Contacto' },
];

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [theme, toggleTheme] = useTheme();
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 lg:hidden" aria-hidden={!isOpen}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={Logo} alt="Logo de Agendux" className='h-8' />
          <button onClick={onClose} aria-label="Cerrar menú">
            <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 mt-10">
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={onClose} className="text-2xl text-gray-800 dark:text-gray-200">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-6 w-full px-8 pt-8  border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="flex items-center gap-4 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#" onClick={onClose} className="font-semibold text-xl text-gray-600 dark:text-gray-300">
            Iniciar sesión
          </a>
          
          <Button className="w-full">
            Crear Cuenta Gratis
          </Button>
        </div>
      </div>
    </div>
  );
};