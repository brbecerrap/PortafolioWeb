import { education, certifications } from '../../data/education';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const formatDate = (dateString: string) => {
    if (dateString.length === 4) return dateString;
    const [year, month] = dateString.split('-');
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="education" className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Educación y Certificaciones
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Formación académica y certificaciones</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
              <GraduationCap className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
              Educación
            </h3>
            
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl border hover:shadow-md transition-shadow"
                  style={{ 
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)'
                  }}
                >
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{edu.degree}</h4>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>{edu.institution}</p>
                  <div className="flex gap-3 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{formatDate(edu.date)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
              <Award className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
              Certificaciones
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl border hover:shadow-md transition-shadow"
                  style={{ 
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)'
                  }}
                >
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{cert.name}</h4>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>{cert.issuer}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
