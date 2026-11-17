import { profile } from '../../data/profile';
import { Mail, Phone, Link2, MapPin, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="container-custom text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium" style={{ 
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-primary)',
          border: '1px solid var(--color-border)'
        }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-primary)' }} />
          Disponible para proyectos
        </div>
        
        {/* Name */}
        <h1
          className="hero-heading text-5xl md:text-6xl font-semibold mb-4 mx-auto"
          style={{ maxWidth: '680px' }}
        >
          {profile.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 mx-auto" style={{ color: 'var(--color-primary)', maxWidth: '680px' }}>
          {profile.title}
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          {profile.subtitle}
        </p>
        
        {/* Summary */}
        <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {profile.summary}
        </p>
        
        {/* Location */}
        <div className="flex items-center justify-center mb-10" style={{ color: 'var(--color-text-muted)' }}>
          <MapPin className="w-5 h-5 mr-2" />
          <span>{profile.contact.location}</span>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-2 px-3 py-2 rounded-full transition-transform duration-300 ease-base min-h-[44px] hover:scale-[0.98] font-semibold"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: '#1a1a1a'
            }}
            aria-label="Enviar email"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          
          <a
            href={`tel:${profile.contact.phone}`}
            className="flex items-center gap-2 px-3 py-2 rounded-full transition-transform duration-300 ease-base min-h-[44px] hover:scale-[0.98] font-semibold"
            style={{ 
              backgroundColor: 'transparent',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)'
            }}
            aria-label="Llamar por teléfono"
          >
            <Phone className="w-5 h-5" />
            <span>Teléfono</span>
          </a>
          
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-full transition-transform duration-300 ease-base min-h-[44px] hover:scale-[0.98] font-semibold"
            style={{ 
              backgroundColor: 'transparent',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)'
            }}
            aria-label="LinkedIn"
          >
            <Link2 className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <a 
          href="#skills" 
          className="inline-flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-text-muted)' }}
          aria-label="Scroll down"
        >
          <span className="text-sm">Ver más</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
