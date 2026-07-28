import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
      style={{ 
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text)'
      }}
      aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      title={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}