import { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    id: "web-development",
    name: "Desarrollo Web y Software",
    icon: "Code",
    skills: [
      { name: "React", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "JavaScript", level: "intermediate" },
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "advanced" },
      { name: "Bootstrap", level: "intermediate" },
      { name: "Ionic", level: "beginner" },
      { name: "Java", level: "beginner" }
    ]
  },
  {
    id: "power-platform",
    name: "Microsoft Power Platform",
    icon: "Layout",
    skills: [
      { name: "Power Apps", level: "advanced" },
      { name: "Power Automate", level: "advanced" },
      { name: "Dataverse", level: "intermediate" },
      { name: "Power BI", level: "intermediate" }
    ]
  },
  {
    id: "databases",
    name: "Bases de Datos",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" }
    ]
  },
  {
    id: "methodologies",
    name: "Metodologías y Herramientas",
    icon: "Users",
    skills: [
      { name: "Scrum", level: "intermediate" },
      { name: "Levantamiento de requerimientos", level: "advanced" },
      { name: "Trabajo colaborativo", level: "advanced" }
    ]
  }
];