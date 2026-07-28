# Data Model: Personal Portfolio Web

**Date**: 2026-07-27
**Feature**: 001-personal-portfolio-web

## Overview

This document defines the data entities for the portfolio website. All data is static and hardcoded in TypeScript files. No database or external data source is required.

## Entities

### 1. Profile

Represents Bryan's professional identity and contact information.

```typescript
interface Profile {
  name: string;                    // "Bryan Andrés Becerra Paredes"
  title: string;                   // "Analista Programador Computacional"
  subtitle: string;                // "Power Platform Developer"
  summary: string;                 // Professional summary paragraph
  photo: string;                   // Path to profile image
  contact: ContactInfo;
}

interface ContactInfo {
  email: string;                   // "br.becerra.p@gmail.com"
  phone: string;                   // "+56 9 4530 7144"
  linkedin: string;                // "https://linkedin.com/in/bryan-becerra-p"
  portfolio: string;               // "https://bbpstudio.com"
  location: string;                // "Santiago, Chile"
}
```

**Validation Rules**:
- `name` is required and non-empty
- `email` must be valid email format
- `phone` must include country code
- `linkedin` and `portfolio` must be valid URLs

---

### 2. SkillCategory

Groups related technical skills.

```typescript
interface SkillCategory {
  id: string;                      // "web-development"
  name: string;                    // "Desarrollo Web"
  icon: string;                    // Icon identifier (Lucide)
  skills: Skill[];
}

interface Skill {
  name: string;                    // "React"
  level?: 'beginner' | 'intermediate' | 'advanced';  // Optional proficiency
}
```

**Validation Rules**:
- Each category must have at least 1 skill
- Category names must be unique
- Skill names should be concise

**Categories** (from CV):
1. Desarrollo Web y Software
2. Microsoft Power Platform
3. Bases de Datos
4. Metodologías y Herramientas

---

### 3. Project

Represents a featured project or work sample.

```typescript
interface Project {
  id: string;                      // "whatsapp-bot"
  title: string;                   // "Bot de WhatsApp para Gestión de Usuarios"
  description: string;             // Brief project description
  technologies: string[];          // ["Python", "WhatsApp API", "Web Dev"]
  highlights: string[];            // Key achievements or features
  image?: string;                  // Optional project screenshot
  link?: string;                   // Optional live demo URL
  repository?: string;             // Optional source code URL
}
```

**Validation Rules**:
- `title` is required
- `technologies` must have at least 1 item
- `description` should be 1-2 sentences
- `highlights` should be bullet points (3-5 items)

**Projects** (from CV):
1. Bot de WhatsApp para Gestión de Usuarios
2. Soluciones Empresariales con Power Platform

---

### 4. WorkExperience

Represents a position in Bryan's career timeline.

```typescript
interface WorkExperience {
  id: string;                      // "orden-y-soluciones"
  company: string;                 // "Orden y Soluciones SPA"
  position: string;                // "Desarrollador Power Apps / Power Platform"
  location: string;                // "Santiago, Chile"
  startDate: string;               // "2025-07" (YYYY-MM)
  endDate?: string;                // "2025-03" or null for current
  current: boolean;                // true if currently working here
  responsibilities: string[];      // Key duties and achievements
}
```

**Validation Rules**:
- `company` and `position` are required
- `startDate` must be valid date format
- `current` must be true if `endDate` is null
- Only one experience can be `current`

**Experiences** (from CV, ordered newest first):
1. Orden y Soluciones SPA (Jul 2025 - Present)
2. Permify SPA (Ene 2024 - Mar 2024)
3. Konecta (Dic 2022 - Jul 2025)
4. Comdata Group (Jul 2020 - Ene 2022)

---

### 5. Education

Represents academic background and certifications.

```typescript
interface Education {
  id: string;                      // "duoc-uc"
  institution: string;             // "Duoc UC"
  degree: string;                  // "Analista Programador Computacional"
  field?: string;                  // Optional field of study
  location: string;                // "Santiago, Chile"
  date: string;                    // "2024-07" (graduation date)
  type: 'degree' | 'certification' | 'course';
}

interface Certification {
  id: string;                      // "oracle-one"
  name: string;                    // "Oracle Next Education"
  issuer: string;                  // "Oracle"
  date: string;                    // "2022"
  type: 'certification';
}
```

**Validation Rules**:
- `institution` or `issuer` is required
- `date` must be valid date format
- `type` determines which fields are required

**Education** (from CV):
1. Duoc UC - Analista Programador Computacional (Jul 2024)
2. Oracle Next Education - Oracle (2022)
3. UiPath Hyperautomation - EY (2022)

---

### 6. Navigation

Represents site navigation structure.

```typescript
interface NavItem {
  id: string;                      // "hero"
  label: string;                   // "Inicio"
  href: string;                    // "#hero"
  icon?: string;                   // Optional Lucide icon
}
```

**Navigation Items**:
1. Inicio (Hero)
2. Habilidades (Skills)
3. Proyectos (Projects)
4. Experiencia (Experience)
5. Educación (Education)
6. Contacto (Contact)

## Relationships

```
Profile (1) ──── has ──── (1) ContactInfo
Profile (1) ──── has ──── (many) SkillCategory
SkillCategory (1) ──── has ──── (many) Skill
Profile (1) ──── has ──── (many) Project
Profile (1) ──── has ──── (many) WorkExperience
Profile (1) ──── has ──── (many) Education
Profile (1) ──── has ──── (many) NavItem
```

## Data Files

| Entity | File Path | Purpose |
|--------|-----------|---------|
| Profile | `src/data/profile.ts` | Contact info and summary |
| Skills | `src/data/skills.ts` | Skill categories and items |
| Projects | `src/data/projects.ts` | Featured projects |
| Experience | `src/data/experience.ts` | Work history |
| Education | `src/data/education.ts` | Degrees and certifications |
| Navigation | `src/data/navigation.ts` | Site navigation |

## State Transitions

Not applicable - static content with no dynamic state changes.

## Future Considerations

- If Bryan wants to add/remove projects frequently, consider CMS integration
- If multi-language support needed, add i18n structure
- If analytics needed, add tracking events data model