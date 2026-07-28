# Implementation Plan: Personal Portfolio Web

**Branch**: `001-personal-portfolio-web` | **Date**: 2026-07-27 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-personal-portfolio-web/spec.md`

## Summary

Build a personal portfolio website for Bryan Becerra to showcase his professional profile, skills, projects, and experience as a Power Platform Developer. The site will be a static single-page application built with React and Vite, deployed to Cloudflare Pages. Content will be sourced from Bryan's CV and organized into sections: Hero, Skills, Projects, Experience, Education, and Contact.

## Technical Context

**Language/Version**: TypeScript 5.x

**Primary Dependencies**: React 18, Vite 5, Tailwind CSS 3.x

**Storage**: N/A (static content, no backend required)

**Testing**: Vitest + React Testing Library

**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge), Mobile-first responsive design

**Project Type**: Static web application (SPA)

**Performance Goals**: LCP < 2.5s, CLS < 0.1, Lighthouse score ≥ 90

**Constraints**: Static deployment to Cloudflare Pages, no server-side rendering required

**Scale/Scope**: Single-page portfolio, ~6 sections, ~50 components

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Status | Notes |
|-----------|-------------|--------|-------|
| I. Accessibility | WCAG 2.1 AA | ✅ PASS | Tailwind includes accessibility utilities; semantic HTML will be used |
| II. Performance | Core Web Vitals | ✅ PASS | Vite enables code-splitting; static site inherently fast |
| III. Responsive Design | Mobile-first | ✅ PASS | Tailwind CSS with responsive breakpoints (320px, 768px, 1024px, 1440px) |
| IV. Simplicity | YAGNI, minimal deps | ✅ PASS | Only React + Tailwind + Vite; no unnecessary libraries |
| V. Versioning | Semantic versioning | ✅ PASS | Will follow MAJOR.MINOR.PATCH from initial release |

**Gate Result**: PASS - All constitution principles satisfied.

## Project Structure

### Documentation (this feature)

```text
specs/001-personal-portfolio-web/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Timeline.tsx
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── education.ts
├── hooks/
│   └── useScrollSpy.ts
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx

public/
├── images/
│   ├── profile.jpg
│   └── projects/
└── favicon.ico

tests/
├── components/
│   ├── Hero.test.tsx
│   ├── Skills.test.tsx
│   └── ...
└── setup.ts
```

**Structure Decision**: Single-page static application with component-based architecture. All data is hardcoded in TypeScript files under `src/data/`. No backend or database required.

## Complexity Tracking

> No constitution violations detected. All principles satisfied with standard approaches.