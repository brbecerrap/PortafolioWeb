import { profile } from '../../data/profile';
import { navigation } from '../../data/navigation';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Navigation from './Navigation';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const sectionIds = navigation.map(item => item.id);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ 
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-xl font-bold transition-colors"
            style={{ color: 'var(--color-text)' }}
          >
            {profile.name}
          </a>
          
          {/* Navigation and Theme Toggle */}
          <div className="flex items-center gap-4">
            <Navigation activeSection={activeSection} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
