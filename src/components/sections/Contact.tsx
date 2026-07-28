import { profile } from '../../data/profile';
import { Mail, Phone, Link2, ExternalLink, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)' }}>
          Contacto
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            ¿Interesado en trabajar juntos? No dudes en contactarme.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-4 p-4 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--color-surface)' }}
              aria-label="Enviar email"
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Email</p>
                <p className="font-medium" style={{ color: 'var(--color-text)' }}>{profile.contact.email}</p>
              </div>
            </a>
            
            {/* Phone */}
            <a
              href={`tel:${profile.contact.phone}`}
              className="flex items-center gap-4 p-4 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--color-surface)' }}
              aria-label="Llamar por teléfono"
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#059669', color: 'white' }}>
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Teléfono</p>
                <p className="font-medium" style={{ color: 'var(--color-text)' }}>{profile.contact.phone}</p>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--color-surface)' }}
              aria-label="LinkedIn"
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#1d4ed8', color: 'white' }}>
                <Link2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>LinkedIn</p>
                <p className="font-medium" style={{ color: 'var(--color-text)' }}>Bryan Becerra</p>
              </div>
            </a>
            
            {/* Portfolio */}
            <a
              href={profile.contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--color-surface)' }}
              aria-label="Portafolio web"
            >
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#7c3aed', color: 'white' }}>
                <ExternalLink className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Portafolio</p>
                <p className="font-medium" style={{ color: 'var(--color-text)' }}>bbpstudio.com</p>
              </div>
            </a>
          </div>
          
          {/* Location */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center" style={{ color: 'var(--color-text-muted)' }}>
              <MapPin className="w-5 h-5 mr-2" />
              <span>{profile.contact.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}