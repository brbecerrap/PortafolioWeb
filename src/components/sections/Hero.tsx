import { profile } from '../../data/profile';
import { Mail, Phone, Link2, ExternalLink, MapPin, User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding" style={{ background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-bg) 100%)' }}>
      <div className="container-custom text-center">
        {/* Text-based Avatar */}
        <div className="mb-8">
          <div 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto flex items-center justify-center border-4 shadow-lg"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              borderColor: 'var(--color-surface)'
            }}
            aria-label={`Foto de perfil de ${profile.name}`}
          >
            <User className="w-16 h-16 md:w-20 md:h-20 text-white" />
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          {profile.name}
        </h1>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
          {profile.title}
        </h2>
        
        <h3 className="text-lg md:text-xl mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          {profile.subtitle}
        </h3>
        
        {/* Summary */}
        <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {profile.summary}
        </p>
        
        {/* Location */}
        <div className="flex items-center justify-center mb-8" style={{ color: 'var(--color-text-muted)' }}>
          <MapPin className="w-5 h-5 mr-2" />
          <span>{profile.contact.location}</span>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors min-h-[44px]"
            style={{ backgroundColor: 'var(--color-primary)' }}
            aria-label="Enviar email"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          
          <a
            href={`tel:${profile.contact.phone}`}
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors min-h-[44px]"
            style={{ backgroundColor: '#059669' }}
            aria-label="Llamar por teléfono"
          >
            <Phone className="w-5 h-5" />
            <span>Teléfono</span>
          </a>
          
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-colors min-h-[44px]"
            style={{ backgroundColor: '#1d4ed8' }}
            aria-label="LinkedIn"
          >
            <Link2 className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          
          <a
            href={profile.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors min-h-[44px]"
            style={{ 
              border: '2px solid var(--color-primary)',
              color: 'var(--color-primary)'
            }}
            aria-label="Portafolio web"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Portafolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}