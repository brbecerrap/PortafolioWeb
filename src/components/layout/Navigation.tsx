import { useState } from 'react';
import { navigation } from '../../data/navigation';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection?: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:block" aria-label="Navegación principal">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
        style={{ color: 'var(--color-text)' }}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation links */}
      <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:gap-6 absolute md:relative top-full left-0 right-0 md:bg-transparent shadow-md md:shadow-none py-4 md:py-0 px-4 md:px-0`} style={{ backgroundColor: 'var(--color-bg)' }}>
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="block py-2 font-medium transition-colors min-w-[44px] min-h-[44px] flex items-center"
              style={{ color: activeSection === item.id ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}
              onClick={() => setIsOpen(false)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}