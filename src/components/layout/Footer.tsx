import { profile } from '../../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="py-8 border-t" 
      style={{ 
        backgroundColor: 'var(--color-bg)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold" style={{ color: 'var(--color-text)' }}>{profile.name}</p>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{profile.title}</p>
          </div>
          
          <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            <p>&copy; {currentYear} {profile.name}. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-4">
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:underline"
              style={{ color: 'var(--color-primary)' }}
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
