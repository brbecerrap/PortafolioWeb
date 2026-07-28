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
    <section id="education" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)' }}>
          Educación y Certificaciones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
              <GraduationCap className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              Educación
            </h3>
            
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-xl shadow-md"
                  style={{ backgroundColor: 'var(--color-bg)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--color-text)' }}>{edu.degree}</h4>
                      <p style={{ color: 'var(--color-primary)' }}>{edu.institution}</p>
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{edu.location}</p>
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{formatDate(edu.date)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
              <Award className="w-6 h-6" style={{ color: '#059669' }} />
              Certificaciones
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-xl shadow-md"
                  style={{ backgroundColor: 'var(--color-bg)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#059669', color: 'white' }}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--color-text)' }}>{cert.name}</h4>
                      <p style={{ color: '#059669' }}>{cert.issuer}</p>
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}