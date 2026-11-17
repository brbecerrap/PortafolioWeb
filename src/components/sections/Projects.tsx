import { useState } from 'react';
import { projects } from '../../data/projects';
import { ExternalLink, Code2, Maximize2 } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Lightbox from '../ui/Lightbox';
import Reveal from '../ui/Reveal';

type LightboxState = { projectId: string; index: number } | null;

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openLightbox = (projectId: string, index: number) => setLightbox({ projectId, index });
  const closeLightbox = () => setLightbox(null);

  const activeProject = lightbox
    ? projects.find((project) => project.id === lightbox.projectId)
    : undefined;
  const activeImages = activeProject?.images ?? [];

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container-custom">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--color-text)' }}>
            Proyectos Destacados
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Soluciones construidas de punta a punta: modelo de datos, interfaz, automatización y control de accesos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => {
            const [cover, ...rest] = project.images ?? [];

            return (
              <Card
                key={project.id}
                className="hover:shadow-xl transition-shadow"
              >
                <div className={cover ? 'grid lg:grid-cols-2 gap-8 items-start' : 'max-w-3xl'}>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                      {project.title}
                    </h3>

                    <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          <span style={{ color: '#059669' }} className="mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {(project.link || project.repository) && (
                      <div className="flex gap-4 pt-4 mt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
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
                    )}
                  </div>

                  {cover && (
                    <button
                      type="button"
                      onClick={() => openLightbox(project.id, 0)}
                      className="group relative block w-full rounded-lg overflow-hidden"
                      style={{ border: '1px solid var(--color-border)' }}
                      aria-label={`Ampliar captura: ${cover.alt}`}
                    >
                      <img
                        src={cover.src}
                        alt={cover.alt}
                        loading="lazy"
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <span
                        className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)' }}
                      >
                        <Maximize2 className="w-4 h-4" />
                        Ampliar
                      </span>
                    </button>
                  )}
                </div>

                {rest.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                    {rest.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => openLightbox(project.id, index + 1)}
                        className="block rounded-md overflow-hidden transition-transform duration-200 hover:scale-[1.03]"
                        style={{ border: '1px solid var(--color-border)' }}
                        aria-label={`Ampliar captura: ${image.alt}`}
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-auto" />
                      </button>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {lightbox && activeImages.length > 0 && (
        <Lightbox
          images={activeImages}
          index={lightbox.index}
          onClose={closeLightbox}
          onChange={(index) => setLightbox({ projectId: lightbox.projectId, index })}
        />
      )}
    </section>
  );
}
