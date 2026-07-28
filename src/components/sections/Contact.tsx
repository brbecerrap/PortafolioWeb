import { profile } from '../../data/profile';
import { Mail, Phone, Link2, MapPin } from 'lucide-react';

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex flex-col items-center gap-3 p-6 rounded-xl transition-all hover:scale-105 text-center"
              style={{ backgroundColor: 'var(--color-surface)' }}
              aria-label="Enviar email"
            >
              <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Email</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{profile.contact.email}</p>
              </div>
            </a>
            
            {/* Phone */}
            <a
              href={`tel:${profile.contact.phone}`}
              className="flex flex-col items-center gap-3 p-6 rounded-xl transition-all hover:scale-105 text-center"
              style={{ backgroundColor: 'var(--color-surface)' }}
              aria-label="Llamar por teléfono"
            >
              <div className="p-4 rounded-xl" style={{ backgroundColor: '#059669', color: 'white' }}>
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>Teléfono</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{profile.contact.phone}</p>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl transition-all hover:scale-105 text-center"
              style={{ backgroundColor: 'var(--color-surface)' }}
              aria-label="LinkedIn"
            >
              <div className="p-4 rounded-xl" style={{ backgroundColor: '#1d4ed8', color: 'white' }}>
                <Link2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>LinkedIn</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Bryan Becerra</p>
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
