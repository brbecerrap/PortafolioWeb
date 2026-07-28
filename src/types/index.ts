export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  contact: ContactInfo;
}

export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  repository?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  responsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location: string;
  date: string;
  type: 'degree' | 'certification' | 'course';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  type: 'certification';
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}