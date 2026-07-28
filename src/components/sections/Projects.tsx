import { projects } from '../../data/projects';
import { ExternalLink, Code2 } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)' }}>
          Proyectos Destacados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-xl transition-shadow">
              {/* Project Title */}
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    <span style={{ color: '#059669' }} className="mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              {/* Links */}
              <div className="flex gap-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}