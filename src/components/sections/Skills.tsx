import { skills } from '../../data/skills';
import { Code, Database, Layout, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Habilidades
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Tecnologías y herramientas que domino</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl p-6 border hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl" style={{ backgroundColor: 'var(--color-primary)', color: '#1a1a1a' }}>
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                  {category.name}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{
                        backgroundColor: skill.level === 'advanced' ? 'var(--color-primary)' :
                                         skill.level === 'intermediate' ? 'var(--color-surface-hover)' : 'transparent',
                        color: skill.level === 'advanced' ? '#1a1a1a' :
                               skill.level === 'intermediate' ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
                        border: skill.level === 'beginner' ? '1px solid var(--color-border)' : 'none'
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
