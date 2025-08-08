import { useState } from 'react';
import { Menu } from 'lucide-react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

import Logo from '../../assets/Logo.webp';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={Logo} alt="Logo de Agendux" className='h-8' />
          <DesktopNav />
          <div className="lg:hidden">
            {!isMenuOpen && (
                <button onClick={toggleMenu} aria-label="Abrir menú" aria-expanded={isMenuOpen}>
                  <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                </button>
              )}
          </div>
        </div>
      </div>
      <MobileNav isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};