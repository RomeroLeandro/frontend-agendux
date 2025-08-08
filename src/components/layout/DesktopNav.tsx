import {Button}  from '../ui/Button';
import { useTheme } from '../../hooks/useTheme'; 
import { Sun, Moon } from 'lucide-react'; 

const navLinks = [
  { href: '#', label: 'Cómo funciona' },
    { href: '#', label: 'Precio' },
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Contacto' },
];

export const DesktopNav = () => {
  const [theme, toggleTheme] = useTheme();

  return (
     <div className="hidden lg:flex items-center justify-between flex-grow">
    <nav className="flex items-center space-x-8 mx-auto">
      {navLinks.map((link) => (
        <a key={link.label} href={link.href} className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
          {link.label}
        </a>
      ))}
    </nav>
    <div className="flex items-center space-x-4">
      <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      <a href="#" className="font-semibold text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
        Iniciar sesión
      </a>
      <Button>Empieza ahora</Button>
    </div>
  </div>
)
}