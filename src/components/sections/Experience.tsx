import { experience } from '../../data/experience';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Experiencia Profesional
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Mi trayectoria profesional</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px h-full w-0.5" style={{ backgroundColor: 'var(--color-border)' }} />
          
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex items-start`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full"
                style={{
                  backgroundColor: exp.current ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  boxShadow: `0 0 0 4px var(--color-bg)`
                }}
              />
              
              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <div
                  className="p-6 rounded-2xl border hover:shadow-lg transition-shadow"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    borderColor: exp.current ? 'var(--color-primary)' : 'var(--color-border)'
                  }}
                >
                  {exp.current && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ 
                      backgroundColor: 'var(--color-primary)', 
                      color: '#1a1a1a' 
                    }}>
                      Actual
                    </span>
                  )}
                  
                  {/* Position */}
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>
                    {exp.position}
                  </h3>
                  
                  {/* Company */}
                  <p className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                    {exp.company}
                  </p>
                  
                  {/* Meta */}
                  <div className={`flex flex-wrap gap-3 text-sm mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`} style={{ color: 'var(--color-text-muted)' }}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(exp.startDate)} - {exp.current ? 'Actual' : formatDate(exp.endDate!)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                  
                  {/* Responsibilities */}
                  <ul className={`space-y-2 text-sm ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`} style={{ color: 'var(--color-text-secondary)' }}>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <Briefcase className={`w-3.5 h-3.5 mt-0.5 mr-2 flex-shrink-0 ${
                          index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''
                        }`} style={{ color: 'var(--color-primary)' }} />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
