import { experience } from '../../data/experience';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)' }}>
          Experiencia Profesional
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5" style={{ backgroundColor: 'var(--color-border)' }}></div>
          
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4"
                style={{
                  backgroundColor: exp.current ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  borderColor: exp.current ? 'var(--color-surface)' : 'var(--color-bg)'
                }}
              ></div>
              
              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}
              >
                <div
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: exp.current ? 'var(--color-surface)' : 'var(--color-surface)',
                    border: `1px solid ${exp.current ? 'var(--color-primary)' : 'var(--color-border)'}`
                  }}
                >
                  {/* Date */}
                  <div className={`flex items-center gap-2 text-sm mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`} style={{ color: 'var(--color-text-muted)' }}>
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(exp.startDate)} - {exp.current ? 'Actualidad' : formatDate(exp.endDate!)}
                    </span>
                  </div>
                  
                  {/* Position */}
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>
                    {exp.position}
                  </h3>
                  
                  {/* Company */}
                  <p className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>
                    {exp.company}
                  </p>
                  
                  {/* Location */}
                  <div className={`flex items-center gap-2 text-sm mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`} style={{ color: 'var(--color-text-muted)' }}>
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  
                  {/* Responsibilities */}
                  <ul className={`space-y-2 text-sm ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`} style={{ color: 'var(--color-text-secondary)' }}>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`mr-2 ${
                          index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''
                        }`} style={{ color: 'var(--color-primary)' }}>
                          •
                        </span>
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