# Quickstart Validation Guide: Personal Portfolio Web

**Date**: 2026-07-27
**Feature**: 001-personal-portfolio-web

## Overview

This document provides validation scenarios to verify the portfolio website works correctly. Follow these steps after implementation to ensure all features are working.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Git repository cloned locally

## Setup Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Validation Scenarios

### Scenario 1: Hero Section (P1 - Critical)

**Purpose**: Verify Bryan's profile is displayed correctly

**Steps**:
1. Open browser to `http://localhost:5173`
2. Observe the hero section at the top of the page
3. Verify the following elements are visible:
   - Bryan's name: "Bryan Andrés Becerra Paredes"
   - Professional title: "Analista Programador Computacional"
   - Subtitle: "Power Platform Developer"
   - Professional summary paragraph
   - Profile photo
4. Verify contact links are clickable:
   - Email link opens email client
   - Phone link initiates call (mobile) or shows number
   - LinkedIn link opens LinkedIn profile
   - Portfolio link opens bbpstudio.com

**Expected Outcome**: All profile information visible and contact links functional

---

### Scenario 2: Skills Section (P2)

**Purpose**: Verify skills are organized by category

**Steps**:
1. Scroll to or click "Habilidades" in navigation
2. Verify 4 skill categories are displayed:
   - Desarrollo Web y Software
   - Microsoft Power Platform
   - Bases de Datos
   - Metodologías y Herramientas
3. Verify skills within each category:
   - Web: React, Python, JavaScript, HTML5, CSS3, Bootstrap, Ionic
   - Power Platform: Power Apps, Power Automate, Dataverse, Power BI
   - Databases: MySQL, PostgreSQL
   - Methodologies: Scrum, Levantamiento de requerimientos

**Expected Outcome**: All skills displayed in correct categories

---

### Scenario 3: Projects Section (P3)

**Purpose**: Verify featured projects are showcased

**Steps**:
1. Scroll to or click "Proyectos" in navigation
2. Verify 2 project cards are displayed:
   - Bot de WhatsApp para Gestión de Usuarios
   - Soluciones Empresariales con Power Platform
3. Verify each card shows:
   - Project title
   - Description
   - Technology tags
   - Key highlights
4. If links exist, verify they open correctly

**Expected Outcome**: Projects displayed with all required information

---

### Scenario 4: Experience Timeline (P4)

**Purpose**: Verify work history is displayed chronologically

**Steps**:
1. Scroll to or click "Experiencia" in navigation
2. Verify 4 work entries are displayed in reverse chronological order:
   - Orden y Soluciones SPA (current)
   - Permify SPA
   - Konecta
   - Comdata Group
3. Verify each entry shows:
   - Job title
   - Company name
   - Location
   - Date range
   - Responsibilities list
4. Verify current position is visually distinguished

**Expected Outcome**: Timeline displays all positions correctly

---

### Scenario 5: Education Section (P5)

**Purpose**: Verify education and certifications

**Steps**:
1. Scroll to or click "Educación" in navigation
2. Verify education entry:
   - Degree: "Analista Programador Computacional"
   - Institution: "Duoc UC"
   - Date: "Julio 2024"
3. Verify certifications:
   - Oracle Next Education (2022)
   - UiPath Hyperautomation (2022)

**Expected Outcome**: Education and certifications displayed

---

### Scenario 6: Responsive Design (P6)

**Purpose**: Verify mobile responsiveness

**Steps**:
1. Open browser dev tools (F12)
2. Toggle device toolbar
3. Test at these viewports:
   - Mobile: 320px width
   - Tablet: 768px width
   - Desktop: 1440px width
4. Verify:
   - No horizontal scrolling
   - Text readable without zooming
   - Navigation collapses on mobile
   - Touch targets are at least 44x44px
   - Images scale correctly

**Expected Outcome**: Site works on all viewport sizes

---

### Scenario 7: Navigation (All Sections)

**Purpose**: Verify navigation works correctly

**Steps**:
1. Click each navigation link:
   - Inicio
   - Habilidades
   - Proyectos
   - Experiencia
   - Educación
   - Contacto
2. Verify smooth scroll to correct section
3. Verify active section is highlighted in navigation
4. On mobile, verify hamburger menu works

**Expected Outcome**: Navigation functional on all devices

---

### Scenario 8: Performance (Constitution Check)

**Purpose**: Verify Core Web Vitals compliance

**Steps**:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run performance audit
4. Verify:
   - Performance score ≥ 90
   - LCP < 2.5s
   - CLS < 0.1
   - No render-blocking resources
5. Check accessibility score ≥ 90

**Expected Outcome**: Meets constitution performance requirements

---

### Scenario 9: Accessibility (Constitution Check)

**Purpose**: Verify WCAG 2.1 AA compliance

**Steps**:
1. Navigate using only keyboard (Tab, Enter, Escape)
2. Verify:
   - All interactive elements are focusable
   - Focus indicators are visible
   - Skip navigation link works
3. Check with screen reader (optional):
   - Images have alt text
   - ARIA labels present where needed
   - Semantic HTML structure

**Expected Outcome**: Site is accessible to all users

---

### Scenario 10: SEO and Metadata

**Purpose**: Verify meta tags for social sharing

**Steps**:
1. View page source
2. Verify meta tags:
   - `<title>` contains "Bryan Becerra - Portfolio"
   - `<meta name="description">` exists
   - Open Graph tags present (og:title, og:description, og:image)
3. Share link on social media preview tool
4. Verify preview shows correct information

**Expected Outcome**: SEO metadata correct for sharing

## Troubleshooting

### Issue: Development server won't start
- Check Node.js version (18+)
- Run `npm install` again
- Check for port conflicts

### Issue: Images not loading
- Verify image paths in data files
- Check images exist in `/public/images/`
- Ensure correct file extensions

### Issue: Styling issues
- Run `npm run build` to verify Tailwind compilation
- Check browser dev tools for CSS errors
- Verify Tailwind config is correct

### Issue: TypeScript errors
- Run `npm run typecheck` to see errors
- Check interface definitions match data
- Verify imports are correct

## Success Criteria

All validation scenarios must pass before deployment. Any failures should be documented and fixed before proceeding to `/speckit.tasks`.