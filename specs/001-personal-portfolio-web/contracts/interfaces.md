# Interfaces Contract: Personal Portfolio Web

**Date**: 2026-07-27
**Feature**: 001-personal-portfolio-web

## Overview

This document defines the TypeScript interfaces that serve as the data contract for the portfolio website. All components must consume data matching these interfaces.

## Core Interfaces

### Profile

```typescript
interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  location: string;
}

interface Profile {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  photo: string;
  contact: ContactInfo;
}
```

**Usage**: Consumed by `Hero.tsx` and `Contact.tsx` components.

---

### Skills

```typescript
interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}
```

**Usage**: Consumed by `Skills.tsx` component. `icon` maps to Lucide icon names.

---

### Projects

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  link?: string;
  repository?: string;
}
```

**Usage**: Consumed by `Projects.tsx` component. `image` paths are relative to `/public/images/projects/`.

---

### Experience

```typescript
interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;  // YYYY-MM format
  endDate?: string;   // YYYY-MM format or null
  current: boolean;
  responsibilities: string[];
}
```

**Usage**: Consumed by `Experience.tsx` component. Sorted by `startDate` descending.

---

### Education

```typescript
interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location: string;
  date: string;  // YYYY-MM format
  type: 'degree' | 'certification' | 'course';
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;  // YYYY format
  type: 'certification';
}
```

**Usage**: Consumed by `Education.tsx` component.

---

### Navigation

```typescript
interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}
```

**Usage**: Consumed by `Navigation.tsx` and `Header.tsx` components.

## Component Props Contracts

### Layout Components

```typescript
// Header.tsx
interface HeaderProps {
  navigation: NavItem[];
  activeSection: string;
}

// Footer.tsx
interface FooterProps {
  profile: Profile;
  copyright: string;
}
```

### Section Components

```typescript
// Hero.tsx
interface HeroProps {
  profile: Profile;
}

// Skills.tsx
interface SkillsProps {
  categories: SkillCategory[];
}

// Projects.tsx
interface ProjectsProps {
  projects: Project[];
}

// Experience.tsx
interface ExperienceProps {
  experiences: WorkExperience[];
}

// Education.tsx
interface EducationProps {
  education: Education[];
  certifications: Certification[];
}

// Contact.tsx
interface ContactProps {
  contact: ContactInfo;
}
```

### UI Components

```typescript
// Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
}

// Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

// Timeline.tsx
interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description?: string;
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}
```

## Data Validation

All data files must export arrays or objects matching these interfaces. TypeScript will enforce type safety at compile time.

```typescript
// Example: src/data/profile.ts
import { Profile } from '../types';

export const profile: Profile = {
  name: "Bryan Andrés Becerra Paredes",
  title: "Analista Programador Computacional",
  // ...
};
```

## Contract Versioning

- Interface changes require version bump (MAJOR for breaking changes)
- New optional fields are MINOR changes
- Documentation updates are PATCH changes