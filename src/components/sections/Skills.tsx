import { skills } from '../../data/skills';
import { Code, Database, Layout, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Layout: <Layout className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)' }}>
          Habilidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category) => (
            <div
              key={category.id}
              className="rounded-xl p-6 hover:shadow-lg transition-shadow"
              style={{ backgroundColor: 'var(--color-bg)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                  {category.name}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs px-2 py-1 rounded-full" style={{
                        backgroundColor: skill.level === 'advanced' ? 'var(--color-success-bg)' :
                                         skill.level === 'intermediate' ? '#fef3c7' : 'var(--color-surface-hover)',
                        color: skill.level === 'advanced' ? 'var(--color-success-text)' :
                               skill.level === 'intermediate' ? '#92400e' : 'var(--color-text-secondary)'
                      }}>
                        {skill.level === 'advanced' ? 'Avanzado' :
                         skill.level === 'intermediate' ? 'Intermedio' : 'Básico'}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}