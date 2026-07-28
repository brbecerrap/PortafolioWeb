import { profile } from '../../data/profile';
import { Mail, Phone, Link2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom text-center">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          {profile.name}
        </h1>
        
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
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
        <div className="flex items-center justify-center mb-8" style={{ color: 'var(--color-text-muted)' }}>
          <MapPin className="w-5 h-5 mr-2" />
          <span>{profile.contact.location}</span>
        </div>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all min-h-[44px] hover:scale-105"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'white'
            }}
            aria-label="Enviar email"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          
          <a
            href={`tel:${profile.contact.phone}`}
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all min-h-[44px] hover:scale-105"
            style={{ 
              backgroundColor: 'var(--color-surface)',
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
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all min-h-[44px] hover:scale-105"
            style={{ 
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)'
            }}
            aria-label="LinkedIn"
          >
            <Link2 className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
